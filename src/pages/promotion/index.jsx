import React from "react";
import MainLayout from "../../components/layout/Mainlayout";

import "tailwindcss/tailwind.css";
import ScheduleHome from "@/components/schedule/ScheduleHome";
import PromotionList from "@/components/promotion/PromotionList";
import { getSchedule } from "@/services/schedule.service";
import { getAllPromotion } from "@/services/promotion.service";
import { getContact } from "@/services/contact.service";

const IndexVeiw = (props) => {
  const baseURL = process.env.baseURL;

  // const contentSchedule = props.schedule?.data?.map((items) => {
  //   return {
  //     date: items.attributes?.date ?? "",
  //     from: items.attributes?.from ?? "",
  //     to: items.attributes?.to ?? "",
  //     doctor:  items.attributes.doctor.data?.attributes?.firstNameTH

  //   };
  const contentSchedule = []
  // });
  // console.log(props.promotionList)
  // const contentPromotionList = props.promotionList?.data?.map((items) => {
  //   return {
  //     imageTH: baseURL + items.attributes.imageTH.data?.attributes?.url ?? "",
  //     imageEN: baseURL + items.attributes.imageEN.data?.attributes?.url ?? "",
  //   };
  // });

  const contentPromotionList = 
[
  {
      imageTH:  "/asset/image/promotion/image20.png",
      imageEN:  "/asset/image/promotion/image20.png",
    },
    {
      imageTH:  "/asset/image/promotion/image21.png",
      imageEN:  "/asset/image/promotion/image20.png",
    },
    {
      imageTH:  "/asset/image/promotion/image21.png",
      imageEN:  "/asset/image/promotion/image20.png",
    },
    {
      imageTH:  "/asset/image/promotion/image20.png",
      imageEN:  "/asset/image/promotion/image20.png",
    },
    {
      imageTH:  "/asset/image/promotion/image21.png",
      imageEN:  "/asset/image/promotion/image20.png",
    },
    {
      imageTH:  "/asset/image/promotion/image21.png",
      imageEN:  "/asset/image/promotion/image20.png",
    },
  ]


  // const itemContactHome = props.contact?.data;
  const contentContactMain = {
    page: "Promotion",
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
        <PromotionList textHeader={contentContactMain.textPromotion} imageHeader={contentContactMain.imagePromotion} contents={contentPromotionList}></PromotionList>
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
//   const promotionListDTO = await getAllPromotion();
//   const scheduleDTO = await getSchedule();
//   const contactDTO = await getContact();

//   return {
//     props: {
//       promotionList: promotionListDTO ?? {},
//       schedule: scheduleDTO ?? {},
//       contact: contactDTO ?? {},
//     },
//   };
// }
