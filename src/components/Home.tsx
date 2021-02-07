import React from "react";
import Link from "next/link";
import useTranslation from "../hooks/useTranslation";

export const Home = () => {
  const { t, locale } = useTranslation();
  const { navAbout } = t("common");

  return (
    <>
      <h1>{navAbout}</h1>
      <p>
        <Link href={`${locale}/about`}>
          <a>About</a>
        </Link>
      </p>
    </>
  );
};
