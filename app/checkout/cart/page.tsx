import TrashSvg from "@/app/component/svg/trash";
import CheckoutLayout from "../checkoutlayout";
import Counter from "../component/counter";

export default function Cart() {
    return (
        <div>


            <CheckoutLayout link="address" label="سبد خرید" title="سبد خرید">
                <div className="border rounded-lg shadow ">
                    <div className="grid grid-cols-5 gap-4 border-b p-4">
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
                                <Counter />
                                <div className="flex mr-1">
                                    <div><TrashSvg /></div>
                                    <div>حذف</div>
                                </div>
                            </div>

                        </div>
                        <div className=" text-primarydarkgray mt-4"> 2,490,000 تومان</div>
                    </div>
                </div>
            </CheckoutLayout>
        </div>
    )
}