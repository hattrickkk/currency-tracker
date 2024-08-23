import { BLACK, CHART_VALUES_PADDING, GRAY, GRID_BORDER, GRID_COLOR, WHITE } from './magicValues'

export const CHART_OPTIONS_DARK = {
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
                color: WHITE,
            },
            grid: {
                color: GRID_COLOR,
                borderColor: GRID_BORDER,
            },
            position: 'right' as const,
        },
    },
}

export const CHART_OPTIONS_LIGHT = {
    ...CHART_OPTIONS_DARK,
    scales: {
        x: {
            ...CHART_OPTIONS_DARK.scales.x,
            grid: {
                color: GRAY,
                borderColor: GRAY,
            },
        },
        y: {
            ...CHART_OPTIONS_DARK.scales.y,
            ticks: {
                padding: CHART_VALUES_PADDING,
                color: BLACK,
            },
            grid: {
                color: GRAY,
                borderColor: GRAY,
            },
        },
    },
}
