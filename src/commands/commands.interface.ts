import { Message } from 'discord.js';
import { prefix } from '../bot';

import { help } from './help';

export const commandCollection: Command[] = [
    help
];

export interface Command {
    name: string;

    usage: string;

    description: string;

    alias: string[];

    args: boolean;

    execute(message: Message, args: string[]): Promise<Message | undefined>;
};

export { Message, prefix}