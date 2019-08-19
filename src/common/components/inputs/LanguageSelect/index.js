// @flow
import React from 'react';

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
  <select name="language" onChange={onSelect} value={selectedValue}>
    {languageOptions.map(o => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
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
