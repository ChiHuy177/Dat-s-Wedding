// Paste this into script.google.com, bound to the Google Sheet that collects
// RSVPs and guestbook wishes.
//
// Deploy > New deployment > Web app > Execute as "Me" > Who has access "Anyone".
// Copy the deployment URL into RSVP_SHEET_WEBHOOK_URL (see .env.local.example).
//
// The script keeps two tabs and creates them on first write:
//   RSVP    — timestamp, name, wish, attending, guests, side
//   Wishes  — timestamp, name, message, approved
//
// NOTE: wishes are published on a public URL. AUTO_APPROVE below decides whether
// a new wish is visible immediately (true) or stays hidden until you set its
// "approved" cell to TRUE by hand (false). Flip it to false if you'd rather
// screen every message before guests can read it.
var AUTO_APPROVE = true;

var RSVP_SHEET = "RSVP";
var WISHES_SHEET = "Wishes";

function sheetNamed(name, headers) {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(name);
  if (!sheet) {
    sheet = book.insertSheet(name);
    sheet.appendRow(headers);
  }
  return sheet;
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  if (data.type === "wish") {
    var wishes = sheetNamed(WISHES_SHEET, ["timestamp", "name", "message", "approved"]);
    wishes.appendRow([new Date(), data.name || "", data.message || "", AUTO_APPROVE]);
    return json({ ok: true });
  }

  // Default to RSVP so older clients that don't send `type` keep working.
  var rsvp = sheetNamed(RSVP_SHEET, ["timestamp", "name", "wish", "attending", "guests", "side"]);
  rsvp.appendRow([
    new Date(),
    data.name || "",
    data.wish || "",
    data.attending || "",
    data.guests || "",
    data.side || "",
  ]);
  return json({ ok: true });
}

function doGet(e) {
  var type = e && e.parameter ? e.parameter.type : "";
  if (type !== "wishes") {
    return json({ error: "unsupported type" });
  }

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(WISHES_SHEET);
  if (!sheet || sheet.getLastRow() < 2) {
    return json({ wishes: [] });
  }

  // Skip the header row; columns are timestamp, name, message, approved.
  var rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues();
  var wishes = [];

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row[3] !== true) continue; // not approved (or blank) — keep it hidden
    if (!row[1] && !row[2]) continue;

    wishes.push({
      name: String(row[1]),
      message: String(row[2]),
      at: row[0] ? new Date(row[0]).toISOString() : "",
    });
  }

  return json({ wishes: wishes.reverse() }); // newest first
}
