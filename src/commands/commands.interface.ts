import { Message } from 'discord.js';
import { blame } from './blame/blame';
import { help } from './help';

export const commandCollection: Command[] = [
    help,
    blame
];

export interface Command {
    name: string;

    usage: string;

    subcommands: Command[];

    description: string;

    alias: string[];

    args: boolean;

    execute(message: Message, args: string[]): Promise<Message | undefined>;
}

export { Message }