import { PureComponent } from 'react'
import CandlestickChart from '@components/chart/index'
import FormChart from '@components/chartForm/index'
import Observable from '@utils/observable'

import * as global from '@styles/global.module.scss'

type Props = NonNullable<unknown>

class ChartSection extends PureComponent<Props> {
    private observable: Observable

    constructor(props: Props) {
        super(props)
        this.observable = new Observable()
    }

    render() {
        return (
            <div className={global.container}>
                <CandlestickChart observable={this.observable} />
                <FormChart observable={this.observable} />
            </div>
        )
    }
}
export default ChartSection
