import React from 'react'
import PropsType from 'prop-types'

import * as styles from '@ui/title/style.module.scss'

type PropsType = {
    value: string
}

function Title({ value }: PropsType) {
    return <h3 className={styles.title}>{value}</h3>
}

Title.propsType = {
    value: PropsType.string.isRequired,
}

export default React.memo(Title)
