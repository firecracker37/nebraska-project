import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        aliveDates: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        fullText: {
            type: String,
            required: true,
        },
        imageURL: {
            type: String,
            required: false,
        },
        active: {
            type: Boolean,
            required: true,
            default: true,
        }
    },
    {
        timestamps: true,
    }
);

const People = mongoose.model("People", peopleSchema);

export default People;