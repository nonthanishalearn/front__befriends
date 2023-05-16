import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

const MainLayout = ({ contents, children }) => {
  // console.log(contents);
  const router = useRouter();
  const { name } = router.query;
  const page = contents.page;
  const contact = contents;
  return (
    <div classname="flex flex-col justify-between h-screen bg-white">
      <Head>
        <title>Befriends-clinic | {page}</title>
      </Head>
      <Header page={page} contents={contact}></Header>
      {children}
      <Footer contents={contact}></Footer>
    </div>
  );
};

export default MainLayout;

// import React from 'react'

// const Mainlayout = () => {
//   return (
//     <div>Mainlayout</div>
//   )
// }

// export default Mainlayout
