import React from "react";
import { shallow } from "enzyme";
import Hamburger from './index';

describe('Hamburger', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Hamburger />);
    const button = wrapper.find('button');
    expect(button.length).toEqual(1);
  });
});