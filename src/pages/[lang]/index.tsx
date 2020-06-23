import Layout from "../../components/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getLocalizationProps,
  LanguageProvider,
} from "../../context/LanguageContext";
import { Localization } from "../../translations/types";
import { Home } from "../../components/Home";

const IndexPage: NextPage<{
  localization: Localization;
}> = ({ localization }) => (
  <LanguageProvider localization={localization}>
    <Layout title="Home | Next.js + TypeScript Example">
      <Home />
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
    paths: ["en", "fr"].map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export default IndexPage;
