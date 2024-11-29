import AboutSvg from "../svg/about";

export default function HomeAbout() {
    return (
        <div className="mx-20 my-5">
            <div className="h-96 bg-cover bg-no-repeat flex-col items-end flex justify-center p-5" style={{ backgroundImage: "url('/pic/5b872f62f1292d40558619ceb4f702ea.jpg')" }}>
            <div className="w-3/5 ">
                <div className="flex items-center text-white">
                    <p><AboutSvg /></p>
                    <div className="text-lg font-bold mr-2">
                        درباره کشاورزی آنلاین
                    </div>

                </div>
                <div>
                     <p className="text-white text-justify w-2/3 mr-10 mt-2 ">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ایگ...
                </p>
                <button className="mr-10 font-bold text-lg text-white w-2/3 text-end ">بیشتر بخوانید</button>
                </div>
                 </div>
            </div>

        </div>
    )
}