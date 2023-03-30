import { mount } from "@vue/test-utils";
import CreateTaskForm from "@/components/forms/CreateTaskForm.vue";
import { Task } from "@/types/Task";
import { createStore } from "vuex";

describe("CreateTaskForm.vue", () => {
  let store: any;

  beforeEach(() => {
    const userServiceMock = {
      getAllUsers: jest.fn(),
    };

    const taskServiceMock = {
      createTask: jest.fn((newTask: Task) => newTask),
    };
    store = createStore({
      state: {
        userService: userServiceMock,
        taskService: taskServiceMock,
      },
    });
  });

  it("Throws error when submitting with invalid input", async () => {
    const wrapper = mount(CreateTaskForm, {
      global: {
        plugins: [store],
      },
    });
    wrapper.vm.owner = {
      name: "Test owner",
      id: 1,
      created_at: new Date().toLocaleString(),
    };

    try {
      await wrapper.vm.createTask();
    } catch (error) {
      expect(error).toEqual(new Error("Must fill the required fields"));
    }
  });

  it("Submits successfully when the input is valid", async () => {
    const wrapper = mount(CreateTaskForm, {
      global: {
        plugins: [store],
      },
    });

    const newTask = {
      name: "Test Name",
      owner_id: 1,
    };

    wrapper.vm.name = newTask.name;
    wrapper.vm.owner = {
      name: "Test owner",
      id: 1,
      created_at: new Date().toLocaleString(),
    };
    await wrapper.vm.createTask();
    expect(store.state.taskService.createTask).toHaveBeenCalledWith(newTask);
  });
});
