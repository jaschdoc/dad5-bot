const { prefix } = require('../config.json');
module.exports = {
    name: 'help',
    usage: '[command]',
    description: 'Prints help information for commands',
    alias: ['h', 'yelp', 'techsupport', 'commands'],
    async execute(message, args) {
        const reply = new Array();
        const { commands } = message.client;

        reply.push(`These are all the commands available. Type ${prefix}help [command] for detailed information of specific command.`)

        return message.reply(reply);
    }
};

