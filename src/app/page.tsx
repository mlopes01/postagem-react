"use client"

import { Postagem, PostagemProps } from "./components/postagem";

const postagens: PostagemProps[] = [
  {
    id: crypto.randomUUID(),
    nome: "Marcelo",
    lugar: "Rio de Janeiro",
    lugarURL:
      "https://www.vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg",
    curtido: false,
  },
  {
    id: crypto.randomUUID(),
    nome: "Maria Eduarda",
    lugar: "Londres",
    lugarURL:
      "https://www.vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg",
    curtido: false,
  },
  {
    id: crypto.randomUUID(),
    nome: "Marcelo",
    lugar: "São Paulo",
    lugarURL:
      "https://www.vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg",
    curtido: false,
  },
  {
    id: crypto.randomUUID(),
    nome: "Jocelino",
    lugar: "Pará",
    lugarURL:
      "https://www.vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg",
    curtido: false,
  },
  {
    id: crypto.randomUUID(),
    nome: "Nemesio",
    lugar: "João Pessoa",
    lugarURL:
      "https://www.vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg",
    curtido: false,
  },
];

export default function Home() {

  return (
    <main>
      {postagens.map((item) => (
        <Postagem
          key={item.id}
          lugar={item.lugar}
          nome={item.nome}
          lugarURL={item.lugarURL}
          curtido={item.curtido}
        />
      ))}
    </main>
  );
}
