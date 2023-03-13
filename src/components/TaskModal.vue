<template>
    <div class="d-flex flex-column align-center content">
        <v-card-text class="d-flex flex-column align-center">
            <p>Task name:</p>
            <h2>{{ task.name }}</h2>
        </v-card-text>
        <div>
            <v-card-text class="d-flex flex-column align-center">
                <p>Owner:</p>
                <h3>{{ task.owner.name }}</h3>
            </v-card-text>
            <v-card-text class="d-flex flex-column align-center">
                <p>Created at:</p>
                <h3>{{ task.created_at }}</h3>
            </v-card-text>
        </div>
        <div class="d-flex justify-between mb-3">
            <EditTaskForm :task="task" />
            <ConfirmationModal :confirmColor="'error'" :variant="'plain'" :color="'error'" :open-button-text="'Delete'"
                :question="`Are you sure you want to delete the task: ${task.name}?`" :confirmation-function="removeTask" />
        </div>
    </div>
</template>

<script lang="ts">
import { TaskService } from '@/services/TaskService'
import { Task } from '@/types/Task'
import { defineComponent, PropType } from 'vue'
import ConfirmationModal from "./ConfirmationModal.vue"
import EditTaskForm from "./EditTaskForm.vue"

export default defineComponent({

    setup(props) {
        const taskService = new TaskService();
        const removeTask = async () => {
            if (props.task?.job_id){
                await taskService.removeTask(props.task.job_id);
                window.location.reload();
            }
        }
        return {removeTask}
    },

    props: {
        task: {
            required: true,
            type: Object as PropType<Task>
        }
    },
    components: {
        ConfirmationModal,
        EditTaskForm
    },

})
</script>
<style scoped>
.content {
    max-width: 35vw;
}
</style>