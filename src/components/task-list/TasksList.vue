<template>
    <div v-if="orderedTasks.length > 0" class="main">
        <SortingButtons v-if="orderedTasks.length > 0" :changeOrder="determineOrder" />
        <div class="task-list">
            <transition-group name="list" tag="ul">
                <li v-for="task in orderedTasks" :key="task.job_id">
                    <TaskListItem :task="task" />
                </li>
            </transition-group>
        </div>
    </div>
    <h1 class="mt-10" v-else>No tasks!</h1>
</template>


<script lang="ts">
import OrderDirection from '../../types/OrderDirection';
import OrderTerm from '../../types/OrderTerm';
import { computed, defineComponent, ref } from 'vue'
import TaskListItem from './TaskListItem.vue';
import sortTasks from "../../utils/sortTasks";
import SortingButtons from "./SortingButtons.vue";
import updateTasks from "@/utils/updateTasks";
import { useStore } from 'vuex';

export default defineComponent({
    setup() {
        const store = useStore();
        const order = ref<OrderTerm>('created_at');
        const direction = ref<OrderDirection>('desc');
        const tasks = computed(() => store.state.tasks);
        updateTasks(store);
        const orderedTasks = computed(() => {
            return sortTasks(tasks.value, order.value, direction.value)
        });

        const clicked = ref<boolean>(false);
        const determineOrder = (term: OrderTerm) => {
            order.value = term;
            direction.value = direction.value === 'desc' ? 'asc' : 'desc';
        }
        return { orderedTasks, clicked, determineOrder };
    },
    components: { TaskListItem, SortingButtons }
})
</script>

<style scoped>

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.task-list li {
    list-style-type: none;
    padding: 16px;
    margin: 16px 0;
}

.list-move {
    transition: all 0.5s;
}
</style>