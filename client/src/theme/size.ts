export enum SIZE_FONT_ENUM {
  DEFAULT = "default",
}

export type SIZE_FONT_TYPE = `${SIZE_FONT_ENUM}`;

export const SIZE_FONT_DATA = {
  [SIZE_FONT_ENUM.DEFAULT]: 12,
};

export enum SIZE_FONT_WEIGHT_ENUM {
  THIN = "thin",
  DEFAULT = "default",
}

export type SIZE_FONT_WEIGHT_TYPE = `${SIZE_FONT_WEIGHT_ENUM}`;

export const SIZE_FONT_WEIGHT_DATA = {
  [SIZE_FONT_WEIGHT_ENUM.THIN]: 400,
  [SIZE_FONT_WEIGHT_ENUM.DEFAULT]: 500,
};
