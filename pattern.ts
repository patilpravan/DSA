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
// pyramid(5);

/*

*      *
**    **
***  ***
********
***  ***
**    **
*      *

*/

function xpattern(n: number) {
  let rev = n;
  let revBlank = 0;
  for (let i = 0; i <= 2 * n - 1; i++) {
    let row = "";
    if (i <= n) {
      for (let j = 1; j <= i; j++) {
        row += "*";
      }
      for (let j = 1; j <= 2 * (n - i); j++) {
        row += " ";
      }
      for (let j = 1; j <= i; j++) {
        row += "*";
      }
    } else {
      rev--;
      revBlank++;
      for (let j = 1; j <= rev; j++) {
        row += "*";
      }
      for (let j = 1; j <= 2 * revBlank; j++) {
        row += " ";
      }
      for (let j = 1; j <= rev; j++) {
        row += "*";
      }
    }
    console.log(row);
    row = "";
  }
}
xpattern(5);

/*
1------1      i - 2*(n-i) - i
12----21
123--321
12344321
*/

function numPattern(n: number) {
  for (let m = 1; m <= n; m++) {
    let row = "";
    for (let p = 1; p <= m; p++) {
      row += p.toString();
    }
    for (let q = 1; q <= 2 * (n - m); q++) {
      row += " ";
    }
    for (let p = m; p >= 1; p--) {
      row += p.toString();
    }
    console.log(row);
    row = "";
  }
}
// numPattern(5);
const alphabet = [
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/*
---a---
--aba--
-abcba-
abcdcba
*/

function alphaPAttern(n: number) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    let rev = i;
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j <= i) {
        row += alphabet[j];
      } else {
        rev--;
        row += alphabet[rev];
      }
    }
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    console.log(row);
    row = "";
  }
}

// alphaPAttern(5);
