import { Header, ActivityBanner, HighLights, Categories, Footer  , Description} from "../../components";
import { GetServerSideProps } from "next";
import {
  getHighlights,
  getCategories,
  getActivities,
} from "../../../helper/api";

interface Props {
  highlights: Array<[]>;
  categories: Array<[]>;
  activities:object
}

function capitalizeFirstLetter(val : any) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

export default function Home(props: Props) {
  return (
    <>
      <Header />
      <ActivityBanner banner = {props.activities}/>
      <Description description = {props.activities}/>
      <HighLights highlight={props.highlights} />
      <Categories category={props.categories} />
      <Footer/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {


  const highlight = await getHighlights();
  const category = await getCategories();
  const activity = await getActivities(capitalizeFirstLetter(context?.params?.activity));
  if ("details" in activity) {
    return {
      notFound: true,
    };
  }else{
    return {
        props: {
          highlights: highlight || [],
          categories: category || [],
          activities: activity || {}
        },
      };
  }
 
};
