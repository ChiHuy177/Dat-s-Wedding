// Paste this into script.google.com, bound to the Google Sheet that collects RSVPs.
// Deploy > New deployment > Web app > Execute as "Me" > Who has access "Anyone".
// Copy the deployment URL into RSVP_SHEET_WEBHOOK_URL (see .env.local.example).

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.wish || "",
    data.attending || "",
    data.guests || "",
    data.side || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
