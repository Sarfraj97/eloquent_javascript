let countBs = (str) => {
  let count = 0
  for(i = 0; i < str.length; i++){
    if (str[i] == 'B'){
      count += 1
    }
  }
  return count
}

console.log(countBs("Bigg Boss"))

let countChar = (str, chr) => {
  let count = 0
  for(i = 0; i < str.length; i++){
    if (str[i] == chr){
      count += 1
    }
  }
  return count
}

console.log(countChar("Bigg Bos", 's'))