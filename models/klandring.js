const mongoose = require('mongoose');

const klandringSchema = mongoose.Schema({
    klandret: String,
    klandrer : String,
    key: String,
    isDecided: Boolean,
    verdict: Number
     
});

module.exports = mongoose.model("Klandring", klandringSchema);
