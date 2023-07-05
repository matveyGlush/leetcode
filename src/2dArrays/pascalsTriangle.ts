let numRows: number = 1

function generate(numRows: number): number[][] {
    const result = new Array(numRows);

    for(let i = 0; i < numRows; i++) {
        result[i]= new Array(i+1);
        result[i][0] = 1;
        result[i][i] = 1;
        for(let j = 1; j < i; j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }

    return result;
}
console.log(generate(numRows))
