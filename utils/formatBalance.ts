export const truncateZero = (num: number, decimals: number) => {
    const str = num.toString()
    const index = str.indexOf('.')

    if (index >= 0) {
        const mainPart = str.slice(0, index)
        const decimalPart = str.slice(index + 1, index + 1 + decimals)
        return mainPart + '.' + decimalPart.padEnd(decimals, '0')
    } else {
        return str + '.' + '0'.repeat(decimals)
    }
}

export const formatToThousands = (number: number) =>{
    const numStr = number.toString();
    const parts = numStr.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.');
}