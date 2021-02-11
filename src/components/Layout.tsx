import React, { ReactNode } from "react";
import Head from "next/head";
import LocaleSwitcher from "./LocaleSwitcher";
import useTranslation from "../hooks/useTranslation";
import { Translations } from "../translations/types";
import LocaleLink from "./LocaleLink";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const { t } = useTranslation();
  const common = t("common") as Translations;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <LocaleLink href="/">
            <a>{common["navHome"]}</a>
          </LocaleLink>{" "}
          |{" "}
          <LocaleLink href="/about">
            <a>{common["navAbout"]}</a>
          </LocaleLink>{" "}
          |{" "}
          <LocaleLink href="/users">
            <a>{common["navUsersList"]}</a>
          </LocaleLink>{" "}
          | <a href="/api/users">{common["navUsersAPI"]}</a>
        </nav>
        <LocaleSwitcher />
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
