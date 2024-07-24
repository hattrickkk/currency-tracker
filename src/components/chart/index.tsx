import { PureComponent } from 'react'
import { Chart as ReactChart } from 'react-chartjs-2'
import CHART_OPTIONS from '@constants/chartOptions'
import { CHART_TYPE } from '@constants/magicValues'
import { CandleStickChartData, ChartData, DataForChart } from '@customTypes/chart'
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
                    data: [],
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

    update(data: CandleStickChartData[]) {
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
