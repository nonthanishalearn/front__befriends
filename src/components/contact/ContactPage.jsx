import React from "react";
import Image from "next/image";

const ContactPage = (props) => {
  const contentContactMain = props.contents || '';
  const imageHeader = props.imageHeader || '';
  const textHeader = props.textHeader || '';
  return (
    <div>
      <img
        className="flex"
        src={imageHeader}
        alt={imageHeader}
      >
      </img>
      <div  className="text-2xl lg:text-5xl xl:px-20 py-2 text-white bg-[#002F6C] ">
        <h1>Contact</h1>
      </div>
      <div className="text-xl xl:px-20 text-[#002F5C]">
        <h1>{textHeader}</h1>
      </div>
      <div className="grid grid-cols-3 px-10 py-20 md:px-20">
        <div className="col-span-3 font-bold lg:col-span-3 xl:mx-96">
          <img
            src={contentContactMain.logo}
            alt="Befriends-Clinic"
            className="w-40 h-40 p-2 text-white bg-white rounded-full"
          />
          <span className="text-2xl lg:text-4xl">
            <h1 className="text-[#002F6C] font-bold">
              {contentContactMain.nameEN}
            </h1>
          </span>
          <h2 className="my-2 text-xl font-bold text-[#002F6C]">
            {contentContactMain.goalTH}
          </h2>
          <div className="my-5 text-[#002F6C] text-lg font-bold">
            เกี่ยวกับเรา
          </div>
          <h3 className="my-2 text-[#002F6C] text-md font-bold">
            {contentContactMain.descriptionTH}
          </h3>
          <h6 className="mt-2 text-sm text-[#002F6C]">
            ที่อยู่:
            <span className="text-[#F66B3C]">
              {contentContactMain.addressTH}
            </span>
          </h6>
          <h6 className="mt-2 text-sm text-[#002F6C]">
            เลขประจำตัวผู้เสียภาษี:
            <span className="text-[#F66B3C]">{contentContactMain.taxid}</span>
          </h6>
          <h6 className="mt-2 text-sm text-[#002F6C]">
            ใบอนุญาตเลขที่:
            <span className="text-[#F66B3C]">{contentContactMain.license}</span>
          </h6>
          <h3 className="mt-2 text-sm text-[#002F6C]">
            Tel:
            <span className="text-[#F66B3C]"> {contentContactMain.tel}</span>
          </h3>
          <h3 className="mt-2 text-sm text-[#002F6C]">
            Mobile:
            <span className="text-[#F66B3C]">{contentContactMain.mobile}</span>
          </h3>
          {/* <h3 className="mt-2 text-sm text-[#002F6C]">
            Email:
            <span className="text-[#F66B3C]">{contentContactMain.email}</span>
          </h3>
          <h3 className="mt-2 text-sm text-[#002F6C]">
            Line:
            <span className="text-[#F66B3C]"> {contentContactMain.line}</span>
          </h3>
          <h3 className="mt-2 text-sm text-[#002F6C]">
            Instagram:
            <span className="text-[#F66B3C]">
              {contentContactMain.instagram}
            </span>
          </h3>
          <h3 className="mt-2 text-sm text-[#002F6C]">
            Tiktok:
            <span className="text-[#F66B3C]">{contentContactMain.tiktok}</span>
          </h3>
          <h3 className="mt-2 text-sm text-[#002F6C]">
            Facebook:
            <span className="text-[#F66B3C]">
              {contentContactMain.facebook}
            </span>
          </h3>
          <h3 className="mt-2 text-sm text-[#002F6C]">
            Twitter:
            <span className="text-[#F66B3C]">{contentContactMain.twitter}</span>
          </h3> */}
        </div>
      </div>
      <div className="grid grid-cols-8 my-10">
        <img
          src={contentContactMain.imageMap}
          alt="Befriends-Clinic"
          className="col-span-8 p-2 m-auto text-white bg-white rounded shadow-md sm:col-span-6 sm:col-start-2 sm:end-5"
        ></img>
      </div>
    </div>
  );
};

export default ContactPage;
