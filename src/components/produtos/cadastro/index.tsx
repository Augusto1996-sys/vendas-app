import { useState } from "react";
import { Layout } from "components";

export const CadastroProdutos: React.FC = () => {
  const [sku, setSku] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [desc, setDesc] = useState<string>("");



  const submit = () => {
    const produto = {
      sku,
      preco,
      desc,
      nome
    }
    console.log(produto)
  }
  return (
    <Layout titulo="Cadastro de Produto">
      <div className="columns">
        <div className="field column is-half">
          <label className="label" htmlFor="inputSku">
            SKU: *
          </label>
          <div className="control">
            <input
              value={sku}
              onChange={(event) =>{setSku(event.target.value)}}
              id="inputSku"
              className="input"
              placeholder="Digita o SKU do Produto"
            />
          </div>
        </div>
        <div className="field column is-one-quarter">
          <label className="label" htmlFor="inputPreco">
            Preço: *
          </label>
          <div className="control">
            <input
              type="number"
              value={preco}
              onChange={(event) =>{setPreco(event.target.value)}}
              id="inputPreco"
              className="input"
              placeholder="Digita o Preço do Produto"
            />
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="field column is-full">
          <label className="label" htmlFor="inputNome">
            Nome: *
          </label>
          <div className="control">
            <input
              type="text"
              value={nome}
              onChange={(event) =>{setNome(event.target.value)}}
              id="inputNome"
              className="input"
              placeholder="Digita o Nome do Produto"
            />
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="field column is-full">
          <label className="label" htmlFor="inputDesc">
            Descrição: *
          </label>
          <div className="control">
            <textarea
              
              value={desc}
              onChange={(event) =>{setDesc(event.target.value)}}
              id="inputDesc"
              className="textarea"
              placeholder="Digita a Descrição do Produto"
            />
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-danger">Voltar</button>
        </div>
        <div className="control">
          <button className="button is-link" onClick={submit}>Salvar</button>
        </div>
      </div>
    </Layout>
  );
};
