var u = require('underscore');
var c = require('./constantes.js');

var decisions = [
    {
        id: 1,
        decision: [
            { page: "/page/160/1",
              valid: function(joueur) {
                  return true;
              },
              text: "Si vous souhaitez prendre l'itinéraire le plus court, mais le plus difficile, celui qui passe par le glacier de Viad,"
            },
            { page: "/page/273/1",
              valid: function(joueur) {
                  return true;
              },
              text: "Si vous préférez essayer l'itinéraire le plus long, mais le plus facile, celui qui traverse la plaine de Hrod et le défilé de la Tempête,"
            }
        ]
    },
    {
        id: 12,
        decision: [
            { page: "/page/180/1",
              valid: function() { return true; },
              text: "Si vous souhaitez tirer votre épée et aller voir de quoi il s'agit,"
            },
            { page: "/page/259/1",
              valid: function() { return true; },
              text: "Si vous préférez retenir votre souffle en restant aussi immobile que possible,"
            }
        ]
    },
    {
        id: 57,
        decision: [
            { page: "/page/331/1",
              valid: function() { return true; },
              text: ""
            }
        ]
    },
    {
        id: 62,
        decision: [
            { page: "/page/288/1",
              valid: function() { return true; },
              text: ""
            }
        ]
    },
    {
        id: 70,
        decision: [
            { page: "/page/209/1",
              valid: function(joueur) { return u.contains(joueur.objetsSpeciaux, c.objetSpecial.HUILE_DE_BAKANAL); },
              text: "Si vous vous êtes enduit le corpus d'huile de Bakanal,"
            },
            { page: "/page/339/1",
              valid: function(joueur) { return !u.contains(joueur.objetsSpeciaux, c.objetSpecial.HUILE_DE_BAKANAL); },
              text: "Dans le cas contraire,"
            }
        ]
    },
    {
        id: 78,
        decision: [
            { page: "/page/245/1",
              valid: function(joueur) { return joueur.endurancePlus != 0; },
              text: "Si vous êtes vainqueur,"
            }
        ]
    },
    {
        id: 85,
        decision: [
            { page: "/page/300/1",
              valid: function() { return true; },
              text: ""
            }
        ]
    },
    {
        id: 91,
        decision: [
            { page: "/page/134/1",
              valid: function() { return true; },
              text: ""
            }
        ]
    },
    {
        id: 129,
        decision: [
            { page: "/page/155/1",
              valid: function() { return true; },
              text: ""
            }
        ]
    },
    {
        id: 160,
        decision: [
            { page: "/page/204/1",
              valid: function(joueur) { return u.contains(joueur.disciplines, c.discipline.CHASSE); },
              text: "Si vous maîtrisez la Discipline Kaï de la Chasse,"
            },
            { page: "/page/318/1",
              valid: function(joueur) { return u.contains(joueur.disciplines, c.discipline.COMMUNICATION_ANIMALE); },
              text: "Si vous maîtrisez la Discipline Kaï de la Communication Animale,"
            },
            { page: "/page/78/1",
              valid: function() { return true; },
              text: "Si vous souhaitez sortir de la tente pour vous lancer à l'attaque du Bakanal,"
            }
        ]
    },
    {
        id: 172,
        decision: [
            { page: "/page/134/1",
              valid: function() { return true; },
              text: ""
            }
        ]
    },
    {
        id: 180,
        decision: [
            { page: "/page/70/1",
              valid: function(joueur) { return joueur.endurancePlus != 0; },
              text: "Si vous tuez la créature sans perdre aucun point d'ENDURANCE,"
            },
            { page: "/page/129/1",
              valid: function(joueur) { return joueur.endurancePlus != 0; },
              text: "Si vous perdez des points d'ENDURANCE aucours du combat,"
            }
        ]
    },
    {
        id: 188,
        decision: [
            { page: "/page/331/1",
              valid: function() { return true; },
              text: ""
            }
        ]
    },
    {
        id: 204,
        decision: [
            { page: "/page/134/1",
              valid: function() { return true; },
              text: ""
            }
        ]
    },
    {
        id: 209,
        decision: [
            { page: "/page/155/1",
              valid: function() { return true; },
              text: "À présent,"
            }
        ]
    },
    {
        id: 245,
        decision: [
            { page: "/page/91/1",
              valid: function() { return true; },
              text: "Si vous acceptez de l'imiter en vous appliquant de l'huile de Bakanal sur le corps,"
            },
            { page: "/page/172/1",
              valid: function() { return true; },
              text: "Si, en revanche, l'idée de sentir à peu près aussi bon qu'une cuve remplie de roquefort rance ne vous séduit guère,"
            }
        ]
    },
    {
        id: 300,
        decision: [
            { page: "/page/12/1",
              valid: function() { return true; },
              text: "Si vous souhaitez abandonner les traîneaux et les chiens pour franchir à pied les monts Myjavik,"
            },
            { page: "/page/238/1",
              valid: function() { return true; },
              text: "Si vous préférez perdre deux jours et revenir sur le glacier de Viad,"
            }
        ]
    },
    {
        id: 318,
        decision: [
            { page: "/page/134/1",
              valid: function() { return true; },
              text: ""
            }
        ]
    }
]

module.exports = {
    decisions: decisions
}

