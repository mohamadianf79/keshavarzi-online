import CategorySvg from "../svg/category";

export default function HomeCategory(){
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
            <img src="/pic/5e515f018e5734ecba8da88bce3299c6.png" alt="" />
        </div>
        <p className="w-1/2 mt-4 flex justify-center mr-2 " >سم</p>
        </div>
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/ac878237cf3f99232667280208ddb876.png" alt="" />
        </div>
        <p className="w-1/2 mt-4 flex justify-center mr-2 ">بذر</p>
        </div>
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/e4cd8000378f6254190a1a866298c5ba.png" alt="jj" />
        </div>

        <p className="w-1/2 mt-4 flex justify-center mr-2 ">ادوات کشاورزی</p>
        </div>
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/1d14f9674916bda46f77ff7324046c8a.png" alt="" />
        </div>
        <p className="w-1/2 mt-4 flex justify-center mr-2 ">خاک و بستر</p>
        </div>
        <div>
        <div className=" border-4 border-primarygreen rounded-full w-32 h-32 ">
            <img src="/pic/e61b578e52c2abd2e967eb1c8ce5d6d0.png" alt="" />
        </div>
        <p className="w-1/2 mt-4 flex justify-center mr-2 ">گلخانه</p>
        </div>
    </div>
    
</div>

    )
}