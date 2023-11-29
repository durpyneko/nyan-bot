// Requirements
const logger = require("../../utils/logger");

// Main
<<<<<<< Updated upstream
module.exports = (client, message) => {
  // Logging
  logger({
    name: "messageCreate",
    type: "chat",
    content: `${message.channel.name}/${message.author.username}: ${message.content}`,
=======
module.exports = async (client, message) => {
  // Reply AFK if durpy's rpesence is 'idle'
  const durpyID = "763864687481323620";
  if (message.content.includes("<@763864687481323620>")) {
    console.log(message.author.username + " mentioned durpy");
    const durpPresence =
      message.guild.members.cache.get(durpyID).presence.status;
    if (!durpPresence || durpPresence == null) {
      console.log("ERROR: getting durpy's presence");
      return;
    }
    console.log(durpPresence);
    if (durpPresence == "idle") {
      message.reply({
        content: "durpy is probably AFK",
        allowedMentions: {
          repliedUser: false,
        },
      });
    }
  }

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

  // Check if the command is 'reload' and provide the context object
  if (commandName === "reload") {
    try {
      await command.execute(message, args, { source: commandPath, client });
    } catch (error) {
      console.error(error);
      message.reply("There was an error executing the command.");
    }
  } else {
    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("There was an error executing the command.");
    }
  }

  // Log the command
  logger({
    name: "CommandHandler",
    type: "command",
    content: `User: ${message.author.tag}, Command: ${
      command.name
    }, Arguments: ${args.length > 0 ? args.join(", ") : "None"}`,
>>>>>>> Stashed changes
  });
};
