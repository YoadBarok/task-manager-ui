<template>
    <div class="task-list">
        <transition-group name="list" tag="ul">
            <li v-for="task in orderedTasks" :key="task.job_id">
                <TaskDialog :task="task" />
            </li>
        </transition-group>
    </div>
</template>


<script lang="ts">
import OrderDirection from '@/types/OrderDirection';
import OrderTerm from '@/types/OrderTerm';
import { Task } from '@/types/Task';
import { computed, defineComponent, PropType, ref } from 'vue'
import TaskListItem from './TaskListItem.vue';

export default defineComponent({
    props: {
        tasks: {
            required: true,
            type: Array as PropType<Task[]>
        },
        order: {
            required: true,
            type: String as PropType<OrderTerm>
        },
        direction: {
            required: true,
            type: String as PropType<OrderDirection>
        }
    },
    setup(props) {
        const orderedTasks = computed(() => {
            return [...props.tasks].sort((a: Task, b: Task) => {
                if (props.order === "owner") {
                    if (props.direction === "desc") {
                        return a.owner.name > b.owner.name ? 1 : -1;
                    }
                    return a.owner.name < b.owner.name ? 1 : -1;
                }
                if (props.direction === "desc") {
                    return a[props.order] > b[props.order] ? 1 : -1;
                }
                return a[props.order] < b[props.order] ? 1 : -1;
            });
        });

        const clicked = ref<boolean>(false);
        return { orderedTasks, clicked };
    },
    components: { TaskDialog: TaskListItem }
})
</script>

<style scoped>

.task-list li {
    list-style-type: none;
    padding: 16px;
    margin: 16px 0;
}

.list-move {
    transition: all 0.5s;
}
</style>