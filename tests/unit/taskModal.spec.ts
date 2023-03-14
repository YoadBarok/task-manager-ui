import { shallowMount } from "@vue/test-utils";
import TaskModal from "@/components/TaskModal.vue";

describe("TaskModal.vue", () => {
  it("renders props.msg when passed", () => {
    const testUser = {
      name: "Test User",
      id: 1,
      created_at: Date.now().toLocaleString(),
    };
    const task = {
      id: 1,
      name: "test task",
      owner_id: 1,
      owner: testUser,
      job_state: "COMPLETE",
      created_at: Date.now().toLocaleString()
    };
    const wrapper = shallowMount(TaskModal, {
      provide: {
        task() {
          return task
        }
      }
    });
    expect(wrapper.text()).toMatch(task.name);
    expect(wrapper.text()).toMatch(task.created_at);
    expect(wrapper.text()).toMatch(task.owner.name);
  });
});
