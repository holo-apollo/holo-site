// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
`;

export const LeftCont = styled.div``;

export const PreviewHeader = styled.figcaption`
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 29px;
`;

export const Preview = styled.div`
  width: 220px;
  height: 115px;
  background: url(${({ previewUrl }) => previewUrl});
  margin-bottom: 49px;
`;

export const RightCont = styled.div``;

export const Table = styled.table`
  font-size: 14px;
  line-height: 18px;
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  font-weight: bold;
  width: 219px;
  border-right: 1px solid ${palette.trueBlack};
  padding-top: 10px;
  padding-bottom: 39px;
`;

export const Row = styled.tr``;

export const FirstCol = styled.th`
  width: 314px;
  border-right: 1px solid ${palette.trueBlack};
  padding-bottom: 30px;
  font-weight: normal;
  text-align: left;
`;

export const Col = styled.td`
  width: 219px;
  border-right: 1px solid ${palette.trueBlack};
  padding-bottom: 30px;
  text-align: center;
`;
