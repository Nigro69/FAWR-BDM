import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import Textanimation from "./Components/TextAnimation/Textanimation.js"
import Ourservices from './Components/LandingPage/Ourservices/Ourservices.js'
import LightDarkMode from './Components/LightDarkMode.js'

import Landing from './Components/LandingPage/Landing/Landing.js'

import { Route, Routes } from 'react-router-dom'


import Terms from './Components/Policies/Terms/Terms.js'
import Privacy from "./Components/Policies/Privacy/Privacy"
import Cookie from './Components/Policies/Cookie/Cookie.js'
import Navbar from './Components/LandingPage/Navbar/Navbar.js'
import Footer from './Components/LandingPage/Foooter/Footer.js'

import Accessibility from "./Components/Accessibility/Accessibility"

import Aboutoption from './Components/LandingPage/Navbar/NavbarOptions/Aboutoption/Aboutoption.js'
import Solutionoption from './Components/LandingPage/Navbar/NavbarOptions/Solutionoption/Solutionoption.js'
import Careeroption from './Components/LandingPage/Navbar/NavbarOptions/Careeroption/Careeroption.js'
import Exploreoption from './Components/LandingPage/Navbar/NavbarOptions/Exploreoption/Exploreoption.js'

import Sitemap from './Components/Sitemap/Sitemap.js'


import Research from './Components/Services/Research/Research.js'
import Devops from "./Components/Services/Devops/Devops"
import Blockchain from "./Components/Services/Blockchain/Blockchain"
import Video from "./Components/Services/Video/Video"
import Web from './Components/Services/Web/Web.js'
import Market from './Components/Services/Market/Market.js'
import Appdev from './Components/Services/Appdev/Appdev.js'
import Cloud from './Components/Services/Cloud/Cloud.js'
import Uxui from './Components/Services/Uxui/Uxui.js'
import Graphic from './Components/Services/Graphic/Graphic.js'
import Animation from './Components/Services/Animations/Animation.js'
import Email from './Components/Services/Email/Email.js'
import Mobile from './Components/Services/Mobile/Mobile.js'
import Search from './Components/Services/Search/Search.js'
import Social from './Components/Services/Social/Social.js'
import Management from './Components/Services/Management/Management.js'
import Operations from './Components/Services/Operations/Operations.js'
import Legal from './Components/Services/Legal/Legal.js'
import Strategy from './Components/Services/Strategy/Strategy.js'
import Financial from './Components/Services/Financial/Financial.js'
import Predictive from './Components/Services/Predictive/Predictive.js'
import Business from './Components/Services/Business/Business.js'
import Speech from './Components/Services/Speech/Speech.js'
import Customer from './Components/Services/Customer/Customer.js'
import Distribution from './Components/Services/Distribution/Distribution.js'
import Reputation from './Components/Services/Reputation/Reputation.js'
import Technology from './Components/Services/Industries/Technology/Technology.js'
import Automotive from './Components/Services/Industries/Automotive/Automotive.js'
import Education from './Components/Services/Industries/Education/Education.js'
import Insurance from './Components/Services/Industries/Insurance/Insurance.js'
import Banking from './Components/Services/Industries/Banking/Banking.js'
import Ecommerce from './Components/Services/Industries/Ecommerce/Ecommerce.js'
import Travel from './Components/Services/Industries/Travel/Travel.js'
import Telecom from './Components/Services/Industries/Telecom/Telecom.js'
import Energy from './Components/Services/Industries/Energy/Energy.js'
import Life from './Components/Career/Life/Life.js'
import Student from './Components/Career/Student/Student.js'
import Diversity from './Components/Career/Diversity/Diversity.js'
import Learning from './Components/Career/Learning/Learning.js'
import Login from './Components/Profile/Login/Login.js'
import Register from './Components/Profile/Register/Register.js'
import Sustainability from './Components/Sustainability/Sustainability.js'
import Environmental from './Components/Policies/Environmental/Environmental.js'
import Contact from './Components/Contact/Contact.js'
import Office from './Components/Contact/Office/Office.js'
import Global from './Components/AboutPages/Global/Global.js'
import Overview from './Components/AboutPages/Overview/Overview.js'
import Leadership from './Components/AboutPages/Leadership/Leadership.js'
import Vission from './Components/AboutPages/Vission/Vission.js'
import Charter from './Components/AboutPages/Chater/Charter.js'
import Reach from './Components/AboutPages/Reach/Reach.js'
import Alliance from './Components/AboutPages/Alliance/Alliance.js'
import SocialI from './Components/AboutPages/Social/SocialI.js'
import Believe from './Components/AboutPages/Believe/Believe.js'
import Whatwedo from './Components/AboutPages/Whatwedo/Whatwedo.js'
// import Fresher from './Components/LandingPage/Navbar/NavbarOptions/Aboutoption/AboutextraPages/Fresher/Fresher.js'
// import Professional from './Components/LandingPage/Navbar/NavbarOptions/Aboutoption/AboutextraPages/Professional/Professional.js'
import Heathcare from './Components/Services/Industries/Healthcare/Heathcare.js'
import Media from './Components/Services/Industries/Media/Media.js'
import Airline from './Components/Services/Industries/Airline/Airline.js'
import Aboutus from './Components/AboutPages/Aboutus/Aboutus.js'
import Success from './Components/AboutPages/Success/Success.js'
import Mediacenter from './Components/AboutPages/MediaCenter/Mediacenter.js'
import Alumni from './Components/AboutPages/Alumni/Alumni.js'
import Job from './Components/Career/Job/Job.js'
import Freshers from './Components/Career/Freshers/Freshers.js'
import Professional from "./Components/Career/Professional/Professional.js"
import ProfileHome from './Components/Profile/ProfileHome.jsx'
import Traning from './Components/Career/Freshers/Traning.jsx'
import Benifits from './Components/Career/Freshers/Benifits.jsx'
import FDiversity from './Components/Career/Freshers/FDiversity.jsx'
import StudentBenifits from './Components/Career/Student/StudentBenifits.jsx'
import LoginAdmin from './Components/Profile/LoginAdmin.jsx'
import Register2 from './Components/Profile/Register2.jsx'



