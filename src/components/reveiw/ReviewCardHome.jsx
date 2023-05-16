import React from "react";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ReviewHome = (props) => {
  const before = props.before;
  const after = props.after;

  let [categories] = useState({Before:{
    src: before,
    alt: 'befriend-clinic'
  },
  After:{
    src: after,
    alt: 'befriend-clinic'

  },
})
  return (
    <>
      {/* <div className="flex p-1 rounded lg:mx-1 mx-14">
        <div className="flex flex-col m-auto text-center">
          <img
            className="object-contain"
            src={before}
            alt={before}
          />
          <h3 className="bg-[#FF6F28] text-white">Before</h3>
        </div>
        <div  className="flex flex-col m-auto text-center">
          <img
            className="object-contain"
            src={after}
            alt={after}
          />
          <h3 className="bg-[#FF6F28] text-white">After</h3>
        </div>
      </div> */}
      <div className="mx-auto my-5 ">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 rounded bg-blue-900/20">
          {
            Object.keys(categories)?
          Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded py-2.5 text-sm font-medium leading-5 text-white',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-dark-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-[#FF6F28] shadow'
                    : 'text-blue-100 hover:bg-[#FF6F28] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          )):''}
        </Tab.List>
        <Tab.Panels className="mt-1">
          {
            Object.values(categories)?
          Object.values(categories).map((item, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded bg-[#002F6C]',
                'ring-white ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <img 
              className="w-full m-auto"
              src={item.src} 
              alt={item.alt} />
            </Tab.Panel>
          )):''}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </>
  );
};

export default ReviewHome;
