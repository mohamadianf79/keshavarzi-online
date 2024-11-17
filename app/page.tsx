import Image from "next/image";
import Header from "./layout/header";
import HomePreviewProduct from "./component/homepreviewProduct";
import { RokhFont } from "./component/font";

export default function Home() {
  return (<div>
  <Header/>
  <div className={`${RokhFont.className}`}>
    <div className="w-full flex justify-center my-5">
      <img src="/pic/Group 1261153156.png" alt="" />
    </div>
    <HomePreviewProduct/>
  </div>
  </div>);
}
