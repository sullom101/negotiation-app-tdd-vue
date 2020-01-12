import { shallowMount } from '@vue/test-utils'
import Modal from '@/components/Modal'

describe('Modal', () => {
  const factory = (propsData) => {
    return shallowMount(Modal, {
      propsData: {
        response: 121.2,
        ...propsData
      }
    })
  }

  it('has a message that shows based on minimium and maximium  ', () => {
    let wrapper = factory({ minimum: 1200, maximium: 2000 })
    expect(wrapper.vm.message).toEqual('Success!')
    wrapper = factory({ minimum: 6200, maximium: 2000 })
    expect(wrapper.vm.message).toEqual('Failed!')
  })
})
