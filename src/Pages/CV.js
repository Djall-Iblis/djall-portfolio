// import components
import NavBar from "../Components/NavBar"
import CvHeader from "../Components/CvCompo/CvHeader"
import CvPresentation from "../Components/CvCompo/CvPresentation"
import CvExperiences from "../Components/CvCompo/CvExperiences"
import CvFormation from "../Components/CvCompo/CvFormation"
import CvSkills from "../Components/CvCompo/CvSkills"
import CvCertifications from "../Components/CvCompo/CvCertifications"

// import scss
import "../Sass/components/_cv.scss";

// import elements
import Logo from "../img/logo/logo.svg"
import myPhoto from "../img/photo/photo.png"

// declaration variables
const DataExperiences = [{
    job: 'Agent de production',
    entreprise: 'Lisi Aerospace',
    time: '15 mois',
    missions: [' - Production de vis', ' - Chargé des tests de résistance'],
}, {
    job: 'Responsable de rayon',
    entreprise: 'Castorama',
    time: '7 mois',
    missions: [' - Entretien du rayon', ' - Aide aux clients'],
}, {
    job: 'Developpeur Web',
    entreprise: 'Haiti73',
    time: '2 mois',
    missions: [' - Intégration de maquette', ' - Conseil sur le web'],
},
]

const DataFormation = [{
    school: 'Jean Perrin',
    years: '2011/2014',
    specialisation: 'Electrotechnique',
}, {
    school: 'Institut de l\'internet et du multimedia',
    years: '2019/2022',
    specialisation: 'Dev Web',
},
]

const DataSkills = [{
    name: 'Javascript',
    level: 'Bonne base',
}, {
    name: 'Html',
    level: 'Bon niveau',
}, {
    name: 'Css',
    level: 'Bon niveau',
}, {
    name: 'C#',
    level: 'Bon niveau',
}, {
    name: 'Php',
    level: 'Niveau moyen',
}, {
    name: 'Swift',
    level: 'Bon niveau',
},
]

const DataCertifications = [{
    name: 'Brevet des collèges',
    years: '2008',
}, {
    name: 'BEP',
    years: '2013',
}, {
    name: 'Bac professionel',
    years: '2014',
},
]


const CV = () => {
    return ( 
        <section id="cv">

            <NavBar 
                title={"Logo"}
                image={Logo}
            />

            <CvHeader
                photo={myPhoto}
                firstname={"Sébastien"}
                lastname={"Couchard"}
                adress={"21 avenue du Tigre 95700 Paris"}
                telephone={".06 .07 .14 .21 .42"}
                email={"tigre21@gmail.com"}
            />

            <hr className="next"></hr>

            <h3 className="titleSection">Présentation</h3>

            <CvPresentation
                desc={'Dans un premier temps j\'ai suivi une formation en Electrotechnique, au lycée Jean Perrin, par la suite j\' optais pour une reconvertion dans le developpement web. Je suis dynamique et curieux, je cherche à devenir meilleur jour après jour. Malgré une petite timidité, je suis sympathique et m\'intégre très bien dans une équipe.'}
            />

            <hr className="next"></hr>

            <h3 className="titleSection">Experiences</h3>

            {
                DataExperiences.map((data, index) => (
                    <div key={index} className="cardExp">
                        <CvExperiences
                            job={data.job}
                            entreprise={data.entreprise}
                            time={data.time}
                            missions={data.missions}
                        />
                    </div>
                ))
            }

            <hr className="next"></hr>

            <h3 className="titleSection">Formations</h3>

            {
                DataFormation.map((data, index) => (
                    <div key={index} className="cardExp">
                        <CvFormation
                            school={data.school}
                            years={data.years}
                            specialisation={data.specialisation}
                        />
                    </div>
                ))
            }

            <hr className="next"></hr>

            <h3 className="titleSection">Compétences</h3>

            {
                DataSkills.map((data, index) => (
                    <div key={index} className="cardSkills">
                        <CvSkills
                            name={data.name}
                            level={data.level}
                        />
                    </div>
                ))
            }

            <hr className="next"></hr>

            <h3 className="titleSection">Diplômes</h3>

            {
                DataCertifications.map((data, index) => (
                    <div key={index} className="cardCertifs">
                        <CvCertifications
                            name={data.name}
                            years={data.years}
                        />
                    </div>
                ))
            }
            
        </section>
     );
}
 
export default CV;