let hello = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ']

timeOutDelay = 100

for(let i = 0; i < hello.length; i++) {
  setTimeout(() => {
    process.stdout.write(hello[i]);
  }, timeOutDelay)
  timeOutDelay += 200
}

setTimeout(() => {
  process.stdout.write('\n');
}, (timeOutDelay - 200))
