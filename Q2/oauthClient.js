const { google } = require("googleapis");
const config = require("./config");

const createOAuthClient = () => {
  const oauth2Client = new google.auth.OAuth2(
    config.CLIENT_ID,
    config.CLIENT_SECRET,
    config.REDIRECT_URI
  );
  oauth2Client.setCredentials({ refresh_token: config.REFRESH_TOKEN });
  return oauth2Client;
};

module.exports = createOAuthClient;
