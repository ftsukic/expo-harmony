/*!
 * @expo-harmony-copyright
 *
 * Copyright 2026-present, Baoshuo <i@baoshuo.ren> ( https://baoshuo.ren ).
 * Released under MIT license. https://github.com/renbaoshuo/expo-harmony
 */

declare module 'libexpo_localization.so' {
  export interface NumericInfo {
    decimalSeparator: string | null;
    digitGroupingSeparator: string | null;
    currencyCode: string | null;
    currencySymbol: string | null;
  }

  declare const localization: {
    getNumericInfo(languageTag: string): NumericInfo;
    getCalendarType(languageTag: string): string | null;
  };

  export default localization;
}
