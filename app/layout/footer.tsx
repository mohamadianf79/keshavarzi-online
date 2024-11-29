import FaceBookSvg from "../component/svg/facebook";
import GoogleSvg from "../component/svg/google";
import InstagramSvg from "../component/svg/instagram";
import LocationSvg from "../component/svg/location";
import MailSvg from "../component/svg/mail";
import MobileSvg from "../component/svg/mobile";
import PintrestSvg from "../component/svg/pintrest";
import TwitterSvg from "../component/svg/twitter";

export default function Footer() {
    return (
        <div className=" w-full">
            <div className="bg-primarygreen1 flex px-20 py-10">
                <div className="w-1/2 flex justify-between">
                <div>
                    <div className=" text-white text-sm px-20">
<div>
    <p>شنبه تا پنج شنبه: 10 صبح تا 17 بعد از ظهر</p>
    <p className="mt-2">جمعه : 10 صبح تا 14 بعد از ظهر</p>
    <div className="flex mt-2 items-center">
        <div><LocationSvg/></div>
        <p className="mr-2">تهران، خیابان فلان، کوچه 36، پلاک 18</p>
    </div>
    <div className="flex my-4 items-center">
        <div><MailSvg/></div>
        <p className="mr-2">keshavarzionline@gmail.com</p>
    </div>
    <div className="flex mt-2 items-center">
        <div><MobileSvg/></div>
        <p className="mr-2">021920222145</p>
    </div>
</div>

</div>
                </div>
<div className="text-white text-sm">
<div>
    <p className="">دسترسی سریع</p>
    <p className="mt-5">. کود</p>
    <p className="mt-2">. سموم</p>
    <p className="mt-2">. بذر</p>
    <p className="mt-2">. ادوات کشاورزی</p>
    <p className="mt-2">. خاک و بستر</p>
   
</div>
</div>
<div className="text-white text-sm">
<div>
    <p className=""> ارتباط با ما</p>
    <p className="mt-5">. درباره ما</p>
    <p className="mt-2">. پشتیبانی</p>
    <p className="mt-2">. ارتباط با ما</p>
    <p className="mt-2">. قوانین و مقررات</p>
    <p className="mt-2">. راهنمای خرید آنلاین</p>
   
</div>
</div>
                </div>
<div className="flex w-1/2 justify-end">
<div className="bg-white rounded-lg w-24 h-24 flex justify-center items-center"> 
    <img className="w-20 h-20" src="/pic/01e6d2c8d1d70dcff088a5d612d5882a.png" alt="" />
</div>
<div className="bg-white rounded-lg w-24 h-24 flex justify-center items-center mx-5"> 
    <img className="w-20 h-20" src="/pic/27bacfa63df3e3f980e5825f4ec236c5.png" alt="" />
</div>
<div className="bg-white rounded-lg w-24 h-24 flex justify-center items-center"> 
    <img className="w-20 h-20" src="/pic/646e96ba52786efcec05317f0ebbf756.png" alt="" />
</div>
</div>
            </div>
            <div className="bg-primarygreen2 px-20 py-2 text-white flex justify-between">
                <div className="text-sm">
                    کلیه حقوق این سایت متعلق به کشاورزی آنلاین می باشد.
                </div>
                <div className="w-1/5 flex justify-between">
                    <div><GoogleSvg /></div>
                    <div><PintrestSvg /></div>
                    <div><InstagramSvg /></div>
                    <div><GoogleSvg /></div>
                    <div><PintrestSvg /></div>
                </div>
            </div>

        </div>
    )
}