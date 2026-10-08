import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    inquiryType: {
      type: String,
      enum: ["myself", "child", "program"],
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    location: {
      type: String,
      trim: true,
      default: "",
    },

    childAge: {
      type: String,
      enum: ["", "5-8", "9-12", "13-15"],
      default: "",
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    contactMethod: {
      type: String,
      enum: ["call", "whatsapp", "email"],
      required: true,
    },

    consent: {
      type: Boolean,
      required: true,
      validate: {
        validator: (value) => value === true,
        message: "Consent is required.",
      },
    },

    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;