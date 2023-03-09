<template>
  <v-app color="primary">
    <v-main>
      <header>
        <div class="order">
          <v-btn @click="handleClick('name')">order by name</v-btn>
          <v-btn @click="handleClick('owner')">order by owner</v-btn>
          <v-btn @click="handleClick('created_at')">order by date</v-btn>
          <v-btn @click="handleClick('job_state')">order by status</v-btn>
        </div>
      </header>
      <TasksList :tasks="tasks" :order="order" :direction="direction" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TasksList from "./components/TasksList.vue";
import OrderDirection from './types/OrderDirection';
import OrderTerm from './types/OrderTerm';
import { Task } from './types/Task'
import { User } from './types/User';

export default defineComponent({
  name: 'App',
  components: {
    TasksList
  },

  setup() {
    const yoad: User = {
      id: "1",
      name: "Yoad"
    }
    const ruth: User = {
      id: "2",
      name: "Ruth"
    }
    const tasks = ref<Task[]>([
      {
        job_id: "1",
        name: 'Wash the dishes',
        owner: yoad,
        job_state: "complete",
        created_at: new Date("10-10-2010").toLocaleString('en-gb')
      },
      {
        job_id: "2",
        name: 'Clean the kitchen',
        owner: yoad,
        job_state: "working",
        created_at: new Date().toLocaleString('en-gb')
      },
      {
        job_id: "3",
        name: 'Take Eden to preschool',
        owner: ruth,
        job_state: "working",
        created_at: new Date().toLocaleString('en-gb')
      },
      {
        job_id: "4",
        name: 'Study',
        owner: ruth,
        job_state: "complete",
        created_at: new Date().toLocaleString('en-gb')
      },
    ]);

    const order = ref<OrderTerm>('created_at');
    const direction = ref<OrderDirection>('desc');

    const handleClick = (term: OrderTerm) => {
      order.value = term;
      direction.value = direction.value === 'desc' ? 'asc' : 'desc';
    }

    return { tasks, handleClick, order, direction };

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
</style>
