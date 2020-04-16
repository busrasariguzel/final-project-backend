const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    Date: { type: String, default: '', trim:true },
    Entry1: { type: String, default: '', trim:true },
    Entry2: { type: String, default: '', trim:true },
    Entry3: { type: String, default: '', trim:true },
    Entry4: { type: String, default: '', trim:true },
    Entry5: { type: String, default: '', trim:true },

});

module.exports = mongoose.model('Journal', JournalSchema);
