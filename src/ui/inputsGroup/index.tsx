import { ChangeEvent, PureComponent } from 'react'
import { REGEX_FLOAT_NUMBERS } from '@constants/magicValues'
import PRICES_ARR from '@constants/price'
import { CandleStickChartData, Price } from '@customTypes/chart'
import INIT_CANDLESTICK_CHART_VALUES from '@mockData/initCandlestickChart'
import Input from '@ui/input'
import clsx from 'clsx'

import * as styles from './style.module.scss'

type State = CandleStickChartData

type Props = {
    disabled?: boolean
    first?: boolean
    values?: CandleStickChartData
    changeCurrentExchange?: (exchange: CandleStickChartData) => void
    removeExchange?: (id: string) => void
}
class InputsGroup extends PureComponent<Props, State> {
    state: State = INIT_CANDLESTICK_CHART_VALUES

    addID = () => () => this.props.changeCurrentExchange({ ...this.state, id: new Date().toString() })

    onChangeHandler = ({ target: { value, id } }: ChangeEvent<HTMLInputElement>) => {
        if (REGEX_FLOAT_NUMBERS.test(value)) {
            this.setState(
                prev => ({
                    ...prev,
                    [id]: value,
                }),
                this.addID()
            )
        }
    }

    datePickerChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        this.setState(
            prev => ({
                ...prev,
                x: value,
            }),
            this.addID()
        )
    }

    removeHandle = () => this.props.removeExchange(this.props.values.id)

    render() {
        const { disabled, values, first } = this.props
        const { x } = this.state
        return (
            <div className={styles.inputsGroup}>
                <input
                    className={clsx(styles.date, disabled && styles.disabled)}
                    type='date'
                    onChange={this.datePickerChangeHandler}
                    id='x'
                    value={values ? values.x : x}
                />
                <div className={styles.wrapper}>
                    <div className={styles.row}>
                        {PRICES_ARR.map(({ title, id }: Price) => (
                            <div key={id} className={clsx(styles.group, disabled && styles.disabled)}>
                                {!disabled && <p>{title}</p>}
                                <Input
                                    id={id}
                                    value={
                                        values
                                            ? values[id as keyof CandleStickChartData]?.toString()
                                            : this.state[id as keyof CandleStickChartData]?.toString()
                                    }
                                    maxLength={10}
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                        ))}
                    </div>
                    {!first && (
                        <div className={styles.button} onClick={this.removeHandle}>
                            <span />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default InputsGroup
