import CheckoutLayout from "../checkoutlayout";

export default function AddAddress() {
    return (
        <CheckoutLayout title="اطلاعات ارسال" label="اطلاعات ارسال" link="payment">
            <div className="border rounded-lg shadow p-4">
                <div className="flex justify-between space-x-4 space-x-reverse">
                    <div className="w-1/2">
                        <p>نام *</p>
                        <input className="border outline-none rounded-lg w-full mt-2 p-2 border-primarygray" placeholder="کاربر 1234" />
                    </div>
                    <div className="w-1/2">
                        <p>نام خانوادگی *</p>
                        <input className="border outline-none rounded-lg w-full mt-2 p-2 border-primarygray" placeholder=" نام خانوادگی" />
                    </div>
                </div>
                <div className="flex justify-between space-x-4 space-x-reverse mt-4">
                    <div className="w-1/2">
                        <p> شماره موبایل *</p>
                        <input className="border outline-none rounded-lg w-full mt-2 p-2 border-primarygray" placeholder=" 09114568745" />
                    </div>
                    <div className="w-1/2">
                        <p>شماره ثابت</p>
                        <input className="border outline-none rounded-lg w-full mt-2 p-2 border-primarygray" placeholder="  0123456789" />
                    </div>
                </div>
                <div className="flex justify-between space-x-4 space-x-reverse mt-4">
                    <div className="w-1/2">
                        <p>   استان  *</p>
                        <input className="border outline-none rounded-lg w-full mt-2 p-2 border-primarygray" placeholder=" انتخاب استان" />
                    </div>
                    <div className="w-1/2">
                        <p> شهر  *</p>
                        <input className="border outline-none rounded-lg w-full mt-2 p-2 border-primarygray" placeholder="  انتخاب شهر" />
                    </div>
                </div>
                <div className="flex justify-between space-x-4 space-x-reverse mt-4">
                    <div className="w-1/2">
                        <p>   ایمیل  </p>
                        <input className="border outline-none rounded-lg w-full mt-2 p-2 border-primarygray" placeholder="  keshavarzionline@gmail.com" />
                    </div>
                    <div className="w-1/2">
                        <p> کد پستی  </p>
                        <input className="border outline-none rounded-lg w-full mt-2 p-2 border-primarygray" placeholder="   4913745635" />
                    </div>
                </div>
                <div className="mt-4 w-full">
<p>آدرس پستی  *</p>
<textarea className="w-full border rounded-lg p-4 mt-2" name="" id="" placeholder="آدرس خود را دقیق و کامل وارد کنید."/>
                </div>
            </div>
            <div className="flex items-center my-10">
                    <div className=" border-r-2 border-primarydarkgray h-5 mt-2">

                    </div>
                    <div className="text-lg font-bold text-primarydarkgray mt-3 px-2 ">روش ارسال</div></div>
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
    )
}