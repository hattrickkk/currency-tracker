const getToday = (): string => {
    const year: string = new Date().getFullYear().toString()
    const moth: string = String(new Date().getMonth()).padStart(2, '0')
    const day: string = String(new Date().getDate()).padStart(2, '0')
    return `${year}-${moth}-${day}`
}

export default getToday
