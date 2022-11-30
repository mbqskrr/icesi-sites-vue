import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Form from "./Form.vue";

describe('Header component unit test', () => {

    it("it renders the header", () => {
        const wrapper = mount(Form);

        const component = wrapper.find('.submit');

        expect(component.classes()).toContain('submit')

        expect(wrapper).toBeTruthy();

        expect(component.text()).toBe('Agregar')
    })

})