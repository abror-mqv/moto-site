import React from "react";
import { useRouter } from "next/router";

import Header from "../../_components/components/header/Header";
import SingularArticle from "../../_components/SingularArticle/SingularArticle";
import nasway from './Sindular.module.scss'

function OneArticle() {
  const router = useRouter();
  const { id } = router.query;
  console.log("PARENT ... ", id)
  console.log(router.query)
  return (
    <main className={nasway.Singular}>
      <Header/>
      <SingularArticle id={id}/>

    </main>
  );
}

export default OneArticle;
