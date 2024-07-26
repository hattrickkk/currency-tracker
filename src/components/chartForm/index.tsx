import { PureComponent } from 'react'
import { MAX_DAYS } from '@constants/magicValues'
import { CandleStickChartData } from '@customTypes/chart'
import EXCHANGE_ARR from '@mockData/exchanges'
import INIT_CANDLESTICK_CHART_VALUES from '@mockData/initCandlestickChart'
import Button from '@ui/button'
import InputsGroup from '@ui/inputsGroup'
import Title from '@ui/title'
import exchangeObjValidation from '@utils/exchangeObjValidation'
import Observable from '@utils/observable'
import clsx from 'clsx'

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

    notifyAllAfterSetState = () => () => this.props.observable.notifyAll(this.state.inputs, this.state.inputs.length)

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
        this.setState(
            ({ inputs, current }) => ({
                inputs: [...inputs, exchangeObjValidation(current, inputs)],
            }),
            this.notifyAllAfterSetState()
        )

        if (this.state.inputs.length >= MAX_DAYS) this.setState({ disabled: true })
    }

    generateClickHandler = (count: number) => () =>
        this.props.observable.notifyAll(
            EXCHANGE_ARR.filter((_, i) => i < count),
            count
        )

    render() {
        const { inputs, disabled } = this.state
        return (
            <div className={styles.form}>
                <div className={clsx(styles.buttons, styles.first)}>
                    <Button value='Generate for 30 days' onClick={this.generateClickHandler(30)} />
                    <Button value='Generate for 15 days' onClick={this.generateClickHandler(15)} />
                </div>

                <Title value='Add your own values' />
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
