// import components
import NavBar from "../Components/NavBar";
import Cartouche from "../Components/HomeCompo/Cartouche";

// import scss
import "../Sass/components/_home.scss";

//import elements
import Logo from "../img/logo/logo.svg"

const Home = () => {
    return ( 
        <section id="home">

            <NavBar 
                title={"Logo"}
                image={Logo}
            />

            <Cartouche
                firstname={"Sébastien"}
                lastname={"COUCHARD"}
                promotion={"A3 ini IIM Dev Web"}
            />

        </section>
     );
}
 
export default Home;