import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import WelcomeView from "./WelcomeView.vue";

describe('WelcomeView unit test', () => {

    it("it renders WelcomeView", () => {
        const wrapper = mount(WelcomeView);

        const component = wrapper.find('#site-name');

        expect(wrapper).toBeTruthy();

        expect(component.text()).toBe('Icesi Sites')
    })

})