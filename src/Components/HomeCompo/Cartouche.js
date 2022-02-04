//import scss
import "../../Sass/components/homeCompo/_cartouche.scss";


const Cartouche = ({firstname, lastname, promotion}) => {
    return ( 
        <section id="cartouche">
            
            <h2>{firstname} {lastname}</h2>
            <h2>{promotion}</h2>

        </section>
     );
}

export default Cartouche;