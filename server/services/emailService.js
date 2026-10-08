import { Resend } from "resend";


/* =====================================================
   ESCAPE USER INPUT FOR EMAIL HTML
===================================================== */

const escapeHtml = (value = "") => {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};


/* =====================================================
   SEND ENQUIRY NOTIFICATION
===================================================== */

export const sendEnquiryNotification = async ({
  inquiryType,
  name,
  email,
  phone,
  location,
  childAge,
  message,
  contactMethod,
}) => {

  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      "RESEND_API_KEY is missing from the server .env file."
    );
  }

  if (!process.env.NOTIFICATION_EMAIL) {
    throw new Error(
      "NOTIFICATION_EMAIL is missing from the server .env file."
    );
  }


  const resend = new Resend(
    process.env.RESEND_API_KEY
  );


  /* =====================================================
     DISPLAY LABELS
  ===================================================== */

  const enquiryLabels = {
    myself: "For Myself",
    child: "For My Child",
    program: "About The Programs",
  };

  const contactLabels = {
    call: "Phone Call",
    whatsapp: "WhatsApp",
    email: "Email",
  };


  /* =====================================================
     CLEAN VALUES
  ===================================================== */

  const safeName =
    escapeHtml(name || "Not provided");

  const safeEmail =
    escapeHtml(email || "Not provided");

  const safePhone =
    escapeHtml(phone || "Not provided");

  const safeLocation =
    escapeHtml(location || "Not provided");

  const safeMessage =
    escapeHtml(message || "No message provided");

  const safeChildAge =
    escapeHtml(childAge || "Not provided");

  const enquiryLabel =
    enquiryLabels[inquiryType] ||
    inquiryType ||
    "Not provided";

  const contactLabel =
    contactLabels[contactMethod] ||
    contactMethod ||
    "Not provided";


  /* =====================================================
     SEND EMAIL
  ===================================================== */

  const { data, error } =
    await resend.emails.send({

      from:
        "Jigna Website <onboarding@resend.dev>",

      to: [
        process.env.NOTIFICATION_EMAIL,
      ],

      subject:
        `New Website Enquiry — ${name || "Website Visitor"}`,


      /* =================================================
         PLAIN TEXT FALLBACK
      ================================================= */

      text: `
NEW WEBSITE ENQUIRY

Name:
${name || "Not provided"}

Enquiry Type:
${enquiryLabel}

Email:
${email || "Not provided"}

Phone:
${phone || "Not provided"}

Location:
${location || "Not provided"}

${
  inquiryType === "child"
    ? `Child's Age:\n${childAge || "Not provided"}\n`
    : ""
}

Preferred Contact:
${contactLabel}

Message:
${message || "No message provided"}
      `,


      /* =================================================
         HTML EMAIL
      ================================================= */

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 680px;
            margin: 0 auto;
            padding: 40px 24px;
            color: #282824;
            background: #ffffff;
          "
        >

          <div
            style="
              border-bottom: 1px solid #ded8cc;
              padding-bottom: 24px;
              margin-bottom: 30px;
            "
          >

            <div
              style="
                font-size: 12px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #8b7655;
                margin-bottom: 10px;
              "
            >
              Jigna Thakkar Website
            </div>

            <h1
              style="
                margin: 0;
                font-size: 28px;
                font-weight: 500;
                color: #24332c;
              "
            >
              New Website Enquiry
            </h1>

            <p
              style="
                margin: 10px 0 0;
                color: #77736b;
                line-height: 1.6;
              "
            >
              Someone has submitted the Begin Your Journey form.
            </p>

          </div>


          <!-- NAME -->

          <div
            style="
              margin-bottom: 22px;
            "
          >

            <div
              style="
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #9a8b72;
                margin-bottom: 6px;
              "
            >
              Name
            </div>

            <div
              style="
                font-size: 17px;
                font-weight: 600;
                color: #282824;
              "
            >
              ${safeName}
            </div>

          </div>


          <!-- ENQUIRY TYPE -->

          <div
            style="
              margin-bottom: 22px;
            "
          >

            <div
              style="
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #9a8b72;
                margin-bottom: 6px;
              "
            >
              Enquiry Type
            </div>

            <div>
              ${escapeHtml(enquiryLabel)}
            </div>

          </div>


          <!-- EMAIL -->

          <div
            style="
              margin-bottom: 22px;
            "
          >

            <div
              style="
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #9a8b72;
                margin-bottom: 6px;
              "
            >
              Email
            </div>

            <div>
              ${safeEmail}
            </div>

          </div>


          <!-- PHONE -->

          <div
            style="
              margin-bottom: 22px;
            "
          >

            <div
              style="
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #9a8b72;
                margin-bottom: 6px;
              "
            >
              Phone
            </div>

            <div>
              ${safePhone}
            </div>

          </div>


          <!-- LOCATION -->

          <div
            style="
              margin-bottom: 22px;
            "
          >

            <div
              style="
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #9a8b72;
                margin-bottom: 6px;
              "
            >
              City / Country
            </div>

            <div>
              ${safeLocation}
            </div>

          </div>


          ${
            inquiryType === "child"
              ? `
                <div
                  style="
                    margin-bottom: 22px;
                  "
                >

                  <div
                    style="
                      font-size: 11px;
                      text-transform: uppercase;
                      letter-spacing: 1.5px;
                      color: #9a8b72;
                      margin-bottom: 6px;
                    "
                  >
                    Child's Age
                  </div>

                  <div>
                    ${safeChildAge}
                  </div>

                </div>
              `
              : ""
          }


          <!-- CONTACT METHOD -->

          <div
            style="
              margin-bottom: 30px;
            "
          >

            <div
              style="
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #9a8b72;
                margin-bottom: 6px;
              "
            >
              Preferred Contact Method
            </div>

            <div>
              ${escapeHtml(contactLabel)}
            </div>

          </div>


          <!-- MESSAGE -->

          <div
            style="
              background: #f6f3ec;
              border: 1px solid #e7e0d4;
              padding: 24px;
              margin-top: 30px;
            "
          >

            <div
              style="
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: #8b7655;
                margin-bottom: 12px;
              "
            >
              Message
            </div>

            <div
              style="
                font-size: 15px;
                line-height: 1.8;
                color: #383833;
                white-space: pre-wrap;
              "
            >
              ${safeMessage}
            </div>

          </div>


          <div
            style="
              border-top: 1px solid #ded8cc;
              margin-top: 32px;
              padding-top: 18px;
              font-size: 12px;
              color: #8a867e;
            "
          >
            This enquiry was submitted through
            the Jigna Thakkar website.
          </div>

        </div>
      `,
    });


  if (error) {
    throw new Error(
      error.message ||
        "Unable to send notification email."
    );
  }


  console.log(
    "Enquiry notification email sent successfully."
  );

  return data;
};