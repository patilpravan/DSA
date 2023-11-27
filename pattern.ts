/*
 ****
 ****
 ****
 ****
 */

function nByn(n: number) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let m = 0; m < n; m++) {
      row += "*";
    }
    console.log(row);
    row = "";
  }
}
// nByn(4);

/*
 *       1      1
 **      12     22
 ***     123    333
 ****    1234   4444
 */

function nSlide(n: number) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let m = 0; m <= i; m++) {
      row += "*";
      //   row += (m+1).toString();
      //   row += (i + 1).toString();
    }
    console.log(row);
    row = "";
  }
}
// nSlide(5);

/*
 ****
 ***
 **
 *
 */
function invertedNSlide(n: number) {
  let p = n;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let m = 0; m <= p; m++) {
      row += (m + 1).toString();
    }
    console.log(row);
    row = "";
    p--;
  }
}

// invertedNSlide(5);

/* n=5      (b-blank s-star) 
----*----    4b-1s-4b
---***---    3b-3s-3b
--*****--    2b-5s-2b
-*******-    1b-7s-1b
*********    (n-1-i)b-(2*i+1)s-(n-1-i)b
*/

function pyramid(n: number) {
  let row = "";
  for (let i = 0; i < n; i++) {
    for (let m = 0; m < n - 1 - i; m++) {
      row += " ";
    }
    for (let n = 0; n < 2 * i + 1; n++) {
      row += "*";
    }
    for (let o = 0; o < n - 1 - i; o++) {
      row += " ";
    }
    console.log(row);
    row = "";
  }
}
pyramid(5);
