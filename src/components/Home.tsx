import React from "react";
import useTranslation from "../hooks/useTranslation";
import LocaleLink from "./LocaleLink";

export const Home = () => {
  const { t, locale } = useTranslation();
  return (
    <>
      <h1>{t("hello")}</h1>
      <p>
        <LocaleLink href="/about">
          <a>About</a>
        </LocaleLink>
      </p>
    </>
  );
};
