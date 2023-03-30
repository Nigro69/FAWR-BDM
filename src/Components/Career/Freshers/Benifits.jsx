import React, { useState } from "react";
import "./Freshers.css";

import r1 from "./FreshersImages/r1.png";
import r2 from "./FreshersImages/r2.png";
import r3 from "./FreshersImages/r3.png";
import r4 from "./FreshersImages/r4.png";
import r5 from "./FreshersImages/r5.png";
import r6 from "./FreshersImages/r6.png";
import x1 from "./FreshersImages/x1.png";
import f1 from "../Job/JobImages/family1.png";
import f2 from "../Job/JobImages/f2.png";
import f3 from "../Job/JobImages/f3.png";
import f4 from "../Job/JobImages/f4.png";
import f5 from "../Job/JobImages/f5.png";
import f6 from "../Job/JobImages/f6.png";
import t2 from "../Job/JobImages/t2.png";
import t3 from "../Job/JobImages/t3.png";
import t4 from "../Job/JobImages/t4.png";
import t5 from "../Job/JobImages/t5.png";
import xr1 from "../Job/JobImages/r1.png";
import xr2 from "../Job/JobImages/r2.png";

const Benifits = () => {

  
  const mode="dark";
  const [benifitTab, setbenifitTab] = useState(1);

  return (
    <div className="p-4 md:mx-10 my-4">
      <div className="text-[#BC312E] mt-10 mb-5 tracking-wider ff-style text-4xl font-semibold text-center">
        Everyone is a Leader
      </div>
      <div className="tracking-wide text-lg text-gray-600 md:px-10 text-center">
        In essence, your company values are the beliefs, philosophies, and
        principles that drive your business. They impact the employee experience
        you deliver as well as the relationship you develop with your customers,
        partners, and shareholders.An organisation's values lay the foundation
        for what the company cares about most. It provides a common purpose that
        all employees should understand, work towards and live by. Once you
        define and promote your values, employees come to understand the
        behaviours that are expected of them that will lead to success.To learn
        about your values, think back to the best and most painful moments in
        your life. Consider what these experiences reveal about your core
        values. For example, if you won an award for teaching, it's possible
        that motivating others and leadership are important values for you.
      </div>
      <div className="flex place-items-center mt-36 mb-20">
        <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96 "></hr>
        <div className="text-2xl font-semibold tracking-wider text-[#BC312E] text-center w-60 mx-8">
          Our Values
        </div>
        <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96  "></hr>
      </div>
      <div className="my-10 grid md:grid-cols-6 gap-5">
        <div className="grid place-items-center">
          <div className="h-30 w-30">
            <img src={r1} alt="img-ac" />
          </div>
          <div className="text-center font-semibold font-sans text-[#BC312E] tracking-widest text-lg">
            Excellence
          </div>
        </div>
        <div  className="grid place-items-center">
          <div className="h-30 w-30">
            <img src={r2} alt="img-ac" />
          </div>
          <div className="text-center font-semibold font-sans text-[#BC312E] tracking-widest text-lg">
            Integrity
          </div>
        </div>
        <div  className="grid place-items-center">
          <div className="h-30 w-30">
            <img src={r3} alt="img-ac" />
          </div>
          <div className="text-center font-semibold font-sans text-[#BC312E] tracking-widest text-lg">
            Client Satisfaction
          </div>
        </div>
        <div  className="grid place-items-center">
          <div className="h-30 w-30">
            <img src={r4} alt="img-ac" />
          </div>
          <div className="text-center font-semibold font-sans text-[#BC312E] tracking-widest text-lg">
            Partnership
          </div>
        </div>
        <div  className="grid place-items-center">
          <div className="h-30 w-30">
            <img src={r5} alt="img-ac" />
          </div>
          <div className="text-center font-semibold font-sans text-[#BC312E] tracking-widest text-lg">
            Innovation
          </div>
        </div>
        <div  className="grid place-items-center">
          <div className="h-30 w-30">
            <img src={r6} alt="img-ac" />
          </div>
          <div className="text-center font-semibold font-sans text-[#BC312E] tracking-widest text-lg">
            Teamwork
          </div>
        </div>
      </div>
      <div className="md:flex gap-20 w-full mt-32 mb-10">
        <div className="md:w-2/4">
          <img src={x1} alt="cdsdc" />
        </div>
        <div className="md:w-2/4">
          <div className="text-[#BC312E] my-5 tracking-wider text-2xl font-semibold  text-center">
            Candid Stories
          </div>
          <div className="tracking-wide text-lg text-gray-600 md:px-10 text-center">
            " I have been working as an admin assistant to the General Manager
            for just over 3 years. I started as a Receptionist and was promoted
            after 6 months. I am passionate about learning new skills and I have
            completed a number of training courses. I have developed a strong
            skill set including in-depth data management expertise. I am eager
            to make full use of this in a larger working environment."
          </div>
        </div>
      </div>
      <div className="flex place-items-center mt-36 mb-20">
        <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96 "></hr>
        <div className="text-2xl font-semibold tracking-wider text-[#BC312E] text-center w-60 mx-8">
          COMPENSATION
        </div>
        <hr class="h-0.5 mx-auto my-4 bg-[#FC4A1A] border-0 rounded w-96  "></hr>
      </div>
      <div className="tracking-wide text-lg text-gray-600 md:px-10 text-center">
        Your compensation will be reviewed annually and may consist of salary,
        discretionary compensation, and certain local allowances, where
        applicable. Compensation is determined by a number of factors, including
        the firm’s performance, divisional performance and individual
        performance. We spend a great deal of time ensuring that people are
        compensated appropriately and we aim to provide highly competitive pay
        levels over the long term.
      </div>
      <div className="text-[#BC312E] my-10 tracking-wider text-2xl font-semibold  text-center">
            BENIFITS AND WILLINGNESS
          </div>
      <div className="flex justify-between w-full md:px-52 my-3">
        <button
          onClick={() => setbenifitTab(1)}
          className={`font-bold text-sm md:text-lg text-[#F7B733] p-4 ${
            benifitTab === 1 && "border-b-2 border-b-[#F7B733]"
          }`}
        >
          LIFE & FAMILY
        </button>
        <button
          onClick={() => setbenifitTab(2)}
          className={`font-bold text-sm md:text-lg text-[#F7B733] p-4 ${
            benifitTab === 2 && "border-b-2 border-b-[#F7B733]"
          }`}
        >
          HEALTHCARE
        </button>
        <button
          onClick={() => setbenifitTab(4)}
          className={`font-bold text-sm md:text-lg text-[#F7B733] p-4 ${
            benifitTab === 4 && "border-b-2 border-b-[#F7B733]"
          }`}
        >
          DISABILITY
        </button>
      </div>

      <div className="mt-5 md:px-20 grid place-items-center h-full w-full">
        <div className="rounded-xl h-full w-full border shadow-2xl m-5 p-6">
          {benifitTab === 1 && (
            <div className="space-y-3">
              <div className="md:flex gap-8">
                <img
                  src={f1}
                  className="object-cover h-36 w-full md:w-60 my-auto"
                  alt=""
                />
                <div>
                  <div className="font-semibold text-center md:text-left text-xl md:text-3xl p-2 dark:text-gray-400">
                    Family Leave
                  </div>
                  <div className="text-sm md:text-xl p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    BDM offers up to{" "}
                    <lable className="text-[#FC4A1A]">
                      16 weeks of paid time
                    </lable>{" "}
                    off to eligible graduates to bond with a child as a result
                    of birth or placement for adoption and/or to care for a
                    spouse/domestic partner, parent, child, and/or sibling with
                    a serious health condition.
                  </div>
                </div>
              </div>
              <div className="md:flex gap-8">
                <img
                  src={f2}
                  className="object-cover h-36 w-full md:w-60 my-auto"
                  alt=""
                />
                <div>
                  <div className="font-semibold text-xl md:text-3xl p-2 dark:text-gray-400 text-center md:text-left">
                    Adoption and Surrogacy
                  </div>
                  <div className="md:text-xl text-sm p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    BDM reimburses eligible graduates up to{" "}
                    <lable className="text-[#FC4A1A]">$50,000</lable> ,
                    cumulative lifetime maximum, for eligible expenses
                    associated with the adoption of a minor child and the birth
                    of a child through surrogacy..
                  </div>
                </div>
              </div>
              <div className="md:flex gap-8">
                <img
                  src={f3}
                  className="object-cover h-36 w-full md:w-60 my-auto"
                  alt=""
                />
                <div>
                  <div className="font-semibold text-xl md:text-3xl p-2 dark:text-gray-400 text-center md:text-left">
                    Emergency back-up dependent care
                  </div>
                  <div className="md:text-xl text-sm p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    BDM provides for care for infants through teenage children
                    and adult relatives of eligible Deloitte employees, up to a
                    maximum <lable className="text-[#FC4A1A]">30 days</lable> of
                    per employee per fiscal year
                  </div>
                </div>
              </div>
              <div className="md:flex gap-8">
                <img
                  src={f4}
                  className="object-cover h-36 w-full md:w-60 my-auto"
                  alt=""
                />
                <div>
                  <div className="font-semibold text-xl md:text-3xl p-2 dark:text-gray-400 text-center md:text-left">Sabbaticals</div>
                  <div className="md:text-xl md:sm p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    BDM offers two sabbatical programs: an unpaid one-month
                    sabbatical that can be taken for any reason; and a three- to
                    six-month sabbatical While on a three- to sixmonth
                    sabbatical, professionals continue to receive{" "}
                    <lable className="text-[#FC4A1A]">
                      {" "}
                      40% of their pre-sabbatical base salary.
                    </lable>
                  </div>
                </div>
              </div>
              <div className="md:flex gap-8">
                <img
                  src={f5}
                  className="object-cover h-36 w-full md:w-60 my-auto"
                  alt=""
                />
                <div>
                  <div className="font-semibold text-xl md:text-3xl p-2 dark:text-gray-400 text-center md:text-left">
                    Family insurance
                  </div>
                  <div className="md:text-xl text-sm p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    Life insurance includes core coverage for our professionals.
                    Optional life and accident coverage can be purchased for
                    professionals and/or their eligible dependents
                  </div>
                </div>
              </div>
            </div>
          )}
          {benifitTab === 2 && (
            <div className="space-y-3 w-full">
              <div className="md:flex gap-8">
                <img
                  src={f6}
                  className="object-cover h-36 w-60 my-auto"
                  alt=""
                />
                <div>
                  <div className="font-semibold text-xl text-center md:text-left md:text-3xl p-2 dark:text-gray-400">
                    100 % Coverage
                  </div>
                  <div className="text-sm md:text-xl p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    BDM provides 100% coverage for in-network preventive
                    services and certain cancer screenings, such as well-child
                    (e.g., annual exams), well-woman (e.g., mammogram, Pap
                    smear), well-man (e.g., prostate testing), and
                    immunizations.
                  </div>
                </div>
              </div>
              <div className="md:flex gap-8">
                <div className="h-36 md:w-96">
                  <img src={t2} className=" mx-auto my-auto" alt="" />
                </div>
                <div>
                  <div className="font-semibold text-xl md:text-3xl p-2 dark:text-gray-400">
                    Quality Care, Protection & Prescription
                  </div>
                  <div className="md:text-xl text-sm p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    BDM provides access to quality care through national
                    provider networks. Also provides protection against the cost
                    of catastrophic illness or injury. Provides prescription
                    drug coverage.
                  </div>
                </div>
              </div>
              <div className="md:flex gap-8">
                <div className="h-36 md:w-96">
                  <img src={t3} className=" mx-auto my-auto" alt="" />
                </div>
                <div>
                  <div className="font-semibold text-xl md:text-3xl p-2 dark:text-gray-400">Dental</div>
                  <div className="md:text-xl text-sm p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    The dental plan provides access to in-and out-of-network
                    providers, coverage for major dental work, and three dental
                    cleanings per year, With no deductible, paid at 100% of
                    reasonable and customary charges.
                  </div>
                </div>
              </div>
              <div className="md:flex gap-8">
                <div className="h-36 md:w-96">
                  <img src={t4} className=" mx-auto my-auto" alt="" />
                </div>
                <div>
                  <div className="font-semibold text-xl md:text-3xl p-2 dark:text-gray-400">Vision</div>
                  <div className="md:text-xl text-sm p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    Deloitte also offers a discount vision benefit at no cost to
                    the participant, as well as a voluntary vision plan that
                    allows participants to elect additional coverage
                  </div>
                </div>
              </div>
              <div className="md:flex gap-8">
                <div className="h-36 md:w-96">
                  <img src={t5} className=" mx-auto my-auto" alt="" />
                </div>
                <div>
                  <div className="font-semibold text-xl md:text-3xl p-2 dark:text-gray-400">
                    CMS transparency in coverage rule
                  </div>
                  <div className="md:text-xl text-sm p-2 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    Please click the links below for pricing information from
                    our national medical plan carriers on covered items and
                    services.
                    <lable className="text-[#FC4A1A]">
                      {" "}
                      UnitedHealthcare Aetna Anthem
                    </lable>
                    (after clicking the link enter EIN 13 5133500 in the search)
                  </div>
                </div>
              </div>
            </div>
          )}
          {benifitTab === 3 && (
            <div className="md:px-32 py-10">
              <div className="md:flex w-full">
                <div>
                  <div className="font-semibold text-xl md:text-4xl tracking-wider pb-4 dark:text-gray-400">
                    Retirement
                  </div>
                  <div className="md:text-xl text-sm pt-8 md:pr-20 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    BDM s Wealth Accumulation Program includes a 401(k) savings
                    plan and a cash balance plan. Together, these plans provide
                    a solid foundation for eligible professionals long-term
                    financial future
                  </div>
                </div>
                <div className="w-full">
                  <img src={xr1} className="w-80 h-56 object-cover " alt="" />
                </div>
              </div>
              <div className="flex w-full justify-between px-20 pt-20 place-items-center">
                <div className="bg-gray-200 rounded-md p-4 h-80 w-80">
                  <div className="font-semibold text-xl p-5 text-center">
                    SAVINGS PLAN
                  </div>
                  <div className="py-10 text-center text-gray-200">
                    BDM s Wealth Accumulation Program includes a 401(k) savings
                    plan and a cash balance plan. Together, these plans provide
                    a solid foundation for eligible professionals long-term
                    financial future
                  </div>
                </div>
                <div className="bg-gray-200 rounded-md p-4 h-80 w-80">
                  <div className="font-semibold text-xl p-5 text-center">
                    CASH BALANCE PLAN
                  </div>
                  <div className="py-10 text-center text-gray-200" >
                    BDM s Wealth Accumulation Program includes a 401(k) savings
                    plan and a cash balance plan. Together, these plans provide
                    a solid foundation for eligible professionals long-term
                    financial future
                  </div>
                </div>
              </div>
            </div>
          )}
          {benifitTab === 4 && (
            <div className="md:px-32 py-4 md:py-10">
              <div className="md:flex w-full">
                <div>
                  <div className="font-semibold text-xl md:text-4xl tracking-wider pb-4 dark:text-gray-400">
                    Disability
                  </div>
                  <div className="md:text-xl pb-4 text-sm md:pt-8 md:pr-20 text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                    BDM provides Short-Term Disability and core Long-Term
                    Disability (STD and LTD) coverage at no cost to the
                    participant. Additional LTD coverage is available for
                    purchase as well
                  </div>
                </div>
                <div className="w-full">
                  <img src={xr2} className="w-80 h-80 object-cover " alt="" />
                </div>
              </div>
              <div>
                <div className="font-semibold tracking-wider text-xl md:text-2xl py-5 dark:text-gray-400">We believe in you</div>
                <div className="md:text-lg text-sm text-gray-200" style={{ color: mode === "dark" ? "white" : "black" }}>
                  This is a dummy text, to be replaced with how BDM encourages
                  and empowers disabled power and focuses on their ability
                  rather disabilty. Mention some events and programs too that
                  are held for them. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Etiam eu turpis molestie, dictum est a,
                  mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                  risus sem sollicitudin lacus, ut interdum tellus elit sed
                  risus. Maecenas eget condimentum velit, sit amet feugiat
                  lectus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Praesent auctor purus
                  luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
                  rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
                  Curabitur vel bibendum lorem. Morbi convallis convallis diam
                  sit amet lacinia. Aliquam in elementum tellus.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Benifits;
