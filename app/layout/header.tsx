'use client'

import { useState } from "react"
import { RokhFont } from "../component/font"
import CategorySvg from "../component/svg/category"
import HomeSvg from "../component/svg/home"
import SearchSvg from "../component/svg/search"
import ShopSvg from "../component/svg/shop"
import ArrowDownSvg from "../component/svg/arrowdown"


export default function Header() {
    const [showCategory, setShowCategory] = useState<boolean>(false)
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
            <div className="flex text-primarytextgray my-2">
                <button onMouseEnter={() => setTimeout(() => {
                    setShowCategory(true)
                }, 200)

                } onMouseLeave={() =>
                    setShowCategory(false)
                }
                    className={`flex items-center px-2 ${showCategory && 'bg-primarygreen2 text-white rounded-t-lg transition-all'}`}>
                    <div className="h-5 w-5"><CategorySvg /></div>
                    <div className="pt-2 text-lg mr-2 ">دسته‌بندی</div>
                    {showCategory &&
                        <div className="px-2 mt-1">
                            <ArrowDownSvg />
                        </div>
                    }
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
            {showCategory && <div onMouseEnter={() => setShowCategory(true)} onMouseLeave={() => setShowCategory(false)} className="absolute rounded-lg bg-white w-2/5 shadow -mt-2 transition-all">
                <div className="flex ">
                    <div className="w-1/3 border-l p-4">
                        <button className=" text-sm hover:bg-primarylightgreen hover:text-primarygreen2 w-full px-4 py-2 text-start">
                            کود
                        </button>
                        <button className="text-sm hover:bg-primarylightgreen hover:text-primarygreen2 w-full px-4 py-2 text-start">
                            بذر
                        </button>
                        <button className="text-sm hover:bg-primarylightgreen hover:text-primarygreen2 w-full px-4 py-2 text-start">
                            سموم
                        </button>
                        <button className="text-sm hover:bg-primarylightgreen hover:text-primarygreen2 w-full px-4 py-2 text-start">
                            ادوات کشاورزی
                        </button>
                        <button className="text-sm hover:bg-primarylightgreen hover:text-primarygreen2 w-full px-4 py-2 text-start">
                            بیولوژیک
                        </button>
                        <button className="text-sm hover:bg-primarylightgreen hover:text-primarygreen2 w-full px-4 py-2 text-start">
                            گلخانه
                        </button>
                        <button className="text-sm hover:bg-primarylightgreen hover:text-primarygreen2 w-full px-4 py-2 text-start">
                            خاک و بستر
                        </button>
                    </div>
                    <div className="w-2/3 ">
                        <div className="flex justify-between border-b px-4 py-2 ">
                            <p className="font-bold">کود</p>
                            <button className="text-primarygreen3">مشاهده همه</button>
                        </div>
                        <div className="flex">
                            <div className="py-2">
                                <p className="cursor-pointer text-sm  px-4 py-1">ماکرو</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">ریزمغذی</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">محرک‌های رشد و آمینو اسیدها</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">اصلاح کننده‌ها</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">گوگرد</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">ارگانیک</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">آلی و حیوانی</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">بیولوژیک و زیستی</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">مویان و مکمل‌ها</p>
                            </div>
                            <div className="py-2">
                                <p className="cursor-pointer  text-sm  px-4 py-1">کود خانگی</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">چسب، محافظ، دور کننده‌ها</p>
                                <p className="cursor-pointer  text-sm  px-4 py-1">گرانولی </p>
                                <p className="cursor-pointer  text-sm  px-4 py-1"> کود NPK </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}