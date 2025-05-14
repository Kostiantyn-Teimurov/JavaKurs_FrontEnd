const bestDay = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.floor(Math.random() * 2)) {
      resolve("Best day of my life");
    }
    reject(new Error("Something is off"));
  }, 1000);
});

bestDay
  .then((best) => {
    console.log(best);
  })
  .catch((err) => {
    console.log(err);
  });
