import SortSvg from "@/app/component/svg/sort";
import CategoryLayout from "./categorlayout";
import ProductComponent from "@/app/component/productcomponent";

export default function CategoryComponent() {
    return <CategoryLayout>
        <div>
            <div className="bg-primarybggray rounded-lg w-full p-4 flex justify-between items-center">
                <div className="flex items-center text-primarydarkgray">
                    <div><SortSvg /></div>
                    <p className="text-lg mr-2 ">ترتیب:</p>
                </div>
                <div className="flex justify-between w-2/3">
                    <div className="text-lg text-primarygreen2">
                        پرفروش‌ترین
                    </div>
                    <div className="text-lg text-primarytextgray">
                        بیشترین قیمت
                    </div>
                    <div className="text-lg text-primarytextgray">
                        کمترین قیمت
                    </div>
                    <div className="text-lg text-primarytextgray">
                        جدیدترین
                    </div>
                    <div className="text-lg text-primarytextgray">
                        بیشترین تخفیف
                    </div>
                </div>

                <div className="text-primarytextgray">15 کالا</div>
            </div>
            <div className="grid grid-cols-4  divide-x  divide-x-reverse p-2">
                <ProductComponent />
            </div>
        </div>
    </CategoryLayout>
}