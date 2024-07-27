import { ChangeEvent, createRef, PureComponent, RefObject } from 'react'
import { REGEX_FLOAT_NUMBERS } from '@constants/magicValues'
import PRICES_ARR from '@constants/price'
import { CandleStickChartData, Price } from '@customTypes/chart'
import INIT_CANDLESTICK_CHART_VALUES from '@mockData/initCandlestickChart'
import Input from '@ui/input'
import clsx from 'clsx'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

type State = CandleStickChartData

type Props = {
    disabled?: boolean
    first?: boolean
    values?: CandleStickChartData
    changeCurrentExchange?: (exchange: CandleStickChartData) => void
    removeExchange?: (id: string) => void
}

type InputsRefs = {
    o: RefObject<HTMLInputElement>
    l: RefObject<HTMLInputElement>
    h: RefObject<HTMLInputElement>
    c: RefObject<HTMLInputElement>
}

class InputsGroup extends PureComponent<Props, State> {
    inputRefsObj: InputsRefs = {
        o: createRef<HTMLInputElement>(),
        l: createRef<HTMLInputElement>(),
        h: createRef<HTMLInputElement>(),
        c: createRef<HTMLInputElement>(),
    }

    state: State = INIT_CANDLESTICK_CHART_VALUES

    addID = () => this.props.changeCurrentExchange({ ...this.state, id: new Date().toString() })

    onChangeHandler = ({ target: { value, id, classList } }: ChangeEvent<HTMLInputElement>) => {
        if (REGEX_FLOAT_NUMBERS.test(value)) {
            classList.remove(global.require)
            this.setState(
                prev => ({
                    ...prev,
                    [id]: value,
                }),
                this.addID
            )
        }
    }

    datePickerChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        this.setState(
            prev => ({
                ...prev,
                x: value,
            }),
            this.addID
        )
    }

    removeHandle = () => this.props.removeExchange(this.props.values.id)

    highlightInput = (id: keyof InputsRefs): void => this.inputRefsObj[id].current.highlightElem()

    getValue = (id: keyof InputsRefs): string => this.inputRefsObj[id].current.getValue()

    resetValue = (id: keyof InputsRefs): string => this.inputRefsObj[id].current.resetValue()

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
                                    ref={this.inputRefsObj[id as keyof InputsRefs]}
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
