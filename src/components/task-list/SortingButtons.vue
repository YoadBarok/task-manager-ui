<template>
    <header>
        <div class="order mt-5">
          <v-btn @click="changeOrder('name')">order by name</v-btn>
          <v-btn @click="changeOrder('owner')">order by owner</v-btn>
          <v-btn @click="changeOrder('created_at')">order by date</v-btn>
          <v-btn @click="changeOrder('job_state')">order by status</v-btn>
        </div>
      </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        changeOrder: {
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
