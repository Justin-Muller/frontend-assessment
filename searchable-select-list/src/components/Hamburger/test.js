import React from "react";
import { mount } from "enzyme";
import Hamburger from './index';

describe('Hamburger', () => {
  it('should render correctly', () => {
    const element = mount(<Hamburger />);
    console.log('element = ', element);
  });
});