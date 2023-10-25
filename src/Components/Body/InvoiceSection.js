import React from 'react'
import DarkButton from '../Button/DarkButton'
import LightButton from '../Button/LightButton'
import LabelwithValue from '../LabelwithValue/LabelwithValue'
import { labelList } from '../LabelwithValue/LabelList'
import { IconAdd, IconSetting } from '../../assest/Icon'
import UploadLogo from '../UploadLogo/UploadLogo'
import BilledDetail from './BilledDetail.js/BilledDetail'
import InputwithLabel from './Input/InputwithLabel'
import DiscountInput from './Input/DiscountInput'
import TextArea from './TextArea/TextArea'

const InvoiceSection = () => {
  return (<>

    <div className='bg-[#f6f7f8]'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center justify-end py-4'>
          <LightButton name="Send Document by Email" />
          <DarkButton name="generate document" />
        </div>
      </div>
    </div>

    <section className="p-5 bg-[#f6f7f8]">
      <div className='max-w-5xl mx-auto flex justify-between mb-6'>
        <div className='flex flex-wrap items-center'>
          <p className='uppercase text-xs font-bold mx-2 '>Invoice Settings:</p>
          {labelList.map((list) => {
            return (<div key={list.key}>
              <LabelwithValue label={list.name} value={list.value} />
            </div>)
          })}
        </div>
        <p className='flex items-center text-[#0028F2] uppercase text-xs font-bold mx-2 '><IconSetting />Edit Settings</p>
      </div>

      <div className="max-w-5xl mx-auto p-1 pb-6 bg-white">
        <article className="overflow-hidden">
          <div className="bg-[white] rounded-b-md">
            <div className="p-9">
              <div className="flex flex-row-reverse space-x-4 space-x-reverse text-slate-700">
                <p className="text-3xl text-black font-medium tracking-tight uppercase font-body">
                  invoice
                </p>
              </div>
            </div>
            <div className="grid  gap-4 md:grid-cols-2 p-3 ">
              <UploadLogo />
            </div>
            <div className="p-3">
              <div className="grid gap-4 md:grid-cols-2">
                <BilledDetail label1="*billed from" label2={"YOUR BUSINESS DETAILS"} label3={"YOUR CUSTOMER DETAILS"} istooltip={true} />
                <BilledDetail label1="*billed to" label2={"ADD BUSINESS DETAILS"} label3={"ADD CUSTOMER DETAILS"} istooltip={false} />
              </div>
            </div>
            <div className="grid gap-6 mb-3 md:grid-cols-4 p-4">
              <InputwithLabel labelname="*INVOICE NUMBER:" Type="number" />
              <InputwithLabel labelname="*ISSUE DATE" Type="date" />
              <InputwithLabel labelname="DUE DATE:" Type="date" />
              <InputwithLabel labelname="DELIVERY DATE:" Type="date" />
            </div>
            <div className="mb-2 p-4">
              <div className="text-sm text-black font-extrabold bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5">MORE OPTIONS </div>
            </div>
            <div className="grid gap-3 mb-3 md:grid-cols-7 p-4">
              {/* <IconDrag /> */}
              <div className='grid col-span-2'>
                <label htmlFor="ii" className="block mb-2 text-xs uppercase text-black font-bold">ITEM</label>
                <input type="text" id={"ii"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={""} required />
              </div>
              <InputwithLabel labelname="QUANTITY" Type="text" />
              <InputwithLabel labelname="UNIT" Type="text" />
              <InputwithLabel labelname="PRICE" Type="text" />
              <InputwithLabel labelname="VAT" Type="text" />
              <InputwithLabel labelname="TOTAL ($)" Type="text" />
              {/* <IconDelete /> */}
            </div>
            <div className="px-10 py-2 ">
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Add Description..." required />
            </div>
            <div className="p-4 flex items-center text-xs uppercase text-[#0028F2] font-bold">
              <IconAdd /> ADD ITEM
            </div>

            <div className="grid md:grid-cols-2 gap-4 p-4">
              <div className="md:col-start-1 col-end-2  h-full mt-20">
                {/* <UploadLogo /> */}
                <TextArea />
              </div>
              <div className="md:col-start-2  items-center pb-8">
                {/* <UploadLogo /> */}
                <DiscountInput />
              </div>
            </div>
            {/* <div className="p-4">
              <div className="grid grid-cols-2 gap-2 p-2">
                <TextArea />               
              </div>
            </div> */}
          </div>
        </article>
      </div>
    </section>

  </>
  )
}

export default InvoiceSection