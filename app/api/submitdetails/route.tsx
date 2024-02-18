import { google } from "googleapis";
import { NextResponse } from "next/server";

// Environment variables should be validated and processed once, outside the request handler
const spreadsheetId = process.env.CLIENT_SPREADSHEET_ID;
const clientEmail = process.env.CLIENT_EMAIL;
const privateKey = process.env.CLIENT_PRIVATE_KEY?.replace(/\\n/g, "\n");

if (!spreadsheetId || !clientEmail || !privateKey) {
  throw new Error("Missing environment variables");
}

// Google Sheets API client initialized outside the request handler
const sheetsClient = google.sheets({
  version: "v4",
  auth: new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  }),
});

type SheetForm = {
  name: string;
  phone: number;
  location?: string;
  plan?: string;
  date?: string;
  time?: string;
  parameters: any;
};

async function appendToSheet(data: SheetForm) {
  const values = [
    [
      data.name || "",
      data.phone || "",
      data.location || "",
      data.plan || "",
      data.date || "",
      data.time || "",
      data.parameters || {},
    ],
  ];

  await sheetsClient.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SheetForm;
    await appendToSheet(body);
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
