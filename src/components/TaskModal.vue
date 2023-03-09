<template>
    <v-card-text>
        <h2>{{ task.name }}</h2>
    </v-card-text>
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
