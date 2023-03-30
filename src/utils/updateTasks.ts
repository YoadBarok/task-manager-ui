import { State } from "@/store";
import { Store } from "vuex";

export default async function updateTasks(store: Store<State>) {    
    store.commit("updateTasks", await store.state.taskService.getAllTasks());
    setInterval(async () => {
        const updatedTasks = await store.state.taskService.getAllTasks()
        store.commit("updateTasks", updatedTasks);
    }, 10000);
}
