// import
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// import components
import NavBar from "../Components/NavBar";
import InterfaceQuizz from "../Components/QuizzCompo/InterfaceQuizz";

// import elements
import Logo from "../img/logo/logo.svg"
import logoReact from "../img/logo/logoReact.jpg"
import logoLaravel from "../img/logo/logoLaravel.png"
import logoHtmlCss from "../img/logo/logoHtmlCss.jpg"

// import scss
import "../Sass/components/quizzCompo/_quizz.scss";


// declaration variables
const DataQuizzs = [{ 
    id: '1',
    name: 'League of Legends',
    theme: 'Jeu vidéo',
    level: '1',
    images: [ logoReact ],
 }, {
    id: '2',
    name: 'L\'Epouvanteur',
    theme: 'Litérature',
    level: '2',
    images: [ logoLaravel ],
 }, {
    id: '3',
    name: 'Star Trek',
    theme: 'Films et Séries',
    level: '3',
    images: [ logoHtmlCss ],
 }, {
    id: '4',
    name: 'Naruto',
    theme: 'Animation Japonaise',
    level: '1',
    images: [ logoHtmlCss ],
 }
]

const BigData = [
    {
        id : '1',
        DataQuizz: [
            { 
            questionText: 'Quel personnage porte un chapeau et lance des cartes ?',
            answerOptions: [
                { optionText: 'Garen', isCorrect: false} ,
                { optionText: 'Twisted Fate', isCorrect: true},
                { optionText: 'Ryze', isCorrect: false}, 
                { optionText: 'Twitch', isCorrect: false}],
            }, {
                questionText: 'Dans l\'histoire sur la découverte de son bouclier par Braum, qui sauve-t-il dans la caverne ?',
                answerOptions: [
                    { optionText: 'Ashe, reine du Freljord', isCorrect: false} , 
                    { optionText: 'Le trésor', isCorrect: false}, 
                    { optionText: 'Un petit troll', isCorrect: true}, 
                    { optionText: 'Une colonie de Poros', isCorrect: false}],
            }, {
                questionText: 'Comment s\'appelle le nounours d\'Annie ?',
                answerOptions: [
                    { optionText: 'Volibear', isCorrect: false},
                    { optionText: 'Il n\'a pas de nom', isCorrect: false},
                    { optionText: 'Viktor', isCorrect: false},
                    { optionText: 'Tibbers', isCorrect: true}],
            }, {
                questionText: 'Parmi les duos de personnage suivant, lequel n\'a pas de réel lien ?',
                answerOptions: [
                    { optionText: 'Rakan et Xayah', isCorrect: false} , 
                    { optionText: 'Shaco et Gwen', isCorrect: true}, 
                    { optionText: 'Darius et Draven', isCorrect: false}, 
                    { optionText: 'Vi et Jinx', isCorrect: false}],
            }, {
                questionText: 'Laquelle de ces affirmations est-elle fausse ?',
                answerOptions: [
                    { optionText: 'Le canon de tristana a pour nom Boomer !', isCorrect: false} , 
                    { optionText: 'Le lance-roquette de Jinx a pour nom Poiscaille !', isCorrect: false}, 
                    { optionText: 'La faux de Kayn a pour nom Rhaast', isCorrect: true}, 
                    { optionText: 'Le fusil à double canon de Graves a pour nom Destinée', isCorrect: false}],
            }, {
                questionText: 'Que porte Jax comme arme ?',
                answerOptions: [
                    { optionText: 'Un lampadaire', isCorrect: true} , 
                    { optionText: 'Un katana, avec une lame de feu', isCorrect: false}, 
                    { optionText: 'Un marteau gigantesque', isCorrect: false}, 
                    { optionText: 'Il se bat a main nue', isCorrect: false}],
            }, {
                questionText: 'Lequel de ces personnages n\'est pas un Vastaya ?',
                answerOptions: [
                    { optionText: 'Rengar', isCorrect: false} , 
                    { optionText: 'Twitch', isCorrect: true}, 
                    { optionText: 'Neeko', isCorrect: false}, 
                    { optionText: 'Wukong', isCorrect: false}],
            }, {
                questionText: 'Comment s\'appelle la divinitée de la prêtresse Illaoi ?',
                answerOptions: [
                    { optionText: 'Targon', isCorrect: false} , 
                    { optionText: 'Cthulhu', isCorrect: false}, 
                    { optionText: 'Nagakabouros', isCorrect: true}, 
                    { optionText: 'L\'Océan', isCorrect: false}],
            }, {
                questionText: 'En quoi se déguise Fiddlestick pour surprendre ses victime ?',
                answerOptions: [
                    { optionText: 'Un corbeau', isCorrect: false} , 
                    { optionText: 'Un enfant', isCorrect: false}, 
                    { optionText: 'Un buisson', isCorrect: false}, 
                    { optionText: 'Un épouvantail', isCorrect: true}],
            }, {
                questionText: 'Quel était le surnom de Ivern avant d\'être l\'Ainé de la forêt ?',
                answerOptions: [
                    { optionText: 'Le Cruel', isCorrect: true} , 
                    { optionText: 'L\'Arbre-monde', isCorrect: false}, 
                    { optionText: 'Le Magnifique', isCorrect: false}, 
                    { optionText: 'L\'Artiste des bois', isCorrect: false}],
            }
        ]
    }, {
        id : '2',
        DataQuizz: [
            { 
            questionText: 'Quel est le nom de famille du Héro ?',
            answerOptions: [
                { optionText: 'Thomas Gregory', isCorrect: false} , 
                { optionText: 'Thomas Potter', isCorrect: false}, 
                { optionText: 'Thomas Ward', isCorrect: true}, 
                { optionText: 'Thomas Jackson', isCorrect: false}],
            }, {
                questionText: 'A quel age commence-t-il son apprentissage, en tant qu\'épouvanteur ?',
                answerOptions: [
                    { optionText: 'A 6 ans', isCorrect: false} , 
                    { optionText: 'A 18 ans', isCorrect: false}, 
                    { optionText: 'A 46 ans', isCorrect: false}, 
                    { optionText: 'A 13 ans', isCorrect: true}],
            }, {
                questionText: 'Où se trouve la créature de l\'obscure principale du tome 2 ?',
                answerOptions: [
                    { optionText: 'Dans une tour sinistre et fortifié', isCorrect: false} , 
                    { optionText: 'Dans des ruines a moitié inondé', isCorrect: false}, 
                    { optionText: 'Dans des catacombes', isCorrect: true}, 
                    { optionText: 'Dans le sous-sol d\'une maison', isCorrect: false}],
            }, {
                questionText: 'Comment s\'appelle la meilleur amie de Tom, le héro ?',
                answerOptions: [
                    { optionText: 'Alice', isCorrect: true} , 
                    { optionText: 'Celesta', isCorrect: false}, 
                    { optionText: 'Caitlyne', isCorrect: false}, 
                    { optionText: 'Sarah', isCorrect: false}],
            }, {
                questionText: 'Quelle magie de sorcière n\'éxiste pas ?',
                answerOptions: [
                    { optionText: 'La magie du sang', isCorrect: false} , 
                    { optionText: 'La magie des familiers', isCorrect: false}, 
                    { optionText: 'La magie des éléments', isCorrect: true}, 
                    { optionText: 'La magie des ossements', isCorrect: false}],
            }, {
                questionText: 'Dans quel bois est sculpté les bâtons des épouvanteurs ?',
                answerOptions: [
                    { optionText: 'Du bois de chêne', isCorrect: false} , 
                    { optionText: 'Du bois de sorbier', isCorrect: true}, 
                    { optionText: 'Du bois de saule pleureur', isCorrect: false}, 
                    { optionText: 'Du bois d\'ébène', isCorrect: false}],
            }, {
                questionText: 'Pour quelle raison utilise-t-on ce bois ?',
                answerOptions: [
                    { optionText: 'Il est résistant', isCorrect: false} , 
                    { optionText: 'Il permet de faire une forme de magie', isCorrect: false}, 
                    { optionText: 'Il est efficace contre les sorcières', isCorrect: true}, 
                    { optionText: 'Il est très répandu dans la région', isCorrect: false}],
            }, {
                questionText: 'Dans quel pays se déroule, la plus part du temps, l\'histoire ?',
                answerOptions: [
                    { optionText: 'En Angleterre', isCorrect: true} , 
                    { optionText: 'En Amérique', isCorrect: false}, 
                    { optionText: 'En Chine', isCorrect: false}, 
                    { optionText: 'Dans un monde inventé pour l\'oeuvre', isCorrect: false}],
            }, {
                questionText: 'Lequel de ces types de sorcière n\'éxiste pas ?',
                answerOptions: [
                    { optionText: 'Les faussement accusées', isCorrect: false} , 
                    { optionText: 'Les pernicieuses', isCorrect: false}, 
                    { optionText: 'Les révoltées', isCorrect: true}, 
                    { optionText: 'Les bénévolentes', isCorrect: false}],
            }, {
                questionText: 'Comment John Gregory, le maître de Tom, neutralise-t-il les sorcières ?',
                answerOptions: [
                    { optionText: 'Il mange leur coeur cru', isCorrect: false} , 
                    { optionText: 'Il les enferme dans des puits', isCorrect: true}, 
                    { optionText: 'Il les tue', isCorrect: false}, 
                    { optionText: 'Il les bannit, en les renvoyant dans l\'obscure', isCorrect: false}],
            }
        ]
    }, {
        id : '3',
        DataQuizz: [
            { 
            questionText: 'Quelle arme a inventé le Docteur, du Voyager, dans ses rêveries ?',
            answerOptions: [
                { optionText: 'Le disrupteur atomique', isCorrect: false} , 
                { optionText: 'Le canon photonique', isCorrect: true}, 
                { optionText: 'Le phaseur à virus', isCorrect: false}, 
                { optionText: 'La seringue hypodermique', isCorrect: false}],
            }, {
                questionText: 'Comment s\'appelle l\'entité qui a envoyé le Voyager dans le quadrant Delta ?',
                answerOptions: [
                    { optionText: 'Q', isCorrect: false} , 
                    { optionText: 'Les Borgs', isCorrect: false}, 
                    { optionText: 'Le Pourvoyeur', isCorrect: true}, 
                    { optionText: 'La Fédération des Planètes Unies', isCorrect: false}],
            }, {
                questionText: 'Dans Star Trek Nouvelle Génération, que cesse de faire Data, vu que cela ennuis les autres ?',
                answerOptions: [
                    { optionText: 'Dire les secondes, dans le résultat de ses calculs', isCorrect: true} , 
                    { optionText: 'Faire des blagues', isCorrect: false}, 
                    { optionText: 'Son travail sur le vaisseau', isCorrect: false}, 
                    { optionText: 'Essayer d\'avoir des interactions sociales', isCorrect: false}],
            }, {
                questionText: 'Comment l\'Enterprise rencontre-t-il les Borgs la première fois, dans Nouvelle Génération ?',
                answerOptions: [
                    { optionText: 'Ils vont trop loin dans leur exploration', isCorrect: false} , 
                    { optionText: 'A cause de Q', isCorrect: true}, 
                    { optionText: 'Ils attirent leurs attentions, en sauvant une planète', isCorrect: false}, 
                    { optionText: 'En voyageant dans le futur', isCorrect: false}],
            }, {
                questionText: 'Sur Deep Space Nine, quelle est la particularité de Odo ?',
                answerOptions: [
                    { optionText: 'C\'est le meilleur pilote du secteur', isCorrect: false} , 
                    { optionText: 'C\'est un génie', isCorrect: false}, 
                    { optionText: 'Il est amiral', isCorrect: false}, 
                    { optionText: 'C\'est un Métamorphe', isCorrect: true}],
            }, {
                questionText: 'Comment les Bajorans appellent-ils les habitants du Vortex ?',
                answerOptions: [
                    { optionText: 'Les prophètes', isCorrect: true} , 
                    { optionText: 'Les fondateurs', isCorrect: false}, 
                    { optionText: 'Les êtres divins', isCorrect: false}, 
                    { optionText: 'Les Vulcains', isCorrect: false}],
            }, {
                questionText: 'De retour sur le Voyager, après une mission, qu\'arrive-t-il à Neelix et Tuvok ?',
                answerOptions: [
                    { optionText: 'Ils tombent malades', isCorrect: false} , 
                    { optionText: 'Ils se font enlever', isCorrect: false}, 
                    { optionText: 'Ils sont téléportés dans le passé', isCorrect: false}, 
                    { optionText: 'Ils fusionnent et ne deviennent qu\'un', isCorrect: true}],
            }, {
                questionText: 'Qui s\'attaque aux êtres photoniques, quand ils visitent le Voyager ?',
                answerOptions: [
                    { optionText: 'Les Borgs', isCorrect: false} , 
                    { optionText: 'Le Docteur Chaotica', isCorrect: true}, 
                    { optionText: 'Le capitain Janeway', isCorrect: false}, 
                    { optionText: 'Les Klingons', isCorrect: false}],
            }, {
                questionText: 'Comment s\'appelle la ville Irlandaise du Holodeck ?',
                answerOptions: [
                    { optionText: 'Carrick-on-Shannon', isCorrect: false} , 
                    { optionText: 'Celbridge', isCorrect: false}, 
                    { optionText: 'Fair Haven', isCorrect: true}, 
                    { optionText: 'Midleton', isCorrect: false}],
            }, {
                questionText: 'De quelle époque vient la technologie de l\'émetteur portable du Docteur, du Voyager ?',
                answerOptions: [
                    { optionText: '21e Siècle', isCorrect: false} , 
                    { optionText: '34e Siècle', isCorrect: true}, 
                    { optionText: '18e Siècle', isCorrect: false}, 
                    { optionText: '350e Siècle', isCorrect: false}],
            }
        ]
    }, {
        id : '4',
        DataQuizz: [
            { 
            questionText: 'Pourquoi personne n\'aime Naruto au début ?',
            answerOptions: [
                { optionText: 'Parce qu\'il est orphelin', isCorrect: false} , 
                { optionText: 'Parce qu\'il ne fait que des bêtises', isCorrect: false}, 
                { optionText: 'Parce qu\'il a un démon en lui', isCorrect: true}, 
                { optionText: 'Parce qu\'il n\'est pas un ninja', isCorrect: false}],
            }, {
                questionText: 'Qui, Sasuke, cherche-t-il à tuer ?',
                answerOptions: [
                    { optionText: 'Naruto', isCorrect: false} , 
                    { optionText: 'Son frère', isCorrect: true}, 
                    { optionText: 'Le démon Renard a neuf queues', isCorrect: false}, 
                    { optionText: 'Personne', isCorrect: false}],
            }, {
                questionText: 'Que porte tout le temps Kakashi ?',
                answerOptions: [
                    { optionText: 'Un parapluie', isCorrect: false} , 
                    { optionText: 'Une arme', isCorrect: false}, 
                    { optionText: 'Des bottes', isCorrect: false}, 
                    { optionText: 'Un masque', isCorrect: true}],
            }, {
                questionText: 'Le quel de ces types d\'oeil n\'éxiste pas, dans Naruto ?',
                answerOptions: [
                    { optionText: 'Le Sharingan', isCorrect: false} , 
                    { optionText: 'Le Rinnegan', isCorrect: false}, 
                    { optionText: 'Le Rasengan', isCorrect: true}, 
                    { optionText: 'Le Byakugan', isCorrect: false}],
            }, {
                questionText: 'Que permet de faire le Taijutsu ?',
                answerOptions: [
                    { optionText: 'De créer de puissante illusion', isCorrect: false} , 
                    { optionText: 'De combattre au corps à corps', isCorrect: true}, 
                    { optionText: 'De controler son chakra', isCorrect: false}, 
                    { optionText: 'De préparer des rãmens', isCorrect: false}],
            }, {
                questionText: 'Comment s\'appelle la petite amie de Naruto ?',
                answerOptions: [
                    { optionText: 'Sakura', isCorrect: false} , 
                    { optionText: 'Ino', isCorrect: false}, 
                    { optionText: 'Il n\'en a pas', isCorrect: false}, 
                    { optionText: 'Hinata', isCorrect: true}],
            }, {
                questionText: 'Quelle est la spécialité de Naruto ?',
                answerOptions: [
                    { optionText: 'Le multi-clonage', isCorrect: true}, 
                    { optionText: 'Le chidori', isCorrect: false}, 
                    { optionText: 'Abandonner', isCorrect: false}, 
                    { optionText: 'La stratègie', isCorrect: false}],
            }, {
                questionText: 'Combien de Pain attaque Konoha ?',
                answerOptions: [
                    { optionText: '1', isCorrect: false} , 
                    { optionText: '5', isCorrect: false}, 
                    { optionText: '6', isCorrect: true}, 
                    { optionText: '7', isCorrect: false}],
            }, {
                questionText: 'Quel type d\'animal, Orochimaru, réprésente-il ?',
                answerOptions: [
                    { optionText: 'Les grenouilles', isCorrect: false} , 
                    { optionText: 'Les serpents', isCorrect: true}, 
                    { optionText: 'Les chats', isCorrect: false}, 
                    { optionText: 'Les dragons', isCorrect: false}],
            }, {
                questionText: 'Quel est le hobby de Jiraya ?',
                answerOptions: [
                    { optionText: 'Il s\'entraine pour un marathon', isCorrect: false} , 
                    { optionText: 'Il réalise des combats de chien', isCorrect: false}, 
                    { optionText: 'Il peint', isCorrect: false}, 
                    { optionText: 'Il écrit des livres érotiques', isCorrect: true}],
            }
        ]
    },
]

const Quizz = () => {

    const id = useParams();

    const idUsed = BigData.filter(item => item.id === id.slug)
    const index = idUsed[0].id - 1

    return ( 
        <section id="quizz">

            <NavBar 
                title={"Logo"}
                image={Logo}
            />

            <InterfaceQuizz 
                dataBase={BigData[index].DataQuizz}
                name={DataQuizzs[index].name}
                theme={DataQuizzs[index].theme}
                level={DataQuizzs[index].level}
                id={DataQuizzs[index].id}
            />
            
        </section>
    );
}
 
export default Quizz;