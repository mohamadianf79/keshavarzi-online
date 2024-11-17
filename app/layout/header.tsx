import { RokhFont } from "../component/font"
import CategorySvg from "../component/svg/category"
import HomeSvg from "../component/svg/home"
import SearchSvg from "../component/svg/search"
import ShopSvg from "../component/svg/shop"


export default function Header() {
    return (
        <div className={`${RokhFont.className} mx-20`}>
            <div className="flex justify-between my-4  items-center">
                <div className="w-20 h-20 flex items-center">
                    <img src="/pic/3482815e57863b6d49923e41f6721877.png" alt="" />
                </div>
                <div className="w-2/5 bg-primarygray rounded-xl h-14 py-1 px-4 flex items-center mr-10">
                    <div className="w-8 h-8"><SearchSvg /></div>
                    <input className="bg-primarygray focus:outline-none w-full text-sm mx-2 placeholder:text-primarytextgray" type="text" placeholder="محصول یا دسته مورد نظر خود را جست و جو کنید" />
                </div>
                <div className="flex w-1/2 justify-end">

                    <div className="text-primarytextgray border border-primarygray1 rounded-xl flex justify-between items-center p-4 text-sm">
                        <div className="border-l border-primarygray1 px-2 ">ورود</div>
                        <div className="px-2">ثبت‌نام</div>
                    </div>
                    <div className="text-primarytextgray border border-primarygray1 rounded-xl mr-5 p-4 w-14 h-14">
                        <ShopSvg />
                    </div>
                </div>
            </div>
            <div className="flex text-primarytextgray ">
                <button className="flex items-center ">
                    <div className="h-5 w-5"><HomeSvg /></div>
                    <div className="pt-2 text-lg text-primarydarkgray ">خانه</div>
                </button>
                <div className="h-10 flex items-center mx-2"><div className="border-l border-primarygray  h-4 flex items-end "></div></div>
                <button className="flex items-center ">
                    <div className="h-5 w-5"><CategorySvg /></div>
                    <div className="pt-2 text-lg mr-1 ">دسته‌بندی</div>
                </button>
                <div className="h-10 flex items-center mx-2"><div className="border-l border-primarygray  h-4 flex items-end "></div></div>
                <button className="flex items-center ">
                    <div className="pt-2 text-lg mr-1 ">درباره ما</div>
                </button>
                <div className="h-10 flex items-center mx-2"><div className="border-l border-primarygray  h-4 flex items-end "></div></div>
                <button className="flex items-center ">
                    <div className="pt-2 text-lg mr-1 "> تماس با ما</div>
                </button>
                <div className="h-10 flex items-center mx-2"><div className="border-l border-primarygray  h-4 flex items-end "></div></div>
                <button className="flex items-center ">
                    <div className="pt-2 text-lg mr-1 "> بلاگ</div>
                </button>
            </div>
        </div>
    )
}