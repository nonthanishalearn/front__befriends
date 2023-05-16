import Head from "next/head";
import "tailwindcss/tailwind.css";
import MainLayout from "../components/layout/Mainlayout";
import BannerHome from "@/components/banner/BannerHome";
import ProductHome from "@/components/product/ProductHome";
import ReviewHome from "@/components/reveiw/ReviewHome";
import ArticleHome from "@/components/article/ArticleHome";
import ArticleListHome from "@/components/article/ArticleListHome";
import PromotionHome from "@/components/promotion/PromotionHome";
import DoctorHome from "@/components/doctor/DoctorHome2";
import ServicesHome from "@/components/service/ServicesHome";
import ScheduleHome from "@/components/schedule/ScheduleHome";
import { getAllBanner } from "@/services/banner.service";
import { getAllProduct } from "@/services/product.service";
import { getAllReview } from "@/services/review.service";
import { getArticleHome } from "@/services/articleHome.service";
import { getPromotionHome } from "@/services/promotionHome.service";
import { getAllService } from "@/services/serviceHome.service";
import { getAllDoctor } from "@/services/doctor.service";
import { getDoctorHome } from "@/services/doctorHome.service";
import { getSchedule } from "@/services/schedule.service";
import { getAllArticle } from "@/services/article.service";
import { getContact } from "@/services/contact.service";

