import nodemailer from "nodemailer";
import { services, siteConfig } from "@/lib/data";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    phone,
    email,
    address,
    service,
    squareFootage,
    bedrooms,
    bathrooms,
    message,
  } = body ?? {};

  if (!name || !phone || !email || !address) {
    return Response.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const serviceLabel =
    services.find((s) => s.slug === service)?.title ||
    (service === "other" ? "Other / Not sure" : "Not specified");

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error(
      "Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not configured."
    );
    return Response.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Property Address: ${address}`,
    `Service Needed: ${serviceLabel}`,
    `Square Footage: ${squareFootage || "Not specified"}`,
    `Bedrooms: ${bedrooms || "Not specified"}`,
    `Bathrooms: ${bathrooms || "Not specified"}`,
    "",
    "Additional Comments:",
    message || "(none)",
  ];

  try {
    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${gmailUser}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New Service Request from ${name}`,
      text: lines.join("\n"),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return Response.json(
      { error: "Failed to send your request. Please try again." },
      { status: 500 }
    );
  }
}
