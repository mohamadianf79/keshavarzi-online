'use client'

import ArrowDownSvg from "@/app/component/svg/arrowdown";
import ArrowUpSvg from "@/app/component/svg/arrowup";
import CloseSvg from "@/app/component/svg/close";
import FilterSvg from "@/app/component/svg/filter";
import { useState } from "react";

export default function CategoryLayout({ children }: { children: React.ReactNode; }) {
    const [isChecked, setIsChecked] = useState(false);

    const CustomCheckbox = ({ label, checked, onChange }: { label: string | any, checked: Boolean | any, onChange: any }) => {
        return (
            <label className="flex items-center cursor-pointer">
                <div
                    onClick={onChange}
                    className={`w-5 h-5 flex items-center justify-center border-2 rounded ${checked ? 'bg-primarygreen3 border border-primarygreen3 ' : 'border-gray-300'
                        }`}
                >
                    {checked && <div className=" bg-primarygreen3 rounded" />}
                </div>
                <span className="mr-2 text-gray-700">{label}</span>
            </label>
        );
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    const [checkedItems, setCheckedItems] = useState<any>({});

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setCheckedItems((prev: any) => ({ ...prev, [name]: checked }));
    };

    const options = [
        { id: 1, label: 'ماکرو', value: 'macro' },
        { id: 2, label: 'میکرو ریز مغذی', value: 'micro' },
        { id: 3, label: 'مدیریت‌های رشد و آمینواسیدها', value: 'management' },
        { id: 4, label: 'اصلاح کننده‌ها', value: 'modifier' },
        { id: 5, label: 'گودگرد', value: 'gogard' },
    ];

    return (
        <div className="mx-20">
            <div className="flex text-sm my-2">
                <p className="text-primarytextgray">خانه</p>
                <div className="border-l mx-2 border-primarytextgray h-4"></div>
                <p>کود</p>
            </div>
            <div className="flex space-x-8 space-x-reverse ">
                <div className="w-1/4 border rounded-lg h-fit">
                    <div className="flex items-center border-b p-5">
                        <div><FilterSvg /></div>
                        <p className="mr-2 text-primarytextgray text-lg">فیلترها</p>
                    </div>
                    <div className="p-5   border-b">
                        <div className="flex justify-between ">
                            <p className="text-primarydarkgray">فیلترهای اعمال شده</p>
                            <button className="flex text-primarytextgray">
                                <p>حذف همه</p>
                                <div><CloseSvg /></div>
                            </button>

                        </div>
                        <div className="flex mt-4  flex-wrap">
                            <div className="bg-primarygreen3 text-white rounded-lg m-1 p-2 flex">کود
                                <div className="text-white"><CloseSvg /></div>
                            </div>
                            <div className="bg-primarygreen3 text-white rounded-lg m-1 p-2 flex">فقط محصولات موجود
                                <div className="text-white"><CloseSvg /></div>
                            </div>
                            <div className="bg-primarygreen3 text-white rounded-lg p-2 flex m-1 ">ماکرو
                                <div className="text-white"><CloseSvg /></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 ">
                        <div className="items-center flex justify-between">
                            <p className="text-primarytextgray text-lg">فقط محصولات موجود</p>
                            <div>      <label className="flex items-center cursor-pointer">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleToggle}
                                        className="hidden"
                                    />
                                    <div className={`${isChecked ? 'bg-[#006838]' : 'bg-gray-300 '} block w-14 h-8 rounded-full`}></div>
                                    <div
                                        className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isChecked ? 'translate-x-6 bg-white' : ''}`}
                                    ></div>
                                </div>

                            </label></div>
                        </div>
                        <div className="items-center flex justify-between my-5 text-lg text-primarytextgray">
                            <p>دسته‌بندی‌ها</p>
                            <button>
                                <ArrowUpSvg />
                            </button>
                        </div>
                        <div>
                            <div className="items-center flex justify-between my-5 text-lg text-primarydarkgray">
                                <p>کود</p>
                                <button><ArrowUpSvg /></button>
                            </div>
                            <div className="flex flex-col space-y-2">
                                {options.map(({ id, label, value }) => (
                                    <CustomCheckbox
                                        key={id}
                                        label={label}
                                        checked={checkedItems[value] || false}
                                        onChange={() => handleCheckboxChange({ target: { name: value, checked: !checkedItems[value] } })}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="items-center flex justify-between my-5 text-lg text-primarydarkgray">
                                <p>بذر</p>
                                <button><ArrowDownSvg /></button>
                            </div>
                        </div>
                        <div className="items-center flex justify-between my-5 text-lg text-primarydarkgray">
                            <p>سم</p>
                            <button className="text-primarytextgray"><ArrowDownSvg /></button>
                        </div>
                        <div className="items-center flex justify-between my-5 text-lg text-primarydarkgray">
                            <p>گلخانه</p>
                            <button><ArrowDownSvg /></button>
                        </div>
                        <div className="items-center flex justify-between my-5 text-lg text-primarydarkgray">
                            <p>برندها</p>
                            <button><ArrowDownSvg /></button>
                        </div>
                    </div>

                </div>
                <div className="w-3/4">
                    {children}
                </div>
            </div>
            <div className="mt-20">
                <div>
                    <div className="flex items-center">
                        <div className="border-r-2 border-primarydarkgray h-4">
                        </div>
                        <p className="text-primarydarkgray text-lg mr-1 font-bold">کود</p>
                    </div>
                    <p className="mt-2 text-justify text-primarytextgray">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p></div>
                    <div>
                    <div className="flex items-center mt-5">
                        <div className="border-r-2 border-primarydarkgray h-4">
                        </div>
                        <p className="text-primarydarkgray text-lg mr-1 font-bold">انواع کود</p>
                    </div>
                    <p className="mt-2 text-justify text-primarytextgray">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p></div>
                    <div>
                    <div className="flex items-center mt-5">
                        <div className="border-r-2 border-primarydarkgray h-4">
                        </div>
                        <p className="text-primarydarkgray text-lg mr-1 font-bold">معیارهای انتخاب کود مناسب</p>
                    </div>
                    <p className="mt-2 text-justify text-primarytextgray">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p></div>
            </div>
        </div>
    )
}