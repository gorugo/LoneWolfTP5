var u = require('underscore');
var c = require('./constantes.js');

var perte = [
    {
        id: 12,
        f: function(joueur) {
            var i = u.findIndex(joueur.objets, c.objet.REPAS)
            joueur.objets = joueur.objets.splice(i, 1)
            return {
                message: "Un repas a été consommé de votre sac à dos.",
                joueur: joueur,
                lien: "/page/12/3"
            };
        }
    },
    {
        id: 129,
        f: function(joueur) {
            var message = "Vous êtes enduit le corps d'huile de Bakanal; vous ne perdez pas 3 points d'endurance."
            if (!u.contains(joueur.objetsSpeciaux, c.discipline.HUILE_DE_BAKANAL)) {
                message = "Vous ne vous êtes pas enduit le corpus d'huile de Bakanal; vous perdez 3 points d'endurance.";
                joueur.endurancePlus = joueur.endurancePlus - 3;
            }
            return {
                message: message,
                joueur: joueur,
                lien: "/page/129/2"
            };
        }
    },
    {
        id: 155,
        f: function(joueur) {
            if (u.contains(joueur.objets, c.objet.REPAS)) {
                var i = u.findIndex(joueur.objets, c.objet.REPAS)
                joueur.objets = joueur.objets.splice(i, 1);
                return {
                    message: "Vous consommez un repas de votre sac à dos.",
                    joueur: joueur,
                    lien: "/page/155/2"
                };
            } else {
                joueur.endurancePlus = joueur.endurancePlus - 3;
                return {
                    message: "Vous n'avez de repas dans votre sac à dos; vous perdez 3 points d'endurance.",
                    joueur: joueur,
                    lien: "/page/155/2"
                };
            }
        }
    },
    {
        id: 209,
        f: function(joueur) {
            joueur.endurancePlus = joueur.endurancePlus - 2;
            return {
                message: "Vous perdez 2 points d'endurance",
                joueur: joueur,
                lien: "/page/209/2"
            };
        }
    },
    {
        id: 331,
        f: function(joueur) {
            if (!u.contains(joueur.disciplines, c.discipline.GUERISON)) {
                joueur.endurancePlus = joueur.endurancePlus - 4;
                return {
                    message: "Vous ne maîtrisez pas la Discipline Kai de la Guérison; vous perdez 4 points d'endurance.",
                    joueur: joueur,
                    lien: "/page/331/2"
                };
            }
            return {
                message: "Vous maîtrisez la Discipline Kai de la Guérison; vous ne perdez pas 4 points d'endurance",
                joueur: joueur,
                lien: "/page/331/2"
            };
        }
    }
]

module.exports = {
    perte: perte
}

