const channelUtils = require('../utils/channelutils.js');
const klandringer = require('../utils/klandringer.js');

module.exports = {
    name: 'klandring',
    aliases: ['k'],
    description: 'Se alle klandringer',
    async execute(message: { reply: (arg0: any) => any; }, args: any) {
        klandringer.collect().then((msg: any) => message.reply(msg));
    }
};
