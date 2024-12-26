import ProfileLayout from "../component/profilelayout/page";

export default function Orders(){
    return (
        <ProfileLayout link="orders" label="حساب کاربری" title="سلام کاربر 12347! خوش آمدید.">
            <div className="border rounded-lg shadow p-4">
                <p className="text-primarydarkgray">محصولی یافت نشد!</p>
                <button className="bg-primarygreen2 text-white p-4 rounded-lg mt-5">مشاهده محصولات</button>
            </div>
        </ProfileLayout>
    )
} 