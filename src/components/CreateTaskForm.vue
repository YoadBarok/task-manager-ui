<template>
    <v-card class="mx-3 my-3" width="350">
        <v-sheet>
            <v-form class="mx-3 my-3" @submit.prevent="createTask">
                <h2>Create a task</h2>
                <v-text-field name="name" :rules="rules.name" label="Task Name" v-model="name"></v-text-field>
                <v-select required v-model="owner" name="owner" label="Owner" :items="users" item-title="name"
                    return-object />
                <div class="d-flex flex-column align-center justify-center">
                    <v-btn variant="plain" type="submit" block class="mt-2">Submit</v-btn>
                </div>
            </v-form>
        </v-sheet>
    </v-card>
</template>

<script lang="ts">
import { UserService } from '@/services/UserService';
import { Task } from '@/types/Task';
import { User } from '@/types/User';
import { defineComponent, PropType, ref } from 'vue'


export default defineComponent({
    setup(props, context) {
        const userService = new UserService();
        const users = ref<User[]>(userService.getAllUsers());

        const name = ref<string>('');
        const owner = ref<object>();

        const createTask = () => {
            const newTask = {
                name: name.value,
                owner: {...owner.value},
                job_state: "working",
                created_at: new Date().toLocaleString("en-gb")
            }
            console.log(newTask);
            context.emit('create-task', newTask);
        }

        return { users, name, owner, createTask }
    },
    props: {
        tasks: {
            required: true,
            type: Array as PropType<Task[]>
        }
    },
    method: {

    },
    data() {
        return {
            rules: {
                name: [(value: string) => {
                    if (value) return true

                    return 'You must enter a task name.'
                }],
            },
        }
    }
})
</script>
