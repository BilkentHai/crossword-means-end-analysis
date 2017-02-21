var console = require('better-console');


var res = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

var n = 5;
for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= n; j++) {

        console.log("Filled row: " + i);
        console.log("Filled column: " + j);
        var leftLetter = Math.max(0, n*n - n*Math.max(i, j) - ( Math.min(i, j))*(n - Math.max(i, j)));
        console.log("Left letter: " +  leftLetter);
        res[i][j] = leftLetter;
    }
}
console.warn("Row indexes are # of filled rows & column indexes are the # of filled columns.");
console.table(res);

/*
 var grid = [
 [1, 1, 1, 1, 0],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [0, 1, 1, 1, 1]
 ];

 function fillRow(n) {
 for (var i = 0; i < grid.length; i++)
 grid[n][i] = 0;
 }

 function fillColumn(n) {
 for (var i = 0; i < grid.length; i++)
 grid[i][n] = 0;
 }

 function sum() {
 return grid
 .reduce(function (a, b) { return a.concat(b); })
 .reduce(function (a, b) { return a + b });
 }

 function analyze(n) {

 for(var i = 0; i < grid.length; i++) {
 for(var z = 0; z < grid.length; z++) {
 console.log(grid[z][i]);
 }
 }
 console.log("Solved problem: " + (n + 1));

 console.log("Left letter: " + sum())

 //  console.table(grid);

 }

 for (var i = 0; i < grid.length*2; i++) {

 if (i < grid.length)
 fillRow(i);
 else
 fillColumn(i);

 analyze(i);
 }


 */