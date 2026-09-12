import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User", //one who is subscribing
      required: true,
    },
    subscribedTo: {
      type: Schema.Types.ObjectId,
      ref: "User", //one who is being subscribed to
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
