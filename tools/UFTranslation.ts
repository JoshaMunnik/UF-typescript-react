// region imports

import {IUFTranslationTexts} from "../components/translation/UFTranslationProvider";

// endregion

// region local functions

/**
 * Merge the translation texts of a target into a source.
 */
function mergeTranslations(aTarget: IUFTranslationTexts, aSource: IUFTranslationTexts) {
  for (const [id, translations] of Object.entries(aSource)) {
    if (!aTarget.hasOwnProperty(id)) {
      aTarget[id] = translations;
    }
    else {
      Object.assign(aTarget[id], translations);
    }
  }
}

// endregion

// region export

/**
 * {@link UFTranslation} implement static support methods for translation.
 */
export class UFTranslation {
  /**
   * Combine multiple translation texts into a single translation texts object by combining the translation for each id.
   *
   * @param aTexts
   *   Texts to combine
   * @returns all translation texsts combine in a single translation texts
   */
  static combine(...aTexts: IUFTranslationTexts[]): IUFTranslationTexts {
    const result = {};
    aTexts.forEach(texts => mergeTranslations(result, texts));
    return result;
  }
}

// endregion