import {Command} from "../commands.interface";
import {Message} from "discord.js";
import {Blame, BlameRepository} from "../../core/blame";

export const list: Command = {
    alias: ['ls'],
    args: false,
    description: "Lists all blame",
    name: "list",
    subcommands: [],
    usage: "",
    async execute(message: Message, args: string[]): Promise<Message | undefined> {
        const list: Blame[] = await BlameRepository.findAll();
        const reply: string[] = [];

        list.forEach(blame => reply.push(`${blame.initiator} blames ${blame.target}.`))

        if (reply.length !== 0) return message.channel.send(reply);
        return message.channel.send(`No one has done anything stupid`)
    }

}