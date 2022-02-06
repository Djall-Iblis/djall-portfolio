//import scss
import "../../Sass/components/projectsCompo/_cardProject.scss";


const CardProject = ({name, desc, images}) => {
    return ( 
        <section id="cardProject">

            <h2>{name}</h2>

            <p>{desc}</p>

            <img src={images} alt={name}/>

        </section>
     );
}

export default CardProject;