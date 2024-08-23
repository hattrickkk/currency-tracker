import InputsGroup from '@ui/inputsGroup'

const highlightInput = (ref: InputsGroup, o: string, h: string, l: string, c: string) => {
    if (!+o) ref.highlightInput('o')
    if (!+l) ref.highlightInput('l')
    if (!+h) ref.highlightInput('h')
    if (!+c) ref.highlightInput('c')
}
export default highlightInput
