import { Command, Message } from '../commands.interface';
import { add } from './add.subcommand';
import { help } from '../help';
import {list} from "./list.subcommand";

export const blame: Command = {
    name: 'blame',
    usage: '[command]',
    subcommands: [add, list],
    description: 'Handles blame',
    alias: ['klandring'],
    args: true,
    async execute(message: Message, args: string[]) {

        const tempSubcommand: string = args.shift() || '';

        const subcommand = this.subcommands.find((command: Command) => command.name === tempSubcommand || command.alias.includes(tempSubcommand));

        if (subcommand) {
            return subcommand.execute(message, args);
        }

        else if (tempSubcommand === help.name || help.alias.includes(tempSubcommand)) {
            return help.execute(message, [this.name]);
        }

        return Promise.reject(`No argument specified, argument filter didn't catch this`);
    }
}
