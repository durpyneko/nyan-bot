// Requirements
const fs = require("fs");
const path = require("path");

module.exports = {
  name: "reload",
  description: "Reloads all commands",
  execute(message, args, { source, client, commands }) {
    try {
      // Clear the cache for the 'commands' folder and its contents
      clearModuleCache([
        path.join(__dirname, ".."),
        path.join(__dirname, "..", "commands"),
      ]);

      // Re-require all command files
      const commandPath = path.join(__dirname, "..");
      const commandFiles = fs
        .readdirSync(commandPath)
        .filter((file) => file.endsWith(".js"));

      for (const file of commandFiles) {
        const command = require(path.join(commandPath, file));
        commands.set(command.name, command);
      }

      message.reply("Commands reloaded successfully.");
    } catch (error) {
      console.error(error);
      message.reply("An error occurred while reloading commands.");
    }
  },
};

function clearModuleCache(modulePaths) {
  // Ensure modulePaths is an array
  if (!Array.isArray(modulePaths)) {
    modulePaths = [modulePaths];
  }

  // Clear the cache for the specified module paths and their dependencies
  modulePaths.forEach((modulePath) => {
    delete require.cache[require.resolve(modulePath)];

    // Clear the cache for all child modules
    for (const key in require.cache) {
      if (key.startsWith(modulePath)) {
        delete require.cache[key];
      }
    }
  });
}
