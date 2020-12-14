const dbHandler = require('../utils/dbhandler.js');
const Klandring = require('../models/klandring.js');

module.exports = {
    addKlandring: addKlandring,
    collect: print
}


async function addKlandring(klandrer, klandret, key) {
    dbhandler.insertOne()
}


async function print() {
    const klandringer = await getKlandringer();
    let msg = "";
    klandringer.forEach(klandring => {
        msg += "Klandrer: " + klandring.klandret + " Klandret:" + klandring.klandrer + " Key:" + klandring.key;
    });
    return msg + "Here."
}

async function getKlandringer() {
    const klandringer = await dbHandler.find(Klandring, {}).catch(err => dbError());
    return klandringer;
}

async function add(klandrer, klandret, key) {
    await dbHandler.insertOne(Klandring, { "klandrer": klandrer, "klandret": klandret, "key": key }).catch(err => dbError());
}

function dbError() {
    console.log("Error communicating with db");
}
