const rowIndex = 4

function getRow(rowIndex: number): number[] {
    let ans = new Array(rowIndex + 1).fill(1);
    for (let i = 2; i < rowIndex + 1; ++i) {
        console.log(ans)
        for (let j = i - 1; j > 0; --j) {
            ans[j] += ans[j - 1];
        }
    }
    return ans;
}
console.log(getRow(rowIndex))
