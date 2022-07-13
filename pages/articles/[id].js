import React from "react";
import { useRouter } from "next/router";

// import Header from '../_components/components/header/Header'
import SingularArticle from "../_components/SingularArticle/SingularArticle";
// import Footer from '../_components/components/footer/Footer'

function OneArticle() {
  const router = useRouter();
  const { id } = router.query;
  console.log("PARENT ... ", id)
  return (
    <section>
      {/* <Header/> */}
      <SingularArticle id={id}/>
      {/* <Footer/> */}
    </section>
  );
}

export default OneArticle;
