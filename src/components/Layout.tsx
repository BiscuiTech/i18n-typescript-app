import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import LocaleSwitcher from "./LocaleSwitcher";
import useTranslation from "../hooks/useTranslation";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const { t } = useTranslation();

  const { navHome, navAbout, navUsersList, navUsersAPI } = t("common");
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>{navHome}</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>{navAbout}</a>
          </Link>{" "}
          |{" "}
          <Link href="/users">
            <a>{navUsersList}</a>
          </Link>{" "}
          | <a href="/api/users">{navUsersAPI}</a>
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
