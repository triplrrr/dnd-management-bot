# Dungeons and Dragons Management Bot

This bot is meant to serve a noble purpose. Helping you play D&D.

I had a lot of trouble patching together tools and bots for me and my group to use on discord. So I made this bot. Originally, I was just going to add a couple commands, but soon, I realized that this could be useful tomany more people than just myself.

I hope you enjoy using this bot for your own games.

## Set up
In order to run this bot, you will need to create several files. First, you'll need a `config.js` filein the root of the repository. It should look something like this.

```js
module.exports = {
	prefix: "!",
	owners: ["your username and tag here"],
	ownerID: "your discord id here",
	token: "your-token-here",
};
```

In order to obtain your Discord ID, follow [this guide](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-). This is used for the developer commands.

That's about it for setup. If you're going to be running this and modifying it, I've included a config for `nodemon` in the `package.json` file.

Before running it, be sure to run the `npm install` command so that no dependencies are missing.

## Adding commands

Should this bot not fufill a need, you can add a command fairly easily. You may notice a folder called `commands` in the repo. This contains all the commands for the bot. Each command is sorted into a folder that is named based on the category. The `commands/deveoper/example.js` file is a template for all the commands. Note that for the command to show up in the help dialogue, the category field in the help variable must match the name of the folder it is in.

## Credits

- Credit to [Anish Shobith](https://github.com/Anish-Shobith) for the command structure. 
