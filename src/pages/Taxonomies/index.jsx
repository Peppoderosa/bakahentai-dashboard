import React from "react";
//components
import MainInput from "../../components/Input";
import TitlePage from "../../components/TitlePage";
import * as ComboBox from "../../components/ComboBox";
import Badge from "../../components/Badge";
import GridPainel from "../../components/GridPainel";

import ModalSucess from "../../components/ModalSucess";
//css
import "./styles.scss";

function Taxonomies() {
  const [type, setType] = React.useState("");
  const [order, setOrder] = React.useState("");

  const genders_temp = [
    {
      id: 1,
      name: "Incesto",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 2,
      name: "Escolar",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 3,
      name: "Estupro",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 4,
      name: "Traição",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 5,
      name: "Peitões",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 6,
      name: "Milf",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 7,
      name: "Colegial",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 8,
      name: "Stockings",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 9,
      name: "Anal",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 10,
      name: "Futanari",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 11,
      name: "Professora",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 12,
      name: "Romance",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 13,
      name: "Professor",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 14,
      name: "Empregadas",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 15,
      name: "Paizuri",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 16,
      name: "Footjob",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 17,
      name: "Harém",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 18,
      name: "Ahegao",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 19,
      name: "Yuri",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 20,
      name: "Dark Skin",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 21,
      name: "Loli",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 22,
      name: "Bondage",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 23,
      name: "Shotacon",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 1,
      name: "Incesto",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 2,
      name: "Escolar",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 3,
      name: "Estupro",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 4,
      name: "Traição",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 5,
      name: "Peitões",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 6,
      name: "Milf",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 7,
      name: "Colegial",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 8,
      name: "Stockings",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 9,
      name: "Anal",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 10,
      name: "Futanari",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 11,
      name: "Professora",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 12,
      name: "Romance",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 13,
      name: "Professor",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 14,
      name: "Empregadas",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 15,
      name: "Paizuri",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 16,
      name: "Footjob",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 17,
      name: "Harém",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 18,
      name: "Ahegao",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 19,
      name: "Yuri",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 20,
      name: "Dark Skin",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 21,
      name: "Loli",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 22,
      name: "Bondage",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
    {
      id: 23,
      name: "Shotacon",
      created_at: "2020-07-11T12:34:34.000000Z",
      updated_at: "2020-07-11T12:34:34.000000Z",
    },
  ];
  const tags_arr = Object.values(genders_temp);

  return (
    <section className="page-container ">
      <TitlePage text="Taxonomias" />
      <section className="taxonomies">
        <article className="filter-tag-container">
          <MainInput label="Cadastrar nova Taxonomia" />
          <article className="input-and-button">
            <ComboBox.ComboSelect
              onChange={setType}
              value={type}
              placeholder="Tipo"
              data={["Anos Lançados", "Estúdios", "Gêneros", "Qualidade"]}
            ></ComboBox.ComboSelect>
            <button>Adicionar</button>
          </article>
        </article>
        <hr />
        <article className="classifier">
          <p>
            Para <strong>Editar</strong> ou <strong>Excluir </strong>
            alguma taxonomia basta clicar nela
          </p>
          <div>
            <p>
              Ordem <strong>*</strong>
            </p>
            <ComboBox.ComboSelect
              onChange={setOrder}
              value={order}
              placeholder="Ordem"
              data={[
                "Alfabética",
                "Postagem",
                "Lançamento",
                "Maior nota",
                "Mais fapados",
              ]}
              defaultValue="Alfabética"
            ></ComboBox.ComboSelect>
          </div>
        </article>
        <article className="grid-gender">
          <GridPainel data={tags_arr} title="Gêneros" />
          <GridPainel data={tags_arr} title="Qualidades" />
        </article>
        <article className="grid-gender">
          <GridPainel data={tags_arr} title="Anos Lançados" />
          <GridPainel data={tags_arr} title="Estúdios" />
        </article>
      </section>
    </section>
  );
}

export default Taxonomies;
