var express = require('express');
var u = require("underscore");

var router = express.Router();

/*
 * Ce service web envoie le JSON d'une ronde de combat entre un monstre et
 * le joueur. On envoie l'endurance et l'habilete de chacun.
 *
 * @param enduranceJoueur Endurance courante du joueur
 * @param habileteJoueur Habilete du joueur
 *
 * @param enduranceMonstre Endurance courrante du monstre
 * @param habileteMonstre Habilete du monstre
 *
 * @return La représentation d'une ronde de combat à partir des paramètres
 *
 */
router.get('/:enduranceJoueur/:habileteJoueur/:enduranceMonstre/:habileteMonstre', function(req, res) {
    var ej = req.params.enduranceJoueur;
    var hj = req.params.habileteJoueur;
    var em = req.params.enduranceMonstre;
    var hm = req.params.habileteMonstre;

    // Calcul du quotient d'attaque
    var qa = hj - hm;
    if (qa < -11) {
        qa = -11;
    } else if (qa > 11) {
        qa = 11;
    }
    // Relation entre l'index du tableau et le quotient d'attaque.
    var indexQa = (qa >= 0) ? Math.ceil(qa / 2) + 7 : Math.floor(qa / 2) + 6;

    var chiffreAleatoire = u.random(0, 9);

    // On obtient la bonne case du tableau de combat
    var combat = TableCombat(ej,em)[indexQa][chiffreAleatoire];

    // On retourne les informations sur la ronde de combat
    res.json({
        quotientAttaque: qa,
        chiffreAleatoire: chiffreAleatoire,
        degatJoueur: combat.degatJoueur,
        degatEnnemi: combat.degatEnnemi
    })
});

/**
 * Table de combat qui retourne les dégâts causés sur le joueur et le monstre.
 *
 * @param ej Endurance joueur
 * @param em Endurance monstre
 *
 * @return La table de combat avec les dégâts causés entre le monstre et le joueur
 */
var TableCombat = function(ej, em) { return [
[lrc(6,0), lrcmj(ej), lrcmj(ej), lrc(0,8), lrc(0,8), lrc(1,7), lrc(2,6), lrc(3,5), lrc(4,4), lrc(5,3)], // index 0, QA -11 et -
[lrc(7,0), lrcmj(ej), lrc(0,8), lrc(0,7), lrc(1,7), lrc(2,6), lrc(3,6), lrc(4,5), lrc(5,4), lrc(6,3)], // index 1, QA -10 et -9
[lrc(8,0), lrc(0,8), lrc(0,7), lrc(1,6), lrc(2,6), lrc(3,5), lrc(4,5), lrc(5,4), lrc(6,3), lrc(7,2)], // index 2, QA -8 et -7
[lrc(9,0), lrc(0,6), lrc(1,6), lrc(2,5), lrc(3,5), lrc(4,4), lrc(5,4), lrc(6,3), lrc(7,2), lrc(8,0)], // index 3, QA -6 et -5
[lrc(10,0), lrc(1,6), lrc(2,5), lrc(3,5), lrc(4,4), lrc(5,4), lrc(6,3), lrc(7,2), lrc(8,1), lrc(9,0)], // index 4, QA -4 et -3
[lrc(11,0), lrc(2,5), lrc(3,5), lrc(4,4), lrc(5,4), lrc(6,3), lrc(7,2), lrc(8,2), lrc(9,1), lrc(10,0)], // index 5, QA -2 et -1
[lrc(12,0), lrc(3,4), lrc(4,4), lrc(5,4), lrc(6,3), lrc(7,2), lrc(8,2), lrc(9,1), lrc(10,0), lrc(11,0)], // index 6, QA 0
[lrc(12,0), lrc(3,5), lrc(4,4), lrc(5,4), lrc(6,3), lrc(7,2), lrc(8,2), lrc(9,1), lrc(10,0), lrc(11,0)], // index 7, QA 1 et 2
[lrc(14,0), lrc(4,5), lrc(5,4), lrc(6,3), lrc(7,3), lrc(8,2), lrc(9,2), lrc(10,1), lrc(11,0), lrc(12,0)], // index 8, QA 3 et 4
[lrc(16,0), lrc(5,4), lrc(6,3), lrc(7,3), lrc(8,2), lrc(9,2), lrc(10,2), lrc(11,1), lrc(12,0), lrc(14,0)], // index 9 QA 5 et 6
[lrc(18,0), lrc(6,4), lrc(7,3), lrc(8,3), lrc(9,2), lrc(10,2), lrc(11,1), lrc(12,0), lrc(14,0), lrc(16,0)], // index 10 QA 7 et 8
[lrcmm(em), lrc(7,4), lrc(8,3), lrc(9,2), lrc(10,2), lrc(11,2), lrc(12,1), lrc(14,0), lrc(16,0), lrc(18,0)], // index 11 QA 9 et 10
[lrcmm(em), lrc(8,3), lrc(9,3), lrc(10,2), lrc(11,2), lrc(12,2), lrc(14,1), lrc(16,0), lrc(18,0), lrcmm(em)], // index 12 QA 11 et +
[lrcmm(em), lrc(9,3), lrc(10,2), lrc(11,2), lrc(12,2), lrc(14,1), lrc(16,1), lrc(18,0), lrcmm(em), lrcmm(em)]
];
}

/**
 * Lancer résultat combat.
 *
 * @param e Dégât ennemi
 * @param j Dégât joueur
 */
function lrc(e, j) { return { degatEnnemi: e, degatJoueur: j }; }
/** Mort instantanné du joueur. */
function lrcmj(enduranceJoueur) {
    return { degatEnnemi: 0, degatJoueur: enduranceJoueur };
}
/** Mort instantanné du monstre. */
function lrcmm(enduranceMonstre) {
    return { degatEnnemi: enduranceMonstre, degatJoueur: 0 };
}

module.exports = router;

