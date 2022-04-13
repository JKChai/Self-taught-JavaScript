// LEARNING lodash
// Lodash helps programmers write more concise and easier to
// maintain JavaScript code. Lodash contains tools to simplify
// programming with strings, numbers, arrays, functions and objects.

// install lodash
const _ = require("lodash");

//////////////////////////////////////////////////////////
// // get lodash version
// const ver = _.VERSION;
// console.log(ver); // 4.17.21

//////////////////////////////////////////////////////////
// // return first & last elements of lodash
// let words = ["sky", "wood", "forest", "falcon", "pear", "ocean", "universe"];

// console.log(`First element: ${_.first(words)}`);
// console.log(`Last element: ${_.last(words)}`);

//////////////////////////////////////////////////////////
// // return nth element with lodash
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(_.nth(nums, 3));
// console.log(_.nth(nums, -3));

//////////////////////////////////////////////////////////
// // chunking array
// // creating array of arrays based on size given
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let c1 = _.chunk(nums, 2);
// console.log(c1);

// let c2 = _.chunk(nums, 3);
// console.log(c2);

//////////////////////////////////////////////////////////
// // slicing array
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let c1 = _.slice(nums, 2, 6);
// console.log(c1);

// let c2 = _.slice(nums, 0, 8);
// console.log(c2);

//////////////////////////////////////////////////////////
// // generate random number
// let r = _.random(10);
// console.log(r);

// r = _.random(5, 10);
// console.log(r);

//////////////////////////////////////////////////////////
// // get random element from an array
// let words = ["sky", "wood", "forest", "falcon", "pear", "ocean", "universe"];

// let word = _.sample(words);
// console.log(word);

//////////////////////////////////////////////////////////
// // shuffling the elements in the array
// let words = ["sky", "wood", "forest", "falcon", "pear", "ocean", "universe"];

// console.log(_.shuffle(words));
// console.log(_.shuffle(words));
// console.log(_.shuffle(words));
// console.log(words); // show that original array is not being changed

//////////////////////////////////////////////////////////
// // running function in n times
// _.times(4, () => {
//   console.log("brave");
// }); // this run four times

//////////////////////////////////////////////////////////
// // stop the function for number of milliseconds before processing again
// function message() {
//   console.log("Some message");
// }

// _.delay(message, 150);
// console.log("Some other message");

//////////////////////////////////////////////////////////
// // determine data types
// let vals = [1, 2, "good", [1, 2], { name: "Peter", age: 32 }];

// vals.forEach((e) => {
//   if (_.isNumber(e)) {
//     console.log(`${e} is a number`);
//   }

//   if (_.isString(e)) {
//     console.log(JSON.stringify(e) + " is a string");
//   }

//   if (_.isArray(e)) {
//     console.log(JSON.stringify(e) + " is an array");
//   }

//   if (_.isObject(e)) {
//     console.log(JSON.stringify(e) + " is an object");
//   }
// });

//////////////////////////////////////////////////////////
// // range function creates an array of numbers
// // similar to python method which takes start, end, step params
// let vals = _.range(10);
// console.log(vals);

// let vals2 = _.range(0, 15);
// console.log(vals2);

// let vals3 = _.range(0, 15, 5);
// console.log(vals3);

//////////////////////////////////////////////////////////
// // Compute max & min value of an array
// let vals = [-3, 4, 0, 12, 43, 9, -12];

// let min = _.min(vals);
// console.log(min);

// let max = _.max(vals);
// console.log(max);

// max = _.max(_.range(5, 25));
// console.log(max);

// let obs = [{ n: 12 }, { n: -4 }, { n: 4 }, { n: -11 }];

// min = _.minBy(obs, "n");
// console.log(min);

// max = _.maxBy(obs, "n");
// console.log(max);

//////////////////////////////////////////////////////////
// // compute sum of array values
// let vals = [-2, 0, 3, 7, -5, 1, 2];

// let sum = _.sum(vals);
// console.log(sum);

//////////////////////////////////////////////////////////
// // currying is a transformation of a function with
// // multiple arguments into a sequence of nested functions
// // with a single argument
// // Currying allows to perform function specialization
// // and composition
// function multiply(a, b, c) {

//     return a * b * c;
// }

// let curried = _.curry(multiply);

// let ret = curried(2)(3)(4);
// console.log(ret);

//////////////////////////////////////////////////////////
// // lodash collection filter
// // returns an array of elements for which the predicate
// // function returns true
// let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];

// let pos_nums = _.filter(nums, (e) => e > 0);
// console.log(pos_nums);

