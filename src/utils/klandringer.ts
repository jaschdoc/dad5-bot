const dbHandler = require('../utils/dbhandler.js');
const Klandring = require('../models/klandring.js');

module.exports = {
    addKlandring: addKlandring,
    collect: print
}


async function addKlandring(_klandrer: any, _klandret: any, _key: any) {
    dbHandler.insertOne()
}


async function print() {
    const klandringer = await getKlandringer();
    let msg = "";
    klandringer.forEach((klandring: { klandret: string; klandrer: string; key: string; }) => {
        msg += "Klandrer: " + klandring.klandret + " Klandret:" + klandring.klandrer + " Key:" + klandring.key;
    });
    return msg + "Here."
}

async function getKlandringer() {
    const klandringer = await dbHandler.find(Klandring, {}).catch((_err: any) => dbError());
    return klandringer;
}

async function add(klandrer: any, klandret: any, key: any) {
    await dbHandler.insertOne(Klandring, { "klandrer": klandrer, "klandret": klandret, "key": key }).catch((_err: any) => dbError());
}

function dbError() {
    console.log("Error communicating with db");
}
