var express = require('express');
var jade = require('jade');
var fs = require('fs')
var path = require('path');
var u = require('underscore');
var pagesJeu = require('../lib/pagesJeu.js')
var router = express.Router();

router.get('/jeu', function(req, res) {
    var joueur = req.session.joueur;
});

/**
 * On envoie le HTML de la page complète désirée au client.
 * Le HTML des sous-sections de la page demandée sont combinées.
 *
 */
router.get('/jeu/:pageId', function(req, res, next) {
    var id = req.params.pageId;
    var htmlPage = u.chain(fs.readdirSync('views/page'))
        // On récupère les sous-sections de la page
        .filter(function(file) {
            return file.indexOf(id + '_') == 0;
        })
        // Pour chaque sous-section, on compile son Jade pour obtenir du HTML.
        .map(function(file) {
            var fn = jade.compile(fs.readFileSync('views/page/' + file, 'utf8'), {
                filename: path.join('views/page/', file)
            });
            return fn({name:'Oleg'}).trim();
        })
        // On combine chaque HTML obtenu un à la suite de l'autre.
        .join("");

    res.render('page/pageJeu', {
        numeroPage: req.params.pageId,
        htmlPage: htmlPage
    });
});

module.exports = router;

