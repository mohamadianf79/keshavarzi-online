import ProfileLayout from "../component/profilelayout/page";

export default function Account(){
    return(
        <ProfileLayout link="account" label="حساب کاربری" title="سلام کاربر 12347! خوش آمدید.">
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
                        <p>   ایمیل  </p>
                        <input className="border outline-none rounded-lg w-full mt-2 p-2 border-primarygray" placeholder="  keshavarzionline@gmail.com" />
                    </div>
                </div>
               <div className="flex justify-end mt-5">
                <button className="border text-primarygreen2 border-primarygreen2  rounded-lg px-8 py-2 ml-5">ویرایش</button>
<button className="bg-primarygreen2 text-white rounded-lg px-8 py-2 ">تایید</button>

               </div>
</div>
        </ProfileLayout>
    )
}