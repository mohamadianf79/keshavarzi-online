import { RokhFont } from "@/app/component/font";
import CartSvg from "@/app/component/svg/cart";

export default function BankPort() {
    return (
        <div className={`${RokhFont.className} flex justify-center items-center my-20`}>
            <div className="border rounded-lg shadow w-96 flex justify-center items-center flex-col ">
            <div className="border-b-2 border-primarygreen3 flex justify-center flex-col items-center p-10">
                <div className="bg-primarylightgreen w-14 h-14 rounded-lg flex justify-center items-center pt-1.5">
                    <CartSvg />
                </div>
                <p className="text-primarydarkgray mt-5">در حال انتقال به صفحه پرداخت بانک...</p>
            </div></div>
        </div>
    )
}