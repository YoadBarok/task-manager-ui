<template>
  <v-app color="primary">
    <NavBar />
    <v-main class="d-flex flex-column align-center">
      <CreateTaskModal @create-task="createTask" />
      <SortingButtons v-if="tasks.length > 0" :sortTasks="sortTasks" />
      <h2 class="mt-10" v-if="tasks.length === 0">No tasks...</h2>
      <TasksList :tasks="tasks" :order="order" :direction="direction" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import TasksList from "./components/TasksList.vue";
import CreateTaskModal from "./components/CreateTaskModal.vue"
import NavBar from "./components/NavBar.vue"
import SortingButtons from "./components/SortingButtons.vue"
import OrderDirection from './types/OrderDirection';
import OrderTerm from './types/OrderTerm';
import { Task } from './types/Task'
import { useStore } from 'vuex'


export default defineComponent({
  name: 'App',
  components: {
    TasksList,
    NavBar,
    CreateTaskModal,
    SortingButtons
  },

  setup() {
    const store = useStore();
    const taskService = store.state.taskService
    const tasks = ref<Task[]>([]);
    const order = ref<OrderTerm>('created_at');
    const direction = ref<OrderDirection>('desc');
    onMounted(async () => {
      tasks.value = await taskService.getAllTasks();
      setInterval(async () => {
        tasks.value = await taskService.getAllTasks();
      }, 10000)
    })

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
  data() {
    return {
      createFormVisible: false
    }
  },
  methods: {
    showCreateForm() {
      this.createFormVisible = true;
    }
  }
})
</script>
