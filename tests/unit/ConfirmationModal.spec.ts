import { mount } from "@vue/test-utils";
import ConfirmationModal from "@/components/modals/ConfirmationModal.vue";

describe("ConfirmationModal.vue", () => {
  it("displays the confirmation modal props correctly", async () => {

    const mockConfirmationFunction = jest.fn(() => "Test function output")

    const wrapper = mount(ConfirmationModal, {
      data() {
        return {
          dialog: true,
        };
      },
      props: {
        openButtonText: "Test open button text",
        question: "Test question",
        confirmationFunction: mockConfirmationFunction,
        color: "Test color",
        variant: "tonal",
        confirmColor: "Test confirm color",
        disabled: false,
      },
    });

    // Test for the correct question attribute
    expect(wrapper.find("v-card-text").text()).toBe("Test question");    

    // Test confirm button
    const confirmButton = wrapper.find("#confirmation-button")
    confirmButton.trigger('click')
    expect(mockConfirmationFunction).toHaveBeenCalled()
    expect(mockConfirmationFunction.mock.results[0].value).toBe("Test function output")
    expect(confirmButton.attributes('color')).toBe("Test confirm color")

    // Test cancel button
    const cancelButton = wrapper.find('#cancel-button')
    expect(cancelButton.attributes('variant')).toBe("plain")
    cancelButton.trigger('click');
    expect(wrapper.vm.dialog).toBe(false);
    
  });
});
 