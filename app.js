var a = ['dog', 'cat', 'hen'];
console.log(a.length); // 3

a[100] = "horse";

// differences between for...of & for...in
for (const currentValue of a) {
    // Do something with currentValue
    // iterate over elements 
    console.log(currentValue);
  }

for (const currentValue in a) {
    // Do something with currentValue
    // iterate over indices
    console.log(currentValue);
  }

// Using forEach method introduces in ECMAScript5
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
    // Do something with currentValue or array[index]
    console.log(currentValue)
    console.log(index)
    console.log(array)
});
  
