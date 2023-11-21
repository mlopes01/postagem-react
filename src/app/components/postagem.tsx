import "./postagem.css";
import { useState } from 'react'
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export interface PostagemProps {
  id?: string;
  nome: string;
  lugar: string;
  lugarURL: string;
  curtido: boolean;
}

export function Postagem(props: PostagemProps) {

  const [heart, setHeart] = useState(<FontAwesomeIcon icon={faHeart} style={{ color: "#fd0808", }} />)

  function handleHeart() {
    setHeart(<FontAwesomeIcon icon={faHeart} beat style={{ color: "#fd0808", }} />)

  }

  useEffect(() => {
    const tempoSaida = setTimeout(setHeart, 1000)
    return () => clearTimeout(tempoSaida)
  }, [<FontAwesomeIcon icon={faHeart} style={{ color: "#fd0808", }} />])

  return (
    <div className="container-postagem">
      <div className="postagem-header">
        <div className="avatar-container">
          <img
            src={"https://www.w3schools.com/howto/img_avatar.png"}
            width="100%"
          />
        </div>

        <div className="header-info">
          <span>{props.nome}</span>
          <span>{props.lugar}</span>
        </div>
      </div>

      <div className="container-img">
        <img src={props.lugarURL} width="100%" />
      </div>

      <div className="postagem-footer" >
        <div onClick={handleHeart}>{heart ? heart : <FontAwesomeIcon icon={faHeart} style={{ color: "#615f5f", }} />}</div>

      </div>
    </div>
  );
}
