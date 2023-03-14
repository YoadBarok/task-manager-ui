import OrderDirection from "@/types/OrderDirection";
import OrderTerm from "@/types/OrderTerm";
import { Task } from "@/types/Task";

export default function sortTasks(
  tasks: Task[],
  order: OrderTerm,
  direction: OrderDirection
): Task[] {
  return [...tasks].sort((a: Task, b: Task) => {
    if (order === "owner") {
      if (direction === "desc") {
        return a.owner.name > b.owner.name ? 1 : -1;
      }
      return a.owner.name < b.owner.name ? 1 : -1;
    }
    if (direction === "desc") {
      return a[order] > b[order] ? 1 : -1;
    }
    return a[order] < b[order] ? 1 : -1;
  });
}
