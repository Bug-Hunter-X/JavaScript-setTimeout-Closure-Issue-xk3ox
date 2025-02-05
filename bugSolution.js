function myFunction() {
  for (let i = 0; i < 10; i++) {
    // Using let inside the loop creates a new scope for each iteration, capturing the correct value of i.
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

myFunction();