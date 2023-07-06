let numbers: number[] = [2,7,11,15]
let target: number = 9


function twoSum(numbers: number[], target: number): number[] {
    let left: number = 0
    let right: number = numbers.length - 1
    while (left < right) {
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]
        } else if (numbers[left] + numbers[right] < target) {
            left++
        } else right--
    }
    return []
}

console.log(twoSum(numbers, target))
