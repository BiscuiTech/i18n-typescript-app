import React from "react";
import { useRouter } from "next/router";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { isLocale, Localization, Locale } from "../translations/types";
import defaultStrings from "../translations/locales/en";
import locales from "../translations/locales";

/**
 * Language Context
 */

interface ContextProps {
  readonly localization: Localization;
  readonly setLocale: (localization: Localization) => void;
}

export const LanguageContext = React.createContext<ContextProps>({
  localization: {
    locale: "en", // default lang
    translations: defaultStrings.common, // default translations
    namespace: "common", // default namespace
  },
  setLocale: () => null,
});

/**
 * Language Context: Provider
 */

export const LanguageProvider: React.FC<{ localization: Localization }> = ({
  localization,
  children,
}) => {
  const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace,
  });
  const [getStoredLocale, setStoredLocale] = useLocalStorage("locale");
  const { query } = useRouter();
  React.useEffect(() => {
    if (localizationState.locale !== getStoredLocale) {
      setStoredLocale(localizationState.locale);
    }
  }, [localizationState]);

  React.useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      localization?.locale !== query.lang
    ) {
      setLocalizationState({
        locale: localization?.locale,
        translations: localization?.translations,
        namespace: localization?.namespace,
      });
    }
  }, [query.lang, localizationState]);

  return (
    <LanguageContext.Provider
      value={{
        localization: localizationState,
        setLocale: setLocalizationState,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const getLocalizationProps = (ctx, namespace = "common") => {
  const lang: Locale = (ctx.params?.lang as Locale) || "fr";
  const locale: any = locales[lang];
  const strings: any = locale[namespace];
  const translations = {
    common: locales[lang].common,
    ...strings,
  };
  console.log("getLocalizedProps: ", {
    locale: ctx.params?.lang || "en",
    translations,
    namespace,
  });
  return {
    locale: ctx.params?.lang || "en",
    translations,
    namespace,
  };
};
