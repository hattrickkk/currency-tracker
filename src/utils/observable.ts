import { DAYS_FOR_NOTIFICATION, MAX_DAYS } from '@constants/magicValues'
import { CandleStickChartData } from '@customTypes/chart'

export type Observer = {
    update(data: CandleStickChartData[], count: number): void
}

class Observable {
    private observers: Observer[] = []

    addObserver(observer: Observer): void {
        this.observers.push(observer)
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    notifyAll(data: CandleStickChartData[], count: number) {
        this.observers.forEach(observer => observer.update(data, count))
    }
}

export default Observable
