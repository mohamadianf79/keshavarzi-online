import Link from "next/link";
import { RokhFont } from "../component/font";
import HeadsetSvg from "../component/svg/headset";

export default function CheckoutLayout({
    children, title, label, link
}: Readonly<{
    children: React.ReactNode;
    title: string;
    link: string;
    label: string
}>) {
    return (
        <div className={` ${RokhFont.className}  mx-20`}>
            <div className="flex ">
                <button className="flex items-center ">
                    <div className="pt-2 text-primarytextgray ml-1 text-sm ">خانه</div>
                </button>
                <div className="h-10 flex items-center mx-2"><div className="border-l border-primarygray  h-4 flex items-end "></div></div>
                <button className="flex items-center ">
                    <div className="pt-2 text-primarydarkgray mr-1 text-sm "> {label}</div>
                </button>
            </div>
            <div className="flex items-center">
                <div className=" border-r-2 border-primarydarkgray h-5 mt-2">

                </div>
                <div className="text-lg font-bold text-primarydarkgray mt-5  px-2 ">{title}</div></div>

            <div className="flex">
                <div className="w-2/3 py-5">
                    {children}
                </div>
                <div className="w-1/3  mr-10 py-5">
                    <div className="border rounded-lg shadow p-4">
                        <div className="border-b pb-2">
                            <div className="flex justify-between">
                                <p className="text-sm text-primarytextgray">قیمت کالاها   (1)</p>
                                <p className="text-sm text-primarydarkgray">2,490,000 تومان</p>
                            </div>
                            <div className="flex justify-between my-4">
                                <p className="text-sm text-primarytextgray">تخفیف‌ها</p>
                                <p className="text-sm text-primarygreen3"> 300,000   تومان</p>
                            </div>
                            <div className="flex justify-between my-4">
                                <p className="text-sm text-primarytextgray">هزینه ارسال</p>
                                <p className="text-sm text-primarydarkgray"> 150,000 تومان  </p>
                            </div></div>
                        <div className="flex justify-between py-4">
                            <p className=" text-primarydarkgray">مبلغ قابل پرداخت</p>
                            <p className=" text-primarydarkgray">3,000,000  تومان</p>
                        </div>

                        <Link href={`/checkout/${link}`}> <button className="bg-primarygreen2 text-white rounded-lg w-full py-3">ادامه فرایند خرید</button></Link>
                    </div>


                    <p className="my-4 text-primarytextgray">برای ثبت نهایی سفارش مراحل خرید را کامل کنید.</p>

                    <div className="border rounded-lg shadow p-4">
                        <div className="flex items-center">
                            <div className="rounded-lg bg-primarylightgreen w-14 h-14 flex justify-center items-center">
                                <div><HeadsetSvg /></div>
                            </div>
                            <div className="mr-2">
                                <p>به پشتیبانی نیاز دارید؟</p>
                                <p className="mt-1 font-bold">017-32320568</p>
                            </div>
                        </div>

                    </div>
                </div></div>
        </div>
    )
}