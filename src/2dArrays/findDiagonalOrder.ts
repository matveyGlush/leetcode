let mat: number[][] = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let mat1: number[][] = [[1,2,3],[4,5,6],[7,8,9]]
let mat2: number[][] = [[1,2],[3,4]]
let mat3: number[][] = [[7],[9],[6]]

function findDiagonalOrder(mat: number[][]): number[] {
    const rowLim = mat.length;
    const colLim = mat[0].length;
    let row = colLim > 1 ? 0 : 1;
    let col = colLim > 1 ? 1 : 0;
    const result = [mat[0][0]];

    if (mat.length == 1 && mat[0].length == 1) return result

    for (let i = 1; i < colLim + rowLim - 2; i++) {
        if (i % 2 == 0) {
            while (row >= 0 && row < rowLim && col >= 0 && col < colLim) {
                result.push(mat[row][col])
                row--
                col++
            }
            col--
            row++
            if (col == colLim - 1) row += 1
            else col += 1
        } else {
            while (row >= 0 && row < rowLim && col >= 0 && col < colLim) {
                result.push(mat[row][col])
                row++
                col--
            }
            row--
            col++
            if (row == rowLim - 1) col += 1
            else row += 1
        }
    }

    result.push(mat[rowLim - 1][colLim - 1])
    return result
}

console.log(findDiagonalOrder(mat3))
