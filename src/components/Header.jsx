import styles from "./Header.module.css";
import {HouseSimple,Books,User} from "@phosphor-icons/react"

import LittlePrince from "../assets/images/Logo2-removebg-preview.png";

export function Header() {
  return (
    <header className={styles.Header}>
      <img src={LittlePrince} alt="Logotipo" />
      <strong>Universo Estrelado</strong>
      <a href="" id="PaginaInicial" className={styles.button}><HouseSimple size={32} weight="fill" alt="Inicial"/></a>
      <a href="" id="livros" className={styles.button}> <Books size={32} /></a>
      <div id="Perfil" className={styles.Perfil}>
        <a href="" id="Perfil" className={styles.perfil}><User size={32} /> </a>
      </div>
    </header>
  );
}