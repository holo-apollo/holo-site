import { useState } from 'react';

import { InputChangeEvent } from 'common/types';

type InputBag = {
  value: string;
  onChange: (event: InputChangeEvent) => void;
};

function useInput(initialValue: string): InputBag {
  const [value, setValue] = useState(initialValue);

  function handleInputChange(event: InputChangeEvent) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleInputChange,
  };
}

export default useInput;
