const { useState } = require('react');

export const useToggle = (initialToggle) => {
  const [toggleState, setToggleState] = useState(initialToggle || false);

  const on = () => {
    setToggleState(true);
  };

  const off = () => {
    setToggleState(false);
  };

  const toggle = () => {
    setToggleState(!toggle);
  };

  return { toggle, on, off, toggleState };
};
