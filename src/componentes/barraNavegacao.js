import React, { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

export default function BarraNavegacao(props) {
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }, []);

    const gerarListaBotoes = () => {
        if (!props.botoes || props.botoes.length === 0) return null;

        return props.botoes.map(valor => (
            <li key={valor}>
                <a onClick={(e) => props.seletorView(valor, e)}>{valor}</a>
            </li>
        ));
    };

    return (
        <>
            <nav className={props.tema}>
                <div className="nav-wrapper">
                    <a className="brand-logo" style={{ marginLeft: '20px' }}>WB</a>
                    <a data-target="mobile-menu" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    );
}
