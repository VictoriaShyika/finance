import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import {
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_TYPE,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_TYPE,
  SIZE_FONT_WEIGHT_ENUM,
} from "../../theme/size";
import { COLOR_DATA, COLOR_TYPE, COLOR_ENUM } from "../../theme/color";

export const Elem: React.FC<{
  color?: COLOR_TYPE;
  type?: SIZE_FONT_WEIGHT_TYPE;
  size?: SIZE_FONT_TYPE;
  children?: ReactNode;
}> = ({ children, color, size, type }) => {
  return (
    <Text color={color} size={size} type={type}>
      {children}
    </Text>
  );
};

const Text = styled.span<{
  size?: SIZE_FONT_TYPE;
  color?: COLOR_TYPE;
  type?: SIZE_FONT_WEIGHT_TYPE;
}>`
  font-family: "Roboto", sans-serif;
  ${({
    size = SIZE_FONT_ENUM.DEFAULT,
    color = COLOR_ENUM.DEFAULT,
    type = SIZE_FONT_WEIGHT_ENUM.DEFAULT,
  }) => css`
    text-align: left;
    font-size: ${SIZE_FONT_DATA[size]}px;
    color: ${COLOR_DATA[color]};
    font-weight: ${SIZE_FONT_WEIGHT_DATA[type]};
  `}
`;
