import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";

import { User } from "../../../interfaces";
import { sampleUserData } from "../../../../utils/sample-data";
import Layout from "../../../components/Layout";
import List from "../../../components/List";

const WithStaticProps = () => {
  const items: User[] = sampleUserData;

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { lang: "en" } }, { params: { lang: "fr" } }];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default WithStaticProps;
