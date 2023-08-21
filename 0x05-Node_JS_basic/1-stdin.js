/**
 * Reads stdin, writes to stdout
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const userInput = process.stdin.read();
  if (userInput !== null) {
    process.stdout.write(`Your name is: ${userInput}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
