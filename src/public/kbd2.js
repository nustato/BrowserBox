const keys = {
  '\u0000': { keyCode: 46, key: '\u0000', code: 'NumpadDecimal', location: 3 },
  '\n': { keyCode: 13, code: 'Enter', key: 'Enter', text: '\r' },
  '\r': { keyCode: 13, code: 'Enter', key: 'Enter', text: '\r' },
  ' ': { keyCode: 32, key: ' ', code: 'Space' },
  '!': { keyCode: 33, key: '!', code: 'Digit1' },
  '"': { keyCode: 34, key: '"', code: 'Quote' },
  '#': { keyCode: 35, key: '#', code: 'Digit3' },
  '$': { keyCode: 36, key: '$', code: 'Digit4' },
  '%': { keyCode: 37, key: '%', code: 'Digit5' },
  '&': { keyCode: 38, key: '&', code: 'Digit7' },
  '\'': { keyCode: 39, key: '\'', code: 'Quote' },
  '(': { keyCode: 40, key: '(', code: 'Digit9' },
  ')': { keyCode: 41, key: ')', code: 'Digit0' },
  '*': { keyCode: 42, key: '*', code: 'NumpadMultiply', location: 3 },
  '+': { keyCode: 43, key: '+', code: 'NumpadAdd', location: 3 },
  ',': { keyCode: 44, key: ',', code: 'Comma' },
  '-': { keyCode: 45, key: '-', code: 'NumpadSubtract', location: 3 },
  '.': { keyCode: 46, key: '.', code: 'Period' },
  '/': { keyCode: 47, key: '/', code: 'NumpadDivide', location: 3 },
  '0': { keyCode: 48, key: '0', code: 'Digit0', shiftKey: ')' },
  '1': { keyCode: 49, key: '1', code: 'Digit1', shiftKey: '!' },
  '2': { keyCode: 50, key: '2', code: 'Digit2', shiftKey: '@' },
  '3': { keyCode: 51, key: '3', code: 'Digit3', shiftKey: '#' },
  '4': { keyCode: 52, key: '4', code: 'Digit4', shiftKey: '$' },
  '5': { keyCode: 53, key: '5', code: 'Digit5', shiftKey: '%' },
  '6': { keyCode: 54, key: '6', code: 'Digit6', shiftKey: '^' },
  '7': { keyCode: 55, key: '7', code: 'Digit7', shiftKey: '&' },
  '8': { keyCode: 56, key: '8', code: 'Digit8', shiftKey: '*' },
  '9': { keyCode: 57, key: '9', code: 'Digit9', shiftKey: '(' },
  ':': { keyCode: 58, key: ':', code: 'Semicolon' },
  ';': { keyCode: 59, key: ';', code: 'Semicolon' },
  '<': { keyCode: 60, key: '<', code: 'Comma' },
  '=': { keyCode: 61, key: '=', code: 'Equal' },
  '>': { keyCode: 62, key: '>', code: 'Period' },
  '?': { keyCode: 63, key: '?', code: 'Slash' },
  '@': { keyCode: 64, key: '@', code: 'Digit2' },
  'A': { keyCode: 65, key: 'A', code: 'KeyA', shiftKey: 'A' },
  'Abort': { keyCode: 3, code: 'Abort', key: 'Cancel' },
  'Accept': { keyCode: 30, key: 'Accept' },
  'Alt': { keyCode: 18, key: 'Alt', code: 'AltLeft', location: 1 },
  'AltGraph': { keyCode: 225, code: 'AltGraph', key: 'AltGraph' },
  'AltLeft': { keyCode: 18, code: 'AltLeft', key: 'Alt', location: 1 },
  'AltRight': { keyCode: 18, code: 'AltRight', key: 'Alt', location: 2 },
  'ArrowDown': { keyCode: 40, code: 'ArrowDown', key: 'ArrowDown' },
  'ArrowLeft': { keyCode: 37, code: 'ArrowLeft', key: 'ArrowLeft' },
  'ArrowRight': { keyCode: 39, code: 'ArrowRight', key: 'ArrowRight' },
  'ArrowUp': { keyCode: 38, code: 'ArrowUp', key: 'ArrowUp' },
  'Attn': { keyCode: 246, key: 'Attn' },
  'AudioVolumeDown': { keyCode: 174, code: 'AudioVolumeDown', key: 'AudioVolumeDown' },
  'AudioVolumeMute': { keyCode: 173, code: 'AudioVolumeMute', key: 'AudioVolumeMute' },
  'AudioVolumeUp': { keyCode: 175, code: 'AudioVolumeUp', key: 'AudioVolumeUp' },
  'B': { keyCode: 66, key: 'B', code: 'KeyB', shiftKey: 'B' },
  'Backquote': { keyCode: 192, code: 'Backquote', shiftKey: '~', key: '`' },
  'Backslash': { keyCode: 220, code: 'Backslash', shiftKey: '|', key: '\\' },
  'Backspace': { keyCode: 8, code: 'Backspace', key: 'Backspace' },
  'BracketLeft': { keyCode: 219, code: 'BracketLeft', shiftKey: '{', key: '[' },
  'BracketRight': { keyCode: 221, code: 'BracketRight', shiftKey: '}', key: ']' },
  'C': { keyCode: 67, key: 'C', code: 'KeyC', shiftKey: 'C' },
  'Cancel': { keyCode: 3, key: 'Cancel', code: 'Abort' },
  'CapsLock': { keyCode: 20, code: 'CapsLock', key: 'CapsLock' },
  'Clear': { keyCode: 12, key: 'Clear', code: 'Numpad5', location: 3 },
  'Comma': { keyCode: 188, code: 'Comma', shiftKey: '<', key: ',' },
  'ContextMenu': { keyCode: 93, code: 'ContextMenu', key: 'ContextMenu' },
  'Control': { keyCode: 17, key: 'Control', code: 'ControlLeft', location: 1 },
  'ControlLeft': { keyCode: 17, code: 'ControlLeft', key: 'Control', location: 1 },
  'ControlRight': { keyCode: 17, code: 'ControlRight', key: 'Control', location: 2 },
  'Convert': { keyCode: 28, code: 'Convert', key: 'Convert' },
  'CrSel': { keyCode: 247, key: 'CrSel', code: 'Props' },
  'D': { keyCode: 68, key: 'D', code: 'KeyD', shiftKey: 'D' },
  'Delete': { keyCode: 46, code: 'Delete', key: 'Delete' },
  'Digit0': { keyCode: 105, code: 'Digit0', shiftKey: ')', key: 'it0' },
  'Digit1': { keyCode: 105, code: 'Digit1', shiftKey: '!', key: 'it1' },
  'Digit2': { keyCode: 105, code: 'Digit2', shiftKey: '@', key: 'it2' },
  'Digit3': { keyCode: 105, code: 'Digit3', shiftKey: '#', key: 'it3' },
  'Digit4': { keyCode: 105, code: 'Digit4', shiftKey: '$', key: 'it4' },
  'Digit5': { keyCode: 105, code: 'Digit5', shiftKey: '%', key: 'it5' },
  'Digit6': { keyCode: 105, code: 'Digit6', shiftKey: '^', key: 'it6' },
  'Digit7': { keyCode: 105, code: 'Digit7', shiftKey: '&', key: 'it7' },
  'Digit8': { keyCode: 105, code: 'Digit8', shiftKey: '*', key: 'it8' },
  'Digit9': { keyCode: 105, code: 'Digit9', shiftKey: '(', key: 'it9' },
  'E': { keyCode: 69, key: 'E', code: 'KeyE', shiftKey: 'E' },
  'Eject': { key: 'Eject', code: 'Eject' },
  'End': { keyCode: 35, code: 'End', key: 'End' },
  'Enter': { keyCode: 13, code: 'Enter', key: 'Enter', text: '\r' },
  'Equal': { keyCode: 187, code: 'Equal', shiftKey: '+', key: '=' },
  'EraseEof': { keyCode: 249, key: 'EraseEof' },
  'Escape': { keyCode: 27, code: 'Escape', key: 'Escape' },
  'ExSel': { keyCode: 248, key: 'ExSel' },
  'Execute': { keyCode: 43, key: 'Execute', code: 'Open' },
  'F': { keyCode: 70, key: 'F', code: 'KeyF', shiftKey: 'F' },
  'F1': { keyCode: 112, code: 'F1', key: 'F1' },
  'F10': { keyCode: 121, code: 'F10', key: 'F10' },
  'F11': { keyCode: 122, code: 'F11', key: 'F11' },
  'F12': { keyCode: 123, code: 'F12', key: 'F12' },
  'F13': { keyCode: 124, code: 'F13', key: 'F13' },
  'F14': { keyCode: 125, code: 'F14', key: 'F14' },
  'F15': { keyCode: 126, code: 'F15', key: 'F15' },
  'F16': { keyCode: 127, code: 'F16', key: 'F16' },
  'F17': { keyCode: 128, code: 'F17', key: 'F17' },
  'F18': { keyCode: 129, code: 'F18', key: 'F18' },
  'F19': { keyCode: 130, code: 'F19', key: 'F19' },
  'F2': { keyCode: 113, code: 'F2', key: 'F2' },
  'F20': { keyCode: 131, code: 'F20', key: 'F20' },
  'F21': { keyCode: 132, code: 'F21', key: 'F21' },
  'F22': { keyCode: 133, code: 'F22', key: 'F22' },
  'F23': { keyCode: 134, code: 'F23', key: 'F23' },
  'F24': { keyCode: 135, code: 'F24', key: 'F24' },
  'F3': { keyCode: 114, code: 'F3', key: 'F3' },
  'F4': { keyCode: 115, code: 'F4', key: 'F4' },
  'F5': { keyCode: 116, code: 'F5', key: 'F5' },
  'F6': { keyCode: 117, code: 'F6', key: 'F6' },
  'F7': { keyCode: 118, code: 'F7', key: 'F7' },
  'F8': { keyCode: 119, code: 'F8', key: 'F8' },
  'F9': { keyCode: 120, code: 'F9', key: 'F9' },
  'G': { keyCode: 71, key: 'G', code: 'KeyG', shiftKey: 'G' },
  'H': { keyCode: 72, key: 'H', code: 'KeyH', shiftKey: 'H' },
  'Help': { keyCode: 6, code: 'Help', key: 'Help' },
  'Home': { keyCode: 36, code: 'Home', key: 'Home' },
  'I': { keyCode: 73, key: 'I', code: 'KeyI', shiftKey: 'I' },
  'Insert': { keyCode: 45, code: 'Insert', key: 'Insert' },
  'J': { keyCode: 74, key: 'J', code: 'KeyJ', shiftKey: 'J' },
  'K': { keyCode: 75, key: 'K', code: 'KeyK', shiftKey: 'K' },
  'KeyA': { keyCode: 65, code: 'KeyA', shiftKey: 'A', key: 'A' },
  'KeyB': { keyCode: 66, code: 'KeyB', shiftKey: 'B', key: 'B' },
  'KeyC': { keyCode: 67, code: 'KeyC', shiftKey: 'C', key: 'C' },
  'KeyD': { keyCode: 68, code: 'KeyD', shiftKey: 'D', key: 'D' },
  'KeyE': { keyCode: 69, code: 'KeyE', shiftKey: 'E', key: 'E' },
  'KeyF': { keyCode: 70, code: 'KeyF', shiftKey: 'F', key: 'F' },
  'KeyG': { keyCode: 71, code: 'KeyG', shiftKey: 'G', key: 'G' },
  'KeyH': { keyCode: 72, code: 'KeyH', shiftKey: 'H', key: 'H' },
  'KeyI': { keyCode: 73, code: 'KeyI', shiftKey: 'I', key: 'I' },
  'KeyJ': { keyCode: 74, code: 'KeyJ', shiftKey: 'J', key: 'J' },
  'KeyK': { keyCode: 75, code: 'KeyK', shiftKey: 'K', key: 'K' },
  'KeyL': { keyCode: 76, code: 'KeyL', shiftKey: 'L', key: 'L' },
  'KeyM': { keyCode: 77, code: 'KeyM', shiftKey: 'M', key: 'M' },
  'KeyN': { keyCode: 78, code: 'KeyN', shiftKey: 'N', key: 'N' },
  'KeyO': { keyCode: 79, code: 'KeyO', shiftKey: 'O', key: 'O' },
  'KeyP': { keyCode: 80, code: 'KeyP', shiftKey: 'P', key: 'P' },
  'KeyQ': { keyCode: 81, code: 'KeyQ', shiftKey: 'Q', key: 'Q' },
  'KeyR': { keyCode: 82, code: 'KeyR', shiftKey: 'R', key: 'R' },
  'KeyS': { keyCode: 83, code: 'KeyS', shiftKey: 'S', key: 'S' },
  'KeyT': { keyCode: 84, code: 'KeyT', shiftKey: 'T', key: 'T' },
  'KeyU': { keyCode: 85, code: 'KeyU', shiftKey: 'U', key: 'U' },
  'KeyV': { keyCode: 86, code: 'KeyV', shiftKey: 'V', key: 'V' },
  'KeyW': { keyCode: 87, code: 'KeyW', shiftKey: 'W', key: 'W' },
  'KeyX': { keyCode: 88, code: 'KeyX', shiftKey: 'X', key: 'X' },
  'KeyY': { keyCode: 89, code: 'KeyY', shiftKey: 'Y', key: 'Y' },
  'KeyZ': { keyCode: 90, code: 'KeyZ', shiftKey: 'Z', key: 'Z' },
  'L': { keyCode: 76, key: 'L', code: 'KeyL', shiftKey: 'L' },
  'M': { keyCode: 77, key: 'M', code: 'KeyM', shiftKey: 'M' },
  'MediaPlayPause': { keyCode: 179, code: 'MediaPlayPause', key: 'MediaPlayPause' },
  'MediaStop': { keyCode: 178, code: 'MediaStop', key: 'MediaStop' },
  'MediaTrackNext': { keyCode: 176, code: 'MediaTrackNext', key: 'MediaTrackNext' },
  'MediaTrackPrevious': { keyCode: 177, code: 'MediaTrackPrevious', key: 'MediaTrackPrevious' },
  'Meta': { keyCode: 91, key: 'Meta', code: 'MetaLeft', location: 1 },
  'MetaLeft': { keyCode: 91, code: 'MetaLeft', key: 'Meta', location: 1 },
  'MetaRight': { keyCode: 92, code: 'MetaRight', key: 'Meta', location: 2 },
  'Minus': { keyCode: 189, code: 'Minus', shiftKey: '_', key: '-' },
  'ModeChange': { keyCode: 31, key: 'ModeChange' },
  'N': { keyCode: 78, key: 'N', code: 'KeyN', shiftKey: 'N' },
  'NonConvert': { keyCode: 29, code: 'NonConvert', key: 'NonConvert' },
  'NumLock': { keyCode: 144, code: 'NumLock', key: 'NumLock' },
  'Numpad0': { keyCode: 45, shiftKeyCode: 96, key: 'Insert', code: 'Numpad0', shiftKey: '0', location: 3 },
  'Numpad1': { keyCode: 35, shiftKeyCode: 97, key: 'End', code: 'Numpad1', shiftKey: '1', location: 3 },
  'Numpad2': { keyCode: 40, shiftKeyCode: 98, key: 'ArrowDown', code: 'Numpad2', shiftKey: '2', location: 3 },
  'Numpad3': { keyCode: 34, shiftKeyCode: 99, key: 'PageDown', code: 'Numpad3', shiftKey: '3', location: 3 },
  'Numpad4': { keyCode: 37, shiftKeyCode: 100, key: 'ArrowLeft', code: 'Numpad4', shiftKey: '4', location: 3 },
  'Numpad5': { keyCode: 12, shiftKeyCode: 101, key: 'Clear', code: 'Numpad5', shiftKey: '5', location: 3 },
  'Numpad6': { keyCode: 39, shiftKeyCode: 102, key: 'ArrowRight', code: 'Numpad6', shiftKey: '6', location: 3 },
  'Numpad7': { keyCode: 36, shiftKeyCode: 103, key: 'Home', code: 'Numpad7', shiftKey: '7', location: 3 },
  'Numpad8': { keyCode: 38, shiftKeyCode: 104, key: 'ArrowUp', code: 'Numpad8', shiftKey: '8', location: 3 },
  'Numpad9': { keyCode: 33, shiftKeyCode: 105, key: 'PageUp', code: 'Numpad9', shiftKey: '9', location: 3 },
  'NumpadAdd': { keyCode: 107, code: 'NumpadAdd', key: '+', location: 3 },
  '\u0000': { keyCode: 46, shiftKeyCode: 110, code: 'NumpadDecimal', key: '\u0000', shiftKey: '.', location: 3 },
  'NumpadDivide': { keyCode: 111, code: 'NumpadDivide', key: '/', location: 3 },
  'NumpadEnter': { keyCode: 13, code: 'NumpadEnter', key: 'Enter', text: '\r', location: 3 },
  'NumpadEqual': { keyCode: 187, code: 'NumpadEqual', key: '=', location: 3 },
  'NumpadMultiply': { keyCode: 106, code: 'NumpadMultiply', key: '*', location: 3 },
  'NumpadSubtract': { keyCode: 109, code: 'NumpadSubtract', key: '-', location: 3 },
  'O': { keyCode: 79, key: 'O', code: 'KeyO', shiftKey: 'O' },
  'Open': { keyCode: 43, code: 'Open', key: 'Execute' },
  'P': { keyCode: 80, key: 'P', code: 'KeyP', shiftKey: 'P' },
  'PageDown': { keyCode: 34, code: 'PageDown', key: 'PageDown' },
  'PageUp': { keyCode: 33, code: 'PageUp', key: 'PageUp' },
  'Pause': { keyCode: 19, code: 'Pause', key: 'Pause' },
  'Period': { keyCode: 190, code: 'Period', shiftKey: '>', key: '.' },
  'Play': { keyCode: 250, key: 'Play' },
  'Power': { key: 'Power', code: 'Power' },
  'Print': { keyCode: 42, key: 'Print' },
  'PrintScreen': { keyCode: 44, code: 'PrintScreen', key: 'PrintScreen' },
  'Props': { keyCode: 247, code: 'Props', key: 'CrSel' },
  'Q': { keyCode: 81, key: 'Q', code: 'KeyQ', shiftKey: 'Q' },
  'Quote': { keyCode: 222, code: 'Quote', shiftKey: '"', key: '\'' },
  'R': { keyCode: 82, key: 'R', code: 'KeyR', shiftKey: 'R' },
  'S': { keyCode: 83, key: 'S', code: 'KeyS', shiftKey: 'S' },
  'ScrollLock': { keyCode: 145, code: 'ScrollLock', key: 'ScrollLock' },
  'Select': { keyCode: 41, code: 'Select', key: 'Select' },
  'Semicolon': { keyCode: 186, code: 'Semicolon', shiftKey: ':', key: ';' },
  'Shift': { keyCode: 16, key: 'Shift', code: 'ShiftLeft', location: 1 },
  'ShiftLeft': { keyCode: 16, code: 'ShiftLeft', key: 'Shift', location: 1 },
  'ShiftRight': { keyCode: 16, code: 'ShiftRight', key: 'Shift', location: 2 },
  'Slash': { keyCode: 191, code: 'Slash', shiftKey: '?', key: '/' },
  'Space': { keyCode: 32, code: 'Space', key: ' ' },
  'T': { keyCode: 84, key: 'T', code: 'KeyT', shiftKey: 'T' },
  'Tab': { keyCode: 9, code: 'Tab', key: 'Tab' },
  'U': { keyCode: 85, key: 'U', code: 'KeyU', shiftKey: 'U' },
  'V': { keyCode: 86, key: 'V', code: 'KeyV', shiftKey: 'V' },
  'W': { keyCode: 87, key: 'W', code: 'KeyW', shiftKey: 'W' },
  'X': { keyCode: 88, key: 'X', code: 'KeyX', shiftKey: 'X' },
  'Y': { keyCode: 89, key: 'Y', code: 'KeyY', shiftKey: 'Y' },
  'Z': { keyCode: 90, key: 'Z', code: 'KeyZ', shiftKey: 'Z' },
  'ZoomOut': { keyCode: 251, key: 'ZoomOut' },
  '[': { keyCode: 91, key: '[', code: 'BracketLeft' },
  '\\': { keyCode: 92, key: '\\', code: 'Backslash' },
  ']': { keyCode: 93, key: ']', code: 'BracketRight' },
  '^': { keyCode: 94, key: '^', code: 'Digit6' },
  '_': { keyCode: 95, key: '_', code: 'Minus' },
  '`': { keyCode: 96, key: '`', code: 'Backquote' },
  'a': { keyCode: 97, key: 'a', code: 'KeyA', shiftKey: 'A' },
  'b': { keyCode: 98, key: 'b', code: 'KeyB', shiftKey: 'B' },
  'c': { keyCode: 99, key: 'c', code: 'KeyC', shiftKey: 'C' },
  'd': { keyCode: 100, key: 'd', code: 'KeyD', shiftKey: 'D' },
  'e': { keyCode: 101, key: 'e', code: 'KeyE', shiftKey: 'E' },
  'f': { keyCode: 102, key: 'f', code: 'KeyF', shiftKey: 'F' },
  'g': { keyCode: 103, key: 'g', code: 'KeyG', shiftKey: 'G' },
  'h': { keyCode: 104, key: 'h', code: 'KeyH', shiftKey: 'H' },
  'i': { keyCode: 105, key: 'i', code: 'KeyI', shiftKey: 'I' },
  'j': { keyCode: 106, key: 'j', code: 'KeyJ', shiftKey: 'J' },
  'k': { keyCode: 107, key: 'k', code: 'KeyK', shiftKey: 'K' },
  'l': { keyCode: 108, key: 'l', code: 'KeyL', shiftKey: 'L' },
  'm': { keyCode: 109, key: 'm', code: 'KeyM', shiftKey: 'M' },
  'n': { keyCode: 110, key: 'n', code: 'KeyN', shiftKey: 'N' },
  'o': { keyCode: 111, key: 'o', code: 'KeyO', shiftKey: 'O' },
  'p': { keyCode: 112, key: 'p', code: 'KeyP', shiftKey: 'P' },
  'q': { keyCode: 113, key: 'q', code: 'KeyQ', shiftKey: 'Q' },
  'r': { keyCode: 114, key: 'r', code: 'KeyR', shiftKey: 'R' },
  's': { keyCode: 115, key: 's', code: 'KeyS', shiftKey: 'S' },
  't': { keyCode: 116, key: 't', code: 'KeyT', shiftKey: 'T' },
  'u': { keyCode: 117, key: 'u', code: 'KeyU', shiftKey: 'U' },
  'v': { keyCode: 118, key: 'v', code: 'KeyV', shiftKey: 'V' },
  'w': { keyCode: 119, key: 'w', code: 'KeyW', shiftKey: 'W' },
  'x': { keyCode: 120, key: 'x', code: 'KeyX', shiftKey: 'X' },
  'y': { keyCode: 121, key: 'y', code: 'KeyY', shiftKey: 'Y' },
  'z': { keyCode: 122, key: 'z', code: 'KeyZ', shiftKey: 'Z' },
  '{': { keyCode: 123, key: '{', code: 'BracketLeft' },
  '|': { keyCode: 124, key: '|', code: 'Backslash' },
  '}': { keyCode: 125, key: '}', code: 'BracketRight' },
  '~': { keyCode: 126, key: '~', code: 'Backquote' }
};

export default keys;
