<template>
    <v-card-text class="d-flex flex-column align-center">
        <p>Task name:</p>
        <h2>{{ task.name }}</h2>
    </v-card-text>
    <div class="d-flex justify-center">
        <v-card-text class="d-flex flex-column align-center">
            <p>Owner:</p>
            <h3>{{ task.owner.name }}</h3>
        </v-card-text>
        <v-card-text class="d-flex flex-column align-center">
            <p>Created at:</p>
            <h3>{{ task.created_at }}</h3>
        </v-card-text>
    </div>
</template>

<script lang="ts">
import { Task } from '@/types/Task'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        task: {
            required: true,
            type: Object as PropType<Task>
        }
    },
})
</script>