export default function App() {
  const [mode, setMode] = useState("dark")

  const handleMode = () => {
    if (mode === "dark")
      setMode("light")
    else
      setMode("dark")
  }

  console.log(mode)
  return (
    <ChakraProvider>
      <div style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
        <Navbar mode={mode} handleMode={handleMode} />
        <Routes>
          <Route path="/" element={<Landing mode={mode} />} />

          <Route path="/Terms and Conditions" element={<Terms mode={mode} />} />
          <Route path="/Privacy" element={<Privacy mode={mode} />} />
          <Route path="/Cookie Policy" element={<Cookie mode={mode} />} />
          <Route path="/Accessibility" element={<Accessibility mode={mode} />} />
          <Route path="/Environmental Policy" element={<Environmental mode={mode} />} />

          <Route path="/About Options" element={<Aboutoption mode={mode} />} />
          <Route path="/Solution Options" element={<Solutionoption mode={mode} />} />
          <Route path="/Career Options" element={<Careeroption mode={mode} />} />
          <Route path="/Explore Options" element={<Exploreoption mode={mode} />} />

          <Route path="/Sitemap" element={<Sitemap mode={mode} />} />

          <Route path="/Contact Us" element={<Contact mode={mode} />} />
          <Route path="/Our Offices" element={<Office mode={mode} />} />

          <Route path="/Global Affiliation" element={<Global mode={mode} />} />
          <Route path="/Overview" element={<Overview mode={mode} />} />
          <Route path="/Leadership" element={<Leadership mode={mode} />} />
          <Route path="/Vision, Mission & Values" element={<Vission mode={mode} />} />
          <Route path="/Policy & Charters" element={<Charter mode={mode} />} />
          <Route path="/Reach Us" element={<Reach mode={mode} />} />
          <Route path="/Alliance" element={<Alliance mode={mode} />} />
          <Route path="/Social Impact" element={<SocialI mode={mode} />} />
          <Route path="/What we believe" element={<Believe mode={mode} />} />
          <Route path="/What we do" element={<Whatwedo mode={mode} />} />
          <Route path="/About Us" element={<Aboutus mode={mode} />} />
          <Route path="/Success Stories" element={<Success mode={mode} />} />
          <Route path="/Media Center" element={<Mediacenter mode={mode} />} />
          <Route path="/Alumni Relations" element={<Alumni mode={mode} />} />

          {/* <Route path="/Opportunities for Freshers" element={<Fresher mode={mode} />} />
          <Route path="/Experienced Professional" element={<Professional mode={mode} />} /> */}

          <Route path="/Opportunities for Freshers" element={<Freshers mode={mode} />} />
          <Route path="/Experienced Professional" element={<Professional mode={mode} />} />



          <Route path="/Research Intelligence Services" element={<Research mode={mode} />} />
          <Route path="/DevOps" element={<Devops mode={mode} />} />
          <Route path="/Blockchain Development Services" element={<Blockchain mode={mode} />} />
          <Route path="/Video Services" element={<Video mode={mode} />} />
          <Route path="/Web Development Services" element={<Web mode={mode} />} />
          <Route path="/Marketing Automation Services" element={<Market mode={mode} />} />
          <Route path="/App Development Services" element={<Appdev mode={mode} />} />
          <Route path="/Cloud Storage & Management Services" element={<Cloud mode={mode} />} />
          <Route path="/UX / UI Design Services" element={<Uxui mode={mode} />} />
          <Route path="/Graphic Design Services" element={<Graphic mode={mode} />} />
          <Route path="/Animations Services" element={<Animation mode={mode} />} />
          <Route path="/Email Marketing Services" element={<Email mode={mode} />} />
          <Route path="/Mobile Marketing Services" element={<Mobile mode={mode} />} />
          <Route path="/Search Engine Marketing Services" element={<Search mode={mode} />} />
          <Route path="/Social Media Marketing Services" element={<Social mode={mode} />} />
          <Route path="/Management Consultant Services" element={<Management mode={mode} />} />
          <Route path="/Operations Consultant Services" element={<Operations mode={mode} />} />
          <Route path="/Legal Consultant Services" element={<Legal mode={mode} />} />
          <Route path="/Strategy Consultant Services" element={<Strategy mode={mode} />} />
          <Route path="/Financial Advisory Services" element={<Financial mode={mode} />} />
          <Route path="/Predictive Analysis Services" element={<Predictive mode={mode} />} />
          <Route path="/Business Intelligence Services" element={<Business mode={mode} />} />
          <Route path="/Speech & Text Analytics Services" element={<Speech mode={mode} />} />
          <Route path="/Customer Segmentation Services" element={<Customer mode={mode} />} />
          <Route path="/Distribution Strategy Services" element={<Distribution mode={mode} />} />
          <Route path="/Reputation Consultation Services" element={<Reputation mode={mode} />} />


          <Route path="/Technology" element={<Technology mode={mode} />} />
          <Route path="/Automotive" element={<Automotive mode={mode} />} />
          <Route path="/Education" element={<Education mode={mode} />} />
          <Route path="/Insurance" element={<Insurance mode={mode} />} />
          <Route path="/Banking & Finance" element={<Banking mode={mode} />} />
          <Route path="/E-Commerce" element={<Ecommerce mode={mode} />} />
          <Route path="/Travel,Transport & Logistics" element={<Travel mode={mode} />} />
          <Route path="/Telecom" element={<Telecom mode={mode} />} />
          <Route path="/Energy & Utilities" element={<Energy mode={mode} />} />
          <Route path="/Healthcare" element={<Heathcare mode={mode} />} />
          <Route path="/Media & Entertainment" element={<Media mode={mode} />} />
          <Route path="/Airline" element={<Airline mode={mode} />} />


          <Route path="/Life@BDM" element={<Life mode={mode} />} />
          <Route path="/Student / Intern Program" element={<Student mode={mode} />} />
          <Route path="/Diversity & Inclusion" element={<Diversity mode={mode} />} />
          <Route path="/Learning & Development" element={<Learning mode={mode} />} />
          <Route path="/Jobs" element={<Job mode={mode} />} />



          <Route path="/Login" element={<Login mode={mode} />} />
          <Route path="/Login-admin" element={<LoginAdmin mode={mode} />} />
          <Route path="/Register" element={<Register mode={mode} />} />
          <Route path="/register-candidate" element={<Register2 mode={mode} />} />
          <Route path="/Profile-Home" element={<ProfileHome mode={mode} />} />
          <Route path="/Freshers-Traning" element={<Traning mode={mode} />} />
          <Route path="/Freshers-Diversity" element={<FDiversity mode={mode} />} />
          <Route path="/Freshers-Benifits" element={<Benifits mode={mode} />} />
          <Route path="/Students-Benifits" element={<StudentBenifits mode={mode} />} />


          <Route path="/Sustainability @ BDM" element={<Sustainability mode={mode} />} />

        </Routes>
        <Footer />
        {/* <Textanimation />
        <Ourservices /> */}
        {/* <LightDarkMode mode={mode} handleMode={handleMode} /> */}
        {/* <Ourservices mode={mode} /> */}
      </div>
    </ChakraProvider>

  )
}
