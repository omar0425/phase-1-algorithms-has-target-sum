// make a function `hasTargetrSum` that checks if two numbers fro the array add up to some target. For example, if I have an array 
//`[1,2,3,4]` and the target is `6` I should return true because 2 and 4 add to 6.
//for each number check if there's a number that adds to the target.





function hasTargetSum(array, target) {
  // for (let i = 0; i < array.length; i++) {
  //   //n steps
  //   const complement = target - array [i]
  //   for (let j = i +1; j < array.length; j++){
  //     // n * n steps
  // if (array[j] === complement) return true
  //   }
  // }
  // return false
  const seenNumbers = {}
  for(let i = 0; i < array.length; i++){
    const complement = target - array[i];
    if (seenNumbers[complement]) return true
    seenNumbers[array[i]] = true
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
hasTargetSum([1,2,3,4], 6)
seenNumbers ={
  1: true,
  2:true,
  3:true
}
crreate an object to keep track of numbers we've already seen
hasTargetSum([22, 19, 4, 6, 30], 25);
iterate through each number in the array
check if any key on our object is the complement
if so, return true
otherwise, add the number to the object
if i reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
