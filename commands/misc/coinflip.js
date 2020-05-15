/**
 * @author Ramiro Rocha
 * @file coinflip.js
 * @licence MIT
 */

module.exports.run = async (bot, msg, args) => {

  if (Math.random() > 0.5) {
    msg.reply(`:a: It's heads!`)
  } else {
    msg.reply(`:b: It's tails!`)
  }

};

// Help Object
module.exports.help = {
  name: "coinflip",
  description: "Flips a coin",
  usage: " ",
  category: "misc",
  aliases: ["cf"]
};