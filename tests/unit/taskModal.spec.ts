import { mount } from "@vue/test-utils";
import TaskModal from "@/components/modals/TaskModal.vue";
import { createStore } from "vuex";

describe("TaskModal.vue", () => {
  let store: any;
  let mockedTask: any;

  beforeEach(() => {
    mockedTask = {
      id: 1,
      name: "Test task",
      owner_id: 1,
      owner: {
        id: 1,
        name: "Test Owner",
        created_at: Date.now().toLocaleString(),
      },
      job_state: "COMPLETE",
      created_at: Date.now().toLocaleString(),
    };
    const taskServiceMock = {
      removeTask: jest.fn(),
    };
    const userServiceMock = {
      getAllUsers: jest.fn(),
    };
    store = createStore({
      state: {
        taskService: taskServiceMock,
        userService: userServiceMock,
      },
    });
  });

  it("displays the task details correctly", async () => {
    const wrapper = mount(TaskModal, {
      props: {
        task: mockedTask,
      },
      global: {
        plugins: [store],
      },
    });
    
    expect(wrapper.find("h2").text()).toBe(mockedTask.name);
    expect(wrapper.find("h3").text()).toBe(mockedTask.owner.name);
    expect(wrapper.findAll("h3").at(1)?.text()).toBe(mockedTask.created_at);
  });
});
