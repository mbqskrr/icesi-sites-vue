import { mount, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Sites from "./Sites.vue";

describe('Sites component unit test', () => {

    it("it renders the sites", () => {
        const wrapper = mount(Sites, {
            props: {
              numberSites: 3,
            }
          });
      
          expect(wrapper).toBeTruthy();
    })

})