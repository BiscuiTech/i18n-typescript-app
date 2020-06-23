import React from "react";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";

export const Home = () => {
  const { t, locale } = useTranslation();
  return (
    <>
      <h1>{t("hello")}</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  );
};
