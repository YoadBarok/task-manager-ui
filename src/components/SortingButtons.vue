<template>
    <header>
        <div class="order mt-5">
          <v-btn @click="sortTasks('name')">order by name</v-btn>
          <v-btn @click="sortTasks('owner')">order by owner</v-btn>
          <v-btn @click="sortTasks('created_at')">order by date</v-btn>
          <v-btn @click="sortTasks('job_state')">order by status</v-btn>
        </div>
      </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        sortTasks: {
            required: true,
            type: Function
        }
    }
})
</script>

<style scoped>
button {
  margin: 10px 10px;
}
</style>
