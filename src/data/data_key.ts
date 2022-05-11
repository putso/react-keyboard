interface  Keys {
    ru: string[][],
    en: string[][]
}
const keyValue:Keys = 
{   
    ru: 
    [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' , '-' , '=', 'Backspace' ],
        [ 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\" ],
        [ 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        [ 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift'],
                        [ 'Ctrl','Cmd', 'Alt' , ' ', 'Alt', 'Ctrl' ]
    ],
    en: 
    [
        [ '`', '1' , '2', '3' , '4', '5', '6', '7', '8', '9', '0', '-', '=',  'Backspace'],
        [ 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
        [ 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
        [ 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift' ],
                        [ 'Ctrl','Cmd', 'Alt' , ' ', 'Alt', 'Ctrl' ]
    ]
};
const keyCodes: string[][] = 
[
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight']
];
const wideKeys = {
    key_width2: ['Tab','CapsLock','Enter','Backspace'],
    key_width3: ['ShiftRight', 'ShiftLeft'],
    key_space: ['Space']

}
function createMap(codes:string[][],values:string[][]) {
    let keysMap = new Map<string,string>();
    for(let i =0 ;i<codes.length;i++) {
        for(let j = 0; j<codes[i].length;j++)
        {
            keysMap.set(codes[i][j],values[i][j]);
        }
    }
    return keysMap;
}
function itsLetter(keyCode:string):boolean {
    let notLetter = ['ControlLeft','MetaLeft','AltLeft','AltRight','ControlRight','ShiftRight','ShiftLeft','CapsLock'];
    return !notLetter.includes(keyCode);
}
export {keyValue, keyCodes,wideKeys,createMap,itsLetter};