<!-- TODO: Fix the alignment of the component to be centered -->
<template>
    <v-dialog v-model="dialog" width="auto">
        <template v-slot:activator="{ props }">
            <v-btn @click="() => getUpdatedUsers()" variant="plain" v-bind="props">
                Edit
            </v-btn>
        </template>
        <div class="edit-form">
        <v-card class="px-3 py-3" width="250">
                <v-sheet>
                    <v-form @submit="editTask">
                        <v-text-field v-model="name" :rules="rules" label="Task Name"></v-text-field>
                        <v-select name="owner" label="Owner" v-model="owner" :items="users" item-title="name"
                            return-object />
                        <div class="d-flex flex-column align-center justify-center">
                            <div class="confirm">
                                <ConfirmationModal :disabled="!changed || !name" :variant="'plain'"
                                    :open-button-text="'Edit'"
                                    :question="`Are you sure you want to edit the task: ${task.name}?`"
                                    :confirmation-function="editTask" />
                            </div>
                            <v-btn variant="plain" @click="dialog = false" block class="mt-2">Close</v-btn>
                        </div>
                    </v-form>
                </v-sheet>
            </v-card>
        </div>
    </v-dialog>
</template>

<script lang="ts">
import { Task } from '@/types/Task';
import { User } from '@/types/User';
import { computed, defineComponent, PropType, ref } from 'vue'
import ConfirmationModal from "../modals/ConfirmationModal.vue"
import { useStore } from 'vuex'
import updateUsers from '@/utils/updateUsers';


export default defineComponent({

    setup(props) {
        const store = useStore();
        const taskService = store.state.taskService;
        const name = ref<string>(props.task.name);
        const owner = ref<User>(props.task.owner);
        const users = ref<User[]>([]);

        const getUpdatedUsers = async () => {
            users.value = await updateUsers(store);
        }

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

        return { users, name, owner, editTask, changed, getUpdatedUsers }
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

.edit-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-53.5%, -50%);
}

</style>