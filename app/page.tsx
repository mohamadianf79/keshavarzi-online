import Image from "next/image";
import Header from "./layout/header";
import HomePreviewProduct from "./component/homeComponent/homecategory";
import { RokhFont } from "./component/font";
import HomeFestival from "./component/homeComponent/homefestival";
import HomeTwinBanner from "./component/homeComponent/hometwinbanner";
import Footer from "./layout/footer";
import HomeCategory from "./component/homeComponent/homecategory";
import HomePriviewProducts from "./component/homeComponent/homepreviewproducts";
import HomeBanner from "./component/homeComponent/homebanner";
import HomeAbout from "./component/homeComponent/homeabout";
import HomeBlog from "./component/homeComponent/homeblog";
import Layout from "./layout";

export default function Home() {
  return (<div>
    <Layout>
      <div className={`${RokhFont.className}`}>
        <div className="w-full flex justify-center my-5">
          <img src="/pic/Group 1261153156.png" alt="" />
        </div>
        <HomeCategory />
        <div className="mx-20"><HomeFestival /></div>
        <div><HomeTwinBanner /></div>
        <div>
          <HomePriviewProducts title="پرفروش‌ترین محصولات" />
        </div>
        <div>
          <HomeBanner />
        </div>
        <div>
          <HomePriviewProducts title='محبوب‌ترین محصولات' />
        </div>
        <div><HomeTwinBanner /></div>
        <div>
          <HomePriviewProducts title=' جدید‌ترین محصولات' />
        </div>
        <div>
          <HomeAbout />
        </div>
        <div>
          <HomeBlog />
        </div>
      </div></Layout>

  </div>);
}
