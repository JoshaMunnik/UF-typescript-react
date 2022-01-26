// region imports

import {ThunkAction} from "redux-thunk";

// endregion

// region types

/**
 * Helper type to get the type signature of a thunk action function for use within Props. It combines
 * the original function parameters with the return type of the dispatch function.
 *
 * Based on comment of topic:
 * https://github.com/reduxjs/redux-thunk/issues/213
 */
export type UFThunkPropsType<T extends (...args: any[]) => ThunkAction<any, any, any, any>> =
  (...args: Parameters<T>) => ReturnType<ReturnType<T>>;

// endregion

// region class

export class UFRedux {
  /**
   * Builds a reducer action. Assumes the action object contains a property named 'type'. Since it is not possible
   * to obtain the enum value type from an enum value or vice versa the method must be called two times with the same
   * enum value type.
   *
   * The payload properties can be set using the returned function. If there is no payload, use {}.
   *
   * Since partial type inference is not possible, two functions are needed.
   *
   * This method can be used to skip the definition of action objects, but only use action functions and the ReturnType
   * of typescript to get action object type.
   *
   * Example:
   * ````typescript
   * enum ReducerAction {
   *   //...
   *   ShowDialog: 'SHOW_DIALOG'
   * }
   * const show = UFRedux.reducerAction<ReducerAction.ShowDialog>(ReducerAction.ShowDialog)({ title: 'some title'});
   *
   * type reducerAction = ReturnType<typeof show>; // | ...
   * ````
   *
   * @param aType
   *   The enum value type the action is
   * @returns a function that expects a payload object with 'type' property which is added by the outer function.
   */
  static reducerAction<T>(aType: T) {
    return function<P = {}>(aData: P) : { type: T } & P {
      return {
        type: aType,
        ...aData
      }
    }
  }

}

// endregion
