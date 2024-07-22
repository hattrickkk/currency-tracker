import React from 'react'

import * as styles from '@ui/title/style.module.scss'

type Props = {
    value: string
}

function Title({ value }: Props) {
    return <h3 className={styles.title}>{value}</h3>
}

export default React.memo(Title)
