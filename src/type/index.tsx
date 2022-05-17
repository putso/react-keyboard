export interface KeyData {
    value: string;
    code: string;
  }

export interface KeyEvent {
    'keyup': KeyboardEvent;
    'keydown': KeyboardEvent;
}