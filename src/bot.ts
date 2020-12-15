import Discord, { Client, Collection } from 'discord.js';
import { Command, commandCollection } from './commands/commands';
import dotenv from 'dotenv';
dotenv.config();
export const prefix: string = process.env.PREFIX!;

const client: Client = new Discord.Client();
const commands: Collection<string, Command> = new Discord.Collection();

commandCollection.forEach((cmd: Command) => commands.set(cmd.name, cmd));

client.once('ready', () => {
    console.log('Ready for commands.');
});

client.login(process.env.BOT_TOKEN);

// Parses messages sent 
client.on('message', (message: any) => {

    // Breaks early if message does not start with prefix or if message is from a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Splits message into arguments 
    const args = message.content.slice(prefix.length).split(/ +/);

    // Commands should be case insensitive 
    const commandName = args.shift().toLowerCase();

    // Matches commandname with name of commands or their aliases (can be set in commmand file)
    const command = commands.get(commandName)
        || commands.find((cmd: any) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    // If command must have arguments (command.args = true), enforce it:
    if (command && command.args && !args.length) {
        let reply = `You must specify an argument with this command.`;

        if (command.usage) {
            reply += `\nUsage: \`${prefix} ${command.name} ${command.usage}\``;
        }
        return message.reply(reply);
    }

    // Execute matched command
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply(`Something went wrong. Please try again`);
    }
});
