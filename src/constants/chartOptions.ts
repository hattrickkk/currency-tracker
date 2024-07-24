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
                color: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
            },
        },
        y: {
            beginAtZero: false,
            ticks: {
                padding: 10,
                color: `#FFF`,
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            position: 'right' as const,
        },
    },
}

export default CHART_OPTIONS
