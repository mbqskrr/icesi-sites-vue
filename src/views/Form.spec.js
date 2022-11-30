import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Form from "./Form.vue";

describe('Form view unit test', () => {

    it("it renders the form", () => {
        const wrapper = mount(Form);

        const component = wrapper.find('.submit');

        expect(component.classes()).toContain('submit')

        expect(wrapper).toBeTruthy();

        expect(component.text()).toBe('Agregar')
    }),

        it("it renders the form", () => {
            const wrapper = mount(Form);

            const button = wrapper.find('button')
            button.trigger('click')


            expect(wrapper.emitted()).toHaveProperty('submit')
        })

})