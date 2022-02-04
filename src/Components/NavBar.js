//import
import { Link } from "react-router-dom";

//import scss
import "../Sass/components/_navbar.scss";


const NavBar = ({title, image}) => {
    return ( 
        <section id="navBar">
            
            <img src={image} alt={title} className="logo"/>
            
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/projects">Mes projets</Link>
                </li>

                <li>
                    <Link to="/cv">Mon CV</Link>
                </li>
            </ul>
        </section>
     );
}

export default NavBar;