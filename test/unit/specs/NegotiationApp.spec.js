import Vue from 'vue'
import NegotiationApp from '@/components/NegotiationApp'
import { shallowMount } from '@vue/test-utils'

describe('NegotiationApp', () => {
  // Testing the If Buttons are existed and shows the write Tab Name

  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(NegotiationApp)
  })

  it('should render Employer Tab Button with Employer-Tab text', () => {
    const EmployerButton = wrapper.find('#EmployerButton')
    expect(EmployerButton.text())
      .toEqual('Employer-Tab')
  })

  it('should render Employee Tab Button with Employee-Tab text', () => {
    const EmployeeButton = wrapper.find('#EmployeeButton')
    expect(EmployeeButton.text())
      .toEqual('Employee-Tab')
  })

  // Testing the default data in negotiationApp component
  it('tabToggle shouold be True by default', () => {
    expect(wrapper.vm.tabToggle).toBeTruthy()
  })

  it('minimum salary should be undefined by default', () => {
    expect(wrapper.vm.minimium).toBeUndefined()
  })

  it('maximium salary should be undefined by default', () => {
    expect(wrapper.vm.maximium).toBeUndefined()
  })

  it('modal should be false by default', () => {
    expect(wrapper.vm.modal).toBeFalsy()
  })

  // Testing methods on Negotiation app
  it('tabToggle should be false after calling toggleEmployee function', () => {
    wrapper.vm.toggleEmployee()
    expect(wrapper.vm.tabToggle).toBeFalsy()
  })

  it('tabToggle should be true after calling toggleEmployer function', () => {
    wrapper.vm.toggleEmployer()
    expect(wrapper.vm.tabToggle).toBeTruthy()
  })

  it('showWeather should show the weather tempreture in London', () => {
    wrapper.vm.showWeather()
    wrapper.vm.$nextTick(() => {
      let result = wrapper.vm.temp
      expect(result).not.toBeUndefined()
    })
  })

  // Testing watchers
  it('Maximium Watcher function to keep track of minimium & maximium ', () => {
    wrapper.vm.$options.watch.maximium(wrapper.vm)
    expect(jest.fn()).not.toHaveBeenCalled()
  })

  it('Minimium Watcher function to keep track of minimium & maximium ', () => {
    wrapper.vm.$options.watch.minimum(wrapper.vm)
    expect(jest.fn()).not.toHaveBeenCalled()
  })

  it('watchMinMax function to change model from false to true only if miniium and maximium are set and > 0 so the modal pops up', () => {
    wrapper.vm.watchMinMax()
    expect(wrapper.vm.modal).toBeFalsy()
    wrapper.vm.minimium = 1100
    wrapper.vm.maximium = 2000
    wrapper.vm.watchMinMax()
    expect(wrapper.vm.modal).toBeFalsy()
  })
})
