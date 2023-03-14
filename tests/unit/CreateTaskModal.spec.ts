import { shallowMount } from "@vue/test-utils";
import CreateTaskModal from "@/components/CreateTaskModal.vue";
import { Task } from "@/types/Task";
import { createStore } from "vuex";

describe("CreateTaskModal.vue", () => {

  it("check the standard behavior of the create task modal", async () => {
    const wrapper = shallowMount(CreateTaskModal, {
      data() {
        return {
          dialog: false,
        };
      },
    });

    // Test the close button's functionality
    const closeButton = wrapper.find("#close-button");
    closeButton.trigger("click");

    expect(wrapper.vm.dialog).toBe(false);
  });
});
