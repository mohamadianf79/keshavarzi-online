import { RokhFont } from "@/app/component/font";
import LikeSvg from "@/app/component/svg/like";
import ListSvg from "@/app/component/svg/list";
import LogOutSvg from "@/app/component/svg/logout";
import MapSvg from "@/app/component/svg/map";
import ProfileSvg from "@/app/component/svg/profile";
import Link from "next/link";



export default function ProfileLayout({
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

                <div className=" font-bold text-primarydarkgray mt-5  px-2 ">{title}</div></div>

            <div className="flex ">
                <div className="w-1/4 py-5">
                    <div className="border rounded-lg shadow p-4">
                        <div className="border-b pb-2">
                        <Link href='/profile/account'> 
                            <button className={`${link === 'account' ? 'text-primarygreen2 bg-primarylightgreen' : 'bg-white text-primarydarkgray'} flex items-center w-full transition-all px-2 py-1 hover:bg-primarylightgreen hover:text-primarygreen2`}>
                                <div><ProfileSvg /></div>
                                <div className="mr-2">حساب کاربری من</div>
                            </button>
                            </Link>
                            <Link href='/profile/addresses'>  
                              <button className={`${link === 'addresses' ? 'text-primarygreen2 bg-primarylightgreen' : 'bg-white text-primarydarkgray'} flex items-center w-full transition-all px-2 py-1 hover:bg-primarylightgreen hover:text-primarygreen2`}>
                                <div><MapSvg /></div>
                                <div className="mr-2">آدرس‌ها</div>
                            </button></Link>

                            <Link href='/profile/orders'> 
                            <button className={`${link === 'orders' ? 'text-primarygreen2 bg-primarylightgreen' : 'bg-white text-primarydarkgray'} flex items-center w-full transition-all px-2 py-1 hover:bg-primarylightgreen hover:text-primarygreen2`}>
                                <div><ListSvg /></div>
                                <div className="mr-2">سفارشات من</div>
                            </button>
                            </Link>
                        
                            <Link href='/profile/favorites'> 
                            <button className={`${link === 'favorites' ? 'text-primarygreen2 bg-primarylightgreen' : 'bg-white text-primarydarkgray'} flex items-center w-full transition-all px-2 py-1 hover:bg-primarylightgreen hover:text-primarygreen2`}>
                                <div className="w-5"><LikeSvg /></div>
                                <div className="mr-2"> علاقه‌مندی‌ها</div>
                            </button>
                            </Link>
                        </div>
                        <button className="flex mt-2 items-center w-full transition-all px-2 py-1 hover:bg-primarylightgreen hover:text-primarygreen2">
                            <div className="w-5 h-5"><LogOutSvg /></div>
                            <div className="mr-2 "> خروج</div>
                        </button>

                    </div>




                </div>
                <div className="w-3/4 py-5 mr-10">
                    {children}
                </div>

            </div>
        </div>
    )
}