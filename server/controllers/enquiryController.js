import Enquiry from "../models/Enquiry.js";

import {
    sendEnquiryNotification,
} from "../services/emailService.js";


export const createEnquiry = async (
    req,
    res
) => {
    try {

        const {
            inquiryType,
            name,
            email,
            phone = "",
            location = "",
            childAge = "",
            message,
            contactMethod,
            consent,
        } = req.body;


        /* =====================================================
           BASIC VALIDATION
        ===================================================== */

        const allowedInquiryTypes = [
            "myself",
            "child",
            "program",
        ];

        const allowedContactMethods = [
            "call",
            "whatsapp",
            "email",
        ];


        if (
            !allowedInquiryTypes.includes(
                inquiryType
            )
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Please select a valid enquiry type.",
            });
        }


        if (!name?.trim()) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter your name.",
            });
        }


        if (!email?.trim()) {
            return res.status(400).json({
                success: false,
                message:
                    "Please enter your email address.",
            });
        }


        if (!message?.trim()) {
            return res.status(400).json({
                success: false,
                message:
                    "Please tell us a little about what you are looking for.",
            });
        }


        if (
            !allowedContactMethods.includes(
                contactMethod
            )
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Please select a preferred contact method.",
            });
        }


        if (consent !== true) {
            return res.status(400).json({
                success: false,
                message:
                    "Please confirm the consent statement.",
            });
        }


        if (
            inquiryType === "child" &&
            !["5-8", "9-12", "13-15"].includes(
                childAge
            )
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Please select the child's age group.",
            });
        }


        /* =====================================================
           SAVE ENQUIRY TO MONGODB
        ===================================================== */

        const enquiry =
            await Enquiry.create({
                inquiryType,

                name: name.trim(),

                email: email
                    .trim()
                    .toLowerCase(),

                phone: phone?.trim() || "",

                location:
                    location?.trim() || "",

                childAge:
                    inquiryType === "child"
                        ? childAge
                        : "",

                message: message.trim(),

                contactMethod,

                consent,
            });

        console.log(
            "Enquiry saved to MongoDB:",
            enquiry._id,
            enquiry.name
        );
        /* =====================================================
           SEND EMAIL NOTIFICATION
        ===================================================== */

        try {

            await sendEnquiryNotification({
                inquiryType:
                    enquiry.inquiryType,

                name:
                    enquiry.name,

                email:
                    enquiry.email,

                phone:
                    enquiry.phone,

                location:
                    enquiry.location,

                childAge:
                    enquiry.childAge,

                message:
                    enquiry.message,

                contactMethod:
                    enquiry.contactMethod,
            });

        } catch (emailError) {

            console.error(
                "Email notification failed:",
                emailError.message
            );

            /*
              IMPORTANT:
              We do NOT delete or reject the enquiry
              just because the email failed.
      
              The enquiry is already safely stored
              in MongoDB.
            */

        }


        /* =====================================================
           RESPONSE
        ===================================================== */

        return res.status(201).json({
            success: true,

            message:
                "Your enquiry has been received.",

            enquiryId:
                enquiry._id,
        });

    } catch (error) {

        console.error(
            "Create enquiry error:",
            error
        );


        if (
            error.name ===
            "ValidationError"
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Please check the information you entered.",
            });
        }


        return res.status(500).json({
            success: false,

            message:
                "Something went wrong while submitting your enquiry.",
        });
    }
};