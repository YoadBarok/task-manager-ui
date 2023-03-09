<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="auto">
            <template v-slot:activator="{ props }">
                <v-btn :variant="variant" :color="color" v-bind="props">
                    {{ openButtonText }}
                </v-btn>
            </template>

            <v-card>
                <v-card-text>
                    {{ question }}
                </v-card-text>
                <div class="d-flex flex-column justify-center align-center py-3">
                    <v-btn class="w-25" variant="plain" @click="confirmationFunction">Confirm</v-btn>
                    <v-btn class="w-25" variant="plain" @click="dialog = false">Cancel</v-btn>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        openButtonText: {
            required: true,
            type: String
        },
        question: {
            required: true,
            type: String
        },
        confirmationFunction: {
            required: true,
            type: Function
        },
        color: {
            required: false,
            type: String
        },
        variant: {
            required: false,
            type: String as PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">
        }
    },
    data() {
        return {
            dialog: false,
        }
    },
    setup(props) {
        console.log(props.color);

    }
})
</script>
