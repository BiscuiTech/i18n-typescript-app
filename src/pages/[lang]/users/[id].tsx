import { GetStaticPaths, GetStaticProps } from "next";
import { sampleUserData } from "../../../../utils/sample-data";
import Layout from "../../../components/Layout";
import ListDetail from "../../../components/ListDetail";
import { locales } from "../../../translations/config";
import {
  getLocalizationProps,
  LanguageProvider,
} from "../../../context/LanguageContext";
import { User } from "../../../interfaces";
import { Localization } from "../../../translations/types";

type Props = {
  item?: User;
  errors?: string;
  localization: Localization;
};

const StaticPropsDetail = ({ item, errors, localization }: Props) => {
  if (errors) {
    return (
      <LanguageProvider localization={localization}>
        <Layout title="Error | Next.js + TypeScript Example">
          <p>
            <span style={{ color: "red" }}>Error:</span> {errors}
          </p>
        </Layout>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider localization={localization}>
      <Layout
        title={`${
          item ? item.name : "User Detail"
        } | Next.js + TypeScript Example`}
      >
        {item && <ListDetail item={item} />}
      </Layout>
    </LanguageProvider>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = sampleUserData.flatMap((user) =>
    locales.flatMap((lang) => ({
      params: { lang, id: user.id.toString() },
    }))
  );

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx, "home");
  try {
    const id = ctx.params?.id;
    const item = sampleUserData.find((data) => data.id === Number(id));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item, localization } };
  } catch (err) {
    return { props: { errors: err.message, localization } };
  }
};