export default function Home(props) {
  // console.log(props);
  const baseURL = process.env.baseURL;
  // const imagesBanner = props.banners?.data?.map((items) => {
  //   return {
  //     imageTH: baseURL + items.attributes.imageTH.data?.attributes?.url ?? "",
  //     titleTH: items.attributes?.titleTH ?? "",
  //     imageEN: baseURL + items.attributes.imageTH.data?.attributes?.url ?? "",
  //     titleEN: items.attributes?.titleTH ?? "",
  //     url: items.attributes?.link ?? "",
  //   };
  // }) ?? [];
  const imagesBanner = [
    {
      imageTH: "/asset/image/banner/mainbanner.jpg",

      titleTH: "www.befriends-clinic.com",
      imageEN: "/asset/image/banner/MainBanner.png",
      titleEN: "www.befriends-clinic.com",
      url: "www.befriends-clinic.com",
    },
    {
      imageTH: "/asset/image/banner/carousel2.jpg",
      titleTH: "www.befriends-clinic.com",
      imageEN: "/asset/image/banner/carousel2.jpg",
      titleEN: "www.befriends-clinic.com",
      url: "www.befriends-clinic.com",
    },
    {
      imageTH: "/asset/image/banner/MainBanner.png",

      titleTH: "www.befriends-clinic.com",
      imageEN: "/asset/image/banner/mainbanner.jpg",
      titleEN: "www.befriends-clinic.com",
      url: "www.befriends-clinic.com",
    },
  ];

  // const imagesProduct = props.products?.data?.map((items) => {
  //   return {
  //     imageTH: baseURL + items.attributes?.image.data?.attributes?.url ?? "",
  //     titleTH: items.attributes?.titleTH ?? "",
  //     url: items.attributes?.link ?? "",
  //   };
  // }) ?? [];
  const imagesProduct = [
    {
      imageTH: "/asset/image/product/botox.png",
      titleTH: "Botox",
      url: "www.befriends-clinic.com",
    },
    {
      imageTH: "/asset/image/product/face.png",
      titleTH: "Thread Lift",
      url: "www.befriends-clinic.com",
    },
    {
      imageTH: "/asset/image/product/lips.png",
      titleTH: "Filler",
      url: "www.befriends-clinic.com",
    },
    {
      imageTH: "/asset/image/product/wrinkles.png",
      titleTH: "Meso Fat",
      url: "www.befriends-clinic.com",
    },
  ];

  // const imagesReview = props.reviews?.data?.map((items) => {
  //   return {
  //     before: baseURL + items.attributes?.before.data?.attributes?.url ?? "",
  //     after: baseURL + items.attributes?.after.data?.attributes?.url ?? "",
  //     titleTH: items.attributes?.titleTH ?? "",
  //     url: items.attributes?.link ?? "",
  //   };
  // }) ?? [];

  const imagesReview = [
    {
      before: "/asset/image/review/before.jpg",
      after: "/asset/image/review/after.jpg",
      titleTH: "www.befriends-clinic.com",
      url: "www.befriends-clinic.com",
    },
    {
      before: "/asset/image/review/before.jpg",
      after: "/asset/image/review/after.jpg",
      titleTH: "www.befriends-clinic.com",
      url: "www.befriends-clinic.com",
    },
    {
      before: "/asset/image/review/before.jpg",
      after: "/asset/image/review/after.jpg",
      titleTH: "www.befriends-clinic.com",
      url: "www.befriends-clinic.com",
    },
    {
      before: "/asset/image/review/before.jpg",
      after: "/asset/image/review/after.jpg",
      titleTH: "www.befriends-clinic.com",
      url: "www.befriends-clinic.com",
    },
  ];

  const itemArticleHome = props.articleHome?.data;
  // console.log("itemArticleHome", itemArticleHome);
  // const contentArticleHome =
  //   {
  //     imageTH:
  //       baseURL + itemArticleHome?.attributes?.imageTH.data?.attributes?.url ??
  //       "",
  //     titleTH: itemArticleHome?.attributes?.titleTH ?? "",
  //     imageEN:
  //       baseURL + itemArticleHome?.attributes?.imageEN.data?.attributes?.url ??
  //       "",
  //     titleEN: itemArticleHome?.attributes?.titleEN ?? "",
  //     descriptionTH: itemArticleHome?.attributes?.descriptionTH ?? "",
  //     descriptionEN: itemArticleHome?.attributes?.descriptionEN ?? "",
  //     url: itemArticleHome?.attributes?.link ?? "",
  //   } ?? {};
  const contentArticleHome = {
    imageTH: "/asset/image/article/article2.png",
    titleTH: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
    imageEN: "/asset/image/article/article1.png",
    titleEN: "โบท็อก นวัตกรรมความงามยืนหนึ่ง",
    descriptionTH:
      "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
    descriptionEN:
      "โบท็อก นวัตกรรมความงามยืนหนึ่ง ที่อยากให้ทำความรู้จักปฏิเสธไม่ได้เลยว่า เรื่องของความสวยความงามเป็นสิ่งที่ผู้คนยุคนี้ให้ความสนใจกันมาก ๆ โดยปกติแล้วจะมีแค่ผู้หญิงที่สนใจในเรื่องนี้กันมากเป็นพิเศษ แต่ปัจจุบันนี้ไม่ใช่เช่นนั้นอีกต่อไปแล้ว เพราะแม้แต่หนุ่ม ๆ ผู้ชายยังเริ่มหันมาให้ความสนใจในการดูแลตัวเองมากขึ้นแล้วด้วย แน่นอนว่าวิธีการที่จะช่วยดูแลความสวยความงามไม่ได้มีแค่การทาครีม หรือว่าการดูแลผิวจากภายในอีกต่อไปแล้ว เนื่องจากว่าในตอนนี้มีนวัตกรรมและเทคโนโลยีที่ช่วยในเรื่องนี้เพิ่มมากขึ้นเรื่อย ๆ ซึ่งโบท็อกก็เป็นนวัตกรรมความงามยอดนิยมที่ทั้งผู้หญิงและผู้ชายให้ความสนใจกันมาก ๆ",
    url: "www.befriends-clinic.com",
  };

  const itemPromotionHome = props.promotionHome?.data;
  // const contentPromotionHome =
  //   {
  //     imageTH:
  //       baseURL +
  //         itemPromotionHome?.attributes?.imageTH.data?.attributes?.url ?? "",
  //     titleTH: itemPromotionHome?.attributes?.titleTH ?? "",
  //     imageEN:
  //       baseURL + itemPromotionHome?.attributes.imageEN.data?.attributes?.url ??
  //       "",
  //     titleEN: itemPromotionHome?.attributes?.titleEN ?? "",
  //     descriptionTH: itemPromotionHome?.attributes?.descriptionTH ?? "",
  //     descriptionEN: itemPromotionHome?.attributes?.descriptionEN ?? "",
  //     url: itemPromotionHome?.attributes?.link ?? "",
  //   } ?? {};
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
  const contentDoctor =
    props.doctors?.data?.map((items) => {
      return {
        firstNameTH: items.attributes?.firstNameTH ?? "",
        lastNameTH: items.attributes?.lastNameTH ?? "",
        firstNameEN: items.attributes?.firstNameEN ?? "",
        lastNameEN: items.attributes?.lastNameEN ?? "",
        descriptionTH: items.attributes?.descriptionTH ?? "",
        descriptionEN: items.attributes?.descriptionEN ?? "",
        image: baseURL + items.attributes?.image.data?.attributes?.url ?? "",
      };
    }) ?? [];
  const itemDoctorHome = props.doctorHome?.data;
  const contentDoctorMain =
    {
      firstNameTH: itemDoctorHome?.attributes?.firstNameTH ?? "",
      lastNameTH: itemDoctorHome?.attributes?.lastNameTH ?? "",
      firstNameEN: itemDoctorHome?.attributes?.firstNameEN ?? "",
      lastNameEN: itemDoctorHome?.attributes?.lastNameEN ?? "",
      descriptionTH: itemDoctorHome?.attributes?.descriptionTH ?? "",
      descriptionEN: itemDoctorHome?.attributes?.descriptionEN ?? "",
      image:
        baseURL + itemDoctorHome?.attributes?.image.data?.attributes?.url ?? "",
    } ?? [];

  const imagesService =
    props.serviceHome?.data?.map((items) => {
      return {
        image: baseURL + items.attributes?.image.data?.attributes?.url ?? "",
        title: items.attributes?.titleTH ?? "",
        url: items.attributes?.link ?? "",
      };
    }) ?? [];

  const contentSchedule =
    props.schedule?.data?.map((items) => {
      return {
        date: items.attributes?.date ?? "",
        from: items.attributes?.from ?? "",
        to: items.attributes?.to ?? "",
        doctor: items.attributes?.doctor?.data?.attributes?.firstNameTH ?? "",
      };
    }) ?? [];

  // const contentArticle =
  //   props.articles?.data?.map((items) => {
  //     return {
  //       imageTH: baseURL + items.attributes?.image1.data?.attributes?.url ?? "",
  //       // imageEN: baseURL + items.attributes.imageEN.data.attributes.url?? '',
  //       titleTH: items.attributes?.titleTH ?? "",
  //       titleEN: items.attributes?.titleEN ?? "",
  //       descriptionTH: items.attributes?.description1 ?? "",
  //       descriptionEN: items.attributes?.description2 ?? "",
  //       url: items.attributes?.link ?? "",
  //       slug: items.attributes?.slug ?? "",
  //       id: items?.id ?? "",
  //     };
  //   }) ?? [];
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

  // const itemContactHome = props.contact?.data;
  // const contentContactMain =
  //   {
  //     page: "Home",
  //     nameTH: itemContactHome?.attributes?.nameTH ?? "",
  //     nameEN: itemContactHome?.attributes?.nameEN ?? "",
  //     tel: itemContactHome?.attributes?.tel ?? "",
  //     mobile: itemContactHome?.attributes?.mobile ?? "",
  //     email: itemContactHome?.attributes?.email ?? "",
  //     line: itemContactHome?.attributes?.line ?? "",
  //     facebook: itemContactHome?.attributes?.facebook ?? "",
  //     tiktok: itemContactHome?.attributes?.tiktok ?? "",
  //     twitter: itemContactHome?.attributes?.twitter ?? "",
  //     taxid: itemContactHome?.attributes?.taxid ?? "",
  //     instagram: itemContactHome?.attributes?.instagram ?? "",
  //     logo:
  //       baseURL + itemContactHome?.attributes.logo.data?.attributes?.url ?? "",
  //     descriptionTH: itemContactHome?.attributes?.descriptionTH ?? "",
  //     descriptionEN: itemContactHome?.attributes?.descriptionEN ?? "",
  //     goalTH: itemContactHome?.attributes?.goalTH ?? "",
  //     goalEN: itemContactHome?.attributes?.goalEN ?? "",
  //     addressTH: itemContactHome?.attributes?.addressTH ?? "",
  //     addressEN: itemContactHome?.attributes?.addressEN ?? "",
  //     products: itemContactHome?.attributes?.data ?? "",
  //     license: itemContactHome?.attributes?.license ?? "",
  //     descriptionSchedule:
  //       itemContactHome?.attributes?.descriptionSchedule ?? "",
  //     imageMap:
  //       baseURL + itemContactHome?.attributes?.imageMap.data?.attributes?.url ??
  //       "",
  //     imageReview:
  //       baseURL +
  //         itemContactHome?.attributes?.imageReview.data?.attributes?.url ?? "",
  //     imagePromotion:
  //       baseURL +
  //         itemContactHome?.attributes?.imagePromotion.data?.attributes?.url ??
  //       "",
  //     imageArticle:
  //       baseURL +
  //         itemContactHome?.attributes?.imageArticle.data?.attributes?.url ?? "",
  //     imageContact:
  //       baseURL +
  //         itemContactHome?.attributes?.imageContact.data?.attributes?.url ?? "",
  //     imageDoctor:
  //       baseURL +
  //         itemContactHome?.attributes?.imageDoctor.data?.attributes?.url ?? "",
  //     textReview: itemContactHome?.attributes?.textReview ?? "",
  //     textPromotion: itemContactHome?.attributes?.textPromotion ?? "",
  //     textArticle: itemContactHome?.attributes?.textArticle ?? "",
  //     textContact: itemContactHome?.attributes?.textContact ?? "",
  //   } ?? {};

  const contentContactMain = {
    page: "Home",
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
    imageMap: "/asset/image/befriends.png",
    imageReview: "/asset/image/menu/review.jpg",
    imagePromotion: "/asset/image/menu/promotion.jpg",
    imageArticle: "/asset/image/menu/article.jpg",
    imageContact: "/asset/image/menu/contact.jpg",
    textReview: "www.befriends-clinic.com",
    textPromotion: "www.befriends-clinic.com",
    textArticle: "www.befriends-clinic.com",
    textContact: "www.befriends-clinic.com",
  };

  // console.log("contentSchedule", contentSchedule);
  return (
    <div>
      <MainLayout contents={contentContactMain}>
        <BannerHome images={imagesBanner} />
        <ProductHome images={imagesProduct}></ProductHome>
        <ReviewHome images={imagesReview}></ReviewHome>
        <ArticleHome contents={contentArticleHome}></ArticleHome>
        <PromotionHome contents={contentPromotionHome}></PromotionHome>
        <DoctorHome
          imageDoctor={contentContactMain.imageDoctor}
          contents={contentDoctor}
          mainContents={contentDoctorMain}
        ></DoctorHome>
        <ServicesHome images={imagesService}></ServicesHome>
        <ScheduleHome
          contents={contentSchedule}
          tel={contentContactMain.mobile}
          line={contentContactMain.line}
          descriptionSchedule={contentContactMain.descriptionSchedule}
        ></ScheduleHome>
        <ArticleListHome contents={contentArticle}></ArticleListHome>
      </MainLayout>
    </div>
  );
}

// export async function getServerSideProps() {
//   const bannersDTO = await getAllBanner();
//   const productsDTO = await getAllProduct();
//   const reviewsDTO = await getAllReview();
//   const articleHomeDTO = await getArticleHome();
//   const promotionHomeDTO = await getPromotionHome();
//   const serviceHomeDTO = await getAllService();
//   const doctorDTO = await getAllDoctor();
//   const doctorHomeDTO = await getDoctorHome();
//   const scheduleDTO = await getSchedule();
//   const articleDTO = await getAllArticle();
//   const contactDTO = await getContact();

//   return {
//     props: {
//       banners: bannersDTO ?? {},
//       products: productsDTO ?? {},
//       reviews: reviewsDTO ?? {},
//       articleHome: articleHomeDTO ?? {},
//       promotionHome: promotionHomeDTO || {},
//       serviceHome: serviceHomeDTO ?? {},
//       doctors: doctorDTO ?? {},
//       doctorHome: doctorHomeDTO ?? {},
//       schedule: scheduleDTO ?? {},
//       articles: articleDTO ?? {},
//       contact: contactDTO ?? {},
//     },
//   };
// }
