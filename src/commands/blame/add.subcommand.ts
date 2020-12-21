import { Command, Message } from '../commands.interface';
import { Blame, BlameResult, BlameRepository } from '../../core/blame';

export const add: Command = {
    name: 'add',
    usage: '<target> <title>',
    subcommands: [],
    description: `Blames someone for something stupid they've done`,
    alias: ['new'],
    args: true,
    async execute(message: Message, args: string[]) {
        const target: string = args.shift() || '';
        const title: string = args.shift() || '';


        // Refactor this into repository service. Which should reject with a good explanation of errors which in turn can be parsed into a discord message.
        if (!target) {
            return message.channel.send(`Missing argument: \`<target>\``);
        }

        if (!title) {
            return message.channel.send(`Missing argument: \`<title>\``);
        }

        const blame: Blame = {
            initiator: message.author.username,
            target: target,
            title: title,
            result: BlameResult.Pending
        }

        BlameRepository.save(blame, blame.target).then(r => console.log(r));

        const reply: string[] = [];
        reply.push(`${message.author.username} blames ${target}. *Crowd goes wild*`);
        reply.push(`Subject: ${title}`)
        return message.channel.send(reply);
    }
}