import React, { ReactNode } from "react";

import styled from "styled-components";

import { Spacing } from "../../theme";

export const Elem: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <Center>{children}</Center>;
};

const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  gap: ${Spacing(4)};
  padding: ${Spacing(4)} ${Spacing(4)} ${Spacing(16)} ${Spacing(4)};
  max-width: 1200px;
`;
