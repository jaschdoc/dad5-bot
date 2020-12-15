import { help } from './help';

export interface Command {
    name: string;

    usage: string;

    description: string;

    alias: string[];

    args: boolean;

    execute(message: any, args: any): Promise<void>;
}

export const commandCollection: Command[] = [
    help
];