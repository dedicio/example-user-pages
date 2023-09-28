import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import Description from './Description.vue'

describe('Description.vue', () => {
    it('renders props.text when passed', () => {
        const text = 'new message'
        const wrapper = shallowMount(Description, {
            propsData: { text }
        })

        const p = wrapper.find('p')

        expect(p.text()).toBe(text)
        expect(p.classes()).toContain('description')
    })
})
