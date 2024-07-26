const getToday = (): string => {
    const year = String(new Date().getFullYear())
    const month = String(new Date().getMonth() + 1).padStart(2, '0')
    const day = String(new Date().getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

export default getToday
