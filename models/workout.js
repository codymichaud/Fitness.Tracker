const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Enter the workout name'
        },
        type: {
            type: String,
            enum: ['Cardio', 'Resistance'],
            required: 'Choose the type of workout'
        },
        weight: {
            type: Number,
            required: 'Enter a desired weight'
        },
        reps: {
            type: Number,
            required: 'Enter desired number of reps'
        },
        sets: {
            type: Number,
            required: 'Enter desired number of sets'
        },
        duration: {
            typer: Number,
            required: 'Enter desired length of workout in minutes'
        },


    }]
})