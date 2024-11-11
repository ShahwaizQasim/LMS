import mongoose, { Schema } from "mongoose";

const batchSchema = new Schema(
    {
        title: String,
        description: String,
        duration: String,
        course: { type: mongoose.Types.ObjectId, ref: "Course" },
        status: {
            type: "String", default: "pending",
            enum: ["pending", "admission-open", "admission-close", "ongoing", "completed"],
        },
    },
    {timestamps:true}
)

export const BatchModal = mongoose.models.Batch || mongoose.model("Batch", batchSchema)
