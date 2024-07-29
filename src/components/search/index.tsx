import { ChangeEvent, createRef, PureComponent } from 'react'
import seacrh from '@assets/icons/search.svg'
import CURRENCIES_NAMES_ARR from '@constants/currenciesNames'
import { INIT_CURRENCY } from '@constants/magicValues'
import THEMES from '@constants/themes'
import MapContext from '@contexts/mapContext'
import ThemeContext from '@contexts/themeContext'
import { CurrencyCode, CurrentCurrency } from '@customTypes/currency'
import Input from '@ui/input'
import clsx from 'clsx'

import * as global from '@styles/global.module.scss'
import * as styles from './styles.module.scss'

type State = {
    inputValue: string
}

class Search extends PureComponent<NonNullable<unknown>, State> {
    static contextType = MapContext

    context: React.ContextType<typeof MapContext>

    completeRef = createRef<HTMLDivElement>()

    state: State = {
        inputValue: INIT_CURRENCY,
    }

    componentDidMount(): void {
        document.addEventListener('mousedown', this.handler)
    }

    componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handler)
    }

    handler = (e: MouseEvent) => {
        if (this.completeRef.current && !this.completeRef.current.contains(e.target as HTMLElement)) {
            this.completeRef.current.classList.add(styles.hidden)
        }
    }

    completeItemClickHandler = (code: CurrencyCode) => () => {
        this.context.setSearchingCurrency(code)
        this.setState({
            inputValue: code,
        })
        this.completeRef.current.classList.add(styles.hidden)
    }

    inputClickHandler = () => {
        if (this.completeRef.current) {
            this.completeRef.current.classList.toggle(styles.hidden)
        }
    }

    onChangeHandler = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                inputValue: value,
            },
            () => {
                if (this.completeRef.current) {
                    this.completeRef.current.classList.remove(styles.hidden)
                }
            }
        )
    }

    render() {
        const filteredCurrencies = CURRENCIES_NAMES_ARR.filter(({ code }) =>
            code.includes(this.state.inputValue.toUpperCase())
        )
        const shouldShowComplete = this.state.inputValue !== '' && filteredCurrencies.length > 0

        return (
            <div className={styles.wrapper}>
                <div className={global.container}>
                    <p className={styles.text}>Search currency in the bank</p>

                    <div className={styles.select}>
                        <div className={styles.search}>
                            <img className={styles.icon} src={seacrh} alt='search-icon' />
                            <Input
                                id='search-id'
                                value={this.state.inputValue}
                                placeholder='Currency search...'
                                maxLength={10}
                                onChange={this.onChangeHandler}
                                onClick={this.inputClickHandler}
                            />
                        </div>
                        {shouldShowComplete && (
                            <ThemeContext.Consumer>
                                {({ theme }) => (
                                    <div
                                        className={clsx(
                                            styles.complete,
                                            styles.hidden,
                                            theme === THEMES.LIGHT && styles.light
                                        )}
                                        ref={this.completeRef}
                                    >
                                        {filteredCurrencies.map(({ code }: CurrentCurrency) => (
                                            <div
                                                key={code}
                                                className={styles.item}
                                                onClick={this.completeItemClickHandler(code)}
                                            >
                                                {code}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </ThemeContext.Consumer>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
