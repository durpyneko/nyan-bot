console.log("Booting up...");

// Requirements
require("dotenv").config();
const logger = require("./utils/logger");

// Require the necessary discord.js classes
const {
  Client,
  Events,
  GatewayIntentBits,
  GuildEmoji,
  ActivityType,
  MessageType,
  SlashCommandBuilder,
  Attachment,
  Collection,
} = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
  ],
});

// Main
const eventHandler = require("./handlers/eventHandler");
eventHandler(client);

// Login
client.login(process.env.TOKEN);
