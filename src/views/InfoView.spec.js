import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import InfoView from "./InfoView.vue";

describe('InfoView view unit test', () => {

    it("it renders the view", () => {

        const wrapper = mount(InfoView)

        const component = wrapper.find('.con');

        expect(component.classes()).toContain('con')

        expect(wrapper).toBeTruthy();

    })
})