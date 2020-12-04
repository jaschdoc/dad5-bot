const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    usage: '[command]',
    description: 'Prints help information for commands',
    alias: ['h', 'yelp', 'techsupport', 'commands'],
    async execute(message, args) {
        const reply = new Array();
        const { commands } = message.client;

        if (!args.length) {
            reply.push(`These are all the commands available.`)
            reply.push(`Type \`${prefix}help [command]\` for detailed information of specific command.`);
            reply.push('');

            commands.forEach(cmd => {
                reply.push(`- \`${cmd.name}\``)
                reply.push(`    Usage: \`${cmd.name} ${cmd.usage}\``)
                if (cmd.alias) {
                    reply.push(`    Aliases: ${cmd.alias}`)
                } else {
                    reply.push(`    Aliases: None, get to work`)
                }
                reply.push(`    ${cmd.description}`)
                reply.push('');
            });

            return message.channel.send(reply);
        }

        const commandName = args.shift();

        const command = commands.find(cmd => cmd.name === commandName);


        // If args is a real command, then print info for it
        if (command) {
            return message.channel.send(getCommandInfo(command));
        }


        // Else print error help message
    },
};

function getCommandInfo(command) {
    const reply = new Array();

    reply.push(`\`${command.name}\``)
                reply.push(`    Usage: \`${command.name} ${command.usage}\``)
                if (command.alias) {
                    reply.push(`    Aliases: ${command.alias}`)
                } else {
                    reply.push(`    Aliases: None, get to work`)
                }
                reply.push(`    ${command.description}`)
                reply.push('');

    return reply;
}