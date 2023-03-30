import { State } from "@/store";
import { User } from "@/types/User";
import { Store } from "vuex";

export default async function updateTasks(store: Store<State>): Promise<User[]> {    
    const users = await store.state.userService.getAllUsers()
    store.commit("updateUsers", users);
    return users;
}
