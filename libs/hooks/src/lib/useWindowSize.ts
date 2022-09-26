import { useEffect, useReducer } from 'react';
import { detector } from '@jam3/detect';

import { resizeService } from '@jam3/services';

interface State {
  width: number;
  height: number;
}

export function useWindowSize() {
  const [state, setState] = useReducer(
    (state: State, newState: State) => ({ ...state, ...newState }),
    {
      width: detector.window.innerWidth,
      height: detector.window.innerHeight,
    }
  );

  useEffect(() => {
    function update() {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    update();
    resizeService.listen(update);
    return () => {
      resizeService.dismiss(update);
    };
  }, []);

  return state;
}
