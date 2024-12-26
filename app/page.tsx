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
import LikeSvg from "./component/svg/like";
import DollarSvg from "./component/svg/dollar";
import HomeFirstBanner from "./component/homeComponent/homefirstbanner";

export default function Home() {
  return (
    <div className={`${RokhFont.className}`}>
     <HomeFirstBanner/>
      <HomeCategory />
      <div className="mx-20"><HomeFestival /></div>
      <div><HomeTwinBanner /></div>
      <div>
        <HomePriviewProducts svg={<DollarSvg />} title="پرفروش‌ترین محصولات" />
      </div>
      <div>
        <HomeBanner />
      </div>
      <div>

        <HomePriviewProducts svg={<LikeSvg className="w-5 h-5"/>} title='محبوب‌ترین محصولات' />
      </div>
      <div><HomeTwinBanner /></div>
      <div>
        <HomePriviewProducts svg={<DollarSvg />} title=' جدید‌ترین محصولات' />
      </div>
      <div>
        <HomeAbout />
      </div>
      <div>
        <HomeBlog />
      </div>
    </div>

  );
}
