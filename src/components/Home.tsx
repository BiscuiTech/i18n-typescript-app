import React from "react";
import useTranslation from "../hooks/useTranslation";
import { Translations } from "../translations/types";
import LocaleLink from "./LocaleLink";

export const Home = () => {
  const { t } = useTranslation();
  const common = t("common") as Translations;

  return (
    <>
      <h1>{common.navAbout}</h1>
      <p>
        <LocaleLink href="/about">
          <a>About</a>
        </LocaleLink>
      </p>
    </>
  );
};
