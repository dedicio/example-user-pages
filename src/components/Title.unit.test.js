import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Title from './Title.vue'

describe('Title.vue', () => {
    it('renders props.text when passed', () => {
        const text = 'new message'
        const wrapper = shallowMount(Title, {
            propsData: { text }
        })

        const h1 = wrapper.find('h1')

        expect(h1.text()).toBe(text)
    })
})
