var express = require('express');
var rest = require('restler');
var u = require("underscore");
var constantes = require('../lib/constantes.js')
var router = express.Router();

var Joueur = require('../models/joueur');
var Avancement = require('../models/avancement');

// GET page de création du joueur.
router.get('/creationJoueur', function(req, res, next) {
    res.render('creationJoueur', {
        c: constantes,
        erreursMsg: []
    });
});

// POST page de création du joueur
router.post('/jeu/1', function(req, res) {
    var erreursMsg = [];

    // Récupération des données du formulaire
    var disciplines = (req.body.discipline) ? [].concat(req.body.discipline) : [];
    var armes = (req.body.arme) ? [].concat(req.body.arme) : [];
    var objets = (req.body.objet) ? [].concat(req.body.objet) : [];
    var objetsSpeciaux = (req.body.objetSpecial) ? [].concat(req.body.objetSpecial) : [];

    // Traitement des disciplines choisies
    var NB_DISCIPLINE = 5;
    if (disciplines.length < NB_DISCIPLINE || disciplines.length > NB_DISCIPLINE) {
        erreursMsg.push("Vous devez choisir EXACTEMENT " + NB_DISCIPLINE + " disciplines Kai.");
    }

    // Traitement des armes choisies
    if (!u.contains(disciplines, constantes.discipline.MAITRISE_ARMES) && armes.length > 1) {
        erreursMsg.push("Vous ne pouvez pas choisir une arme si vous ne maîtriser pas la discipline de Maîtrise des Armes.");
    }

    // Traitement des objets choisis
    var NB_OBJET = 2;
    var nbObjetsChoisis = armes.length + objets.length + objetsSpeciaux.length;
    if (nbObjetsChoisis < 2 || nbObjetsChoisis > 2) {
        erreursMsg.push("Vous devez choisir EXACTEMENT " + NB_OBJET + " objets.");
    }

    // S'il y au moins une erreur, on revient à la page de création avec la
    // liste d'erreurs. Sinon, on se dirige vers la 1ere page de l'histoire.
    if (u.isEmpty(erreursMsg)) {
        var joueur = new Joueur;
        joueur.habileteBase = u.random(10, 19);
        joueur.enduranceBase = u.random(20, 29);
        joueur.pieceOr = u.random(10, 19);
        joueur.disciplines = disciplines;
        joueur.armes = armes;
        joueur.objets = objets;
        joueur.objetsSpeciaux = objetsSpeciaux;
        joueur.habiletePlus = habiletePlus(joueur);
        joueur.endurancePlus = endurancePlus(joueur);

        // On ajoute le joueur dans la session
        joueur.save(function(err, joueur) {
            if (err) {
                res.send(err);
            } else {
                rest.post('http://localhost:3000/api/joueurs/avancement/' + joueur.id)
                .on('complete', function(data, response) {
                    console.log(response);
                });
                req.session.joueur = joueur;
                res.redirect('/jeu/1');
            }
        });
    } else {
        res.render('creationJoueur', {
            c: constantes,
            erreursMsg: erreursMsg
        });
    }
});


/**
 * On calcul les points d'habiletes du joueur en fonction de ses disciplines
 * et de ses objets.
 *
 * @param joueur Joueur du jeu
 * @return Habilete calculer en fonction du joueur
 */
function habiletePlus(joueur) {
    var habilete = joueur.habileteBase;
    if (u.contains(joueur.disciplines, constantes.discipline.MAITRISE_ARMES) && !u.isEmpty(joueur.armes)) {
        habilete = joueur.habileteBase + 2;
    } else {
        habilete = joueur.habileteBase - 4;
    }
    return habilete;
}

/**
 * On calcul les points d'endurance du joueur en fonction de ses disciplines
 * et de ses objets.
 *
 * @param joueur Joueur du jeu
 * @return Endurance calculée en fonction du joueur
 */
function endurancePlus(joueur) {
    var endurance = joueur.enduranceBase;
    if (u.contains(joueur.objetsSpeciaux, constantes.objetSpecial.GILET_CUIR_MARTELE)) {
        endurance = joueur.enduranceBase + 2;
    }
    return endurance;
}

module.exports = router;

