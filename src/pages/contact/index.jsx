import React from "react";
import MainLayout from "../../components/layout/Mainlayout";

import ContactPage from '@/components/contact/ContactPage'
import "tailwindcss/tailwind.css";
import ScheduleHome from "@/components/schedule/ScheduleHome";
import { getSchedule } from "@/services/schedule.service";
import { getContact } from "@/services/contact.service";
import Image from "next/image";
const IndexVeiw = (props) => {
  const baseURL = process.env.baseURL;
  const scheduleHome = `url("/asset/image/menu/schedule_home.png")`;
  // const contentSchedule = props.schedule?.data?.map((items) => {
  //   return {
  //     date: items.attributes?.date ?? "",
  //     from: items.attributes?.from ?? "",
  //     to: items.attributes?.to ?? "",
  //     doctor: items.attributes?.doctor.data?.attributes?.firstNameTH ?? "",
  //   };
  // });
  const contentSchedule = []
  // const itemContactHome = props.contact?.data;
  // const contentContactMain = {
  //   page: "Contact",
  //   nameTH: itemContactHome?.attributes?.nameTH ?? "",
  //   nameEN: itemContactHome?.attributes?.nameEN ?? "",
  //   tel: itemContactHome?.attributes?.tel ?? "",
  //   mobile: itemContactHome?.attributes?.mobile ?? "",
  //   email: itemContactHome?.attributes?.email ?? "",
  //   line: itemContactHome?.attributes?.line ?? "",
  //   facebook: itemContactHome?.attributes?.facebook ?? "",
  //   tiktok: itemContactHome?.attributes?.tiktok ?? "",
  //   twitter: itemContactHome?.attributes?.twitter ?? "",
  //   taxid: itemContactHome?.attributes?.taxid ?? "",
  //   instagram: itemContactHome?.attributes?.instagram ?? "",
  //   logo: baseURL + itemContactHome?.attributes.logo.data?.attributes?.url ?? "",
  //   descriptionTH: itemContactHome?.attributes?.descriptionTH ?? "",
  //   descriptionEN: itemContactHome?.attributes?.descriptionEN ?? "",
  //   goalTH: itemContactHome?.attributes?.goalTH ?? "",
  //   goalEN: itemContactHome?.attributes?.goalEN ?? "",
  //   addressTH: itemContactHome?.attributes?.addressTH ?? "",
  //   addressEN: itemContactHome?.attributes?.addressEN ?? "",
  //   products: itemContactHome?.attributes?.data ?? "",
  //   license: itemContactHome?.attributes?.license ?? "",
  //   descriptionSchedule: itemContactHome?.attributes?.descriptionSchedule ?? "",
  //   imageMap:  baseURL + itemContactHome?.attributes?.imageMap.data?.attributes?.url ?? "",
  //   imageReview:  baseURL + itemContactHome?.attributes?.imageReview.data?.attributes?.url ?? "",
  //   imagePromotion:  baseURL + itemContactHome?.attributes?.imagePromotion.data?.attributes?.url ?? "",
  //   imageArticle:  baseURL + itemContactHome?.attributes?.imageArticle.data?.attributes?.url ?? "",
  //   imageContact:  baseURL + itemContactHome?.attributes?.imageContact.data?.attributes?.url ?? "",
  //   textReview: itemContactHome?.attributes?.textReview ?? "",
  //   textPromotion: itemContactHome?.attributes?.textPromotion ?? "",
  //   textArticle: itemContactHome?.attributes?.textArticle ?? "",
  //   textContact: itemContactHome?.attributes?.textContact ?? "",
  // } ?? {};

  const contentContactMain = {
    page: "Contact",
    nameTH: "Befriends-clinic",
    nameEN: "Befriends-clinic",
    tel: "0936656900",
    mobile: "0936656900",
    email: "befriendsclinic.official@gmail.com",
    line: "@befriends.clinic",
    facebook: "https://www.facebook.com/befriends.clinic",
    tiktok: "https://www.tiktok.com/@befriends.clinic",
    twitter: "https://www.youtube.com/channel/",
    taxid: "www.befriends-clinic.com",
    instagram: "https://www.instagram.com/befriends.clinic/",
    logo: "/asset/image/befriends.png",
    descriptionTH: "Befriends Clinic ที่เดียวจบครบเรื่องผิวสวย หน้าใส ดูแลโดยแพทย์ผู้เชี่ยวชาญ",
    descriptionEN: "Befriends Clinic ที่เดียวจบครบเรื่องผิวสวย หน้าใส ดูแลโดยแพทย์ผู้เชี่ยวชาญ",
    goalTH: "Befriends Clinic ที่เดียวจบครบเรื่องผิวสวย หน้าใส ดูแลโดยแพทย์ผู้เชี่ยวชาญ",
    goalEN: "Befriends Clinic ที่เดียวจบครบเรื่องผิวสวย หน้าใส ดูแลโดยแพทย์ผู้เชี่ยวชาญ",
    addressTH: "ชั้นที่ 2 96 ศูนย์การค้า สัมมากรเพลส รามคำแหง ห้องเลขที่ I207, I308 3 ถนน รามคำแหง แขวงสะพานสูง เขตสะพานสูง กรุงเทพมหานคร 10240 แขวงสะพานสูง เขตสะพานสูง, กรุงเทพมหานคร 10240",
    addressEN: "ชั้นที่ 2 96 ศูนย์การค้า สัมมากรเพลส รามคำแหง ห้องเลขที่ I207, I308 3 ถนน รามคำแหง แขวงสะพานสูง เขตสะพานสูง กรุงเทพมหานคร 10240 แขวงสะพานสูง เขตสะพานสูง, กรุงเทพมหานคร 10240",
    products: "www.befriends-clinic.com",
    license: "www.befriends-clinic.com",
    descriptionSchedule: "www.befriends-clinic.com",
    imageMap: "/asset/image/contact/clinicplace.jpg",
    imageReview: "/asset/image/menu/review.jpg",
    imagePromotion: "/asset/image/menu/promotion.jpg",
    imageArticle: "/asset/image/menu/article.jpg",
    imageContact: "/asset/image/menu/contact.jpg",
    textReview: "www.befriends-clinic.com",
    textPromotion: "www.befriends-clinic.com",
    textArticle: "www.befriends-clinic.com",
    textContact: "www.befriends-clinic.com",
  };
  return (
    <>
      <MainLayout contents={contentContactMain}>
        <ContactPage  textHeader={contentContactMain.textContact} imageHeader={contentContactMain.imageContact}  contents={contentContactMain}></ContactPage>
        <ScheduleHome
          contents={contentSchedule}
          tel={contentContactMain.mobile}
          line={contentContactMain.line}
          descriptionSchedule={contentContactMain.descriptionSchedule}
        ></ScheduleHome>
      </MainLayout>
    </>
  );
};

export default IndexVeiw;
// export async function getServerSideProps() {
//   // const promotionListDTO = await getAllPromotion();
//   const scheduleDTO = await getSchedule();
//   const contactDTO = await getContact();

//   return {
//     props: {
//       // promotionList: promotionListDTO,
//       schedule: scheduleDTO ?? {},
//       contact: contactDTO ?? {},
//     },
//   };
// }
