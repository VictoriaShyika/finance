import React from "react";
import styled, { css } from "styled-components";
import { TextElem } from "../text";
import { HiArrowSmDown } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";
import { COLOR_DATA, COLOR_ENUM, COLOR_TYPE } from "../../theme/color";
import { Spacing } from "../../theme";

export const Elem: React.FC<{
  ticker: any;
}> = ({ ticker }) => {
  return (
    <CardContainer>
      <Container>
        {ticker.yield >= 1 ? (
          <ImgContainer color="success" bgColor="backgroundSuccess">
            <HiArrowSmUp />
          </ImgContainer>
        ) : (
          <ImgContainer color="error" bgColor="backgroundError">
            <HiArrowSmDown />
          </ImgContainer>
        )}
        <PriceContainer>
          <TextElem>{ticker.ticker}</TextElem>
          <TextElem color="textSecondary" type="thin">
            {ticker.price}
          </TextElem>
        </PriceContainer>
      </Container>

      <ProcentContainer>
        {ticker.yield >= 1 ? (
          <>
            <TextElem color="success" type="thin">
              + {ticker.change_percent}%
            </TextElem>
            <TextElem color="success" type="thin">
              + {ticker.dividend}
            </TextElem>
          </>
        ) : (
          <>
            <TextElem color="error" type="thin">
              - {ticker.change_percent}%
            </TextElem>
            <TextElem color="error" type="thin">
              - {ticker.dividend}
            </TextElem>
          </>
        )}
      </ProcentContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${Spacing(2.5)};
  border: 1px solid ${COLOR_DATA[COLOR_ENUM.BORDER]};
  width: 150px;
  border-radius: 10px;
  padding: ${Spacing(1.5)} ${Spacing(2)};
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing(1)};
`;
const ProcentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing(1)};
`;
const ImgContainer = styled.div<{
  color?: COLOR_TYPE;
  bgColor?: COLOR_TYPE;
}>`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR_DATA[COLOR_ENUM.BACKGROUND_PRIMARY]};
  ${({ color = COLOR_ENUM.DEFAULT, bgColor = COLOR_ENUM.DEFAULT }) => css`
    color: ${COLOR_DATA[color]};
    background-color: ${COLOR_DATA[bgColor]};
  `}
`;
const Container = styled.div`
  display: flex;
  gap: ${Spacing(2.5)};
  align-items: center;
`;
