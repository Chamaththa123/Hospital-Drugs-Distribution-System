import mongoose from "mongoose";

const trafficSchema = new mongoose.Schema(
    {
        bus: {
            type: String,
            required: true,
        },
        route: {
            type: String,
            required: true,
        }, segment: {
            type: String,
            required: true,
        }, time: {
            type: String,
            required: true,
        }, type: {
            type: String,
            required: true,
        }, description: {
            type: String
        },status: {
            type: String,
            default: "Processing"
        }
    }
);

export default mongoose.model("traffic", trafficSchema);