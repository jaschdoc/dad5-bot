import { Blame, BlameResult } from '../core/blame';
import { Command, Message } from './commands.interface';

export const blame: Command = {
    name: 'blame',
    usage: '',
    description: 'Handles blame',
    alias: ['klandring'],
    args: false,
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