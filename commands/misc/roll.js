/**
 * @author Ramiro Rocha
 * @file roll.js
 * @licence MIT
 */

Array.min = function(array) {
  return Math.min.apply(Math, array);
};

const { parseRoll } = require("../../roll.js");
const { shuffle } = require('../../utility-functions.js')

/**
 * Executes the `roll` command
 * @param [Client]  bot - The client
 * @param [Message] msg - The message sent
 * @param [string[]] args - the arguments for the command
 */
module.exports.run = async (bot, msg, args) => {
  console.log(`User ${msg.author.tag} used the roll command\n\t${msg.content}`)

  let reply = await msg.reply(":game_die: Rolling dice...");
  let text = `${msg.author}\n`;
  args.forEach((arg) => {
    let result;
    try {
      result = parseRoll(arg);
    } catch (err) {
      text = text + `:x: The string \`${arg}\` is not a valid dice roll!\n`;
      console.log(err);
      return;
    }
    let keeps = result.rolls.map((d) => `***${d}***`);
    let drops;
    try {
      drops = result.dropped.map((d) => `~~*${d}*~~`);
    } catch (err) {
      drops = [];
    }
    let rolls = keeps.concat(drops).sort(function() {
      return 0.5 - Math.random();
    });
    text = text + `:game_die: You rolled a(n) ${result.total} [${rolls.join(' + ')}] :game_die:\n`;
  })
  reply.edit(text);

};

// Help Object
module.exports.help = {
  name: "roll",
  description: "This command rolls dice based on a provided string",
  usage: "[roll1 [roll 2 ...]]",
  category: "misc",
  aliases: ["r", "dice"]
};
