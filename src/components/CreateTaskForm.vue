<template>
    <v-sheet class="mx-3 my-3" width="350">
        <v-sheet>
            <v-form class="mx-3 my-3" @submit.prevent="createTask">
                <h2>Create a task</h2>
                <v-text-field name="name" :rules="rules" label="Task Name" v-model="name"></v-text-field>
                <v-select :rules="rules" required v-model="owner" name="owner" label="Owner" :items="users"
                    item-title="name" return-object />
                <div class="d-flex flex-column align-center justify-center">
                    <v-btn :disabled="!name || !owner" variant="plain" type="submit" block :class="name && owner ? 'submit' : null">Submit</v-btn>
                </div>
            </v-form>
        </v-sheet>
    </v-sheet>
</template>

<script lang="ts">
import { User } from '../types/User';
import { defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'



export default defineComponent({
    setup(props, context) {
        const store = useStore();
        const userService = store.state.userService;
        const users = ref<User[]>([]);
        onMounted(async () => {
            users.value = await userService.getAllUsers();
        })

        const name = ref<string>('');
        const owner = ref<User>();

        const createTask = () => {
            const newTask = {
                name: name.value,
                owner_id: owner.value?.id,
            }
            if (name.value && owner.value) {                
                context.emit('create-task', newTask);
            }
        }

        return { users, name, owner, createTask }
    },
    data() {
        return {
            rules: [
                (value: string) => {
                    if (value) return true
                    return 'This field is required.'
                },
            ]
            ,
        }
    }
})
</script>

<style scoped>
.submit {
    color: green;
}
</style>