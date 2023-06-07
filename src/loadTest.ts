let requestsCompleted = 0;
let requestsDispatched = 0;
const numRequests = 20;

const start = Date.now();

const interval = setInterval(() => {
  fetch(`http://localhost:5000`).then(() => {
    requestsCompleted++;
    if (requestsCompleted === numRequests) {
      console.log(`Completed in ${Date.now() - start} ms`);
      return;
    }
  });

  requestsDispatched++;
  if (requestsDispatched === numRequests) {
    clearInterval(interval);
  }
}, 100);
