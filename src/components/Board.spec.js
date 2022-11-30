import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Board from "./Board.vue";

describe('Board component unit test', () => {

    it("it renders the Board", () => {
    
        const wrapper = shallowMount(Board);

        const component = wrapper.find('.container');

        expect(component.classes()).toContain('container')

        expect(wrapper).toBeTruthy();

    })

})