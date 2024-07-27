import { PureComponent } from 'react'
import seacrh from '@assets/search.svg'
import Input from '@ui/input'

import * as global from '@styles/global.module.scss'
import * as styles from './styles.module.scss'

class Search extends PureComponent {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={global.container}>
                    <p className={styles.text}>Search currency in the bank</p>
                    <div className={styles.search}>
                        <img className={styles.icon} src={seacrh} alt='search-icon' />
                        <Input id='search-id' value='' placeholder='Currency search...' maxLength={10} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search

