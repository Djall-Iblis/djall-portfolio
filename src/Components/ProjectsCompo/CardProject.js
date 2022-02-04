//import scss
import "../../Sass/components/projectsCompo/_cardProject.scss";


const CardProject = ({name, desc, url, images}) => {
    return ( 
        <section id="cardProject">
            
            <h2>{name}</h2>

            <p>{desc}</p>

            <a className="url" href={url}>{url}</a>

            <br />

            <img src={images} alt={name}/>

        </section>
     );
}

export default CardProject;