<template>
    <v-card :variant="hovered" class="task-card" @mouseover="hovered = `tonal`" @mouseout="hovered = `plain`">
        <h2>{{ task.name }}</h2>
        <h3>{{ task.owner.name }}</h3>
        <h4>{{ task.created_at }}</h4>
        <h5>State: {{ task.job_state }}</h5>
    </v-card>
</template>

<script lang="ts">
import { Task } from '@/types/Task';
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
    props: {
        task: {
            required: true,
            type: Object as PropType<Task>
        }
    },

    setup() {
        const hovered = ref<'plain' | 'tonal'>('plain');

        return { hovered }
    }
})
</script>
<style>

.task-card {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dashed black;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
}

</style>