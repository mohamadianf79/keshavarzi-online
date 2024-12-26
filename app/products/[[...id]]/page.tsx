'use client'
import AcharSvg from "@/app/component/svg/achar";
import CommentSvg from "@/app/component/svg/comment";
import LikeSvg from "@/app/component/svg/like";
import MedalSvg from "@/app/component/svg/medal";
import RateSvg from "@/app/component/svg/rate";
import ShareSvg from "@/app/component/svg/share";
import ShoppSvg from "@/app/component/svg/shopp";
import { useState } from "react";

export default function Product() {
    const [showInfo, setShowInfo] = useState<string>("about");
    return (
        <div className=" mx-20">
            <div className="flex ">
                <button className="flex items-center ">
                    <div className="pt-2 text-primarytextgray ml-1 text-sm ">خانه</div>
                </button>
                <div className="h-10 flex items-center mx-2"><div className="border-l border-primarygray  h-4 flex items-end "></div></div>
                <button className="flex items-center ">
                    <div className="pt-2 text-primarytextgray mr-1 text-sm ">کود</div>
                </button>
                <div className="h-10 flex items-center mx-2"><div className="border-l border-primarygray  h-4 flex items-end "></div></div>
                <button className="flex items-center ">
                    <div className="pt-2 text-primarydarkgray mr-1 text-sm ">كود 36 12 12 ده كيلويی بارافشان</div>
                </button>
            </div>
            <div className="flex ">
                <div className="w-2/3 border rounded-lg shadow p-4">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <p className="text-lg text-primarydarkgray font-bold">
                                كود 36 12 12 ده كيلويی بارافشان
                            </p>
                            <p className="mt-2 ">کود 36-12-12 ده کیلویی بارافشان یک کود کامل و غنی از عناصر ضروری برای رشد و توسعه گیاهان است.</p>
                        </div>
                        <div className="w-1/2 justify-end flex space-x-2 space-x-reverse">
                            <button className="rounded-lg shadow w-10 h-10 p-2 flex justify-center items-center">
                                <AcharSvg />
                            </button>
                            <button className="rounded-lg shadow w-10 h-10 p-2 flex justify-center items-center">
                                <CommentSvg />
                            </button>
                            <button className="rounded-lg shadow w-10 h-10 p-2 flex justify-center items-center">
                                <LikeSvg />
                            </button>
                            <button className="rounded-lg shadow w-10 h-10 p-2 flex justify-center items-center">
                                <ShareSvg />
                            </button>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <div className="w-2/3">
                            <div className="flex items-center">
                                <p className="text-primarydarkgray">نظرات کاربران:</p>
                                <p className="text-primarygreen2 mr-1">1 نظر</p>
                            </div>
                            <div className="border rounded-lg w-64 p-4 mt-5">
                                <p className="text-primarydarkgray text-lg ">ویژگی‌های اصلی:</p>
                                <div className="bg-primarybggray flex rounded-lg p-1 mt-2 w-fit px-2">
                                    <p>برند:</p>
                                    <p>بارافشان</p>
                                </div>
                                <div className="bg-primarybggray flex rounded-lg p-1 mt-2 w-fit px-2">
                                    <p>نوع:</p>
                                    <p>جامد، پودری</p>
                                </div>
                                <div className="bg-primarybggray flex rounded-lg p-1 mt-2 w-fit px-2">
                                    <p>لزوم استفاده به صورت محلول</p>

                                </div>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <div className="border rounded-lg">
                                <img src="/pic/kood.png" alt="" />
                            </div>
                            <div className="flex mt-5 space-x-2 space-x-reverse">
                                <div className="w-16 h-16 border rounded-lg">
                                    <img src="/pic/kood.png" alt="" />
                                </div>
                                <div className="w-16 h-16 border rounded-lg">
                                    <img src="/pic/kood.png" alt="" />
                                </div>
                                <div className="w-16 h-16 border rounded-lg">
                                    <img src="/pic/kood.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 ">
                <div className="border rounded-lg shadow p-4 mr-4 h-fit">
                    <div className="bg-primarybggray p-8 rounded-lg">
                        <div className="flex items-center ">
                            <div><ShoppSvg /></div>
                            <p className="mr-2">موجود در انبار (فقط 2 عدد)</p>
                        </div>
                        <div className="w-full my-5"><div className="border-b border-b-primarytextgray "></div></div>
                        <div className="flex items-center ">
                            <div><RateSvg /></div>
                            <p className="mr-2 mt-1"> ارزیابی عملکرد:</p>
                            <p className="text-primarygreen2 mt-1">عالی</p>
                        </div>
                        <div className="w-full my-5"><div className="border-b border-b-primarytextgray "></div></div>
                        <div className="flex items-center ">
                            <div><MedalSvg /></div>
                            <p className="mr-2">گارانتی اصالت و سلامت فیزیکی بسته‌بندی</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-end">  <div className="bg-primarygreen3 text-white rounded-lg p-2 w-fit mt-5 ">
                        <p>400.000   تومان تخفیف</p>
                    </div></div>
                    <div className="flex w-full justify-end mt-5">  
                         <p className="line-through text-primarytextgray ml-2">2.800.000</p>
                        <p> 2.400.000    تومان</p>
                
                    </div>
                    <button className="bg-primarygreen2 text-white p-2 rounded-lg w-full mt-10">افزودن به سبد خرید</button>
              </div>
              <div className="border rounded-lg shadow p-4 mr-4 mt-5  ">
                <button className="bg-primaryyellow font-bold p-2 rounded-lg w-full "> درخواست خرید عمده  </button></div>
                </div>
            </div>
            <div className="flex justify-start text-xl border-b h-full border-gray-3 w-2/3">
          <button
            onClick={() => setShowInfo("info")}
            className={`md:mx-5  text-xs md:text-base py-5 h-full ${
              showInfo === "info" &&
              "border-b-2 border-primarygreen3 text-primarygreen3 items-stretch"
            }`}
          >
               مشخصات فنی 
          </button>
          <button
            onClick={() => setShowInfo("comment")}
            className={`mx-5  text-xs md:text-base py-5 h-full ${
              showInfo === "comment" &&
              "border-b-2 border-primarygreen3 text-primarygreen3  items-stretch"
            }`}
          >
             نظرات کاربران
          </button>
          <button
            onClick={() => setShowInfo("faq")}
            className={`md:mx-5  text-xs md:text-base flex py-5 md:w-36 h-full ${
              showInfo === "faq" &&
              "border-b-2 border-primarygreen3 text-primarygreen3  items-stretch"
            }`}
          >
            پرسش و پاسخ
          
          </button>
        </div>
        </div>
    )
}