import { useState } from 'react';
import '../Styles/contador.css'

function Contador() {

const [valor, setValor] = useState(0);

function incremento() {
    setValor(valorNovo => (valorNovo + 1))
}

function decremento() {
    setValor(valorNovo => (valorNovo - 1))
}
    return(
        <>
        <header className="colors">
        <div className="contador">
            <h2
            >Contador</h2>
            <p>{valor}</p>
            <div className="buttons">
            <button 
                className="btn-contador" 
                type="button" 
                onClick={ incremento }
            >+</button>
            <button 
                className="btn-contador" 
                type="button"
                onClick={ decremento }
            >-</button>
            </div>
        </div>
        </header>
        </>
    );
}

export default Contador;