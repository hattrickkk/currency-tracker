import { PureComponent } from 'react'
import { CandleStickChartData } from '@customTypes/chart'
import INIT_CANDLESTICK_CHART_VALUES from '@mockData/initCandlestickChart'
import Button from '@ui/button'
import InputsGroup from '@ui/inputsGroup'
import Observable from '@utils/observable'

import * as styles from './style.module.scss'

type Props = {
    observable: Observable
}

type State = {
    disabled: boolean
    inputs: CandleStickChartData[]
    current: CandleStickChartData
}

class FormChart extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            inputs: [],
            disabled: false,
            current: INIT_CANDLESTICK_CHART_VALUES,
        }
    }

    notifyAllAfterSetState = () => () => this.props.observable.notifyAll(this.state.inputs)

    changeCurrentExchange = (exchange: CandleStickChartData) => this.setState({ current: exchange })

    removeAllExchanges = () => {
        this.setState({ disabled: false })
        this.setState({ inputs: [] }, this.notifyAllAfterSetState())
    }

    removeExchangeByID = (removeID: string) => {
        this.setState(
            ({ inputs }) => ({
                inputs: inputs.filter(({ id }) => removeID !== id),
            }),
            this.notifyAllAfterSetState()
        )
    }

    addNewClickHandler = () => {
        this.setState(({ inputs, current }) => {
            const newExchange =
                current.id === '' || inputs.map(el => el.id).includes(current.id)
                    ? { ...current, id: new Date().toString() }
                    : current
            return { inputs: [...inputs, newExchange] }
        }, this.notifyAllAfterSetState())

        if (this.state.inputs.length >= 7) {
            this.setState({ disabled: true })
        }
    }

    render() {
        const { inputs, disabled } = this.state
        return (
            <div className={styles.form}>
                <div className={styles.wrapper}>
                    {inputs.length !== 0 &&
                        inputs.map(el => (
                            <InputsGroup values={el} disabled key={el.id} removeExchange={this.removeExchangeByID} />
                        ))}
                    <InputsGroup changeCurrentExchange={this.changeCurrentExchange} first />
                </div>
                <div className={styles.buttons}>
                    {inputs.length >= 1 && <Button value='Remove all' secondary onClick={this.removeAllExchanges} />}
                    <Button value='Add' disabled={disabled} onClick={this.addNewClickHandler} />
                </div>
            </div>
        )
    }
}

export default FormChart
