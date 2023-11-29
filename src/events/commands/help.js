// Requirements
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../durpy-pfp.txt");

const durpy_pfp = fs.readFileSync(filePath, "utf8");

const HelpEmbed = {
  content: "",
  tts: false,
  embeds: [
    {
      type: "rich",
      title: "Prefix: ``",
      description: "",
      color: 0xdf3079,
      footer: {
        text: "durpyneko",
        icon_url: durpy_pfp,
      },
      fields: [
        {
          name: `Commands:`,
          value: `• ping\n• del [amount] (user needs manage messages permission)`,
        },
        {
          name: `Other:`,
          value: `• neko`,
        },
      ],
      thumbnail: {
        url: `https://cdn.discordapp.com/attachments/1039951514631933992/1083404187989196820/senko_bread.png`,
        height: 30,
        width: 30,
      },
    },
  ],
};

module.exports = {
  name: "help",
  description: "Replies with help embed",
  execute(message, args) {
    message.reply(HelpEmbed);
  },
};
