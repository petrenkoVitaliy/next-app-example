import { RefObject, useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { WindowSize, WindowSizesEnum } from '@src/interfaces/windowSize.interface';

const DEBOUNCE_DELAY = 50;

export const useWindowSize = (ref: RefObject<HTMLDivElement>) => {
  const [size, setSize] = useState<WindowSize | null>(null);

  const handleWindowResize = useCallback(
    debounce(() => {
      let size: WindowSizesEnum | null = null;
      const innerWidth = ref?.current?.clientWidth || window.innerWidth;
      const innerHeight = ref?.current?.clientHeight || window.innerHeight;

      switch (true) {
        case innerWidth < 400:
          size = WindowSizesEnum.extra_small;
          break;
        case innerWidth < 650:
          size = WindowSizesEnum.small;
          break;
        case innerWidth < 850:
          size = WindowSizesEnum.medium;
          break;
        case innerWidth < 1920:
          size = WindowSizesEnum.large;
          break;
        case innerWidth < 2000:
          size = WindowSizesEnum.extra_large;
          break;
        default:
          size = WindowSizesEnum.extra_large;
      }

      setSize({
        width: innerWidth,
        height: innerHeight,
        size,
      });
    }, DEBOUNCE_DELAY),
    [debounce, ref],
  );

  useEffect(() => {
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { windowSize: size };
};
