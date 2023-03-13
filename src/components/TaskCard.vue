<template>
    <div :class="task.job_state === 'COMPLETE' ? 'complete': 'working'">
        <v-card :variant="hovered" class="task-card" @mouseover="hovered = `tonal`" @mouseout="hovered = `plain`">
            <div class="task-name">
                <h2>{{ task.name }}</h2>
            </div>
            <h3>{{ task.owner.name }}</h3>
            <h4>{{ task.created_at }}</h4>
            <h5>State: <span>{{ task.job_state }}</span></h5>
        </v-card>
    </div>
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

    setup(props) {
        const hovered = ref<'plain' | 'tonal'>('plain');
        return { hovered }
    },
})
</script>
<style>

.task-card {
    max-width: 30vw;
    max-height: 30vh;
    padding: 1em;
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

.task-name {
    overflow: hidden;
    mask-image: linear-gradient(180deg, #000 60%, transparent);
}

.working span {
    color: red;
}

.complete span {
    color: green;
}

</style>