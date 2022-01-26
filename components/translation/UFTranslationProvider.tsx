// region imports

import * as React from 'react';
import {IUFDynamicObject} from "../../../UF/types/IUFDynamicObject";
import {UFTranslationContext} from "../../contexts/UFTranslationContext";
import {UFText} from "../../../UF/tools/UFText";
import {UFReact} from "../../tools/UFReact";

// endregion

// region local types and functions

/**
 * Returns a translated text (if any).
 *
 * @param anId
 *   Id to search for
 * @param aNode
 *   Default content to return if no entry for id could be found
 * @param aLanguage
 *   Language to get text for
 * @param aTexts
 *   Texts
 * @param anHtml
 *   When true parse the result through the html parser.
 * @param anHtmlParser
 *   Html parser that converts a html string to a React node.
 * @param aMap
 *   When set, replace keys with their values
 *
 * @returns Node containing the translated text
 */
function getText(
  anId: string | undefined,
  aNode: React.ReactNode,
  aLanguage: string,
  aTexts: IUFTranslationTexts,
  anHtml: boolean,
  anHtmlParser: (value: string) => React.ReactNode,
  aMap: IUFDynamicObject | undefined
): React.ReactNode {
  if (anId == undefined) {
    anId = UFReact.nodeToString(aNode);
  }
  if (aTexts.hasOwnProperty(anId)) {
    const translations = aTexts[anId];
    if (translations.hasOwnProperty(aLanguage)) {
      let translation = translations[aLanguage];
      if (translation.length) {
        if (aMap) {
          translation = UFText.replace(translation, aMap);
        }
        return anHtml ? anHtmlParser(translation) : translation;
      }
    }
  }
  if (aMap) {
    const text = UFText.replace(UFReact.nodeToString(aNode), aMap);
    return anHtml ? anHtmlParser(text) : text;
  }
  return aNode;
}

// endregion

// region component

/**
 * Type definition for the translated texts. It is an object of keys mapping to inner objects.
 *
 * The keys of the outer object should match the id, the keys of the inner object should match a language. The
 * value is the translated text.
 */
export interface IUFTranslationTexts {
  [id: string]: { [language: string]: string }
}

/**
 * Properties for the translation provider.
 */
export interface UFTranslationProviderProps {
  /**
   * The translation texts.
   *
   * See {@link UFTranslation.combine} to combine multiple translation texts into one.
   */
  readonly texts: IUFTranslationTexts;

  /**
   * language to use
   */
  readonly language: string;

  /**
   * Helper function to convert raw html to React structure.
   */
  readonly htmlParser?: (value: string) => React.ReactNode;
}

/**
 * {@link UFTranslationProvider} sets up the {@link UFTranslationContext} and handles changes to the language.
 */
export const UFTranslationProvider: React.FC<UFTranslationProviderProps> = (
  {
    children, language, texts,
    htmlParser = (value) => value
  }
) => {
  return (
    <UFTranslationContext.Provider value={{
      translate: (id, node, html, map) =>
        getText(id, node, language, texts, html, htmlParser, map)
    }}>
      {children}
    </UFTranslationContext.Provider>
  );
}


// endregion
