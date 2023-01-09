function getFirstWord(msg) {
    console.log(msg.split(' ')[0])
  }
  
  getFirstWord('Hello World') // 输出 Hello
  
  getFirstWord(123) // TypeError: msg.split is not a function
  