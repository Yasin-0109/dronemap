import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Map from "../pages/map"
import SEO from "../components/seo"
import Notify from "../components/Notify"

const IndexPage = () => (
 <div>
   {/* <Header/> */}
   <Notify/>
   <Map/>
 </div>
)

export default IndexPage
