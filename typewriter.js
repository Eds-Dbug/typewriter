const sentence = "hello there from lighthouse labs\n";

let time = 1000;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, (time += 50)) // <= 1s delay to make it noticeable. Can dial it down later.
}


