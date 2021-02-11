import { GetStaticProps, NextPage } from "next";
import { sampleUserData } from "../../../../utils/sample-data";
import Layout from "../../../components/Layout";
import List from "../../../components/List";
import LocaleLink from "../../../components/LocaleLink";
import { User } from "../../../interfaces";
import { Localization } from "../../../translations/types";

const WithStaticProps: NextPage<{
  localization: Localization;
  items: User[];
}> = ({ items }) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <LocaleLink href="/">
        <a>Go home</a>
      </LocaleLink>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
