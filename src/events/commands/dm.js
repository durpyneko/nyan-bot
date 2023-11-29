module.exports = {
  name: "dm",
  description: "DM's user",
  execute(message, args) {
    const authorID = message.author.id;
    const authorUsername = message.author.username;
    const messsageContent = "Hello";

    message.author.send(messsageContent);

    message.channel.send(`DM'd ${authorUsername}: ${messsageContent}`);
  },
};
