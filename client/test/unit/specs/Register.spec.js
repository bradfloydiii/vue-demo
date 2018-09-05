import Vue from 'vue'
import Register from '@/components/Register'

describe('Register.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Register)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Add/Retrieve User')
  })
})
