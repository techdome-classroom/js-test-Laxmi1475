const getTotalIsles = function (grid) {
  function numIslands(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    function dfs(row, col) {
        if (
            row < 0 || row >= grid.length || 
            col < 0 || col >= grid[0].length || 
            grid[row][col] === 'W'
        ) {
            return;
        }

        grid[row][col] = 'W';
        
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    let numIslands = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 'L') {
                numIslands++;
                dfs(r, c);
            }
        }
    }

    return numIslands;
  }

  return numIslands(grid);
};

// Example usage
const grid1 = [
    ["L", "L", "L", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
];

const grid2 = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "L", "W", "W"],
    ["W", "W", "W", "L", "L"],
];

console.log(getTotalIsles(grid1)); // Output: 1
console.log(getTotalIsles(grid2)); // Output: 3  

module.exports = getTotalIsles;
