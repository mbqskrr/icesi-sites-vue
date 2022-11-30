import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import IcesiSites from "./IcesiSites.vue";

describe('IcesiSites view unit test', () => {

    it("it renders the view", () => {

        const wrapper = mount(IcesiSites)

        const view = wrapper.find('.panels');

        expect(view.classes()).toContain('panels')

        expect(wrapper).toBeTruthy();
    })

})