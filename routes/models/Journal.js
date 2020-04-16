const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    date: { type: String, default: '', trim:true },
    entry1: { type: String, default: '', trim:true },
    entry2: { type: String, default: '', trim:true },
    entry3: { type: String, default: '', trim:true },
    entry4: { type: String, default: '', trim:true },
    entry5: { type: String, default: '', trim:true },

});

module.exports = mongoose.model('Journal', JournalSchema);
