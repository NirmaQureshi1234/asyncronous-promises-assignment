// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called. 


function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => resolve("data fetched"), 1000);
    });
  }
  
  function processData(data:any) {
    return new Promise(resolve => {
      setTimeout(() => resolve(`${data} and processed`), 1000);
    });
  }
  
  function executeSequentially() {
    fetchData()
      .then(result1 => {
        console.log(result1);
        return processData(result1);
      })
      .then(result2 => {
        console.log(result2);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  
  executeSequentially();
  