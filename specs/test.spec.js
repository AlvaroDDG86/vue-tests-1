import { mount, shallowMount } from '@vue/test-utils'

import TestComponent from '@/test.vue'
import List from '@/list.vue'
test('Mount the test component', () => {
    const wrapper = mount(TestComponent, {
        propsData: {
            value: 'Test'
        }
    })
    expect(wrapper.html()).toMatchSnapshot()
})

test('Mount the list component', () => {
    const wrapper = shallowMount(List)
    expect(wrapper.html()).toMatchSnapshot()
})
