// Requirements
const logger = require("../../utils/logger");

// Main
module.exports = (client, message) => {
  // Logging
  logger({
    name: "messageCreate",
    type: "chat",
    content: `${message.channel.name}/${message.author.username}: ${message.content}`,
  });
};
