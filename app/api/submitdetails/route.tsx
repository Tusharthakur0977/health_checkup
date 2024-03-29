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
  plan?: string;
  date?: string;
  time?: string;
  parameters: any;
};

async function appendToSheet(data: SheetForm) {
  const rowsToInsert = [
    [
      data.name || "",
      data.phone || "",
      "",
      data.plan || "",
      data.date || "",
      data.time || "",
      "",
      data.parameters.campaignid || "",
      data.parameters.utm_source || "",
      data.parameters.utm_medium || "",
      data.parameters.utm_campaign || "",
      data.parameters.utm_content || "",
      data.parameters.adgroupid || "",
      data.parameters.targetid || "",
      data.parameters.matchtype || "",
      data.parameters.network || "",
      data.parameters.gclid || "",
      data.parameters.creative || "",
      data.parameters.keyword || "",
      data.parameters.placement || "",
    ],
  ];

  const getResponse = await sheetsClient.spreadsheets.values.get({
    spreadsheetId: spreadsheetId,
    range: "Sheet1!A:Z",
  });

  const nextRow = getResponse.data.values
    ? getResponse.data.values.length + 1
    : 1;

  const updateRange = `Sheet1!A${nextRow}`;

  const updateRequest = {
    spreadsheetId: spreadsheetId,
    range: updateRange,
    valueInputOption: "USER_ENTERED",
    includeValuesInResponse: true,
    resource: {
      values: rowsToInsert,
    },
  };

  const updateResponse = await sheetsClient.spreadsheets.values.update(
    updateRequest
  );
  return updateResponse;
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
