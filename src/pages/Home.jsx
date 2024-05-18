import { getAllSlidersApi } from "../Services/GetSliders";
import { getAllToparlarApi } from "../Services/GetToparlar";
import CircleImage from "../components/CircleImage/CircleImage";
import Header from "../components/Header/Header";
import CardSlider from "../components/Slider/CardSlider";
import SliderContainer from "../components/Slider/SliderContainer";
import { IMAGES } from "../constants";
import { getAllGoodsApi } from "../Services/GetGoods"
import SportyStatic from "../components/SportyStatic/SportyStatic";
import { getAllBrandsApi } from "../Services/GetBrands";
import CircleBrands from "../components/CircleImage/CircleBrands";

const Home = () => {
    const { data: upperSlider } = getAllSlidersApi.useGetAllSlidersDataQuery();
    const {data: toparlar} = getAllToparlarApi.useGetAllToparlarDataQuery()
    const {data: goods} = getAllGoodsApi.useGetAllGoodsMostSeenDataQuery()
    const {data: middleSlider} = getAllSlidersApi.useGetAllSlidersMiddleDataQuery()
    const {data: bottomSlider} = getAllSlidersApi.useGetAllSlidersBottomDataQuery()
    const {data: brands} = getAllBrandsApi.useGetAllBrandsDataQuery()
  
    return (
    <>
      <Header />
      <SliderContainer images={upperSlider?.data} />
      <SliderContainer images={IMAGES?.category1} />
      <CircleImage title={toparlar?.data}/>
      <SliderContainer images={middleSlider?.data} />
      <CardSlider items={goods?.data}/>
      <SliderContainer images={bottomSlider?.data} />
      <SportyStatic/>
      <CardSlider items={goods?.data}/>
      <CircleImage title={toparlar?.data}/>
      <CircleBrands title={brands?.data}/>
    </>
  );
};

export default Home;
