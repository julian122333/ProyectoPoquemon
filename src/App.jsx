
import './styles/App.css';
import caballero from './media/caballero.png';
import duraludon from './media/duraludon.png';
import eternatus from './media/eternatus.png';
import zamazenta from './media/zamazenta.png';


function App() {
  return (
    <div className="App">
    <header >
        <ul className="navbar">
        <li><img src={caballero}  className="logo"  alt="imagen"/> </li>
        <li> <button className="button mainbutton ">iniciar sesion</button> </li>
        <li>
            <div className="buscar">
            <input placeholder="Buscar"/>
            <i className=" button icono fas fa-search"></i>
            </div>
            
        </li>
        <li><button className="button secondarybutton "> Registrar </button></li>
        <li><button className="button mainbutton "> Newpost </button></li>
        </ul>


    </header>
    <main>
        <section>
            <h1>Poquemones </h1>
            <ul className='contenedorcartas' >
                <li className="carta"> 
                <div className="contenedorimagen">
                    <img src={zamazenta}   alt="zamazenta"/> 
                </div>
                <span className="titulocarta">
                    zamazenta

                </span>
                
                </li>
                <li  className="carta">
                <div className="contenedorimagen">
                    <img src={eternatus}    alt="eternatus"/> 
                </div>
                <span className="titulocarta">Eternatus</span>
                
                </li>
                <li className="carta">
                <div className="contenedorimagen">
                    <img src={duraludon}    alt="duraludon"/> 
                </div>
                <span className="titulocarta">Duraludon</span>
                </li>

            </ul>
        </section>
        <section>

        </section>
    </main>
    <footer>
        <cardPoquemones/>
        <cardPoquemones/>
        <cardPoquemones/>
    </footer>
    </div>
  );
}
function cardPoquemones(){
    return(
        <li className="carta"> 
        <div className="contenedorimagen">
            <img src={zamazenta}   alt="zamazenta"/> 
        </div>
        <span className="titulocarta">
            zamazenta

        </span>
        </li>
    );
}

export default App;
