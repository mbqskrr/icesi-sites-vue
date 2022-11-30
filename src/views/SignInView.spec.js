import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import SignInView from "./SignInView.vue";

describe('SigInView view unit test', () => {


    it("it renders the view", () => {
        const wrapper = mount(SignInView);

        const button = wrapper.find('button')
        button.trigger('click')


        expect(wrapper.emitted()).toHaveProperty('signIn')
    })

})