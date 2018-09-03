var countdownGenerator = function (x) {
    /* your code here */
  var startCount = x;
    return function () {
        if (startCount > 0)
          console.log("T-minus " + startCount + "...");
        else if (startCount === 0)
          console.log("Blast Off!");
        else
        console.log("Rockets already gone, bub!");
    startCount --;
    return startCount;
  }
}

  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!
