// Requirements
const logger = require("../../utils/logger");
const fs = require("fs");
const path = require("path");

// Define the command prefix
const { prefix } = require("../../config.json");

// Load all command files
const commandPath = path.join(__dirname, "..", "commands");
const commandFiles = fs
  .readdirSync(commandPath)
  .filter((file) => file.endsWith(".js"));

const commands = new Map();

for (const file of commandFiles) {
  const command = require(path.join(commandPath, file));
  commands.set(command.name, command);
}

// Main
module.exports = (client, message) => {
  // Log regular chat messages with attachments
  const contentText = message.content;
  const contentAttachment =
    message.attachments.size > 0
      ? `[ATTACHMENT] ${message.attachments.first().url}`
      : "";
  logger({
    name: "messageCreate",
    type: "chat",
    content: `${message.channel.name}/${message.author.username}: ${contentText} ${contentAttachment}`,
  });

  // Check if the message starts with the command prefix and is not sent by a bot
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  // Get the command and arguments
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  // Check if the command exists
  if (!commands.has(commandName)) {
    return;
  }

  // Execute the command
  const command = commands.get(commandName);
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing the command.");
  }

  // Log the command
  logger({
    name: "CommandHandler",
    type: "command",
    content: `User: ${message.author.tag}, Command: ${
      command.name
    }, Arguments: ${args.length > 0 ? args.join(", ") : "None"}`,
  });
};
