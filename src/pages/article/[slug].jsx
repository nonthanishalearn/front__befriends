import React from "react";
import MainLayout from "../../components/layout/Mainlayout";
import "tailwindcss/tailwind.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getPromotionHome } from "@/services/promotionHome.service";
import { getAllArticle } from "@/services/article.service";
import { getArticle } from "@/services/article.service";
import { getContact } from "@/services/contact.service";

const IndexVeiw = (props) => {
  // const router = useRouter();
  // const { slug } = router.query;
  const baseURL = process.env.baseURL;

  const itemArticleHome = props.article?.data;
  const contentArticleItem = {
    imageTH:
      baseURL + itemArticleHome.attributes?.image1.data?.attributes?.url ?? "",
    titleTH: itemArticleHome.attributes?.titleTH ?? "",
    imageEN:
      baseURL + itemArticleHome.attributes.image1.data?.attributes?.url ?? "",
    image2:
      baseURL + itemArticleHome.attributes.image2.data?.attributes?.url ?? "",
    image3:
      baseURL + itemArticleHome.attributes.image3.data?.attributes?.url ?? "",
    youtube: baseURL + itemArticleHome.attributes.youtube ?? "",
    titleEN: itemArticleHome.attributes?.titleEN ?? "",
    description1: itemArticleHome.attributes?.description1 ?? "",
    description2: itemArticleHome.attributes?.description2 ?? "",
    url: itemArticleHome.attributes?.link ?? "",
  };

  const itemContactHome = props.contact?.data;
  // const contentContactMain = {
  //   page: "Article" ?? "",
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
  //   logo:
  //     baseURL + itemContactHome?.attributes.logo.data?.attributes?.url ?? "",
  //   descriptionTH: itemContactHome?.attributes?.descriptionTH ?? "",
  //   descriptionEN: itemContactHome?.attributes?.descriptionEN ?? "",
  //   goalTH: itemContactHome?.attributes?.goalTH ?? "",
  //   goalEN: itemContactHome?.attributes?.goalEN ?? "",
  //   addressTH: itemContactHome?.attributes?.addressTH ?? "",
  //   addressEN: itemContactHome?.attributes?.addressEN ?? "",
  //   products: itemContactHome?.attributes?.data ?? "",
  //   license: itemContactHome?.attributes?.license ?? "",
  //   descriptionSchedule: itemContactHome?.attributes?.descriptionSchedule ?? "",
  //   imageMap:
  //     baseURL + itemContactHome?.attributes?.imageMap.data?.attributes?.url ??
  //     "",
  //   imageReview:
  //     baseURL +
  //       itemContactHome?.attributes?.imageReview.data?.attributes?.url ?? "",
  //   imagePromotion:
  //     baseURL +
  //       itemContactHome?.attributes?.imagePromotion.data?.attributes?.url ?? "",
  //   imageArticle:
  //     baseURL +
  //       itemContactHome?.attributes?.imageArticle.data?.attributes?.url ?? "",
  //   imageContact:
  //     baseURL +
  //       itemContactHome?.attributes?.imageContact.data?.attributes?.url ?? "",
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
  const P = ({ children }) => <p className="my-1 text-sm">{children}</p>;
  const UL = ({ children }) => (
    <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {children}
    </ul>
  );
  const LI = ({ children }) => (
    <li className="px-4 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      {children}
    </li>
  );
  const H1 = ({ children }) => (
    <h1 className="my-3 text-2xl font-bold">{children}</h1>
  );
  const H2 = ({ children }) => (
    <h2 className="my-2 text-xl font-bold">{children}</h2>
  );
  const H3 = ({ children }) => (
    <h3 className="my-2 text-lg font-bold">{children}</h3>
  );
  const H4 = ({ children }) => (
    <h4 className="my-2 font-bold text-md">{children}</h4>
  );
  const H5 = ({ children }) => (
    <h5 className="my-2 text-sm font-bold">{children}</h5>
  );
  const H6 = ({ children }) => (
    <h6 className="my-1 text-sm font-bold">{children}</h6>
  );
  const HR = ({ children }) => <hr className="w-full my-5">{children}</hr>;

  return (
    <>
      <MainLayout contents={contentContactMain}>
        {/* <div className="grid grid-cols-6 p-20">
          <img
            className="col-span-3"
            src={contentArticleItem.imageTH}
            alt={contentArticleItem.titleTH}
          />
          <div className="col-span-3 text-5xl">
            {contentArticleItem.titleTH}
          </div>
          <div className="col-span-6">{contentArticleItem.descriptionTH}</div>
        </div> */}
        <div className="grid grid-cols-6 p-6 bg-white shadow-lg lg:p-16 lg:m-10 md:gap-5 lg:gap-16">
          <div className="col-span-6 p-5 my-1 text-4xl font-bold text-left text-gray-600 border-2 rounded lg:text-center">
            {contentArticleItem.titleTH}
          </div>
          <div className="col-span-6 p-1">
            <hr className="w-full" />
          </div>
          <div class="col-span-6 md:col-span-3 content ">
            <img
              class="w-full "
              src={contentArticleItem.imageTH}
              alt={contentArticleItem.titleTH}
            />
            <ReactMarkdown
              className="flex flex-col text-gray-600"
              remarkPlugins={[remarkGfm]}
              components={{
                p: P,
                ul: UL,
                li: LI,
                h1: H1,
                h2: H2,
                h3: H3,
                h4: H4,
                h5: H5,
                h6: H6,
                hr: HR,
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={a11yDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="md-post-code" {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {contentArticleItem.description1}
            </ReactMarkdown>
          </div>
          <div class="col-span-6 md:col-span-3 content ">
            <ReactMarkdown
              className="flex flex-col text-gray-600"
              remarkPlugins={[remarkGfm]}
              components={{
                p: P,
                ul: UL,
                li: LI,
                h1: H1,
                h2: H2,
                h3: H3,
                h4: H4,
                h5: H5,
                h6: H6,
                hr: HR,
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={a11yDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="md-post-code" {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {contentArticleItem.description2}
            </ReactMarkdown>
          </div>

          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <img
              class="w-full"
              src={contentArticleItem.imageEN}
              alt={contentArticleItem.titleTH}
            />
          </div>
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <img
              class="w-full"
              src={contentArticleItem.image2}
              alt={contentArticleItem.titleTH}
            />
          </div>
          <div className="col-span-6 md:col-span-6 lg:col-span-2">
            <img
              class="w-full"
              src={contentArticleItem.image3}
              alt={contentArticleItem.titleTH}
            />
          </div>
          <div className="col-span-6">
            <iframe
              className="w-auto"
              src={contentArticleItem.youtube}
            ></iframe>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default IndexVeiw;

// export async function getStaticPaths() {
//   const articleAllDTO = await getAllArticle();
//   const slugArray = articleAllDTO?.data?.map((items) => {
//     return {
//       params: { slug: `${items?.id}` },
//     };
//   });
//   return {
//     paths: slugArray ?? [
//       {
//         params: { slug: "1" },
//       },
//     ],
//     fallback: false,
//   };
// }

// export async function getServerSideProps(context) {
//   const { slug } = context.query ?? "1";
//   const promotionHomeDTO = await getPromotionHome();
//   const articleDTO = await getArticle(slug);
//   const contactDTO = await getContact();

//   return {
//     props: {
//       promotionHome: promotionHomeDTO ?? {},
//       article: articleDTO ?? {},
//       contact: contactDTO ?? {},
//     },
//   };
// }
