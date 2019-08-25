// @flow
import styled, { css } from 'styled-components';

export const TopCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const TopLeftCont = styled.div`
  width: 439px;
  font-size: 14px;
  line-height: 18px;
  margin-right: 40px;
`;

export const ButtonCont = styled.div`
  margin-top: 13px;
`;

export const ColumnsCont = styled.div`
  margin-top: 53px;
  margin-bottom: 65px;
  display: flex;
  height: 650px;
`;

const getColumnContStyles = ({
  background,
  color,
  visible,
  index,
}: {
  background: string,
  color: string,
  visible: boolean,
  index: number,
}) => css`
  background: ${background};
  color: ${color};
  height: ${visible ? '100%' : '0'};
  overflow: hidden;
  transition: height 0.5s ease-in ${index * 1.6}s;
`;

export const ColumnCont = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${getColumnContStyles};
`;

export const ColumnTopCont = styled.div`
  margin: 84px 50px 30px;
`;

const getColumnBottomContStyles = ({
  backgroundUrl,
  visible,
  index,
}: {
  backgroundUrl: string,
  visible: boolean,
  index: number,
}) => css`
  background-image: url(${backgroundUrl});
  background-size: cover;
  opacity: ${visible ? '1' : '0'};
  transition: opacity 0.5s ease-in ${index * 1.6 + 1.1}s;
`;

export const ColumnBottomCont = styled.div`
  margin: 20px;
  height: 260px;
  width: calc(100% - 40px);
  ${getColumnBottomContStyles};
`;

const getColumnHeaderContStyles = ({
  visible,
  index,
}: {
  visible: boolean,
  index: number,
}) => css`
  opacity: ${visible ? '1' : '0'};
  transition: opacity 0.3s ease-in ${index * 1.6 + 0.5}s;
`;

export const ColumnHeaderCont = styled.h1`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  ${getColumnHeaderContStyles};
`;

const getColumnDescriptionContStyles = ({
  visible,
  index,
}: {
  visible: boolean,
  index: number,
}) => css`
  opacity: ${visible ? '1' : '0'};
  transition: opacity 0.3s ease-in ${index * 1.6 + 0.8}s;
`;

export const ColumnDescriptionCont = styled.div`
  font-size: 14px;
  line-height: 18px;
  ${getColumnDescriptionContStyles};
`;
