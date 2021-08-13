function findShortestStringRecursive(arr) {
  // type your code here
  if(arr.length === 1){
    return arr[0]
  } else {
    if(arr[0].length <= arr[1].length){
      arr[1] = arr[0]
    }
    arr.shift()
    return findShortestStringRecursive(arr)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
// my base case is when the array's length is 1 I am returning the value of that element. In my recursive case I am checking the length of the second element agains the length of the first element and then setting the second element to the shorter of the two strings, or the first string if they are equavilent lengths. Then my recursive call I am calling returning the function call again with the first element shifted off. 