import Link from "next/link";
import Layout from "../../components/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { LanguageProvider } from "../../context/LanguageContext";
import { Localization, Locale } from "../../translations/types";
import locales from "../../translations/locales";
import useTranslation from "../../hooks/useTranslation";
import { getLocalizationProps } from "../../context/LanguageContext";
import Home from "../../components/Home";

const IndexPage: NextPage<{
  localization: Localization;
}> = ({ localization }) => {
  return (
    <LanguageProvider localization={localization}>
      <Layout title="Home | Next.js + TypeScript Example">
        <Home />
      </Layout>
    </LanguageProvider>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "home");
  console.log("localization in getStaticProps: ", localization);
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["en", "fr"].map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default IndexPage;
