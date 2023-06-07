import { expensiveAsyncTask as expensiveAsyncTaskRaw } from "./asyncTask";

const batch: Map<string, Promise<void>> = new Map();

export function expensiveAsyncTask(resource: string) {
  const batched = batch.get(resource);
  if (batched) {
    return batched;
  }

  const request = expensiveAsyncTaskRaw(resource);
  batch.set(resource, request);
  request.finally(() => {
    batch.delete(resource);
  });

  return request;
}
