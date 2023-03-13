<template>
    <v-sheet class="mx-3 my-3" width="350">
        <v-sheet>
            <v-form class="mx-3 my-3" @submit.prevent="createTask">
                <h2>Create a task</h2>
                <v-text-field name="name" :rules="rules" label="Task Name" v-model="name"></v-text-field>
                <v-select :rules="rules" required v-model="owner" name="owner" label="Owner" :items="users"
                    item-title="name" return-object />
                <div class="d-flex flex-column align-center justify-center">
                    <v-btn :disabled="!name || !owner" variant="plain" type="submit" block class="mt-2">Submit</v-btn>
                </div>
            </v-form>
        </v-sheet>
    </v-sheet>
</template>

<script lang="ts">
import { UserService } from '@/services/UserService';
import { User } from '@/types/User';
import { defineComponent, ref } from 'vue'


export default defineComponent({
    setup(props, context) {
        const userService = new UserService();
        const users = ref<User[]>(userService.getAllUsers());

        const name = ref<string>('');
        const owner = ref<object>();

        const createTask = () => {
            const newTask = {
                name: name.value,
                owner: { ...owner.value },
                job_state: "working",
                created_at: new Date().toLocaleString("en-gb")
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
</style>