import { Message } from 'discord.js';
import { prefix } from '../bot';
import { blame } from './blame';
import { help } from './help';

export const commandCollection: Command[] = [
    help,
    blame
];

export interface Command {
    name: string;

    usage: string;

    description: string;

    alias: string[];

    args: boolean;

    execute(message: Message, args: string[]): Promise<Message | undefined>;
};

export { Message, prefix }