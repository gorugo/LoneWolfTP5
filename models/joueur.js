var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JoueurSchema = new Schema({
    habileteBase: Number,
    habiletePlus: Number,
    enduranceBase: Number,
    endurancePlus: Number,
    pieceOr: Number,
    disciplines: [String],
    armes: [String],
    objets: [String],
    objetsSpeciaux: [String]
});

module.exports = mongoose.model('Joueur', JoueurSchema);

