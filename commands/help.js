const { prefix } = require('../config.json');
module.exports = {
    name: 'help',
    usage: '[command]',
    description: 'Prints help information for commands',
    alias: ['h', 'yelp', 'techsupport', 'commands'],
    async execute(message, args) {
        const reply = new Array();
        const { commands } = message.client;

        reply.push(`These are all the commands available. Type \`${prefix}help [command]\` for detailed information of specific command.`);

        commands.forEach(cmd => {
            reply.push(`- \`${cmd.name}\``)
            if (cmd.alias) {
                reply.push(`    Aliases: ${cmd.alias}`)
            } else {
                reply.push(`    Aliases: None, get to work`)
            }
            reply.push(`    ${cmd.description}`)
            reply.push('\n')
        });

        return message.reply(reply);
    }
};