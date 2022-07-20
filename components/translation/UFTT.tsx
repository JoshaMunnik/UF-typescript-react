// region imports

import * as React from 'react';
import {IUFDynamicObject} from "../../../UF/types/IUFDynamicObject";
import {UFTranslationContext} from "../../contexts/UFTranslationContext";

// endregion

// region component

/**
 * Properties for {@link TT}
 */
export interface UFTTProps {
  /**
   * The id to find text for. When not set, use the content as id.
   */
  readonly ttid?: string;

  /**
   * When true parse the translated text through a html parser to create a correct React structure.
   */
  readonly html?: boolean;

  /**
   * When set, replace the keys with their values in the translated or default text.
   */
  readonly map?: IUFDynamicObject;

  /**
   * Child elements
   */
  readonly children?: React.ReactNode;
}

/**
 * {@link UFTT} is a translatable text component.
 */
export const UFTT: React.FC<UFTTProps> = (
  {
    children, ttid, html = false,
    map
  }
) => {
  return (
    <UFTranslationContext.Consumer>
      {(
        ({translate}) => translate(ttid, children, html, map)
      )}
    </UFTranslationContext.Consumer>
  )
};

// endregion