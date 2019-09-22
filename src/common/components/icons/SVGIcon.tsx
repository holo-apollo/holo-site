import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type VBox = {
  minX: number;
  minY: number;
  width: number;
  height: number;
};

type Props = {
  vBox: VBox;
  width?: number;
  height?: number;
  color: string;
};

const StyledSVG = styled.svg`
  display: block;
`;

const getSrcWidth = (vBox: VBox) => vBox.width;

const getSrcHeight = (vBox: VBox) => vBox.height;

const calcWidth = (vBox: VBox, width?: number, height?: number) => {
  if (width !== undefined) return width;
  if (height === undefined) return 0;

  const srcWidth = getSrcWidth(vBox);
  const srcHeight = getSrcHeight(vBox);
  return srcWidth * (height / srcHeight);
};

const calcHeight = (vBox: VBox, width?: number, height?: number) => {
  if (height !== undefined) return height;
  if (width === undefined) return 0;

  const srcWidth = getSrcWidth(vBox);
  const srcHeight = getSrcHeight(vBox);
  return srcHeight * (width / srcWidth);
};

const SVGIcon: FunctionComponent<Props> = ({
  vBox,
  width,
  height,
  color,
  children,
}) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`${vBox.minX} ${vBox.minY} ${vBox.width} ${vBox.height}`}
    width={calcWidth(vBox, width, height)}
    height={calcHeight(vBox, width, height)}
    fill={color}
  >
    {children}
  </StyledSVG>
);

export default SVGIcon;
