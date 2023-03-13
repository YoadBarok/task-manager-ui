<template>
    <div class="text-center mt-10">
      <v-btn
        color="black"
      >
        Create a task
  
        <v-dialog
          v-model="dialog"
          activator="parent"
          width="auto"
        >
          <v-card>
            <CreateTaskForm @create-task="createTask" />
            <v-card-actions>
              <v-btn color="black" block @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
    </div>
  </template>
<script lang="ts">
import { Task } from '@/types/Task';
import { defineComponent } from 'vue'
import CreateTaskForm from "./CreateTaskForm.vue"

export default defineComponent({
    name: "CreateTaskOverlay",
    data() {
        return {
            createFormVisible: false,
            dialog: false,
        }
    },
    methods: {
        showCreateForm() {
            this.createFormVisible = true;
        },
        async createTask(newTask: Task): Promise<void> {
            this.$emit('create-task', newTask);
        }
    },
    components: {
        CreateTaskForm
    }
})
</script>
<style scoped></style>
