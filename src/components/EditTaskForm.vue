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
                <v-form @submit="editTask">
                    <v-text-field v-model="name" :rules="rules" label="Task Name"></v-text-field>
                    <v-select name="owner" label="Owner" v-model="owner" :items="users" item-title="name" return-object />
                    <div class="d-flex flex-column align-center justify-center">
                        <div class="confirm">
                            <ConfirmationModal :disabled="!changed || !name" :variant="'plain'" :open-button-text="'Edit'"
                                :question="`Are you sure you want to edit the task: ${task.name}?`"
                                :confirmation-function="editTask" />
                        </div>
                        <v-btn variant="plain" @click="dialog = false" block class="mt-2">Close</v-btn>
                    </div>
                </v-form>
            </v-sheet>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { TaskService } from '@/services/TaskService';
import { Task } from '@/types/Task';
import { User } from '@/types/User';
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import { UserService } from "../services/UserService";
import ConfirmationModal from "./ConfirmationModal.vue"

export default defineComponent({

    setup(props) {
        const userService = new UserService();
        const taskService = new TaskService();
        const name = ref<string>(props.task.name);
        const owner = ref<User>(props.task.owner);        
        const users = ref<User[]>([]);

        onMounted(async () => {
            users.value = await userService.getAllUsers();
        })

        const editTask = async () => {
            const id = props.task.id;
            
            if (id) {
                const data = { name: name.value, owner_id: owner.value.id }
                await taskService.editTask(id, data);
                window.location.reload();
            }
        }

        const changed = computed(() => {
            return name.value !== props.task.name || owner.value.id !== props.task.owner.id;
        })


        return { users, name, owner, editTask, changed }
    },
    props: {
        task: {
            required: true,
            type: Object as PropType<Task>
        }
    },
    components: {
        ConfirmationModal
    }
    ,
    data: () => ({
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
<style scoped>
.confirm {
    min-height: 36px;
}
</style>