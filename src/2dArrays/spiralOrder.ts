let matrix: number[][] = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

function spiralOrder(matrix: number[][]): number[] {
    let m: number = matrix.length
    let n: number = matrix[0].length
    let l: number = 0
    let k: number = 0
    let i: number
    let result : number[] = []
    while (k < m && l < n) {
        for (i = l; i < n; ++i) {
            result.push(matrix[k][i])
        }
        k++;
        for (i = k; i < m; ++i) {
            result.push(matrix[i][n-1])
        }
        n--;
        if ( k < m) {
            for (i = n-1; i >= l; --i) {
                result.push(matrix[m-1][i])
            }
            m--;
        }
        if (l < n) {
            for (i = m-1; i >= k; --i) {
                result.push(matrix[i][l])
            }
            l++;
        }
    }
    return result
}

console.log(spiralOrder(matrix))
