import { google } from "googleapis";
import { NextResponse } from "next/server";

type SheetForm = {
  name: string;
  phone: number;
  location?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as SheetForm;
  const spreadsheetId = process.env.CLIENT_SPREADSHEET_ID;

  try {
    const auth = new google.auth.GoogleAuth({
      projectId: "landing-page-408717",
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.CLIENT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const googleSheetsInstance = google.sheets({
      version: "v4",
      auth: auth,
    });

    const response = await googleSheetsInstance.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Sheet1!A:B",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name || "", body.phone || "", body.location || ""]],
      },
    });

    if (response.status === 200)
      return new NextResponse("success", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
}
