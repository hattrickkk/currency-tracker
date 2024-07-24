import { CandleStickChartData } from '@customTypes/chart'

export type Observer = {
    update(data: CandleStickChartData[]): void
}

class Observable {
    private observers: Observer[] = []

    addObserver(observer: Observer): void {
        this.observers.push(observer)
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    notifyAll(data: CandleStickChartData[]) {
        this.observers.forEach(observer => observer.update(data))
    }
}

export default Observable
