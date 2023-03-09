<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="auto">
            <template v-slot:activator="{ props }">
                <TaskCard v-bind="props" :task="task"></TaskCard>
            </template>

            <v-card>
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { Task } from '@/types/Task';
import { defineComponent, PropType, ref } from 'vue';
import TaskCard from "./TaskCard.vue";

export default defineComponent({
    data() {
        return {
            dialog: false,
        }
    },
    props: {
        task: {
            required: true,
            type: Object as PropType<Task>
        }
    },

    setup() {
        const hovered = ref<boolean>(false);

        return { hovered }
    },
    components: {
        TaskCard
    }
})
</script>
