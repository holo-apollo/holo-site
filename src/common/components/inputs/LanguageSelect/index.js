// @flow
import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { useTranslation } from 'common/i18n';
import type { InputEvent } from 'common/types';

type PureProps = {
  onSelect: InputEvent => void,
  selectedValue: string,
};

const languageOptions = [
  { value: 'uk', label: 'UK' },
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
];

export const PureLanguageSelect = ({ onSelect, selectedValue }: PureProps) => (
  <Select name="language" onChange={onSelect} value={selectedValue}>
    {languageOptions.map(o => (
      <MenuItem key={o.value} value={o.value}>
        {o.label}
      </MenuItem>
    ))}
  </Select>
);

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  function handleLanguageSelect(event: InputEvent) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <PureLanguageSelect
      onSelect={handleLanguageSelect}
      selectedValue={i18n.language}
    />
  );
};

export default LanguageSelect;