//////////////////////////////////////////////////////////
// // lodash collection find
// // The _.find function iterates over elements of a
// // collection and returns the first element for which
// // the predicate returns true. Likewise, the _.findLast
// // returns the last element.
// let users = [
//     { name: 'John', age: 25 },
//     { name: 'Lenny', age: 51 },
//     { name: 'Andrew', age: 43 },
//     { name: 'Peter', age: 81 },
//     { name: 'Anna', age: 43 },
//     { name: 'Albert', age: 76 },
//     { name: 'Adam', age: 47 },
//     { name: 'Robert', age: 72 }
//   ];

//   let u1 = _.find(users, {name: 'Adam'});
//   console.log(u1);

//   let u2 = _.find(users, (u) => { return u.age > 60 });
//   console.log(u2);

//   let u3 = _.findLast(users, (u) => { return u.age > 60 });
//   console.log(u3);

//////////////////////////////////////////////////////////
// // lodash collection pull
// // remove given values from the array
// let nums = [1, 2, 3, 1, 2, 2, 4, 5, 7, 8];

// _.pull(nums, 1, 2);
// console.log(nums);

//////////////////////////////////////////////////////////
// // lodash collection take
// // The _.take function creates a slice of an array
// // with n elements taken from the beginning.
// // The _.takeRight function creates a slice of an array
// // with n elements taken from the end.
// let nums = [1, 2, 3, 4, 5, 6];

// let nums2 = _.take(nums);
// let nums3 = _.take(nums, 2);
// let nums4 = _.takeRight(nums, 3)

// console.log(nums2);
// console.log(nums3);
// console.log(nums4);

//////////////////////////////////////////////////////////
// // lodash collection takeWhile
// // The _.takeWhile function creates a slice of an array
// // with elements taken from the beginning. Elements are
// // taken until the given predicate return false.
// // In a similar fashion, the _.takeRightWhile function
// // takes elements from the end.
// let nums = [1, -2, 3, 4, -5, 6, 7, -8, -9]

// let nums2 = _.takeWhile(nums, (n) => { return n < 0 });
// let nums3 = _.takeRightWhile(nums, (n) => { return n < 0 });

// console.log(nums2);
// console.log(nums3);

//////////////////////////////////////////////////////////
// // lodash collection partition
// // The partition operation splits the original collection
// // into a pair of arrays. The first array contains elements
// // for which the specified predicate yields true, while
// // the second list contains elements for which the
// // predicate yields false.
// let nums = [4, -5, 3, 2, -1, 7, -6, 8, 9];
// let [nums2, nums3] = _.partition(nums, (e) => e < 0);

// console.log(nums2);
// console.log(nums3);

//////////////////////////////////////////////////////////
// // lodash collection reduce
// // Reduction is a terminal operation that aggregates
// // list values into a single value. The _.reduce
// // function applies a function against an accumulator
// // and each element in the array (from left to right)
// // to reduce it to a single value. The function that
// // is being applied is called reducer function.
// // Note: reduction operations are really powerful.
// // They can be used to calculate sums, products,
// // averages, maximum and minimum values, sort,
// // reverse, flatten arrays and many more.
// let nums = [4, 5, 3, 2, 1, 7, 6, 8, 9];

// let sum = _.reduce(nums, (total, next) => { return total + next });
// console.log(sum);

// let colours = ["red", "green", "white", "blue", "black"];

// let res = _.reduceRight(colours, (next, total) => { return `${total}-${next}` });
// console.log(res);

//////////////////////////////////////////////////////////
// // lodash reduce count occurences
// // reducer function can be used to count the
// // occurrence of the elements in the array.
// let words = ['sky', 'forest', 'wood', 'sky', 'rock', 'cloud',
//     'sky', 'forest', 'rock', 'sky'];

// let tally = _.reduce(words, (total, next) => {
//   total[next] = (total[next] || 0) + 1 ;
//   return total;
// }, {});

// console.log(tally);

//////////////////////////////////////////////////////////
// // Lodash reduce - group objects by property
// // group object in an array by a property
// let users = [
//     { name: 'John', age: 25, occupation: 'gardener' },
//     { name: 'Lenny', age: 51, occupation: 'programmer' },
//     { name: 'Andrew', age: 43, occupation: 'teacher' },
//     { name: 'Peter', age: 52, occupation: 'gardener' },
//     { name: 'Anna', age: 43, occupation: 'teacher' },
//     { name: 'Albert', age: 46, occupation: 'programmer' },
//     { name: 'Adam', age: 47, occupation: 'teacher' },
//     { name: 'Robert', age: 32, occupation: 'driver' }
//   ];

