// Requirements
const logger = require("../../utils/logger");

// Main
module.exports = (client) => {
  // Logging
  logger({
    name: "ready",
    type: "info",
    content: `${client.user.username} is online!`,
  });
};
