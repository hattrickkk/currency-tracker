import React from 'react'
import { Link } from 'react-router-dom'
import * as paths from '@constants/paths'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

function NotFoundPage() {
    return (
        <div className={styles.wrapper}>
            <div className={global.container}>
                <h1>404</h1>
                <h2 className={styles.title}>Page not found</h2>
                <span className={styles.text}>
                    You may have followed the wrong link. <Link to={paths.HOME}>Click here to back to home page</Link>
                </span>
            </div>
        </div>
    )
}

export default React.memo(NotFoundPage)
