import { REGEX_FLOAT_NUMBERS } from '@constants/magicValues'

const isFloat = (value: string) => REGEX_FLOAT_NUMBERS.test(value)
export default isFloat
