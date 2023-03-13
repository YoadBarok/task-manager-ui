<template>
    <v-app-bar color="black">
        <v-toolbar-title>Task Manager</v-toolbar-title>
    </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data: () => ({ drawer: false }),
})
</script>