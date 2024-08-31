import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Pages.module.css';
import { Play, Pause } from '@phosphor-icons/react';



export function Pages() {
    return (
        <div id="Pages">
            <div className={styles.Chapters}>
                <h3>Capítulo 1</h3>
            </div>

            <div className={styles.linkContainer}>
                <div className={styles.PagesContainer}>
                    <Link to="/videopage" className={styles.Start}>
                        <Play size={72} />
                    </Link>
                    <Link to="#" className={styles.End}>
                        <Pause size={72} />
                    </Link>
                </div>
            </div>

            <div className={styles.container}>
                <div id="Text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad dolorem officiis provident</p>
                    <p>id exercitationem consequatur quam rem sapiente repellat totam quod maxime</p>
                    <p>non qui excepturi optio adipisci, architecto aut.</p>
                </div>
            </div>
        </div>
    );
}