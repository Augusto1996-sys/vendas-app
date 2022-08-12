import { useState } from "react";
import { Layout, Input } from "components";

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
      nome,
    };
    console.log(produto);
  };
  return (
    <Layout titulo="Cadastro de Produto">
      <div className="columns">
        <Input
          onChange={setSku}
          label="SKU: *"
          columnsClasses="is-half"
          value={sku}
          id="inputSku"
          placeholder="Digita o SKU do Produto"
        />

        <Input
          onChange={setPreco}
          label="Preço: *"
          columnsClasses="is-one-quarter"
          value={preco}
          id="inputPreco"
          placeholder="Digita o Preço do Produto"          
          type="number"
        />
      </div>

      <div className="columns">
      <Input
          onChange={setNome}
          label="Nome: *"
          columnsClasses="is-full"
          value={nome}
          id="inputNome"
          placeholder="Digita o Nome do Produto"
        />
      </div>

      <div className="columns">
        <div className="field column is-full">
          <label className="label" htmlFor="inputDesc">
            Descrição: *
          </label>
          <div className="control">
            <textarea
              value={desc}
              onChange={(event) => {
                setDesc(event.target.value);
              }}
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
          <button className="button is-link" onClick={submit}>
            Salvar
          </button>
        </div>
      </div>
    </Layout>
  );
};
