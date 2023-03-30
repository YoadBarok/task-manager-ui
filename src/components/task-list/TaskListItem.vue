<template>
    <div class="text-center">
        <v-dialog :disabled="task.job_state === 'WORKING'" v-model="dialog" width="auto">
            <template v-slot:activator="{ props }">
                <TaskListItemInfo v-bind="props" :task="task" />
            </template>

            <v-card>
                <v-card-text>
                    <TaskModal :task="task" />
                </v-card-text>
                <v-card-actions class="d-flex flex-column justify-center">
                    <v-btn block @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { Task } from '../../types/Task';
import { defineComponent, PropType } from 'vue';
import TaskListItemInfo from "./TaskListItemInfo.vue";
import TaskModal from "../modals/TaskModal.vue";

export default defineComponent({
    data() {
        return {
            dialog: false,
        }
    },
    props: {
        task: {
            required: true,
            type: Object as PropType<Task>
        }
    },

    components: {
        TaskListItemInfo,
        TaskModal
    }
})
</script>