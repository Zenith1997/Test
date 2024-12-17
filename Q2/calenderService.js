const { google } = require("googleapis");
const createOAuthClient = require("./oauthClient");

const getFreeBusyIntervals = async (timeMin, timeMax, calendarId) => {
  const oauth2Client = createOAuthClient();
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  try {
    const requestBody = {
      timeMin,
      timeMax,
      timeZone: "UTC",
      items: [{ id: calendarId }],
    };

    const response = await calendar.freebusy.query({ requestBody });
    return response.data.calendars[calendarId]?.busy || [];
  } catch (error) {
    throw new Error(`Error fetching busy intervals: ${error.message}`);
  }
};

module.exports = { getFreeBusyIntervals };
