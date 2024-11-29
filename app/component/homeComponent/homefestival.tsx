import ArrowLeft from "../svg/arrowleft";
import PercentSvg from "../svg/percent";

export default function HomeFestival() {
    return (
        <div className="bg-primaryred p-4 rounded-lg">
            <div className="flex items-center w-full rouned-lg justify-between bg-white border border-white rounded-lg px-5 p-2">
                <div className="flex items-center">
                    <PercentSvg />
                    <p className="mr-2 font-bold text-primarydarkgray">جشنواره ویژه محصولات کشاورزی آنلاین</p>
                    <p className="text-primaryred font-bold mr-10 text-lg">36:18:25</p>
                </div>

                <div className="flex justify-end  items-center">
                    <p>نمایش همه</p>
                    <div className="mr-1"><ArrowLeft /></div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-8 p-2 mt-5">
                <div className="bg-white rouned-lg p-2 border border-white rounded-lg px-4">
                    <p className="bg-primaryred flex items-center justify-center text-sm text-white rounded-lg w-10 h-5">7%</p>
                    <div >
                        <img src="/pic/kood.png" alt="" />
                        <p className="text-center text-primarydarkgray ">بذر گوجه فرنگی ثنا پربار تیپ بلوکی</p>
                        <p className="text-primaryred font-bold text-end mt-2 text-lg">2.400.000    تومان</p>
                        <p className="line-through text-primarytextgray text-end mt-2 ">2.480.000    تومان</p>
                    </div>
                </div>
                <div className="bg-white rouned-lg p-2 border border-white rounded-lg px-4">
                    <p className="bg-primaryred flex items-center justify-center text-sm text-white rounded-lg w-10 h-5">7%</p>
                    <div >
                        <img src="/pic/37a4414d08d978ef9d91f0585c2b0fe4.png" alt="" />
                        <p className="text-center text-primarydarkgray ">بذر گوجه فرنگی ثنا پربار تیپ بلوکی</p>
                        <p className="text-primaryred font-bold text-end mt-2 text-lg">2.400.000    تومان</p>
                        <p className="line-through text-primarytextgray text-end mt-2 ">2.480.000    تومان</p>
                    </div>
                </div>
                <div className="bg-white rouned-lg p-2 border border-white rounded-lg px-4">
                    <p className="bg-primaryred flex items-center justify-center text-sm text-white rounded-lg w-10 h-5">7%</p>
                    <div >
                        <img src="/pic/07cfbd762ff8c926e3c9f288465a94ea.png" alt="" />
                        <p className="text-center text-primarydarkgray ">بذر گوجه فرنگی ثنا پربار تیپ بلوکی</p>
                        <p className="text-primaryred font-bold text-end mt-2 text-lg">2.400.000    تومان</p>
                        <p className="line-through text-primarytextgray text-end mt-2 ">2.480.000    تومان</p>
                    </div>
                </div>
                <div className="bg-white rouned-lg p-2 border border-white rounded-lg px-4">
                    <p className="bg-primaryred flex items-center justify-center text-sm text-white rounded-lg w-10 h-5">7%</p>
                    <div >
                        <img src="/pic/1adad3d959863e5cb4b8a2870035decb.png" alt="" />
                        <p className="text-center text-primarydarkgray ">بذر گوجه فرنگی ثنا پربار تیپ بلوکی</p>
                        <p className="text-primaryred font-bold text-end mt-2 text-lg">2.400.000    تومان</p>
                        <p className="line-through text-primarytextgray text-end mt-2 ">2.480.000    تومان</p>
                    </div>
                </div>
                <div className="bg-white rouned-lg p-2 border border-white rounded-lg px-4">
                    <p className="bg-primaryred flex items-center justify-center text-sm text-white rounded-lg w-10 h-5">7%</p>
                    <div >
                        <img src="/pic/5f91df634c3b01cc8d2fdac7a0bc1f5f.png" alt="" />
                        <p className="text-center text-primarydarkgray ">بذر گوجه فرنگی ثنا پربار تیپ بلوکی</p>
                        <p className="text-primaryred font-bold text-end mt-2 text-lg">2.400.000    تومان</p>
                        <p className="line-through text-primarytextgray text-end mt-2 ">2.480.000    تومان</p>
                    </div>
                </div>
            </div>
        </div>
    )
}