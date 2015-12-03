var u = require('underscore');
var c = require('./constantes.js');
var perte = require('./perte.js');

var choixPossibleURL = "/page/choixPossible";
var choixAleatoireURL = "/page/choixAleatoire";
var ajouterObjetsURL = "/page/ajouterObjets";
var confirmationURL = "/page/confirmation";
var combatURL = "/page/combat";
var fuirURL = "/page/fuir";

var pages = [
    {
        id: 1,
        section: 1,
        contenu: [
            {
                text: "Avant même que vous n'ayez accepté la mission de ramener Vonotar devant la justice de votre pays, les préparatifs de votre voyage à Kalte ont été entrepris. Le commandant du vaisseau de guerre Cardonal, de retour d'une patrouille dans la mer de Kalte, a reçu l'ordre d'attendre votre arrivée au port d'Anskaven où le bâtiment est ancré. Au cours de la nuit, on a amené à bord les vivres, les équipements polaires et les meutes de chiens Kanu-des chiens de traîneau-qui vous seront nécessaires dans votre quête. La nature de votre mission est restée secrète et seuls les officiers supérieurs en ont été informés."
            },
            {
                text: "Le commandant a reçu pour instruction de vous amener jusqu'au promontoire de Halle,de jeter l'ancre et d'attendre là votre retour. Une équipe de guides triés sur le volet vous conduira du promontoire jusqu'à Ikaya. Dès que vous serez entré dans la Forteresse de Glace, vous devrez alors chercher Vonotar, le capturer, puis revenir au vaisseau, toujours en compagnie de vos guides. Il ne vous est accordé que trente jours pour accomplir votre mission car l'hiver approche et, au-delà de ce délai, le Cardonal serait irrémédiablement pris dans des glaces dont il ne pourrait plus se dégager. Aussi le commandant sera-t-il contraint de regagner le Sommerlund sans vous si vous ne revenez pas à temps."
            },
            {
                text: "Pendant six jours, le Cardonal fait voile dans la mer de Kalte sans traverser une seule tempête ; chaque jour, cependant, la température descend et, bientôt, une couche de givre recouvreles ponts du bateau. Au matin du septième jour, l'île de Tola ,ensevelie sous la neige, est en vue. Peu après, un léger vent selève, en provenance de l'ouest."
            },
            {
                text: "Tout d'abord, il ne semble pas très inquiétant, mais une demi-heure plus tard, un violent blizzard se met à souffler et les côtes qui se dessinaient au loin ont tôt fait de disparaître dans la tourmente. La terrible tempête fait rage toute la journée. Des vents redoutables écrêtent les gigantesques vagues grises en projetant des paquets de mer sur les ponts, les mâts et les gréements du navire ; l'eau gèle instantanément et les flancs du #[i Cardonal] sont recouverts d'une couche de glace de plusieurs dizaines de centimètres d'épaisseur. C'est seulement en début de soirée que le ciel s'éclaircit et que la tempête cesse de souffler bien que le vent reste fort."
            },
            {
                img: "/images/p1.png"
            },
            {
                text: "Il ne vous faut pas longtemps pour vous rendre compte que la tempête vous a fait dévier de votre route d'environ 50 kilomètres, le long de la banquise de Liouk. Vous n'ignorez pas qu'en voulant retourner au promontoire de Halle, vous perdriez une journée entière, et vous décidez donc d'aborder sur la banquise pour y entreprendre votre mission."
            },
            {
                text: "Tandis que l'on débarque les derniers chiens Kanu, vos guides vous expliquent que, de l'endroit où vous êtes, il existe deux itinéraires possibles pour vous rendre à Ikaya. Le premier représente une marche de 200 kilomètres environ qui vous mènera au mont des Brumes. De là, vous aurez encore à parcourir 150 autres kilomètres sur le glacier de Viad avant d'arriver à la Forteresse de Glace. Vos guides vous précisent que cette expédition sur le glacier sera difficile. L'autre itinéraire est plus long, il vous oblige tout d'abord à couvrir une distance de presque 300 kilomètres dans la plaine de Hrod; ensuite, vous devrez traverser le défilé de la Tempête, long de 150 kilomètres. Même si le temps et la chance vous sont favorables, l'un et l'autre itinéraires vous contraindront à une marche pénible d'au moins dix jours pour atteindre votre objectif. Avant de prendre une décision, il serait sage de consulter la carte de Kalte qui figure entête de ce livre."
            }
        ],
        decisionLien: choixPossibleURL
    },
    {
        id: 12,
        section: 1,
        contenu: [
            {
                text: "Le matériel et les vivres sont rapidement déballés et répartisentre vous. Vous recevez des provisions qui représentent l'équivalent de 3 Repas, des Couvertures en Fourrure et une Corde. Inscrivez tous ces éléments sur votre Feuille d'Aventure en sachant que les Couvertures en Fourrure prennent dans votre Sac à Dos la place de deux objets normaux."
            }
        ],
        ajouterObjets: {
            text: "Choisir le(s) objet(s) à conserver",
            items: [c.objet.REPAS, c.objet.COUVERTURE_FOURRURE, c.objet.CORDE],
            lien: ajouterObjetsURL
        }
    },
    {
        id: 12,
        section: 2,
        contenu: [
            {
                text: "Il vous est impossible d'emmener les chiens Kanu dans les montagnes et vous êtes donc contraint de les abandonner ici, de même que les traîneaux. Vous vous encordez avec vos guides, et vous vous mettez en route en direction d'un étroit passage qui s'enfonce entre les pics sombres et sinistres. Tout d'abord, l'escalade ne présente pas de difficultés bientôt mais, la pente de glace lisse devient abrupte et votre progression est beaucoup plus malaisée. Un vent se lève qui forme des tas de neige poudreuse contre les blocs de glace et la visibilité est alors réduite à quelques mètres. Les tas de neige sont trompeurs et parfois profonds. A deux reprises, vous vous y enfoncez jusqu'à la poitrine et les autres doivent venir vous dégager."
            },
            {
                text: "Cette nuit-là, vous dressez votre tente sur une surface de granité recouverte de glace qui surplombe un profond ravin. Vous êtes épuisé et vous vous endormez presque au cours du Repas (n'oubliez pas de rayer ce Repas de votre Feuille d'Aventure)."
            }
        ],
        confirmation: confirmationURL
    },
    {
        id: 12,
        section: 3,
        contenu: [
            {
                text: "«Est-ce que vous parlez un peu la langue des Barbares des Glaces ? demande Dyce qui essaie d'entretenir la conversation. Pour ma part, je ne connais que quelques mots, Myjavik, par exemple."
            },
            {
                text: "Lorsque vous lui demandez ce que ce mot signifie, il observe un instant de silence puis vous répond: «Terreur...  Myjavik signifie terreur. »"
            },
            {
                text: "Soudain, un bruit impressionnant retentit à l'extérieur de la tente. On dirait le rugissement d'un gros animal."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 57,
        section: 1,
        contenu: [
            {
                text: "Vous cachez le cadavre sous l'escalier et vous vous hâtez de le fouiller. Vous y découvrez une Épée d'Os et un Disque de Pierre Bleue. Si vous souhaitez conserver l'un ou l'autre de ces objets (ou les deux), inscrivez-les sur votre Feuille d'Aventure dans la case Objets Spéciaux."
            }
        ],
        ajouterObjets: {
            text: "Choisir le(s) objet(s) à conserver",
            items: [c.objetSpecial.EPEE_OS, c.objetSpecial.DISQUE_PIERRE_BLEUE],
            link: ajouterObjetsURL
        }
    },
    {
        id: 57,
        section: 2,
        contenu: [
            {
                text: "Vous abandonnez ensuite le cadavre et vous montez l'escalier quatre à quatre."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 62,
        section: 1,
        contenu: [
            {
                text: ""
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 70,
        section: 1,
        contenu: [
            {
                text: "« Vite ! il faut remballer nos affaires et partir immédiatement ! s'écrie Fenor, tandis que le mugissement du vent emporte ses paroles dans la nuit noire. Les Languabarbs ne chassent jamais seuls ; il y en a sûrement d'autres à proximité et ils sentent l'odeur du sang à des kilomètres à la ronde. »"
            },
            {
                text: "Vous démontez la tente et vous vous hâtez de partir, Dyce ouvrant la marche, vous-même surveillant les arrières. Mais à peine avez-vous parcour uune cinquantaine de mètres qu'une catastrophe survient. Aveuglé à la fois par le vent et l'obscurité, Dyce ne remarque pas que le chemin s'arrête brusquement, tout au bord d'un précipice. Votresang se glace d'horreur lorsque vous entendez les cris de vos deux guides retentir dans les ténèbres, puis décroître tout au long de leur chute. La mort vous menace de tous côtés et vous vous cramponnez désespérément à la paroi glacée."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 78,
        section: 1,
        contenu: [
            {
                text: "Vous vous préparez en hâte et vous sortez de la tente. Le vent s'est intensifié et il emporte la neige poudreuse en petits tourbillons qui réduisent considérablement la visibilité. Une ombre sur votre droite trahit la présence du Bakanal qui bondit sur vous. Vous n'avez plus le temps d'éviter son Assaut, et il vous faut le combattre jusqu'à la mort."
            },
            {
                img: "/images/p78.png"
            }
        ],
        combat: {
            nom: "Bakanal",
            habilete: 19,
            endurance: 30,
            combattre: combatURL,
            fuir: fuirURL
        }
    },
    {
        id: 78,
        section: 2,
        decision: choixPossibleURL
    },
    {
        id: 85,
        section: 1,
        decision: choixPossibleURL
    },
    {
        id: 91,
        section: 1,
        contenu: [
            {
                text: "Vous retenez votre respiration tandis que vous vous enduisez le torse de cette graisse gluante. A mesure que l'huile imprègne votre peau, cependant, vous sentez une bienfaisante chaleur rayonner dans tout votre corps, comme si vous vous trouviez près d'un feu. Et plus vous appliquez de graisse, plus vous avez chaud. Vous remarquez également que l'épouvantable odeur s'est dissipée."
            },
            {
                text: "« Lorsque l'huile pénètre dans la peau, on perd l'odorat», dit Irian. Il recommande aux autres de se frictionner à leur tour avec l'huile de Bakanal ; cette substance apporte une protection particulièrement efficace contre les températures glaciales de Kalte, et elle pourrait bien se révéler particulièrement utile dans un proche avenir. Lorsque vous revenez sous votre tente, les chiens Kanu ne semblent pas apprécier l'odeur que vous dégagez: quand vous passez près d'eux, ils se mettent à gémir et enfouissent leur museau dans la neige."
            },
            {
                img: "/images/p91.png"
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 129,
        section: 1,
        contenu: [
            {
                text: "Les poils rêches qui couvrent la langue du Languabarb sont imprégnés d'un puissant venin grâce auquel la créature paralyse ses victimes avant de les dévorer. En moins de cinq secondes, le poison fait son effet, et vous perdez connaissance avant même que votre tête n'ait heurté la neige."
            },
            {
                text: "Lorsque vous reprenez conscience, vous sentez un poids vous peser lourdement sur lapoitrine. C'est le cadavre d'Irian. Et tandis que vous essayez tant bien que mal de vous relever, une vision désolante s'offre à vous dans la brume du petit matin. Tous vos guides, en effet, sontmorts et ce qui reste de votre équipement est dispersé alentour."
            },
            {
                text: "Les cadavres des deux Languabarbs sont étendus dans la neige tachée de sang : tous deux ont été tués à coups d'épée. Engourdi par le froid et le choc que vous venez de recevoir, vous cherchez pendant une heure votre Sac à Dos, parcourant d'un pas chancelant l'étendue glacée, lorsque vous vous apercevez enfin qu'il est toujours accroché à vos épaules."
            },
            {
                text: "Bien que vous soyez toujours dans un état second, vous parvenez malgré tout à découvrir un chemin escarpé qui vous permet de poursuivre votre route. Un vent glacial souffle sur ces montagnes hostiles et si vous ne vous êtes pas enduit le corps d'huile de Bakanal, vous perdez 3 points d'ENDURANCE."
            }
        ],
        confirmation: confirmationURL
    },
    {
        id: 129,
        section: 2,
        decision: choixPossibleURL
    },
    {
        id: 134,
        section: 1,
        contenu: [
            {
                text: "Le lendemain à l'aube, lorsque vous vous réveillez, Fenor est en train de préparer le petit déjeuner. Il vous tend alors un bol fumant et vous ne vous faites guère prier pour en avaler le contenu. Vous chargez ensuite le matériel sur les traîneaux avant de reprendre votre chemin."
            },
            {
                text: "C'est une belle matinée. Le vent est tombé et l'air est frais et limpide. Les chiens Kanu, débordant d'énergie, sont impatients de repartir. Pendant la plus grande partie de votre trajet, la glace est lisse et vous avancez sans difficulté. A la nuit tombée, vous avez atteint l'île de Syem, un pic de granité qui s'élève à 120 mètres au-dessus de la banquise. Vous établissez votre campement du côté sous le vent pour essayer de vous protéger le mieux possible d'éventuelles tempêtes nocturnes."
            },
            {
                text: "Utilisez la Table de Hasard pour obtenir un chiffre."
            }
        ],
        decision: choixAleatoireURL
    },
    {
        id: 155,
        section: 1,
        contenu: [
            {
                text: "Le vent glacé de la montagne à tôt fait de dissiper les brumes de l'aube. Epuisé, transi jusqu'à la moelle et encore sous le choc des récents événements, vous escaladez l'impitoyable paroi de roc jusqu'à ce que vous parveniez enfin sur une large corniche où vous vous sentez plus en sécurité. Vous êtes affamé, et il vous faut prendre un Repas avant de continuer, sinon, vous perdrez 3 points d'ENDURANCE. N'oubliez pas de rayer ce Repas de votre Feuille d'Aventure."
            }
        ],
        confirmation: confirmationURL
    },
    {
        id: 155,
        section: 2,
        contenu: [
            {
                text: "La corniche en rejoint une autre que vous avez beaucoup de mal à parcourir. Lorsque, enfin, vous arrivezau bout, vous vous trouvez au sommet d'une paroi impressionnante. Pour descendre dans l'étroit défilé que vous apercevez à 300 mètres au-dessous, il vous faudra emprunter un escalier particulièrement raide et dangereux dont les marches sont taillées dans la glace."
            },
            {
                text: "Utilisez la Table de Hasard pour obtenir un chiffre. Si votre total d'ENDURANCE actuel est inférieur à 10, vous ôterez 2 au chiffre obtenu. Si ce total est supérieur à 20, vous ajouterez 1 au chiffre donné par la Table."
            }
        ],
        decision: choixAleatoireURL
    },
    {
        id: 160,
        section: 1,
        contenu: [
            {
                text: "Votre matériel de transport est constitué de deux traîneaux tirés chacun par un attelage de chiens Kanu. Cette race vigoureuse est uniquement élevée à Kalte et on ne trouve pas meilleurs chiens de traîneau. Leur épaisse fourrure fauve, leur poitrail puissant, leur robustesse et leur ardeur qui ne faiblit jamais, même dans les climats les plus froids, les rendent particulièrement aptes à accomplir la tâche qui les attend."
            },
            {
                text: "Chaque traîneau contient suffisamment de vivres et de matériel pour mener à bien votre mission. Quant à vos trois guides, Irian, Fenor et Dyce, ce sont des trappeurs expérimentés pour qui les techniques de survie dans les régions polaires n'ont pas de secrets. De plus, ils connaissent bien les périls cachés qui abondent dans les terres de Kalte."
            },
            {
                text: "Dès que les chiens sont attelés, vous prenez place sur l'un des traîneaux en compagnie de Dyce, tandis que les autres ouvrent la voie sur l'autre traîneau. En contemplant l'étendue glacée de la banquise de Liouk, vous apercevez une lueur blanche à l'horizon : c'est le glacier de Viad dont la coulée de glace vient se jeter sur la banquise. L'air vif et limpide de Kalte donne une fausse impression des distances : on dirait que le glacier se trouve à une dizaine de kilomètres, alors qu'en fait il est distant d'au moins 100 kilomètres."
            },
            {
                text: "La première journée de votre voyage se passe bien et vous parcourez un bon nombre de kilomètres. Lorsque, enfin, le soleil se couche, vous décidez d'établir votre campement pour la nuit. Vous vous arrêtez au milieu d'un cercle formé par des piliers de glace qui se sont dressés sous la pression de la banquise sans cesse en mouvement. Les traîneaux sont rangés côte à côte et la tente installée juste devant. On trouve ensuite un abri où les chiens pourront passer la nuit, puis l'heure vient de préparer le dîner. Vous êtes tous rassemblés sous la tente lorsqu'un terrible rugissement retentit soudain au-dehors."
            },
            {
                text: "« Par tous les dieux ! s'écrie Irian, un Bakanal ! »"
            },
            {
                text: "Les Bakanals sont de grandes créatures carnivores qui vivent à proximité descôtes de Kalte. Ils se nourrissent habituellement de gaillelots ou de petites ostrelles qui abondent au bord de la mer. Ce Bakanal, cependant, a été attiré par l'odeur des chiens et il s'apprête à les attaquer, bien décidé à en dévorer plusieurs d'un coup."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 167,
        section: 1,
        contenu: [
            {
                text: "Le vent tombe peu à peu, l'atmosphère s'éclaircit et le Glacier de Viad se révèle alors dans toute sa splendeur. La surface lisse de la glace ressemble à un tapis de neige étincelante incrustée de pierres de toutes les couleurs : jaunes, violettes, bleues, vertes, orange, cramoisies; et les cristaux de glace brillent d'un tel éclat que le plus somptueux bijou paraîtrait terne par comparaison. Le mur de glace s'élève à 250 mètres de hauteur et ne présente pas d'obstacle à l'escalade, bien qu'il soit très escarpé. Le temps est beau, mais il vous faut presque une journée entière pour grimper au sommet de la paroi de glace. Tout le matériel a été déchargé et monté là-haut où on l'arrime à nouveau sur les traîneaux. Les chiens Kanu jouent entre eux en se battant, et vos provisions sont à tel point secouées par l'escalade qu'elles se sont transformées à la fin de la journée en une infâme bouillie."
            },
            {
                text: "Lorsque tout est enfin terminé, vous êtes épuisé. La nuit tombe et vous décidez donc d'établir votre campement dans l'abri que vous offre une cuvette naturelle creusée dans la glace. Vous avez sans nul doute bien mérité une bonne nuit de repos."
            },
            {
                text: "Utilisez la Table de Hasard pour obtenir un chiffre."
            }
        ],
        decision: choixAleatoireURL
    },
    {
        id: 172,
        section: 1,
        contenu: [
            {
                text: "Vous refusez l'huile de Bakanal que vous propose Irian et vous retournez sous la tente. Les autres, cependant, après vous avoir félicité de votre victoire sur la créature, sortent à leur tour de la tente et vont rejoindre Irian. Stupéfait, vous les voyez alors plonger eux aussi les mains dans la graisse de Bakanal et s'en enduire le corps sous leurs vêtements."
            },
            {
                text: "Un peu plus tard dans la soirée, vous finissez par vous endormir, non sans avoir pris la précaution de vous boucher les narines avec du coton. Les autres, pour leur part, ne semblent pas le moins du monde incommodés par l'épouvantable odeur."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 78,
        section: 1,
        contenu: [
            {
                text: "Dans l'obscurité balayée de neige, vous distinguez deux petits points rouges et brillants qui grandissent peu à peu. Puis soudain, une forme se dessine dans l'ombre : vous voyez alors apparaître une grande et hideuse créature quadrupède qui bondit sur vous. Elle a les yeux étincelants et ouvre une gueule hérissée de dents, exhibant en même temps une énorme langue couverte de poils rêches qu'elle pointe en direction de votre visage."
            },
            {
                text: "« Argh ! Un Languabarb ! » s'écrie Fenor. Il se précipite aussitôt à votre côté en brandissant une épée dont il essaie de frapper la langue de la créature. L'animal, cependant, est déjà sur vous et il vous faut le combattre."
            },
            {
                text: "Indifférente à l'attaque de Fenor, la bête monstrueuse ne semble s'intéresser qu'à vous. Fenor lui porte ses coups par-derrière et ne sera donc pas blessé."
            },
            {
                text: "En revanche, il fera perdre 3 points supplémentaires d'ENDURANCE à votre adversaire, et cela à chaque Assaut, enraison des blessures qu'il lui inflige."
            }
        ],
        combat: {
            nom: "Languabarb",
            habilete: 11,
            endurance: 35,
            combattre: combatURL,
            fuir: fuirURL
        }
    },
    {
        id: 180,
        section: 2,
        decision: choixPossibleURL
    },
    {
        id: 188,
        section: 1,
        decision: choixPossibleURL
    },
    {
        id: 204,
        section: 1,
        contenu: [
            {
                text: "Les Bakanals sont des créatures féroces et dangereuses qui n'ont peur que d'une chose : le feu. Saisissant alors une torche, vous l'allumez et vous sortez de la tente."
            },
            {
                text: "Le vent souffle beaucoup plus fort qu'au moment où vous avez installé votre camp et la neige poudreuse est soulevée en petits tourbillons qui vous picotent les yeux. Une ombre mouvante à votre droite trahit la présence du Bakanal qui s'avance vers vous à grands bonds. Mais au moment où il s'apprête à vous sauter dessus, il aperçoit la flamme vacillante de votre torche et pousse un hurlement de terreur.Quelques secondes plus tard, il a disparu dans l'obscurité. Vous constatez bientôt que tous les chiens Kanu sont sains et saufs, bien qu'un peu nerveux, ce qui n'a rien d'étonnant. Pour être sûr que le Bakanal n'attaquera plus, vous prenez des tours de garde en tenant à portée de main armes et torches."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 209,
        section: 1,
        contenu: [
            {
                text: "Vous vous cramponnez à la paroi rocheuse pendant toute la nuit. Le vent glacial vous cingle le visage et vous êtes saisi de tremblements incontrôlables, luttant de toutes vos forces pour ne pas vous évanouir. Vous perdez 2 points d'ENDURANCE."
            }
        ],
        confirmation: confirmationURL
    },
    {
        id: 209,
        section: 2,
        contenu: [
            {
                text: "L'huile de Bakanal vous permet cependant de conserver suffisamment de chaleur dans votre corps pour arriver à survivre : sans elle, le froid aurait eu raison de vous."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 245,
        section: 1,
        contenu: [
            {
                text: "La bête, avant de mourir, pousse un dernier cri d'agonie et une odeur pestilentielle vous frappe aussitôt les narines. Même les chiens Kanu froncent le museau en signe de dégoût et se détournent pour essayer d'échapper à l'effroyable puanteur."
            },
            {
                text: "Irian s'approche alors du cadavre avec un couteau à la main etentreprend de dépecer la créature. Vous faites une grimace en le voyant découper la peau de l'animal, de la gorge au ventre pour l'arracher ensuite de sa chair. Mais vous n'êtes pas au bout de votre écœurement : Irian, en effet, plonge les mains dans la carcasse béante et en retire une graisse épaisse dont il s'enduit le visage et le corps.« C'est de l'huile de Bakanal, s'écrie-t-il avec enthousiasme, elle protège du froid et de l'humidité ; c'est encore mieux que la fourrure pour se préserver des glaces de Kalte. » En même temps, il tend vers vous une main pleine de graisse immonde dont il vous invite à vous enduire la peau à votre tour."
            },
            {
                img: "/images/p245.png"
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 248,
        section: 1,
        contenu: [
            {
                text: "Vous êtes arrivé à une centaine de mètres du défilé lorsqu'un vertige vous saisit et vous fait perdre l'équilibre. Vous essayez désespérément de vous accrocher à la paroi rocheuse, mais vous avez les mains engourdies par le froid et vous tombez dans la vallée. Votre corps, parfaitement conservé dans la glace, sera découvert par une équipe d'explorateurs dans environ deux mille ans, à quelques années près."
            },
            {
                text: "Il va sans dire que votre mission s'achève ici en même temps que votre vie."
            }
        ]
    },
    {
        id: 248,
        section: 1,
        contenu: [
            {
                text: "Cette nuit-là, une tempête souffle sur la banquise et enterre votre tente sous la neige. Tandis que vous dormez, la toile fléchit sous le poids de cette couche compacte et vient effleurer vos Couvertures de Fourrure. Au matin, celles-ci sont trempées et, lorsque vous vous réveillez, vos deux jambes sont paralysées par de terribles crampes. Il vous faut les masser pendant presque une heure avant que vous ne puissiez à nouveau vous tenir debout. Vous souhaitez alors n'avoir jamais mis les pieds dans cet enfer glacé."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 300,
        section: 1,
        contenu: [
            {
                text: "Pendant trois jours et trois nuits vous parcourez les étenduesmornes et hostiles du glacier de Viad. Irian et Fenor ont tous deux souffert de cécité des neiges et il semble que le vent implacable qui souffle du nord épuise les forces de chacun. Au matin du quatrième jour, le vent tombe enfin et vous pouvez faire le point pour calculer votre position exacte. A la consternation générale, Irian annonce alors que vous vous êtes sensiblement écartés de votre route."
            },
            {
                text: "Face à vous, les crêtes grises d'une chaîne de montagnes se dessinent dans les neiges du nord, offrant un spectacle sinistre et menaçant. «Ce sont les monts Myjavik, constate Dyce, nous sommes allés trop loin à l'est. » Son visage barbu exprime une amère déception."
            },
            {
                text: "Les monts Myjavik se dressent à présent entre la forteresse et vous. Pour les franchir, vous devrez abandonner chiens et traîneaux, porter votre matériel sur le dos et poursuivre votre chemin à pied. Il y a une autre possibilité, mais elle vous ferait perdre deux jours qui pourraient être précieux : il s'agirait de revenir en arrière jusqu'au glacier pour reprendre là votre route jusqu'à Ikaya."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 318,
        section: 1,
        contenu: [
            {
                text: "Vous devinez que le Bakanal cherche désespérément quelque chose à manger. Votre Discipline Kaï, cependant, ne vous sera d'aucune utilité : en effet, à présent qu'il a senti l'odeur des chiens Kanu, il vous sera impossible de lui ordonner de quitter le campement. Vous n'ignorez pas que les Bakanals sont de courageux chasseurs qui n'ont peur de rien, ou plutôt, qui n'ont peur que d'une seule chose : le feu. Vous saisissez alors unetorche, vous l'allumez et vous vous précipitez hors de la tente. Il fait nuit noire et il tombe une neige épaisse, mais un mouvement à votre droite trahit la présence du Bakanal qui s'avance vers vous. Au moment où il s'apprête à bondir, il aperçoit la flammede la torche et pousse aussitôt un hurlement de terreur. Une seconde plus tard, il a fait volte-face et il disparaît dans la nuit."
            },
            {
                text: "Les chiens Kanu sont sains et saufs, mais pour être sûr que les Bakanals ne reviendront pas, vous décidez, cette nuit-là, de prendre des tours de garde en conservant une torche et une arme à portée de mai."
            }
        ],
        decision: choixPossibleURL
    },
    {
        id: 331,
        section: 1,
        contenu: [
            {
                text: "Le lendemain, la température descend et un froid rigoureux s'installe. Des vents du nord amènent une grêle de glace qui vous cingle le visage et vos lèvres gercées se mettent à saigner. Vers midi, vous êtes pris dans un blizzard qui rend votre progression difficile et épuisante. Le vent violent vous force à descendre du traîneau pour le pousser. Vous êtes exténué, vos mains et vos orteils sont engourdis par le froid et la transpiration provoquée par vos efforts harassants a gelé sur votre peau, déposant à l'intérieur de vos moufles et de vos bottes une couche de glace."
            },
            {
                text: "Lorsque vous atteignez enfin le glacier, la nuit est presque tombée, et vous êtes tous si fatigués que vous avez à peine suffisamment de force pour dresser la tente et prendre un repas. La situation frise le désastre."
            },
            {
                text: "Vos orteils, vos doigts et votre nez ont subi la morsure du gel et, à moins que vous ne maîtrisiez la Discipline Kaï de la Guérison, vous perdez 4 points d'ENDURANCE."
            }
        ],
        confirmation: confirmationURL
    },
    {
        id: 331,
        section: 2,
        contenu: [
            {
                text: "Utilisez la Table de Hasard pour obtenir un chiffre."
            }
        ],
        decision: choixAleatoireURL
    },
    {
        id: 339,
        section: 1,
        contenu: [
            {
                text: "Dix minutes plus tard, vos pieds et vos mains ont subi les effets du gel. Sur cette paroi exposée, les vents glacés soufflent à plus de 150 kilomètres à l'heure. Vous tenez bon pendant encore une demi-heure, mais le froid a finalement raison de vous : vous perdez connaissance et vous tombez d'une hauteur de 900 mètres."
            },
            {
                text: "Faut-il préciser que votre mission s'achève ici en même temps que votre vie?"
            }
        ]
    }
]

module.exports = {
    pages: pages
}

