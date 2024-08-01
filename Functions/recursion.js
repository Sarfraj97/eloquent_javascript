let isEven = (num) => {
  if ( num < 0 ){
    return undefined
  }
  else if ( num == 1 ){
    return 'odd'
  }
  else if ( num == 0 ){
    return 'even'
  }
  else {
    return isEven(num - 2)
  }
}

console.log( isEven(50) )
console.log( isEven(75) )
console.log( isEven(-1) )