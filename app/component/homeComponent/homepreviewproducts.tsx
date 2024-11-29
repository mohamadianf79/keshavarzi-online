import ArrowLeft from "../svg/arrowleft";
import DollarSvg from "../svg/dollar";

export default function HomePriviewProducts({title}:{title:string}){
    return(
        <div className=" border-t-2 my-5 border-b-2 mx-20 py-5">
            <div className="flex justify-between  ">
<div className="flex items-center">
   <div><DollarSvg/></div> 
   <div className="font-bold text-lg text-primarydarkgray mr-1">{title}</div> </div>
   <div className="flex items-center text-primarygreen2">
    <p className="ml-1">نمایش همه</p>
    <div className="text-primarygreen2"><ArrowLeft/></div>
   </div>
  
            </div>
            <div className="grid grid-cols-5 divide-x  divide-x-reverse p-2  ">
<div className="py-4 px-10 ">
    <div className="w-full flex justify-center"> 
          <img className="w-60  " src="/pic/kood.png" alt="" /></div>
 
    <p className="text-primarytextgray text-lg text-start">كود 36 12 12 ده كيلويی بارافشان</p>
    <p className="font-bold text-primarydarkgray text-end mt-4">2.400.000    تومان</p>
</div>
<div className="py-4 px-10 ">
    <div className="w-full flex justify-center"> 
          <img className="w-60  " src="/pic/37a4414d08d978ef9d91f0585c2b0fe4.png" alt="" /></div>
 
    <p className="text-primarytextgray text-lg text-start">كود 36 12 12 ده كيلويی بارافشان</p>
    <p className="font-bold text-primarydarkgray text-end mt-4">2.400.000    تومان</p>
</div>
<div className="py-4 px-10 ">
    <div className="w-full flex justify-center"> 
          <img className="w-60  " src="/pic/07cfbd762ff8c926e3c9f288465a94ea.png" alt="" /></div>
 
    <p className="text-primarytextgray text-lg text-start">كود 36 12 12 ده كيلويی بارافشان</p>
    <p className="font-bold text-primarydarkgray text-end mt-4">2.400.000    تومان</p>
</div>
<div className="py-4 px-10 ">
<p className="bg-primaryred flex items-center justify-center text-sm text-white rounded-lg w-10 h-6">7%</p>
    <div className="w-full flex justify-center"> 
        
          <img className="w-60  " src="/pic/1adad3d959863e5cb4b8a2870035decb.png" alt="" /></div>
 
    <p className="text-primarytextgray text-lg text-start">كود 36 12 12 ده كيلويی بارافشان</p>
    <p className="font-bold text-primarydarkgray text-end mt-4">2.400.000    تومان</p>
</div>
<div className="py-4 px-10 ">
<p className="bg-primaryred flex items-center justify-center text-sm text-white rounded-lg w-10 h-6">7%</p>
    <div className="w-full flex justify-center"> 
          <img className="w-60  " src="/pic/5f91df634c3b01cc8d2fdac7a0bc1f5f.png" alt="" /></div>
 
    <p className="text-primarytextgray text-lg text-start">كود 36 12 12 ده كيلويی بارافشان</p>
    <p className="font-bold text-primarydarkgray text-end mt-4">2.400.000    تومان</p>
</div>
   </div>

        </div>
    )
}