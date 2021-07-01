import React from "react";
import { act } from "react-dom/test-utils";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const TestHook = ({ callback }) => {
  act(() => callback());
  return null;
};

export const testHook = (callback) => {
  mount(<TestHook callback={callback} />);
};
