/**
 * @author Anish Shobith
 * @file commandfileexample.js
 * @licence MIT
 */

module.exports.run = async (bot, msg, args) => {

  msg.reply('This is an example! Hello, World!');

};

// Help Object
module.exports.help = {
  name: "example",
  description: "This command is here to serve as an example for other commands to be implemented",
  usage: "",
  category: "developer",
  aliases: ["ex"]
};