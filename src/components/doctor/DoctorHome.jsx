import React from "react";
import Image from 'next/image'

const DoctorHome = (props) => {
  const contents = props.contents;
  const mainContents = props.mainContents;
  return (
    <div className="flex flex-col m-auto my-20 xl:w-9/12">
      <div className="flex flex-col items-center justify-center my-5">
        <h2 className="text-5xl text-gray-500">Doctors</h2>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row bg-gradient-to-r via-gray-300 to-blue-900 from-cyan-700">
        <div className="px-5 lg:w-1/3">
          {
            contents?
          contents.map((item,index) => {
            return (
              <div key={index} className="flex flex-row gap-5 py-5">
                <img
                  className="w-20"
                  src={item.image}
                  alt={item.firstNameTH + ' ' +item.lastNameTH }
                />
                <div className="w-full">
                  <h6 className="font-bold text-white">{item.firstNameTH + ' ' +item.lastNameTH }</h6>
                  <p className="text-white">
                    {item.descriptionTH}
                  </p>
                </div>
              </div>
            );
          })
          : ''
        }
        </div>
        <div className="px-5 lg:w-1/3">
          {/* doctor main */}
          <img 
          src={mainContents.image}
          alt={mainContents.image}
          />
        </div>
        <div className="px-5 lg:w-1/3">
          {/* doctor main */}
          <div className="flex flex-col gap-5 p-5 lg:px-10 xl:px-5">
            <h3 className="py-5 text-2xl font-bold text-white">
              {mainContents.firstNameTH + ' ' +mainContents.lastNameTH }
            </h3>
            <p className="text-white">
              {mainContents.descriptionTH}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHome;
