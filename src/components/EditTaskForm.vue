<!-- TODO: Fix the alignment of the component to be centered -->
<template>
    <v-dialog v-model="dialog" width="auto">
        <template v-slot:activator="{ props }">
            <v-btn variant="plain" v-bind="props">
                Edit
            </v-btn>
        </template>
        <v-card class="px-3 py-3" width="250">
            <v-sheet>
                <v-form @submit.prevent>
                    <v-text-field v-model="taskName" :rules="rules" label="Task Name"></v-text-field>
                    <v-select name="owner" label="Owner" v-model="owner" :items="users" item-title="name" return-object />
                    <div class="d-flex flex-column align-center justify-center">
                        <v-btn variant="plain" type="submit" block class="mt-2">Submit</v-btn>
                        <v-btn variant="plain" @click="dialog = false" block class="mt-2">Close</v-btn>
                    </div>
                </v-form>
            </v-sheet>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { Task } from '@/types/Task';
import { defineComponent, PropType, ref } from 'vue'
import { UserService } from "../services/UserService";

export default defineComponent({

    setup() {
        const userService = new UserService();
        const users = ref(userService.getAllUsers());

        return { users }
    },

    props: {
        task: {
            required: true,
            type: Object as PropType<Task>
        }
    },
    data: (props) => ({
        taskName: props.task.name,
        owner: props.task.owner.name,
        rules: [
            (value: string) => {
                if (value) return true

                return 'You must enter a task name.'
            },
        ],
        dialog: false
    }),
})
</script>
