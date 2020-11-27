const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    usage: '[command]',
    description: 'Prints help info',
    alias: ['h', 'help', 'commands'],
    async execute(message, args) {
        const reply = [];
        const { commands } = message.client;

        reply.push(`These are all the commands available. Type \`${prefix}help [command]\` for detailed information on a specific command\n`);

        commands.forEach(cmd => {
            reply.push(`- \`${cmd.name} ${cmd.usage}\`\n`)
        });

        return message.channel.send(reply);
    }
};
