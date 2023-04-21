import { Header, Banner, HighLights, Categories , Footer } from "../components";
import { GetServerSideProps } from "next";
import { getHighlights, getCategories } from "../../helper/api";

interface Props {
  highlights: Array<[]>;
  categories:Array<[]>
}

export default function Home(props: Props) {
  return (
    <>
      <Header />
      <Banner />
      <HighLights highlight={props.highlights} />
      <Categories category = {props.categories}/>
      <Footer/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const highlight = await getHighlights();
  const category = await getCategories();
  return {
    props: {
      highlights: highlight || [],
      categories: category || [],
    },
  };
};
