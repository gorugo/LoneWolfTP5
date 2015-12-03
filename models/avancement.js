var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var combatSchema = new Schema({
    chiffreAleatoire: Number,
    enduranceMonstre: Number
});

var AvancementSchema = new Schema({
    pageId: Number,
    sectionId: Number,
    joueurId: Schema.Types.ObjectId,
    combats: [combatSchema]
});

module.exports = mongoose.model('Avancement', AvancementSchema);

