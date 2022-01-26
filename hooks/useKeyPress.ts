// region imports

import {useEffect, useState} from "react";

// endregion

// region hook

/**
 * Checks if a certain key is down.
 *
 * Based on code from:
 * https://usehooks.com/useKeyPress/
 *
 * @param aTargetKey
 *   Key to check
 * @param aCallback
 *   Optional callback to call when key is pressed or released. Use the callback when a state change is needed.
 *
 * @returns True if key is down
 */
export function useKeyPress(aTargetKey: string, aCallback?: (down: boolean) => any) {
  const [keyPressed, setKeyPressed] = useState(false);
  const handler = ({key}: KeyboardEvent, state: boolean) => {
    if (key === aTargetKey) {
      setKeyPressed(state);
      if (aCallback) {
        aCallback(state);
      }
    }
  }
  const downHandler = (event: KeyboardEvent) => handler(event, true);
  const upHandler = (event: KeyboardEvent) => handler(event, false);
  useEffect(
    () => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    },
    // empty array ensures that effect is only run on mount and unmount
    []
  );
  return keyPressed;
}

// endregion