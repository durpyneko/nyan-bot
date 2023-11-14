// Requirements
const logger = require("../../utils/logger");

// Main
module.exports = (client, message) => {
  // Logging
  logger({
    name: "LOGIN",
    type: "info",
    content: `${client.user.username} is online!`,
  });
};
