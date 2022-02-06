//import scss
import "../../Sass/components/projectsCompo/_bodyProject.scss";


const BodyProject = ({name, desc, images, url}) => {
    return ( 
        <section id="bodyProject">

            <h2>{name}</h2>

            <p>{desc}</p>

            <p className="url">
                <a href={url}>Lien vers {name}</a>
            </p>

            <img src={images} alt={name}/>

        </section>
     );
}

export default BodyProject;