import { PureComponent } from 'react'
import CandlestickChart from '@components/chart/index'
import FormChart from '@components/chartForm/index'
import NotificationModal from '@components/notificationModal'
import NotificationModalContextProvider from '@components/notificationModalContextProvider'
import Observable from '@utils/observable'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

type Props = NonNullable<unknown>

class ChartSection extends PureComponent<Props> {
    private observable: Observable

    constructor(props: Props) {
        super(props)
        this.observable = new Observable()
    }

    render() {
        return (
            <NotificationModalContextProvider>
                <section className={styles.chartSection}>
                    <div className={global.container}>
                        <CandlestickChart observable={this.observable} />
                        <FormChart observable={this.observable} />
                        <NotificationModal />
                    </div>
                </section>
            </NotificationModalContextProvider>
        )
    }
}
export default ChartSection
