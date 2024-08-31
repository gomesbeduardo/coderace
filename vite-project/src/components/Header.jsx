import React from 'react';
import styles from "./Header.module.css";
import { HouseSimple, Books, User } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import LittlePrince from "../assets/images/Logo2-removebg-preview.png";

export function Header() {
  return (
    <header className={styles.Header}>
      <img src={LittlePrince} alt="Logotipo" />
      <strong>Universo Estrelado</strong>
      <Link to="/" className={styles.button}>
        <HouseSimple size={32} weight="fill" alt="Inicial" />
      </Link>
      <Link to="/livros" className={styles.button}>
        <Books size={32} />
      </Link>
      <Link to="/perfil" className={styles.Perfil}>
        <User size={32} />
      </Link>
    </header>
  );
}