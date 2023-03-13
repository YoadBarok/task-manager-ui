import { Task } from "@/types/Task";
import { formatDate } from "@/utils/formatDate";
import axios from "axios";

const URL = process.env.VUE_APP_API_URL + "/api/tasks";

export class TaskService {
  async getAllTasks(): Promise<Task[]> {
    const tasks = await axios.get(URL);
    tasks.data.result.map((task: Task) => {
      task.created_at = formatDate(task.created_at)
      return task
    })
    return tasks.data.result;
  }

  async createTask(newTask: Task): Promise<void> {
    axios.post(URL + "/create-task", { task: newTask });
  }

  async editTask(
    id: number,
    data: { name: string; owner_id: number }
  ): Promise<void> {
    axios.post(URL + "/edit/" + id, {
      task: { name: data.name, owner_id: data.owner_id },
    });
  }

  async removeTask(id: number): Promise<void> {
    axios.delete(URL + "/delete/" + id)
  }
}
