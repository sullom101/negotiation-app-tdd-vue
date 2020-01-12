import { shallowMount } from '@vue/test-utils'
import EmployerTab from '@/components/EmployerTab'

describe('EmployerTab', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(EmployerTab)
  })

  it('Employer Input disapear should be false by default', () => {
    expect(wrapper.vm.employerInputDisapear).toBeFalsy()
  })

  it('has input maximium value of undefined by default', () => {
    const input = wrapper.find('#employer-expect')
    expect(input.value).toBeUndefined()
  })

  // Test functions
  it('SubmitEmployer function should change employerInputDisapear to true only if max was defined and > 0', () => {
    wrapper.vm.submitEmployer()
    expect(wrapper.vm.max).toBeUndefined()
    expect(wrapper.vm.employerInputDisapear).toBeFalsy()
    wrapper.vm.max = 1200
    wrapper.vm.submitEmployer()
    expect(wrapper.vm.max).toEqual(1200)
    expect(wrapper.vm.employerInputDisapear).toBeTruthy()
  })
})
