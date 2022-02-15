// async & await

// async function return promises
const getSomething = async () => {
  const res = await fetch("http://demo.hostbridge.com/hbscript/traderS");

  // manually catch the http method error because it will pass it to JSON
  if (res.status !== 200) {
    throw new Error("cannot fetch the data");
  }

  const data = await res.json(); // need await bc res returns promises
  return data; // gave function carry
};

// called then to chain the promises
getSomething()
  .then((data) => console.log("resolved: ", data))
  .catch((err) => console.log("rejected: ", err.message));

// // try fetch
// fetch("http://demo.hostbridge.com/hbscript/traderS")
//   .then((res) => {
//     console.log("resolved", res);
//     return res.json(); // return a promise ie cannot assign to var bc wait needed
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
