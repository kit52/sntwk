export const required = (value) => {
    if (value) {
        if (value.trim().length == 0) {
            return "Field is required"
        }
        return undefined
    } else {
        return "Field is required"
    }


}
export const maxLengthCreator = (length) => {
    return (value) => {
        if (value.length > length) {
            return `Max length ${length}`
        } else {
            return undefined
        }
    }
}