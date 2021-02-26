require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client();

client.db = require('quick.db');
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

client.on('ready', async msg => {
    console.log(
        `${client.user.tag} = Online (THATS PRETTY POGGERS!)`
        `${client.user.tag} is also in ${client.guilds.cache.size}`
    )
    client.channels.cache.get("814984138381721611").send("Bot is online, pog");
})

client.login(process.env.TOKEN);