import React from 'react'
import CONTACTS from '@constants/contacts'
import Title from '@ui/title'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

function ContactsSeation() {
    return (
        <section className={styles.section}>
            <div className={global.container}>
                <Title value='Contact Us' />

                <nav>
                    <ul className={styles.menu}>
                        {CONTACTS.map(({ name, img }) => (
                            <li className={styles.item} key={name}>
                                <img src={img} alt={name} />
                                <span>{name}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
                <p className={styles.text}>
                    We are here to help and answer any questions you might have. We look forward to hearing from you!
                </p>
            </div>
        </section>
    )
}

export default ContactsSeation
