import Vuex from 'vuex';
import { TaskService } from './services/TaskService';
import { UserService } from './services/UserService';

const taskService = new TaskService();
const userService = new UserService();

export const store = new Vuex.Store({
    state: {
        taskService,
        userService
    }
}); 