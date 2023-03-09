<template>
    <v-card :variant="hovered ? `tonal` : `plain`" class="task-card" @mouseover="() => hovered = true" @mouseout="() => hovered = false">
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
        const hovered = ref<boolean>(false);

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