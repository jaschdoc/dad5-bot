const fs = require('fs');
const Discord = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const client = new Discord.Client();
client.commands = new Discord.Collection();
const timers = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Sets path for command files
for (const file of commandFiles) {
    const command = require('./commands/' + file);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Ready for commands.');
});

client.login(process.env.BOT_TOKEN);

// Parses messages sent 
client.on('message', message => {

    // Breaks early if message does not start with prefix or if message is from a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Splits message into arguments 
    const args = message.content.slice(prefix.length).split(/ +/);

    // Commands should be case insensitive 
    const commandName = args.shift().toLowerCase();


    const channel = message.channel;

    // Matches commandname with name of commands or their aliases (can be set in commmand file)
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    // If command must have arguments (command.args = true), enforce it:
    if (command.args && !args.length) {
        let reply = "du mangler at angive et argument.";

        if (command.usage) {
            reply += "\nKorrekt brug er: " + prefix + command.name + " " + command.usage;
        }
        return message.reply(reply);
    }

    // Execute matched command
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        channelUtils.reply(message, "Kommandoen eksisterer ikke")

    }
});
