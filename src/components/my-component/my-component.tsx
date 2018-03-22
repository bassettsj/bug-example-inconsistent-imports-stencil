import { Component, Prop, Watch } from '@stencil/core';
// One style of import breaks the unit tests, the other breaks the actual build from stencil
// import cookie from 'js-cookie';
import * as cookie from 'js-cookie';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() name: string = cookie.get('name');

  @Watch('name')
  nameChanged(name) {
    cookie.set('name', name);
  }

  render() {
    return (
      <div>{this.name}</div>
    );
  }
}
