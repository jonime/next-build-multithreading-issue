import { GetStaticPaths, GetStaticProps } from "next";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return null;
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: Array(10000)
      .fill(1)
      .map((_, i) => ({
        params: {
          page: `test_${i.toString(16)}`,
        },
      })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params: { page } }) => {
  return {
    props: { page },
  };
};
