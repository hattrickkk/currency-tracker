import { Component, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import * as paths from '@constants/paths'
import Button from '@ui/button'

import * as global from '@styles/global.module.scss'
import * as styles from './style.module.scss'

type Props = {
    children: ReactElement
}

type State = {
    hasError: boolean
    errorName: string
    errorMessage: string
}

const initValue: State = {
    hasError: false,
    errorName: '',
    errorMessage: '',
}

class ErrorBoundary extends Component<Props, State> {
    state = initValue

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMessage: error.message, errorName: error.name }
    }

    reloadClickHandler = () => this.setState(initValue)

    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.errorBoundary}>
                    <div className={global.container}>
                        <div className={styles.wrapper}>
                            <h1 className={styles.title}>Oops, something went wrong</h1>
                            <p className={styles.text}>{`${this.state.errorName}: ${this.state.errorMessage}`}</p>
                            <Link to={paths.HOME} onClick={this.reloadClickHandler} className={styles.link}>
                                Click to reload page
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
export default ErrorBoundary
