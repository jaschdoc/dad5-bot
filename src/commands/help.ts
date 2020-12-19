import { Command, Message, commandCollection } from './commands.interface';

import { prefix } from '../bot';

export const help: Command = {
    name: 'help',
    usage: '[command]',
    subcommands: [],
    description: 'Prints help information for commands',
    alias: ['h', 'yelp', 'techsupport', 'commands'],
    args: false,
    async execute(message: Message, args: string[]) {
        const commands = commandCollection;

        if (!args.length) {
            const reply: string[] = [];
            reply.push(`These are all the commands available`);
            reply.push(`Type \`${prefix}${this.name} ${this.usage}\` for detailed information of specific command.`);
            reply.push('');

            commands.forEach((cmd: Command) => {
                reply.push(`- \`${cmd.name}\``);
                reply.push('');
            });

            return message.channel.send(reply);
        }

        const commandArgument: string = args.shift() || '';
        const command: Command | undefined = commands.find((cmd: Command) => cmd.name === commandArgument);

        const subcommandArgument: string = args.shift() || '';
        const subcommand: Command | undefined = command?.subcommands.find((subcommand: Command) => subcommand.name === subcommandArgument)

        if (command && subcommand) {
            const reply: string[] = getCommandInfo(subcommand);
            reply.unshift(`**This is subcommand of** \`${command.name}\``)
            return message.channel.send(reply);
        }

        // If args is a real command, then print info for it
        if (command) {
            return message.channel.send(getCommandInfo(command));
        }

        // Else print error help message
        return message.channel.send(`Error: \`${commandArgument}\` is not a valid command`);
    }
}

function getCommandInfo(command: Command): string[] {
    const reply: string[] = [];

    reply.push(`\`${command.name}\``);
    reply.push(command.description);
    reply.push(` - Usage: \`${command.name} ${command.usage}\``);

    if (command.alias.length !== 0) {
        const aliases: string[] = [];

        command.alias.forEach((alias: string) => aliases.push(` \`${alias.trim()}\``));

        reply.push(` - Aliases:${aliases}`)
    }

    if (command.subcommands.length !== 0) {
        const subcommands: string[] = [];

        command.subcommands.forEach((subcommand: Command) => subcommands.push(` \`${subcommand.name.trim()}\``))

        reply.push(` - Subcommands:${subcommands}`)
    }

    reply.push('');

    return reply;
}