const channelUtils = require('../utils/channelutils.js');
const klandringer = require('../utils/klandringer.js');

module.exports = {
    name: 'klandring',
    aliases: ['k'],
    description: 'Se alle klandringer',
    async execute(message, args) {
        klandringer.print().then(msg => message.reply(msg));
    }
};
