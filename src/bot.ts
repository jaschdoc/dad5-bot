import Discord, { Client, Collection, Message } from 'discord.js';

import { Command, commandCollection } from './commands/commands.interface';

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
client.on('message', (message: Message) => {

    // Breaks early if message does not start with prefix or if message is from a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // Splits message into arguments 
    const args: string[] = message.content.slice(prefix.length).split(/ +/);

    // Commands should be case insensitive 
    const commandName: string = args.shift()?.toLocaleLowerCase() || '';

    // Matches commandname with name of commands or their aliases (can be set in commmand file)
    const command: Command | undefined = commands.get(commandName)
        || commands.find((cmd: Command) => cmd.alias.includes(commandName));
    if (!command) return;

    // If command must have arguments (command.args = true), enforce it:
    if (command && command.args && !args.length) {
        let reply: string = `You must specify an argument with this command.`;

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
