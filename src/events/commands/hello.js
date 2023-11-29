// Array of hello hi messages
const helloArray = [
  "Hello",
  "Hi",
  "Hey",
  "Hola",
  "Bonjour",
  "Guten Tag",
  "Ciao",
  "Namaste",
  "Salut",
  "Olá",
  "Hej",
  "Witaj",
  "Cześć",
  "こんにちは",
];

module.exports = {
  name: "Hello".toLowerCase(),
  aliases: ["Hi"].map((alias) => alias.toLowerCase()),
  description: "Replies with a random preset of greetings.",
  execute(message, args) {
    // Get a random greeting from the helloArray
    const randomGreeting =
      helloArray[Math.floor(Math.random() * helloArray.length)];

    message.reply(randomGreeting);
  },
};
