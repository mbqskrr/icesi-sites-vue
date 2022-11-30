import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Header from "./Header.vue";

describe('Header component unit test', () => {

    it("it renders the header", () => {

        const wrapper = mount(Header, {
            props: {
                numberLinks: 5,
                color: "red"
            }
        });

        const component = wrapper.find('.header');

        expect(component.classes()).toContain('header')

        expect(wrapper).toBeTruthy();

    });

    it("it test router-link", () => {
        const $route = {
            path: '/Icesi-Sites'
        }

        const wrapper = shallowMount(Header, {
            mocks: {
                $route
            }
        })

        wrapper.vm.$route.path
    });


});

