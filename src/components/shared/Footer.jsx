import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookFill,
  RiLineFill,
  RiInstagramFill,
  RiPhoneFill,
  RiTwitterFill,
} from "react-icons/ri";

const Footer = (props) => {
  const contents = props.contents;
  const logo = props.contents.logo;
  const mobile = props.contents.mobile || "";
  const facebook = props.contents.facebook || "";
  const line = props.contents.line || "";
  const instagram = props.contents.instagram || "";
  const twitter = props.contents.twitter || "";
  const license = props.contents.license || "";


  return (
    <>
      <footer className="text-white body-font bg-[#002F6C] lg:px-36">
        <div className="grid grid-cols-4 pt-16 pl-5 pr-16 lg:pr-20">
          <div className="col-span-3 lg:col-span-2">
            <img
                src={logo}
                alt="Befriends-Clinic"
                className="w-20 h-20 p-2 text-white bg-white rounded-full"
              ></img>
            <span className="text-2xl lg:text-4xl"> <h1> {contents.nameEN}</h1></span>
            <h5 className="my-2 text-lg text-white">{contents.goalTH}</h5>
            <h6 className="mt-2 text-sm text-white">
              ที่อยู่ : {contents.addressTH}
            </h6>
            <h6 className="mt-2 text-sm text-white">
            เลขประจำตัวผู้เสียภาษี : {contents.taxid}
            </h6>
            <h6 className="mt-2 text-sm text-white">
              ใบอนุญาติเลขที่ : {contents.license}
            </h6>
          </div>
          <div className="col-span-1 pt-20 text-right lg:text-left lg:col-span-1">
            <h2 className="mb-3 text-lg font-medium tracking-widest title-font text-white-900">
              Menu
            </h2>
            <nav className="mb-10 list-none">
              <div>
                <li>
                  <Link
                    href="/review"
                    classname="text-white underline hover:bg-gray-500"
                  >
                    Review
                  </Link>
                </li>
                <li>
                  <Link
                    href="/promotion"
                    classname="text-white underline hover:bg-gray-500"
                  >
                    Promotion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/article"
                    classname="text-white underline hover:bg-gray-500"
                  >
                    Article
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    classname="text-white underline hover:bg-gray-500"
                  >
                    Contact Us
                  </Link>
                </li>
              </div>
            </nav>
          </div>
          <div className="col-span-4 text-right lg:text-left lg:col-span-1 lg:py-16">
            <h3 className="mt-2 text-sm text-white">Tel: {contents.tel}</h3>
            <h3 className="mt-2 text-sm text-white">Mobile: {contents.mobile}</h3>
            <h3 className="mt-2 text-sm text-white">Email: {contents.email}</h3>
            <h2 className="mt-3 text-sm font-medium tracking-widest title-font text-white-900">
              บริการของเรา
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href="/review" className="text-white-600 hover:text-white-800">Filler</Link>
              </li>
              <li>
                <Link href="/review"  className="text-white-600 hover:text-white-800">Botox</Link>
              </li>
              <li>
                <Link href="/review"  className="text-white-600 hover:text-white-800">
                  Thread lift
                </Link>
              </li>
              <li>
                <Link href="/review"  className="text-white-600 hover:text-white-800">Meso fat</Link>
              </li>
            </nav>
          </div>
        </div>
        <div className="fixed right-0 z-50 flex flex-col px-1 py-3 space-y-3 bg-white rounded-full top-2/4">
          <div className="container flex flex-col flex-wrap px-1 py-1 mx-auto">
            <Link
              href={mobile}
              className="m-1 text-white text-2xl p-1 w-8 rounded-full bg-[#002F6C]"
            >
              <RiPhoneFill />
            </Link>
            <Link
              href={facebook}
              className="m-1 text-white text-2xl p-1 w-8 rounded-full bg-[#002F6C]"
              passHref
            >
              <RiFacebookFill />
            </Link>
            <Link
              href={line}
              className="m-1 text-white text-2xl p-1 w-8 rounded-full bg-[#002F6C]"
            >
              <RiLineFill />
            </Link>
            <Link
              href={instagram}
              className="m-1 text-white text-2xl p-1 w-8 rounded-full bg-[#002F6C]"
            >
              <RiInstagramFill />
            </Link>
            <Link
              href={twitter}
              className="m-1 text-white text-2xl p-1 w-8 rounded-full bg-[#002F6C]"
            >
              <RiTwitterFill />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
