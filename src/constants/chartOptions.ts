import { CHART_VALUES_COLOR, CHART_VALUES_PADDING, GRID_BORDER, GRID_COLOR } from './magicValues'

const CHART_OPTIONS = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            type: 'time' as const,
            time: {
                unit: 'day' as const,
            },
            ticks: {
                source: 'auto' as const,
                display: false,
            },
            grid: {
                color: GRID_COLOR,
                borderColor: GRID_BORDER,
            },
        },
        y: {
            beginAtZero: false,
            ticks: {
                padding: CHART_VALUES_PADDING,
                color: CHART_VALUES_COLOR,
            },
            grid: {
                color: GRID_COLOR,
                borderColor: GRID_BORDER,
            },
            position: 'right' as const,
        },
    },
}

export default CHART_OPTIONS
