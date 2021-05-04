import React from 'react'
import GithubIcon from './GithubIcon';
import FacebookIcon from './FacebookIcon';

import styles from '../Footer/styles.module.scss'
import InstagramIcon from './InstagramIcon';

export default function Footer() {
    return(
        <div className={styles.footer}>
            <a href="https://www.facebook.com/henrique.holtz.7" target="_blank" rel="noreferrer">
                <FacebookIcon width={32} height={32} className={styles.facebookIcon} />
            </a>
            <a href="https://www.instagram.com/henrique_holtz/" target="_blank" rel="noreferrer">
                <InstagramIcon width={32} height={32} className={styles.instagramIcon} />
            </a>
            <a href="https://github.com/henriqueholtz" target="_blank" rel="noreferrer">
                <GithubIcon width={50} height={50} className={styles.githubIcon} />
            </a>
        </div>
    )
}