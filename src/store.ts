import { createStore } from 'vuex';
import { TaskService } from './services/TaskService';
import { UserService } from './services/UserService';
import { Task } from './types/Task';
import { User } from './types/User';

const taskService = new TaskService();
const userService = new UserService();
const tasks: Task[] = [];
const users: User[] = [];

export interface State {
    taskService: TaskService;
    userService: UserService;
    tasks: Task[];
    users: User[];
}

export const store = createStore<State>({
    state: {
        taskService,
        userService,
        tasks,
        users
    },
    mutations: {
        updateTasks(state, newTasks) {
            state.tasks = newTasks;
        },
        updateUsers(state, newUsers) {
            state.users = newUsers;
        }
    }
}); 