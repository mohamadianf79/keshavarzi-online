import PenSvg from "@/app/component/svg/pen";
import CheckoutLayout from "../checkoutlayout";
import Link from "next/link";

export default function Address() {
    return (
        <div>
            <CheckoutLayout link="payment" label="اطلاعات ارسال" title="اطلاعات ارسال">
                <div className="border rounded-lg shadow p-4 flex items-stretch space-x-4 space-x-reverse">
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
                <div className="flex items-center my-10">
                    <div className=" border-r-2 border-primarydarkgray h-5 mt-2">

                    </div>
                    <div className="text-lg font-bold text-primarydarkgray mt-3  px-2 ">روش ارسال</div></div>
                <div className="border rounded-lg shadow p-4 -mt-4">
                    <div className="border rounded-lg">
                        <div className="flex p-2 space-x-8 space-x-reverse">
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-primarygreen3 rounded-full"></div>
                                <div className="mx-2">پست پیشتاز</div>
                            </div>
                            <p className="text-primarytextgray">زمان تحویل 72 ساعت کاری</p>
                            <p className="text-primarytextgray">هزینه : 200,000 تومان</p>

                        </div>
                    </div>
                    <div className="border rounded-lg mt-4">
                        <div className="flex p-2 space-x-8 space-x-reverse">
                            <div className="flex items-center">
                                <div className="w-4 h-4  border-2 border-primarygreen2 rounded-full"></div>
                                <div className="mx-2">پست پیشتاز</div>
                            </div>
                            <p className="text-primarytextgray">زمان تحویل 72 ساعت کاری</p>
                            <p className="text-primarytextgray">هزینه : 200,000 تومان</p>

                        </div>
                    </div>
                </div>
            </CheckoutLayout>
        </div>
    )
}