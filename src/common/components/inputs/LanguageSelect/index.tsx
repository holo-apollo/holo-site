import React from 'react';
import Select, { SelectProps } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { useTranslation } from 'common/i18n';

type PureProps = {
  onSelect: SelectProps['onChange'];
  selectedValue: string;
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

  const handleLanguageSelect: SelectProps['onChange'] = event => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <PureLanguageSelect
      onSelect={handleLanguageSelect}
      selectedValue={i18n.language}
    />
  );
};

export default LanguageSelect;
