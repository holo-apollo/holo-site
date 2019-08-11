// @flow
import { useState } from 'react';

import type { InputEvent } from 'common/types';

type InputBag = { value: string, onChange: InputEvent => void };

function useInput(initialValue: string): InputBag {
  const [value, setValue] = useState(initialValue);

  function handleInputChange(event: InputEvent) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleInputChange,
  };
}

export default useInput;
