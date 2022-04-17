import { ChangeEvent, useCallback, useState } from 'react';

export const useChangeText = () => {
  const [text, setText] = useState<string>('');
  const changeText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [text]
  );
  return { text, changeText };
};
