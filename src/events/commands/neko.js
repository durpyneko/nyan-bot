const axios = require("axios");

module.exports = {
  name: "neko",
  description: "Replies with neko from nekos.life",
  async execute(message, args) {
    try {
      // Make an asynchronous call using axios
      const response = await axios.get("https://nekos.life/api/neko"); // More info: https://nekos.life/api/v2/endpoints

      // Extract the neko image URL from the response
      const imageUrl = response.data.neko;

      const nekoEmbed = {
        tts: false,
        embeds: [
          {
            type: "rich",
            title: "Here is a neko for you:",
            description: "",
            color: 0xdf3079,
            image: {
              url: `${imageUrl}`,
              height: 0,
              width: 0,
            },
          },
        ],
      };

      // Reply to the message with the neko image
      message.reply(
        nekoEmbed
        //files: [imageUrl],
      );
    } catch (error) {
      console.error(error);
      message.reply("Failed to fetch a neko :(");
    }
  },
};
