import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import LocaleLink from "../../components/LocaleLink";
import {
  getLocalizationProps,
  LanguageProvider,
} from "../../context/LanguageContext";
import { locales } from "../../translations/config";
import { Localization } from "../../translations/types";

const AboutPage: NextPage<{ localization: Localization }> = ({
  localization,
}) => (
  <LanguageProvider localization={localization}>
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <LocaleLink href="/">
          <a>Go home</a>
        </LocaleLink>
      </p>
    </Layout>
  </LanguageProvider>
);
export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "home");
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: locales.map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default AboutPage;
