import CheckoutLayout from "../checkoutlayout";

export default function Payment() {
    return (
        <CheckoutLayout title="انتخاب روش پرداخت" label=" تایید و پرداخت" link="bankport">
            <div className="border rounded-lg p-4 shadow">
                <div className="flex">
                    <div className="flex items-center">
                        <div className="w-4 h-4  bg-primarygreen2 rounded-full"></div>
                        <div className="mx-2">پرداخت اینترنتی </div>
                    </div>
                    <div className="text-primarytextgray mr-10">
                        پرداخت توسط کلیه کارت‌های بانکی عضو شبکه شتاب
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4  mt-5">
                    <button className="border p-4 rounded-lg hover:border-2 hover:border-primarygreen2">
                        <img src="/pic/1683868e74c41b825623a99613de781c.png" alt="" />
                    </button>
                    <button className="border p-4 rounded-lg  hover:border-2 hover:border-primarygreen2">
                        <img src="/pic/1683868e74c41b825623a99613de781c.png" alt="" />
                    </button>
                    <button className="border p-4 rounded-lg  hover:border-2 hover:border-primarygreen2">
                        <img src="/pic/1683868e74c41b825623a99613de781c.png" alt="" />
                    </button>
                </div>
            </div>
            <div className="flex items-center my-10">
                <div className=" border-r-2 border-primarydarkgray h-5 mt-2">

                </div>
                <div className="text-lg font-bold text-primarydarkgray mt-3  px-2 ">مرور سفارش </div></div>
            <div className="border rounded-lg p-4 shadow -mt-4" >
                <p>تحویل گیرنده</p>
                <div className="border rounded-lg px-4 py-2 mt-2 ">
                    <div className="py-4">
                        <p className="text-primarytextgray ">گلستان، گرگان</p>
                        <p className="text-primarytextgray mt-2">لورم ایپسوم متن ساختگی فلان بیسار تشکیلات لورم ایپسوم لورم ایپسوم متن ساختگی فلان    </p>
                        <div className="flex space-x-6 space-x-reverse items-center mt-2">
                        <div className="flex">
                                <p className="text-primarytextgray">کد پستی: </p>
                                <p className="text-primarydarkgray">علی جعفری</p>
                            </div>
                            <div className="flex">
                                <p className="text-primarytextgray">گیرنده:</p>
                                <p className="text-primarydarkgray">4913745698 </p>
                            </div>
                            <div className="flex">
                                <p className="text-primarytextgray">شماره تماس:</p>
                                <p className="text-primarydarkgray">09125468459 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <p>سفارش</p>
                </div>
                <div className="border rounded-lg mt-2 ">
                    <div className="grid grid-cols-5 gap-4 border-b p-4 ">
                        <div className="col-span-2 text-sm text-primarytextgray">
                            محصول
                        </div>
                        <div className="text-sm text-primarytextgray">قیمت واحد</div>
                        <div className="text-sm text-primarytextgray"> تعداد</div>
                        <div className="text-sm text-primarytextgray"> مجموع</div>
                    </div>


                    <div className="grid grid-cols-5 gap-4 border-b p-4">
                        <div className=" text-sm text-primarytextgray col-span-2 flex items-center">
                            <img className="w-24 h-24" src="/pic/kood.png" alt="" />
                            <div className="text-sm flex flex-col justify-between">
                                <p className="text-primarydarkgray mt-1">كود 36 12 12 ده كيلويی بارافشان</p>
                                <p className="text-primarytextgray mt-3">
                                    1014324090
                                    کد محصول :
                                </p>
                            </div>
                        </div>

                        <div className="text-sm text-primarytextgray">
                            <div className="">
                                <div className="flex items-center mt-2">
                                    <p className="bg-primarylightgreen text-primarygreen2 p-1 rounded-lg">15%</p>
                                    <p className="line-through mr-1 text-lg text-primarytextgray pt-1">2,700,000</p>
                                </div>
                                <div className="text-end text-primarydarkgray w-full mt-1">2,490,000تومان</div>
                            </div>

                        </div>
                        <div className="text-sm text-primarytextgray mt-4">
                            <div className="flex items-center">
                                1

                            </div>

                        </div>
                        <div className=" text-primarydarkgray mt-4"> 2,490,000 تومان</div>
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}