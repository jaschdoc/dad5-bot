const kammerid = "id";
module.exports = {
    clear: function (channel: { bulkDelete: (arg0: any) => void; }, messages: any) {
        channel.bulkDelete(messages)
    },
    sendMessage: sendMessage,
    reply: reply,
    dm: dm,
    mention: mention,
    sendMention: sendMentionMessage,
    superscript: superscript
}

function superscript(n: { toString: () => any; }) {
    const s = n.toString();
    const digits = '⁰¹²³⁴⁵⁶⁷⁸⁹';

    var res = '';
    for (let i = 0; i < s.length; i++) {
        res += digits[s[i]];
    }

    return res;
}
function reply(message: { channel: any; reply: (arg0: any) => void; }, reply: any) {
    reply = sanitize(message.channel, reply);
    message.reply(reply);
}

function sendMessage(channel: any, message: any) {
    message = message.toString();
    message = sanitize(channel, message)
    channel.send(message);
}

function dm(message: { channel: { type: string; }; author: { send: (arg0: any, arg1: { split: boolean; }) => Promise<any>; tag: string; }; reply: (arg0: string) => void; }, privateText: any, publicText: string) {
    publicText = sanitize(message.channel, publicText);
    message.author.send(privateText, { split: true }).then(() => {
        if (message.channel.type === 'dm') return;
        console.log("Got here: " + publicText);
        message.reply(publicText);
    }).catch((error: any) => {
        console.error("Kunne ikke sende DM til " + message.author.tag + '\n', error)
        message.reply("Jeg kan ikke sende dig en DM - Har du dem deaktiveret?");

    })
}

//Makes TÅGEKAMMERET uppercase, and replaces sigmas by S if on #Kammeret
function sanitize(channel: any, text: string) {
    text = text.replace(/T(Å|AA)GEKAMMER/i, "TÅGEKAMMER");
    if (channel.id === kammerid) {
        text = text.replace(/(Σ|∑|𝚺|𝛴|𝜮|𝞢|⅀)/, "S");
    }
    return text;
}

function mention(id: string) {
    return "<@" + id + ">";
}

function sendMentionMessage(channel: any, id: any, message: string) {
    sendMessage(channel, mention(id) + message);
}
