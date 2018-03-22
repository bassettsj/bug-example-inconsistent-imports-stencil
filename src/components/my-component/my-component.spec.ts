import { flush, render } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('should build', () => {
    expect(new MyComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [MyComponent],
        html: '<my-component></my-component>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('');
    });

    it('should work with name', async () => {
      element.name = 'stencil';
      await flush(element);
      expect(element.textContent.trim()).toEqual('stencil');
    });
  });
});
