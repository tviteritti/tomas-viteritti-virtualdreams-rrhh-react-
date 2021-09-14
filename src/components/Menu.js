import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacto from "../pages/Contacto";
import Servicio from "../pages/Servicio";
import QuienesSomos from "../pages/QuienesSomos";
import Busqueda from "../pages/Busqueda";


const Menu = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/servicio" component={Servicio}/>
                    <Route exact path="/quienes-somos" component={QuienesSomos}/>
                    <Route exact path="/busqueda" component={Busqueda}/>
                    <Route exact path="/contacto" component={Contacto}/>
                    <Route exact path="/" component={Contacto}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Menu
