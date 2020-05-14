/**
 * @author Ramiro Rocha
 * @file startcontest.js
 * @licence MIT
 */

 const { parseRoll } = require('../../roll.js');
 const { parse } = require("discord-command-parser");

module.exports.run = async (bot, msg, args) => {

  let contestDC;
  if (args[0]) {
    contestDC = args[0];
  } else {
    contestDC = parseRoll('1d20')['total'];
  }
  let original = await msg.channel.send({
    embed: {
      title: `${msg.member.displayName}'s Contest`,
      description: `No one has joined the contest!`
    }
  });
  let text = "";
  let users = [];
  let modifiers = [];

  const filter = m => m.content.startsWith('..join') && !users.includes(m.member.displayName) && m.author != msg.author;
  let collector = msg.channel.createMessageCollector(filter, { time: 30000 });
  collector.on('collect', async m => {
    text = text + `${m.member.displayName} joined the contest\n`;
    let p = parse(m, prefix);
    users.push(m.member.displayName);
    try {
      modifiers.push(parseInt(p.arguments[0]));
    } catch (err) {
      modifiers.push(0);
    }
    original = await original.edit({
      embed: {
        title: `${msg.member.displayName}'s Contest`,
        description: text
      }
    })
  })
  collector.on('end', (collected, reason) => {
    if (reason == 'time' && collected.size < 1) {
      original.edit({
        embed: {
          title: `${msg.member.displayName}'s Contest`,
          description: `Contest failed due to lack of participants!`
        }
      })
      console.log("contest failed!!!")
    } else {
      text = `**DC ${contestDC}**\n`;
      for (i = 0; i < users.length; i++) {
        result = parseRoll('1d20')['total'] + modifiers[i];
        status = ((r) => {
          if (r > contestDC) return 'succeeded';
          else return 'failed';
        })(result);
        text = text + `${users[i]} ${status} (${result})\n`;
      }
      original.edit({
        embed: {
          title: `${msg.member.displayName}'s Contest`,
          description: text
        }
      })
    }
  })

};

// Help Object
module.exports.help = {
  name: "startcontest",
  description: "This command starts a DC contest. Others join the contest using the command `..join [modifier]`, where modifier is added to the roll.",
  usage: "[dc]",
  category: "dungeons-and-dragons",
  aliases: ["stcon"]
};
