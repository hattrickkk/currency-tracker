import { ANTE_MERIDIEM, MAX_COUNT_OF_HOURS, POST_MERIDIEM } from '@constants/magicValues'

const getLastUpdated = (time: string) => {
    const hours = new Date(time).getUTCHours()
    const minutes = new Date(time).getUTCMinutes()
    return `Last updated at ${hours % MAX_COUNT_OF_HOURS ? hours % MAX_COUNT_OF_HOURS : MAX_COUNT_OF_HOURS}
		.${minutes} ${hours > MAX_COUNT_OF_HOURS ? POST_MERIDIEM : ANTE_MERIDIEM}`
}

export default getLastUpdated