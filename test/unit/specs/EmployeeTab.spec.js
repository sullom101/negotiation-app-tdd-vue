import { shallowMount } from '@vue/test-utils'
import EmployeeTab from '@/components/EmployeeTab'

describe('EmployeeTab', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(EmployeeTab)
  })

  it('Employee Input disapear should be false by default', () => {
    expect(wrapper.vm.employeeInputDisapear).toBeFalsy()
  })

  it('has input Minimium value of undefined by default ', () => {
    const input = wrapper.find('#employee-salary')
    expect(input.value).toBeUndefined()
  })

  it('SubmitEmployee function should change employeeInputDisapear to true  only if max was defined and > 0', () => {
    wrapper.vm.submitEmployee()
    expect(wrapper.vm.min).toBeUndefined()
    expect(wrapper.vm.employeeInputDisapear).toBeFalsy()
    wrapper.vm.min = 1100
    wrapper.vm.submitEmployee()
    expect(wrapper.vm.min).toEqual(1100)
    expect(wrapper.vm.employeeInputDisapear).toBeTruthy()
  })
})
