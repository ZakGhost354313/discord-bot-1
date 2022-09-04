require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const prefix = "!"
client.on("ready", () => {
    console.log("Logged in as ${client.user.tag}!")
})
client.on("message", msg => {
    switch (msg.content) {
        case '${prefix}ping':
            msg.reply('pong');
    }
})

client.login(process.env.DISCORD_TOKEN);