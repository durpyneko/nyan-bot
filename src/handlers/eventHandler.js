const fs = require("fs");
const path = require("path");

const logger = require("../utils/logger");

logger({
  name: "eventHandler",
  type: "system",
  content: "EVENT HANDLER INITIATED",
});

module.exports = (client) => {
  const eventPath = path.join(__dirname, "..", "events");

  // Read all files in the events directory recursively
  const eventFiles = getEventFiles(eventPath);

  // Dynamically load each event file
  for (const file of eventFiles) {
    const event = require(file);
    const eventName = path.basename(file, ".js");

    // Attach the event to the client
    client.on(eventName, (...args) => event(client, ...args));

    logger({
      name: "eventLoader",
      type: "system",
      content: `Loaded event: ${eventName}`,
    });
  }
};

function getEventFiles(dir, files = []) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      getEventFiles(res, files);
    } else {
      files.push(res);
    }
  }

  return files.filter((file) => file.endsWith(".js"));
}
