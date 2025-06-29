import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaClientes";
import AtualizarClientes from "./AtualizarCliente";
import VisualizarItens from "./ProdutoServico";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes');
    const temaGlobal = "purple darken-3";

    const selecionarView = (novaTela, evento) => {
        evento.preventDefault();
        console.log(novaTela);
        setTela(novaTela);
    };

    const barraNavegacao = (
        <BarraNavegacao
            seletorView={selecionarView}
            tema={temaGlobal}
            botoes={['Clientes', 'Produtos e Serviços', 'Cadastrar', 'Atualizar']}
        />
    );

    return (
        <>
            {barraNavegacao}
            {tela === 'Clientes' && <ListaCliente tema={temaGlobal} />}
            {tela === 'Cadastrar' && <FormularioCadastroCliente tema={temaGlobal} />}
            {tela === 'Atualizar' && <AtualizarClientes tema={temaGlobal} />}
            {tela === 'Produtos e Serviços' && <VisualizarItens tema={temaGlobal} />}
            {!(["Clientes", "Cadastrar", "Atualizar", "Produtos e Serviços"].includes(tela)) && (
                <div className="container">
                    <h5>Página não encontrada :(</h5>
                </div>
            )}
        </>
    );
}
