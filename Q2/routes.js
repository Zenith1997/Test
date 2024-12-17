const express = require("express");
const { getFreeBusyIntervals } = require("./calenderService");

const router = express.Router();

router.post("/freebusy", async (req, res) => {
  try {
    const { timeMin, timeMax, calendarId } = req.body;

    if (!timeMin || !timeMax || !calendarId) {
      return res.status(400).json({
        error: "Missing required parameters: timeMin, timeMax, calendarId",
      });
    }

    const busyIntervals = await getFreeBusyIntervals(
      timeMin,
      timeMax,
      calendarId
    );
    res.status(200).json({ calendarId, busyIntervals });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({
      error: "Failed to fetch data",
      details: error.message,
    });
  }
});

module.exports = router;
