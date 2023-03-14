const { Schema, model } = require('mongoose');

const userSchema = require('./User')

const eventSchema = new Schema({
    eventName: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    going: {type: [String], ref: "User" }
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('usersAttending').get(function () {
    return this.going.length
});

const Event = model('Event', eventSchema)
module.exports = Event;