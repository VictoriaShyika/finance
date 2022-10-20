export enum COLOR_ENUM {
  DEFAULT = "default",
  TEXT_PRIMARY = "textPrimary",
  TEXT_SECONDARY = "textSecondary",
  ERROR = "error",
  BUTTON_PRIMARY = "buttonPrimary",
  BORDER = "border",
  SUCCESS = "success",
  BACKGROUND_PRIMARY = "backgroundPrimary",
  BACKGROUND_SUCCESS = "backgroundSuccess",
  BACKGROUND_ERROR = "backgroundError",
}

export type COLOR_TYPE = `${COLOR_ENUM}`;

export const COLOR_DATA = {
  [COLOR_ENUM.DEFAULT]: "#121212",
  [COLOR_ENUM.TEXT_PRIMARY]: "#121212",
  [COLOR_ENUM.TEXT_SECONDARY]: "#363636",
  [COLOR_ENUM.ERROR]: "#c5221f",
  [COLOR_ENUM.BUTTON_PRIMARY]: "#F46F17",
  [COLOR_ENUM.BORDER]: "#dadce0",
  [COLOR_ENUM.SUCCESS]: "#137333",
  [COLOR_ENUM.BACKGROUND_PRIMARY]: "#FEF1E8",
  [COLOR_ENUM.BACKGROUND_SUCCESS]: "#e6f4ea",
  [COLOR_ENUM.BACKGROUND_ERROR]: "#fce8e6",
};
