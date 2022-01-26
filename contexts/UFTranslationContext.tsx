// region imports

import * as React from 'react';

// endregion

// region local types

/**
 * The state of the context.
 */
export interface IUFTranslationContextState {
  translate: (id: string | undefined, node: React.ReactNode, html: boolean, map: object | undefined) => React.ReactNode
}

/**
 * The default values for the state.
 */
const defaultState : IUFTranslationContextState = {
  translate: (id, node, html, map) => node
};

/**
 * The context used by the language components.
 */
export const UFTranslationContext = React.createContext<IUFTranslationContextState>(defaultState);

// endregion