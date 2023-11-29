// Requirements
const logger = require("../../utils/logger");

module.exports = {
  name: "del",
  description: "Bulk delete an amount of messages up to 100",
  execute(message, args) {
    // Check if user has MANAGE_MESSAGES permissions
    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
      message
        .reply({
          content: "You don't have permission to use this command!",
          ephemeral: true,
        })
        .then((sentMessage) => {
          message.delete();
          setTimeout(() => {
            sentMessage.delete();
          }, 6000);
        });
      return;
    }
    // Copy and pasted old code... not great...
    if (args > 99) {
      var userID = message.author.id;
      message.delete();
      message.channel
        .send(`<@${userID}> ` + "Can't delete more than 99 messages!")
        .then((sentMessage) => {
          try {
            var timer = 5;
            if (timer == 0) return;
            setInterval(function () {
              if (timer == 0) return;
              sentMessage.edit(
                "Can't delete more than 99 messages! Autodeleting in " + timer
              );
              timer--;
            }, 1000);
            setTimeout(() => {
              sentMessage.delete();
            }, 6000);
          } catch (error) {
            logger({ name: "COMMAND/del", type: "error", content: error });
          }
        });
    } else if (args == 0) {
      var userID = message.author.id;
      message.delete();
      message.channel
        .send(`<@${userID}> ` + "Can't delete " + args + " messages!")
        .then((sentMessage) => {
          try {
            var timer = 5;
            if (timer == 0) return;
            setInterval(function () {
              if (timer == 0) return;
              sentMessage.edit(
                "Can't delete " + args + " messages! Autodeleting in " + timer
              );
              timer--;
            }, 1000);
            setTimeout(() => {
              sentMessage.delete();
            }, 6000);
          } catch (error) {
            logger({ name: "COMMAND/del", type: "error", content: error });
          }
        });
    } else if (args == 1) {
      message.channel.bulkDelete(parseInt(args) + 1).then(() => {
        message.channel
          .send("Deleted " + args + " message!")
          .then((sentMessage) => {
            try {
              var timer = 5;
              if (timer == 0) return;
              setInterval(function () {
                if (timer == 0) return;
                sentMessage.edit(
                  "Deleted " + args + " message! Autodeleting " + timer
                );
                timer--;
              }, 1000);
              setTimeout(() => {
                sentMessage.delete();
              }, 6000);
            } catch (error) {
              logger({ name: "COMMAND/del", type: "error", content: error });
            }
          });
      });
    } else {
      message.channel.bulkDelete(parseInt(args) + 1).then(() => {
        message.channel
          .send("Deleted " + args + " messages!")
          .then((sentMessage) => {
            try {
              var timer = 5;
              if (timer == 0) return;
              setInterval(function () {
                if (timer == 0) return;
                sentMessage.edit(
                  "Deleted " + args + " messages! Autodeleting in " + timer
                );
                timer--;
              }, 1000);
              setTimeout(() => {
                sentMessage.delete();
              }, 6000);
            } catch (error) {
              logger({ name: "COMMAND/del", type: "error", content: error });
            }
          });
      });
    }
  },
};
