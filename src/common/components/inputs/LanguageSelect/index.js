// @flow
import React from 'react';

import { i18n } from 'common/i18n';
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

function handleLanguageSelect(event: InputEvent) {
  i18n.changeLanguage(event.target.value);
}

const LanguageSelect = () => (
  <PureLanguageSelect
    onSelect={handleLanguageSelect}
    selectedValue={i18n.language}
  />
);

export default LanguageSelect;
