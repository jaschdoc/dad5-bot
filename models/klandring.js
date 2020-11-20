const mongoose = require('mongoose');

const klandringSchema = mongoose.Schema({
    klandret: String,
    klandrer : String,
    isDecided: Boolean,
    verdict: Number
     
});

module.exports = mongoose.model("Klandring", klandringSchema);
