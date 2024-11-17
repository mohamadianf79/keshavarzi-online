import CategorySvg from "./svg/category";

export default function HomePreviewProduct(){
    return(
<div className="mx-20">
    <div>
    <button className="flex items-center ">
                    <div className="h-5 w-5"><CategorySvg /></div>
                    <div className="pt-2 text-lg mr-1 text-primarydarkgray">دسته‌بندی محصولات</div>
                </button>
    </div>
    <div className="grid gap-10 grid-cols-6 my-5">
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/kood.png" alt="" />
        </div>
        <p className="w-1/2 mt-4 flex justify-center mr-2 ">کود</p>
        </div>
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/kood.png" alt="" />
        </div>
        <p className="w-1/2 mt-4 flex justify-center mr-2 " >سم</p>
        </div>
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/kood.png" alt="" />
        </div>
        <p className="w-1/2 mt-4 flex justify-center mr-2 ">بذر</p>
        </div>
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/kood.png" alt="jj" />
        </div>

        <p className="w-1/2 mt-4 flex justify-center mr-2 ">ادوات کشاورزی</p>
        </div>
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/kood.png" alt="" />
        </div>
        <p className="w-1/2 mt-4 flex justify-center mr-2 ">خاک و بستر</p>
        </div>
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/kood.png" alt="" />
        </div>
        <p className="w-1/2 mt-4 flex justify-center mr-2 ">گلخانه</p>
        </div>
    </div>
    
</div>

    )
}