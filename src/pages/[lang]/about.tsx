import { NextPage } from "next";
import Layout from "../../components/Layout";
import LocaleLink from "../../components/LocaleLink";

const AboutPage: NextPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <LocaleLink href="/">
        <a>Go home</a>
      </LocaleLink>
    </p>
  </Layout>
);

export default AboutPage;
