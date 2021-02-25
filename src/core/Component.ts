export interface ComponentInterface {
  render: () => string
}

export default class Component implements ComponentInterface {
  render() {
    return ''
  }
}
