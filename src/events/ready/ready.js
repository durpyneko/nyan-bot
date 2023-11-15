// Requirements
const logger = require("../../utils/logger");

// Require the necessary discord.js classes
const { ActivityType } = require("discord.js");

// Define the command prefix
const { prefix } = require("../../config.json");

// Main
module.exports = (client) => {
  // Logging
  logger({
    name: "ready",
    type: "info",
    content: `${client.user.username} is online!`,
  });

  // Set presence
  client.user.setPresence({
    activities: [
      {
        name: `for sauce. ${prefix}help`,
        type: ActivityType.Watching,
      },
    ],
    status: "online",
  });
};
