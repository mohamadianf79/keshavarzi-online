import PenSvg from "@/app/component/svg/pen";
import ProfileLayout from "../component/profilelayout/page";
import Link from "next/link";

export default function Addresses(){
    return (
         <ProfileLayout link="addresses" label="حساب کاربری" title="سلام کاربر 12347! خوش آمدید.">
     <div className="border shadow rounded-lg  p-4 flex items-stretch space-x-4 space-x-reverse">
                    <div className="border rounded-lg p-2 w-1/2">
                        <div className="flex items-center border-b py-2">
                            <div className="w-4 h-4 bg-primarygreen3 rounded-full"></div>
                            <p className="px-4 text-primarydarkgray">به این آدرس ارسال شود</p>

                        </div>
                        <div className="py-4">
                            <p className="text-primarytextgray ">گلستان، گرگان</p>
                            <p className="text-primarytextgray mt-2">لورم ایپسوم متن ساختگی فلان بیسار تشکیلات لورم ایپسوم لورم ایپسوم متن ساختگی فلان    </p>
                        </div>
                        <button className="flex items-center">
                            <div className="w-6 h-6"><PenSvg /></div>
                            <div className="mx-2 text-primarytextgray text-sm">
                                ویرایش آدرس
                            </div>
                        </button>
                    </div>
                    <div className="border rounded-lg p-2 w-1/2 flex items-center justify-center">
                        <Link href='/checkout/addaddress'>
                            <button className="flex items-center text-primarytextgray">
                                <p className="text-3xl mt-1">+</p>
                                <p className="mx-2">افزودن آدرس جدید</p>
                            </button></Link>
                    </div>
                </div>
         </ProfileLayout>
    )
}