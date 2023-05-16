import React from 'react'
import MainLayout from "../../components/layout/Mainlayout";
import "tailwindcss/tailwind.css";
import ArticleListHome from "@/components/article/ArticleList";
import PromotionHome from "@/components/promotion/PromotionHome";
import { getPromotionHome } from "@/services/promotionHome.service";
import { getAllArticle } from "@/services/article.service";
import { getContact } from "@/services/contact.service";

const IndexVeiw = (props) => {
  const baseURL = process.env.baseURL;

  // const contentArticle = props.articles?.data?.map((items) => {
  //   return {
  //     imageTH: baseURL + items.attributes.image1?.data?.attributes.url ?? "",
  //     // imageEN: baseURL + items.attributes.imageEN.data.attributes.url ?? "",
  //     titleTH: items.attributes?.titleTH ?? "",
  //     titleEN: items.attributes?.titleEN ?? "",
  //     descriptionTH: items.attributes?.description1 ?? "",
  //     descriptionEN: items.attributes?.description1 ?? "",
  //     url: items.attributes?.link ?? "",
  //     id: items?.id

  //   };
  // });
  const contentArticle = [
    {
      imageTH: "/asset/image/article/article1.png",
      imageEN: "/asset/image/article/article1.png",
      titleTH: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
      titleEN: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
      descriptionTH:
        "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
      descriptionEN:
        "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
      url: "www.befriends-clinic.com",
      slug: "www.befriends-clinic.com",
      id: 1,
    },
    {
      imageTH: "/asset/image/article/article2.png",
      imageEN: "/asset/image/article/article2.png",
      titleTH: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
      titleEN: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
      descriptionTH:
        "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
      descriptionEN:
        "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
      url: "www.befriends-clinic.com",
      slug: "www.befriends-clinic.com",
      id: 2,
    },
    {
      imageTH: "/asset/image/article/article3.png",
      imageEN: "/asset/image/article/article3.png",
      titleTH: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
      titleEN: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
      descriptionTH:
        "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
      descriptionEN:
        "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
      url: "www.befriends-clinic.com",
      slug: "www.befriends-clinic.com",
      id: 3,
    },
    {
      imageTH: "/asset/image/article/article4.png",
      imageEN: "/asset/image/article/article4.png",
      titleTH: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
      titleEN: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
      descriptionTH:
        "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
      descriptionEN:
        "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
      url: "www.befriends-clinic.com",
      slug: "www.befriends-clinic.com",
      id: 4,
    },
  ];

  // const itemPromotionHome = props.promotionHome?.data;
  // const contentPromotionHome = {
  //   imageTH: baseURL + itemPromotionHome.attributes.imageTH.data?.attributes?.url ?? "",
  //   titleTH: itemPromotionHome.attributes.titleTH ?? "",
  //   imageEN: baseURL + itemPromotionHome.attributes.imageEN.data?.attributes?.url ?? "",
  //   titleEN: itemPromotionHome.attributes.titleEN ?? "",
  //   descriptionTH: itemPromotionHome.attributes?.descriptionTH ?? "",
  //   descriptionEN: itemPromotionHome.attributes?.descriptionEN ?? "",
  //   url: itemPromotionHome.attributes?.link ?? "",
  // };

  const contentPromotionHome = {
    imageTH: "/asset/image/promotion/HomeP_Promotion.png",
    titleTH: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
    imageEN: "/asset/image/promotion/HomeP_Promotion.png",
    titleEN: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
    descriptionTH:
      "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ ",
    descriptionEN:
      "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ ",
    url: "/promotion",
  };

  // const itemContactHome = props.contact?.data;
  // const contentContactMain = {
  //   page: 'Article',
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
  // };

  const contentContactMain = {
    page: "Article",
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
      <MainLayout  contents={contentContactMain}>
      <ArticleListHome   textHeader={contentContactMain.textArticle} imageHeader={contentContactMain.imageArticle}  contents={contentArticle}></ArticleListHome>
      <PromotionHome contents={contentPromotionHome}></PromotionHome>

      </MainLayout>
    </>
  )
}

export default IndexVeiw
// export async function getServerSideProps() {

//   const promotionHomeDTO = await getPromotionHome();
//   const articleDTO = await getAllArticle();
//   const contactDTO = await getContact();

//   return {
//     props: {
//       promotionHome: promotionHomeDTO ?? {},
//       articles: articleDTO ?? {},
//       contact: contactDTO ?? {},

//     },
//   };
// }