import { Command, Message } from '../commands.interface';
import { Blame, BlameResult } from '../../core/blame';

export const add: Command = {
    name: 'add',
    usage: '<target> <title>',
    subcommands: [],
    description: `Blames someone for something stupid they've done`,
    alias: ['new'],
    args: true,
    async execute(message: Message, args: string[]) {
        const target: string = args[1];
        const title: string = args[2];

        const blame: Blame = {
            initiator: message.author.username,
            target: target,
            title: title,
            result: BlameResult.Pending
        }

        const reply: string = `${blame.initiator} on ${blame.target} for ${blame.title}, result: ${blame.result}`

        return message.channel.send(reply);
    }
}