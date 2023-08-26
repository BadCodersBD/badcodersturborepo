export function optionalStyle(value: number | string | undefined, condition?: boolean) {
    const valueString = value?.toString() ?? ''
    return condition ?? valueString ? valueString : ''
}
