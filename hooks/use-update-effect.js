import React from 'react';

export default function useUpdateEffect(effect, deps = []) {
  const firstRun = React.useRef(true);

  React.useEffect(
    () => {
      if (firstRun.current === true) {
        firstRun.current = false;
        return;
      }
      return effect();
    },

    // eslint-disable-next-line
    deps,
  );
}
