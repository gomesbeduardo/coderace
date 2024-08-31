import { Fragment, useEffect, useState } from "react";
import styles from "./Pages.module.css";
import {Play, Pause} from "@phosphor-icons/react"
import api from "../config/api";

export function Pages() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        loadBooks();
    }, []);

    async function loadBooks() {
        try {
            const response = await api.get("/livros/");
            
            setBooks(response.data);
        } catch (error) {
            console.error("Erro ao carregar livros:", error);
        }
    }
    return (
        <div id="Pages">
            {books.length > 0 ? (
                books.map((book) => (
                    book.capitulo.map(capitul => (
                        <Fragment>
                    <div className={styles.Chapters}>
                        <h3>{capitul.titulo}</h3>
                    </div>
    
                    <div className={styles.linkContainer}>
                                <div className={styles.PagesContainer}>
                                    <a href="#" className={styles.Start}><Play size={72} /></a>
                                    <a href="#" className={styles.End}><Pause size={72} /></a>
                                </div>
                            </div>
    
                    <div className={styles.container}>
                                <div id="Text">
                                    <p>{capitul.conteudo}</p>
                                </div>
                    </div>
                </Fragment>
                    ))
                ))
            ): (
                <p>Loading...</p>
            )}
        </div>
    );
}