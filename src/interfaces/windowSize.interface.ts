export enum WindowSizesEnum {
  'extra_small' = 'extra_small',
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
  'extra_large' = 'extra_large',
}

export interface WindowSize {
  width: number;
  height: number;
  size: WindowSizesEnum;
}
