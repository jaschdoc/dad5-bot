import { Command, Message, commandCollection } from './commands.interface';

const prefix: string = process.env.PREFIX!;


export const help: Command = {
    name: 'help',
    usage: '[command]',
    description: 'Prints help information for commands',
    alias: ['h', 'yelp', 'techsupport', 'commands'],
    args: false,
    async execute(message: Message, args: string[]) {
        const reply: string[] = [];
        const commands = commandCollection;

        if (!args.length) {
            reply.push(`These are all the commands available`)
            reply.push(`Type \`${prefix}help [command]\` for detailed information of specific command.`);
            reply.push('');

            commands.forEach((cmd: Command) => {
                reply.push(`- \`${cmd.name}\``);
                reply.push('');
            });

            return message.channel.send(reply);
        }

        const commandName: string = args.shift() || '';

        const command = commands.find((cmd: Command) => cmd.name === commandName);

        // If args is a real command, then print info for it
        if (command) {
            return message.channel.send(getCommandInfo(command));
        }

        // Else print error help message
        else {
            return message.channel.send(`Error: \`${commandName}\` is not a valid command`);
        }
    }
}

function getCommandInfo(command: Command): string[] {
    const reply: string[] = [];

    reply.push(`\`${command.name}\``)
    reply.push(` - Usage: \`${command.name} ${command.usage}\``)
    if (command.alias) {
        const aliasMessage: string[] = [];

        command.alias.forEach((alias: string) => aliasMessage.push(` \`${alias.trim().concat()}\``));
        
        reply.push(` - Aliases:${aliasMessage}`)
    } else {
        reply.push(` - Aliases: None, get to work`)
    }
    reply.push(` - ${command.description}`)
    reply.push('');

    return reply;
}