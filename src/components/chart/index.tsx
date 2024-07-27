import { PureComponent } from 'react'
import { Chart as ReactChart } from 'react-chartjs-2'
import CHART_OPTIONS from '@constants/chartOptions'
import { CHART_TYPE } from '@constants/magicValues'
import { CandleStickChartData, ChartData, DataForChart } from '@customTypes/chart'
import EXCHANGE_ARR from '@mockData/exchanges'
import notify from '@utils/notify'
import Observable, { Observer } from '@utils/observable'
import { Chart, registerables } from 'chart.js'
import * as Financial from 'chartjs-chart-financial'

import * as styles from './style.module.scss'

import 'chartjs-adapter-date-fns'

Chart.register(...registerables, { ...Financial })

type Props = {
    observable: Observable
}
type State = ChartData

class CandlestickChart extends PureComponent<Props, State> implements Observer {
    constructor(props: Props) {
        super(props)
        this.state = {
            datasets: [
                {
                    data: EXCHANGE_ARR.map(el => {
                        return {
                            ...el,
                            x: new Date(el.x),
                        } as DataForChart
                    }),
                },
            ],
        }
    }

    componentDidMount() {
        this.props.observable.addObserver(this)
    }

    componentWillUnmount(): void {
        this.props.observable.removeObserver(this)
    }

    update(data: CandleStickChartData[], count: number) {
        this.setState({
            datasets: [
                {
                    data: data.map(el => {
                        return {
                            ...el,
                            x: new Date(el.x),
                        } as DataForChart
                    }),
                },
            ],
        })

        if (count) notify(count)
    }

    render() {
        return (
            <div className={styles.chart}>
                <div className={styles.wrapper}>
                    <ReactChart type={CHART_TYPE} data={this.state} options={CHART_OPTIONS} />
                </div>
            </div>
        )
    }
}

export default CandlestickChart