//   let grouped = _.reduce(users, (result, user) => {

//       (result[user.occupation] || (result[user.occupation] = [])).push(user);
//       return result;
//   }, {});

//   console.log(grouped);

//////////////////////////////////////////////////////////
// // lodash string case
// let words = ["sky", "Sun", "Blue Island"];

// console.log(_.map(words, _.camelCase));
// console.log(_.map(words, _.capitalize));
// console.log(_.map(words, _.kebabCase));
// console.log(_.map(words, _.lowerCase));
// console.log(_.map(words, _.upperCase));

//////////////////////////////////////////////////////////
// // Lodash string _.startsWith and _.endsWith
// // The _.startsWith function determines if the string
// // starts with the specified string. The _.endsWith
// // function determines if the string ends with the specified string.
// let words = ["tank", "boy", "tourist", "ten",
//         "pen", "car", "marble", "sonnet", "pleasant",
//         "ink", "atom"]

// console.log("Starting with 't'");
// words.forEach( e => {

//     if (_.startsWith(e, 't')) {

//         console.log(e);
//     }
// });

// console.log("Ending with 'k'");
// words.forEach( e => {

//     if (_.endsWith(e, 'k')) {

//         console.log(e);
//     }
// });

//////////////////////////////////////////////////////////
// // lodash string padding
// // Strings can be padded with a character if they
// // are shorter than a specified number.

// let nums = [657, 122, 3245, 345, 99, 18];

// nums.forEach( e => {

//     console.log(_.padStart(e.toString(), 20, '.'));
// });

//////////////////////////////////////////////////////////
// // lodash string trim
// // A string can be trimmed with _.trim, _.trimStart,
// // and _.trimEnd functions. The default character to
// // trim is a whitespace. We can provide our own
// // characters to be trimmed.
// let word = '\tfalcon\t';

// let trimmed = _.trim(word);
// console.log(trimmed + 'owl');

// let trimmed2 = _.trimStart(word);
// console.log(trimmed2 + 'owl');

// let trimmed3 = _.trimEnd(word);
// console.log(trimmed3 + 'owl');

// // another example
// let words = ['_falcon', '-owl-', '_-sky-_'];
// let trimmed = _.map(words, (word) => { return _.trim(word, '-_')});

// console.log(trimmed);

//////////////////////////////////////////////////////////
// // lodash object keys and values
// // The _.keys function returns an array of the
// // property names of the JavaScript object and the
// // _.values function returns an array of their values.
// let p = {age: 24, name: "Rebecca", occupation: "teacher"};

// let keys = _.keys(p);
// console.log(keys);

// let values = _.values(p);
// console.log(values);

//////////////////////////////////////////////////////////
// // lodash object picking
// // The _.pick function creates an object composed
// // of the picked object properties
// console.log(_.pick({ name: 'John', age: 25 }, 'name'));
// console.log(_.pick({ name: 'John', age: 25 }, 'age'));

//////////////////////////////////////////////////////////
// // Lodash object at
// // The _.at function returns the value at the given object path.
// let users = [
//     { id: 1, name: 'John', about: { 'age': 25, 'colours': ['red', 'green'], } },
//     { id: 2, name: 'Lenny', about: { 'age': 51, 'colours': ['blue'], } },
//     { id: 3, name: 'Andy', about: { 'age': 43, 'colours': ['orange', 'steelblue'], } },
//     { id: 4, name: 'Peter', about: { 'age': 52, 'colours': ['black'], } },
//     { id: 5, name: 'Anna', about: { 'age': 43, 'colours': ['purple'], } },
//   ];

//   let name = _.at(users[2], 'name');
//   console.log(name);

//   let colour = _.at(users[0], 'about.colours[0]');
//   console.log(colour);

//////////////////////////////////////////////////////////
// lodash object get and set
// The _.set function sets the value at the path of the
// object. If a portion of the path does not exist,
// it is created. The _.get function gets the value at
// the path of object; if the value does not exist, we
// can provide a default one.
// let data = { user: { name: "John Doe", age: 34, occupation: "gardener"} };

// _.set(data, "user.age", 36);
// console.log(data);

// console.log(_.get(data, "user.name", "unknown"));
// console.log(_.get(data, "user.marital_status", "unknown"));

//////////////////////////////////////////////////////////
// // Lodash iterate object properties
// // The _.forIn function can be used to iterate
// // over object properties.

// let p = {age: 24, name: "Rebecca", occupation: "teacher"};

// _.forIn(p, (value, key) => {

//     console.log(`${key}: ${value}`);
// })
//////////////////////////////////////////////////////////
