import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

import { keyValue, keyCodes, wideKeys, createMap } from "../data/data_key";
import {KeyData,KeyEvent} from "../type/index";
import useLanguageKeys from "./useLanguageKeys";

type UseKeyHanderReturn = [
  string[],
  (keyData: KeyData, typeEvent?: keyof KeyEvent) => void,
  string[][]
];

interface UseKeyHanderProps {
  (setKey: (letter: KeyData) => void): UseKeyHanderReturn;
}





export const useKeyHander: UseKeyHanderProps = (
  setKey: (letter: KeyData) => void
) => {
  let [keyPressed, setKeyPressed] = useState<string[]>([]);


  const handleKey = (
    keyData: KeyData,
    typeEvent: keyof KeyEvent = "keydown"
  ) => {
    if (typeEvent === "keydown" && !keyPressed.includes(keyData.code)) {
      setKeyPressed((keyPressed) => [...keyPressed, keyData.code]);
      setKey(keyData);
    }
    if (typeEvent === "keyup")
      setKeyPressed((keyPressed) =>
        keyPressed.filter((el) => el !== keyData.code)
      );
  };

  let currentKeysRef = useLanguageKeys(keyPressed);
 
  useEffect(() => {
    let keyboardEvents: Array<keyof KeyEvent> = ["keyup", "keydown"];
    keyboardEvents.forEach((keyboardEvent) => {
      document.body.addEventListener<keyof KeyEvent>(keyboardEvent, (e) => {
        e.preventDefault();
        let keysMap = createMap(keyCodes, currentKeysRef.current);
        handleKey(
          {
            value: keysMap.get(e.code) || "",
            code: e.code,
          },
          keyboardEvent
        );
      });
    });
  }, []);
  return [keyPressed, handleKey, currentKeysRef.current];
};
