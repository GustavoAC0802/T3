import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import AtualizarClienteForm from "./AtualizarClienteForm";
import AtualizarItemForm from "./AtualizarItemForm";

export default function AtualizarClientes(props) {
    const [pagina, setPagina] = useState('menu');
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`;

    const trocarPagina = (novaPagina) => {
        setPagina(novaPagina);
    };

    if (pagina === 'menu') {
        return (
            <div className="container">
                <div className={`card-panel ${props.tema} white-text`}>
                    <h5 className="center-align">Escolha o que deseja atualizar:</h5>
                </div>

                <div className="row">
                    <div className="col s12 m6 offset-m3 center-align">
                        <button className={estiloBotao} onClick={() => trocarPagina('cliente')}>
                            Atualizar Cliente
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m6 offset-m3 center-align">
                        <button className={estiloBotao} onClick={() => trocarPagina('item')}>
                            Atualizar Produto/Serviço
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (pagina === 'cliente') {
        return (
            <>
                <div className="row">
                    <div className="col s12 m3 offset-m1">
                        <button className="btn grey" onClick={() => trocarPagina('menu')}>
                            Voltar
                        </button>
                    </div>
                </div>
                <div className="container">
                    <AtualizarClienteForm tema={props.tema} />
                </div>
            </>
        );
    }

    if (pagina === 'item') {
        return (
            <>
                <div className="row">
                    <div className="col s12 m3 offset-m1">
                        <button className="btn grey" onClick={() => trocarPagina('menu')}>
                            Voltar
                        </button>
                    </div>
                </div>
                <div className="container">
                    <AtualizarItemForm tema={props.tema} />
                </div>
            </>
        );
    }

    return null;
}
