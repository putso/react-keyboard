import React, { useRef } from "react";
import { keyValue } from "../data/data_key";
function useLanguageKeys(keyPressed: string[]):React.MutableRefObject<string[][]> {
  // console.log('getCurrenKeys',keyPressed);
  const language = useRef(keyValue.ru);
  let changeLanguageKeys = ["ControlLeft", "AltLeft"];
  let checkLast = changeLanguageKeys.includes(
    keyPressed[keyPressed.length - 1]
  );
  let checkIncludes = changeLanguageKeys.reduce(
    (a, b) => a && keyPressed.includes(b),
    true
  );
  let nextLanguage = (
    Object.keys(keyValue) as Array<keyof typeof keyValue>
  ).filter((el) => keyValue[el] !== language.current)[0];
  // console.log('checks',checkLast, checkIncludes);
  if (checkLast && checkIncludes) language.current = keyValue[nextLanguage];
  return language;
}

export default useLanguageKeys;
