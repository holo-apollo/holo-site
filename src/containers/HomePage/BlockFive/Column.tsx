import React, { FunctionComponent } from 'react';

import {
  ColumnCont,
  ColumnTopCont,
  ColumnHeaderCont,
  ColumnDescriptionCont,
  ColumnBottomCont,
} from './styled';

type Props = {
  headerText: string;
  description: string;
  background: string;
  color: string;
  imageUrl: string;
  visible: boolean;
  index: number;
};

const Column: FunctionComponent<Props> = ({
  headerText,
  description,
  background,
  color,
  imageUrl,
  visible,
  index,
}) => (
  <ColumnCont
    background={background}
    color={color}
    visible={visible}
    index={index}
  >
    <ColumnTopCont>
      <ColumnHeaderCont visible={visible} index={index}>
        {headerText}
      </ColumnHeaderCont>
      <ColumnDescriptionCont visible={visible} index={index}>
        {description}
      </ColumnDescriptionCont>
    </ColumnTopCont>
    <ColumnBottomCont
      backgroundUrl={imageUrl}
      visible={visible}
      index={index}
    />
  </ColumnCont>
);

export default Column;
