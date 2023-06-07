import { createServer } from "http";
import { expensiveAsyncTask } from "./asyncTask";
// import { expensiveAsyncTask } from "./asyncTaskBatch";

let count = 0;

createServer((req, res) => {
  count++;
  console.log(`request #${count}`);
  res.setHeader("Content-Type", "application/json");
  expensiveAsyncTask(req.url || "/").then(() => {
    res.end(JSON.stringify({ ok: true }));
  });
}).listen(5000, () => {
  console.log(`Server ready!`);
});
