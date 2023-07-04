let digits: number[] = [9,9,9,9]

function plusOne(digits: number[]): number[] {
    if (digits[digits.length - 1] == 9) {
        let length: number = digits.length - 1
        while (length >= 0 && digits[length] == 9) {
            digits[length] = 0
            length--
        }
        if (length < 0) digits.unshift(1)
        else digits[length] += 1
        return digits
    }

    digits[digits.length - 1] += 1
    return digits
}

console.log(plusOne(digits))
