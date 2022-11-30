import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SignUpView from "./SignUpView.vue";

describe('SigInView view unit test', () => {


    it("it renders the view", () => {
        const wrapper = mount(SignUpView);

        const button = wrapper.find('button')
        button.trigger('click')


        expect(wrapper.emitted()).toHaveProperty('newUser')
    })

})