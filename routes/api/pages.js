var express = require('express');
var u = require("underscore");
var fs = require('fs');

var constantes = require('../../lib/constantes.js');
var pagesJeu = require('../../lib/pagesJeu.js');
var d = require('../../lib/decision.js')
var da = require('../../lib/decisionsAleatoire.js');

var router = express.Router();

/**
 * Création d'une page de jeu.
 */
router.post('/', function(req, res) {
});

/**
 * Service Web qui retourne l'information d'une page qui contient un choix
 * aléatoire.
 *
 * @param pageId ID de la page de l'histoire
 *
 * @return La représentation du choix aléatoire de la page
 */
router.get('/choixAleatoire/:pageId', function(req, res) {
    var id = req.params.pageId;
    var choix = u.find(da.decisionsAleatoire, function(page) {
        return page.id == id;
    });

    // Si la page n'a pas de décision aléatoire, on retourne un JSON vide.
    if (choix == undefined) {
        res.json({message: "Cette page n'a pas de choix aléatoires possibles."});
    } else {
        var joueur = req.session.joueur;
        if (joueur == undefined) {
            res.json({message: "Le joueur n'existe pas dans la session."});
        } else {
            var valeurAleatoire = choix.f(joueur);
            var decisions = u.map(choix.decision, function(decision) {
                decision.valeurAleatoire = valeurAleatoire;
                if (decision.min <= valeurAleatoire && decision.max >= valeurAleatoire) {
                    decision.valid = true;
                    return decision;
                } else {
                    decision.valid = false;
                    return decision;
                }
            });
            res.json(decisions);
        }
    }
});

router.get('/decision/:pageId', function(req, res) {
    var id = req.params.pageId;
    var choix = u.find(d.decisions, function(page) {
        return page.id == id;
    });

    if (choix == undefined) {
        res.json({message: "Cette page n'a pas de choix possibles."});
    } else {
        var joueur = req.session.joueur;
        if (joueur == undefined) {
            res.json({message: "Le joueur n'existe pas dans la session."});
        } else {
            var decisions = u.map(choix.decision, function(decision) {
                decision.valid = decision.valid(joueur);
                return decision;
            });
            res.json(decisions);
        }
    }
});

/**
 * Ce service web envoie la représentation d'une sous-section d'une page
 * de jeu.
 *
 * @param pageId ID de la page de l'histoire
 * @param sectionID Numéro de section de la page avec id = pageId
 *
 * @return La représentation de la section d'une page de l'histoire
 */
router.get('/:pageId/:sectionId', function(req, res) {
    var id = req.params.pageId;
    var section = req.params.sectionId;
    var page = u.find(pagesJeu.pages, function(page) {
        return page.id == id && page.section == section;
    });
    res.json(page);
});

module.exports = router;
