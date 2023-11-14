const durpyAvatar =
  "https://cdn.discordapp.com/avatars/763864687481323620/1a6d2c4eae7112446b65faf32c7c89d3.png?size=96";
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
        icon_url: durpyAvatar,
      },
      fields: [
        {
          name: `Commands:`,
          value: `• none (for now)`,
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
