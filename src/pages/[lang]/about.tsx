import Link from "next/link";
import Layout from "../../components/Layout";
import useTranslation from "../../hooks/useTranslation";

const AboutPage = () => {
  const { locale } = useTranslation();

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href={`${locale}/`}>
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
