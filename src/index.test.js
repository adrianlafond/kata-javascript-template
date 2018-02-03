import sayHello from './index'

describe('tests', () => {
  it('says hello by default', () => {
    expect(sayHello()).toEqual('hello')
  })
})
