//Temporary Testing Script provided by thevangelist (https://gist.github.com/thevangelist/e2002bc6b9834def92d46e4d92f15874#file-my-component-spec-js)

import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

const wrapper = shallow(<App/>);

describe('(Component) MyComponent', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });
});