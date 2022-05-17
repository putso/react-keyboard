import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import MyKey from "./MyKey";
import "./styles/App.css";
import { keyValue, keyCodes, wideKeys, createMap } from "./data/data_key";
import {useKeyHander} from "./hooks/useKeyHander";
import {KeyData} from './type/index';
interface Keys {
  ru: string[][];
  en: string[][];
}

interface KeyBoardProps {
  setKey: (letter: KeyData) => void;
}

function wideKeysClass(keyCode: string): string {
  let index: keyof typeof wideKeys;
  for (index in wideKeys) {
    if (wideKeys[index].includes(keyCode)) return index;
  }
  return " ";
}
let count = 0;
const MyKeyboard: React.FC<KeyBoardProps> = ({ setKey }) => {
  const [keyPressed, handleKey, keysValue] = useKeyHander(setKey);
  console.log(count++);
  let listKey = keyCodes.map((row, i) => {
    return (
      <div className="keyboard__row" key={i}>
        {row.map((keyCode, j) => {
          let keyValue = keysValue[i][j];
          let keyData: KeyData = { value: keyValue, code: keyCode };
          return (
            <MyKey
              key={keyCode}
              className={
                "keyboard__key " +
                " " +
                wideKeysClass(keyCode) +
                (keyPressed.includes(keyCode) ? " key__pressed " : "")
              }
              onMouseDown={() => handleKey(keyData, "keydown")}
              onMouseUp={() => handleKey(keyData, "keyup")}
            >
              {keyValue}
            </MyKey>
          );
        })}
      </div>
    );
  });
  return <div className="keyboard">{listKey}</div>;
};

export default MyKeyboard;
