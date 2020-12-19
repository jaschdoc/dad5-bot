import { Command, Message } from './commands.interface';

export const blame: Command = {
    name: 'blame',
    usage: '',
    description: 'Handles \'blame\'',
    alias: ['klandring'],
    args: false,
    async execute(message: Message, args: string[]) {
        return message.channel.send("blame command activated");
    }
}