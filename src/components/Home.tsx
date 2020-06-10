import React from "react";
import useTranslation from "../hooks/useTranslation";
import Link from "next/link";

const Home = () => {
  const { t, locale } = useTranslation();
  return (
    <>
      <h1>{t("header")}</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  );
};

export default Home;
