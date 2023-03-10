<template>
  <v-app color="primary">
    <v-main class="d-flex flex-column align-center">
      <header>
        <div class="my-5 d-flex justify-center">
          <v-btn>
            create a task
            <v-overlay activator="parent">
              <div class="overlay-content">
                <CreateTaskForm @create-task="createTask" :tasks="tasks" />
              </div>
            </v-overlay>
          </v-btn>
        </div>
        <div class="order">
          <v-btn @click="sortTasks('name')">order by name</v-btn>
          <v-btn @click="sortTasks('owner')">order by owner</v-btn>
          <v-btn @click="sortTasks('created_at')">order by date</v-btn>
          <v-btn @click="sortTasks('job_state')">order by status</v-btn>
        </div>
      </header>
      <TasksList :tasks="tasks" :order="order" :direction="direction" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
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
    const tasks = ref<Task[]>([]);
    onMounted(async () => {
      tasks.value = await taskService.getCompletedTasks();
    })
    const order = ref<OrderTerm>('created_at');
    const direction = ref<OrderDirection>('desc');

    const sortTasks = (term: OrderTerm) => {
      order.value = term;
      direction.value = direction.value === 'desc' ? 'asc' : 'desc';
    }

    const createTask = async (newTask: Task) => {
      await taskService.createTask(newTask);
      window.location.reload();
    }

    return { tasks, sortTasks, order, direction, createTask };

  },
})
</script>

<style scoped>
button {
  margin: 0 10px;
}

.overlay-content {
  position: absolute;
  transform: translate(35.5em, 10em);
}
</style>
