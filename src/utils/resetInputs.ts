import InputsGroup from '@ui/inputsGroup'

const resetInputs = (ref: InputsGroup) => {
    ref.resetValue('o')
    ref.resetValue('h')
    ref.resetValue('l')
    ref.resetValue('c')
}
export default resetInputs
