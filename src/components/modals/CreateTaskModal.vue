<template>
  <div class="text-center mt-10">
    <v-btn color="black">
      Create a task

      <v-dialog v-model="dialog" activator="parent" width="auto">
        <v-card>
          <CreateTaskForm />
          <v-card-actions>
            <v-btn id="close-button" color="black" block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CreateTaskForm from "../forms/CreateTaskForm.vue";

export default defineComponent({
  data() {
    return {
      dialog: false,
    }
  },
  components: {
    CreateTaskForm
  }
})
</script>
<style scoped></style>
