import { Command, Message } from '../commands.interface';
import { add } from './add.subcommand';
import { help } from '../help';
import { prefix } from '../../bot';


export const blame: Command = {
    name: 'blame',
    usage: '[command]',
    subcommands: [add],
    description: 'Handles blame',
    alias: ['klandring'],
    args: false,
    async execute(message: Message, args: string[]) {

        const tempSubcommand: string = args.shift() || '';

        const subcommand = this.subcommands.find((command: Command) => command.name === tempSubcommand || command.alias.includes(tempSubcommand));

        if (subcommand) {
            return subcommand.execute(message, args);
        }

        else if (tempSubcommand === help.name || help.alias.includes(tempSubcommand)) {
            return help.execute(message, [this.name]);
        }

        else {
            const reply: string[] = [];
            reply.push(`Unrecognized command.`);
            reply.push(`Please use \`${prefix}${help.name} ${this.name}\` if you're unsure how to use this command`);
            return message.channel.send(reply);
        }
    }
}
