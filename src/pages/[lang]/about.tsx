import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../components/Layout";
import LocaleLink from "../../components/LocaleLink";
import {
  getLocalizationProps,
  LanguageProvider,
} from "../../context/LanguageContext";
<<<<<<< HEAD
import { locales } from "../../translations/config";
=======
>>>>>>> 39ec4dd38195a2dffc46a464c8a578f6dc8bbabe
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
<<<<<<< HEAD
    paths: locales.map((lang) => ({ params: { lang } })),
=======
    paths: ["en", "fr"].map((lang) => ({ params: { lang } })),
>>>>>>> 39ec4dd38195a2dffc46a464c8a578f6dc8bbabe
    fallback: false,
  };
};

export default AboutPage;
