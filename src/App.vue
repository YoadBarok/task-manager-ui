<template>
  <v-app color="primary">
    <v-main class="d-flex flex-column align-center">
      <header>
        <div class="order">
          <v-btn @click="handleClick('name')">order by name</v-btn>
          <v-btn @click="handleClick('owner')">order by owner</v-btn>
          <v-btn @click="handleClick('created_at')">order by date</v-btn>
          <v-btn @click="handleClick('job_state')">order by status</v-btn>
        </div>
      </header>
      <v-expansion-panels rounded="10px" variant="accordion" class="my-10">
        <v-expansion-panel class="custom-panel" title="Create a task" >
          <v-expansion-panel-text>
            <CreateTaskForm @create-task="createTask" :tasks="tasks" />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <TasksList :tasks="tasks" :order="order" :direction="direction" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TasksList from "./components/TasksList.vue";
import CreateTaskForm from "./components/CreateTaskForm.vue"
import { TaskService } from './services/TaskService';
import OrderDirection from './types/OrderDirection';
import OrderTerm from './types/OrderTerm';
import { Task } from './types/Task'

export default defineComponent({
  name: 'App',
  components: {
    TasksList,
    CreateTaskForm
  },

  setup() {

    const taskService = new TaskService();
    const tasks = ref<Task[]>(taskService.getCompletedTasks());
    const order = ref<OrderTerm>('created_at');
    const direction = ref<OrderDirection>('desc');

    const handleClick = (term: OrderTerm) => {
      order.value = term;
      direction.value = direction.value === 'desc' ? 'asc' : 'desc';
    }

    return { tasks, handleClick, order, direction };

  },
  methods: {
    createTask(newTask: Task) {
      // Replace with taskService.createTask(newTask)      
      this.tasks.push(newTask);
    }
  }
})
</script>

<style>
header {
  text-align: center;
}

header .order {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.custom-panel {
  max-width: 500px; /* set the width to whatever value you want */
}
</style>
