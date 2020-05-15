/**
 * @author Ramiro Rocha
 * @file roll.js
 * @licence MIT
 */

const { parseRoll } = require("../../roll.js");
const { shuffle } = require('../../utility-functions.js')

module.exports.run = async (bot, msg, args) => {
  console.log(`User ${msg.author.tag} used the roll command\n\t${msg.content}`)

  let reply = await msg.reply(":game_die: Rolling dice...");
  let text = `${msg.author}\n`;
  args.forEach((arg) => {
    let result;
    try {
      result = parseRoll(arg);
    } catch {
      text = text + `:x: The string \`${arg}\` is not a valid dice roll!\n`;
      return;
    }
    let keeps = result.rolls.map( ( d ) => `***${d}***`);
    let drops;
    try {
      drops = result.drops.map( ( d ) => `~~*${d}*~~`);
    } catch (err) {
      drops = [];
    }
    let rolls = keeps.concat(drops);
    shuffle(rolls)
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
