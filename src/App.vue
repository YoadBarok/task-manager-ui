<template>
  <v-app color="primary">
    <NavBar />
    <v-main class="d-flex flex-column align-center">
      <CreateTaskModal />
      <TasksList />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import TasksList from "./components/task-list/TasksList.vue";
import CreateTaskModal from "./components/modals/CreateTaskModal.vue"
import NavBar from "./components/NavBar.vue"
import { useStore } from 'vuex'


export default defineComponent({
  name: 'App',
  components: {
    TasksList,
    NavBar,
    CreateTaskModal,
  },

  setup() {
    const store = useStore();
    const userService = store.state.userService;
    onMounted(async () => {
      store.commit("updateUsers", await userService.getAllUsers());
    })

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
