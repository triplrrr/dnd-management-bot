/**
 * @author Ramiro Rocha
 * @file coinflip.js
 * @licence MIT
 */

 /**
  * Executes the `coinflip` command
  * @param [Client]  bot - The client
  * @param [Message] msg - The message sent
  * @param [string[]] args - the arguments for the command
  */
module.exports.run = async (bot, msg, args) => {
  console.log(`User ${msg.author.tag} used the coinflip command\n\t${msg.content}`)

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
