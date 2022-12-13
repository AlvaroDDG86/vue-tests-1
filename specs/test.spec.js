import { mount } from '@vue/test-utils'

import TestComponent from '@/test.vue'
test('Mount the component', () => {
    const wrapper = mount(TestComponent)
    console.log(wrapper)
})
