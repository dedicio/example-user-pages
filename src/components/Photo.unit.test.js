import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Photo from './Photo.vue'

describe('Photo.vue', () => {
    it('renders component', () => {
        const props = {
            url: 'https://image.url',
            alt: 'image alt',
        }
        const wrapper = shallowMount(Photo, {
            propsData: props
        })

        const img = wrapper.find('img')

        expect(img.attributes('src')).toBe(props.url)
    })
})
