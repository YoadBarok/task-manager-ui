<template>
    <v-dialog v-model="dialog" width="auto">
        <template v-slot:activator="{ props }">
            <v-btn variant="plain" v-bind="props">
                Edit
            </v-btn>
        </template>
        <v-card>
            <v-sheet width="300" class="mx-auto">
                <v-form @submit.prevent>
                    <v-text-field v-model="taskName" :rules="rules" label="Task Name"></v-text-field>
                    <v-text-field v-model="owner" :rules="rules" label="Owner"></v-text-field>
                    <v-btn variant="plain" type="submit" block class="mt-2">Submit</v-btn>
                    <v-btn variant="plain" @click="dialog = false" block class="mt-2">Close</v-btn>
                </v-form>
            </v-sheet>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { Task } from '@/types/Task';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        task: {
            required: true,
            type: Object as PropType<Task>
        }
    },
    data: (instance) => ({
        taskName: instance.task.name,
        owner: instance.task.owner.name,
        rules: [
            (value: any) => {
                if (value) return true

                return 'You must enter a task name.'
            },
        ],
        dialog: false
    }),
})
</script>
