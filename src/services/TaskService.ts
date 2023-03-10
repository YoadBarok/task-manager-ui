import { Task } from "@/types/Task";
import { User } from "@/types/User";


// TODO: THIS IS A TEMPORARY IMPLEMENTATION! NEED TO REPLACE WITH AN AXIOS SERVICE
export class TaskService {

    yoad: User = {
        id: "1",
        name: "Yoad"
    }
    ruth: User = {
        id: "2",
        name: "Ruth"
    }

    allTasks: Task[] = [
        {
            job_id: "1",
            name: 'Wash the dishes',
            owner: this.yoad,
            job_state: "complete",
            created_at: new Date("10-10-2010").toLocaleString('en-gb')
        },
        {
            job_id: "2",
            name: 'Clean the kitchen',
            owner: this.yoad,
            job_state: "working",
            created_at: new Date().toLocaleString('en-gb')
        },
        {
            job_id: "3",
            name: 'Take Eden to preschool',
            owner: this.ruth,
            job_state: "working",
            created_at: new Date().toLocaleString('en-gb')
        },
        {
            job_id: "4",
            name: 'Study',
            owner: this.ruth,
            job_state: "complete",
            created_at: new Date().toLocaleString('en-gb')
        },
    ];

    getAllTasks(): Task[] {
        return this.allTasks
    }

    getCompletedTasks(): Task[] {
        return this.allTasks.filter(task => task.job_state === "complete")
    }
}