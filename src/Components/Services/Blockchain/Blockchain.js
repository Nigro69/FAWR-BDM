import React, { useEffect } from 'react'
import "../Research/Research.css"

import Blockchain_img1 from "./BlockchainImages/Blockchain_img1.png"
import R1 from "./BlockchainImages/1.png"
import R2 from "./BlockchainImages/2.png"
import R3 from "./BlockchainImages/3.png"
import R4 from "./BlockchainImages/4.png"
import R5 from "./BlockchainImages/5.png"
import R6 from "./BlockchainImages/6.png"


import T1 from "./BlockchainImages/T1.png"
import T2 from "./BlockchainImages/T2.png"
import T3 from "./BlockchainImages/T3.png"
import T4 from "./BlockchainImages/T4.png"
import T5 from "./BlockchainImages/T5.png"
import T6 from "./BlockchainImages/T6.png"

import A1 from "./BlockchainImages/A1.png"

import Blockchain_img2 from "./BlockchainImages/Blockchain_img2.png"
import Blockchain_img3 from "./BlockchainImages/Blockchain_img3.png"

import Top from '../../Templates/Topimage/Top'
import Details from '../../Templates/Details/Details'
import Grid from '../../Templates/Grid/Grid'

import Award from "../../LandingPage/Awards/Award"
import Project from "../../LandingPage/Projects/Project"
import Blogs from "../../LandingPage/Blogs/Blog"
import Value from '../../Templates/Value/Value'
import Layout from '../../Layout/Layout'
import { useStateContext } from '../../../contexts/ContextProvider'

export default function Research() {
    const { mode } = useStateContext()


    const projectData = [
        {
            title: "Ledgy",
            content: "a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.",
        },
        {
            title: "Etheum",
            content: "Pieces of data are stored in data structures known as blocks, and each node of the network has an exact impact",
        },
        {
            title: "Cosmos",
            content: "Lessentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.",
        },
    ]

    const detailData = [
        {
            title: "Access Decentralised ecosystem",
            content1: "A new era of tech-driven transactions where every asset is decentralised has emerged, and blockchain technology has emerged as the new gateway for a variety of businesses. We provide effective Blockchain services that support business growth and help them stand out from the competition by building on the potential while attending to every need and requirement of our clients. Our experience spans a wide range of topics, including Blockchain app development, cryptocurrency creation, and smart contract development. We have handled everything, from verifying the procedures before they go live on the unmodified system to assisting startups and businesses in raising an ICO.",
            content2: "We, at BDM, have proven to be one of the best blockchain software development companies that serve you with a whole package - a team of Blockchain developers, designers, and managers, who know this tech inside out and employ prerequisite tools and languages to develop a decentralized ecosystem for your brand.Our highly skilled blockchain app developers have excelled their skills at working with multiple platforms, including Ethereum and Solidity, and thus give you a wealth of options and solutions while planning to step into this world.",
            points: ["Private Blockchain network", "Decentralized apps (dApps)", "Smart Contracts", "Crypto wallets", "Asset tokenization platforms", "Blockchain-based market platforms"]
        },
    ]

    const gridData = [
        {
            name: "Private Blockchain Network",
            firstLetter: "P",
            img: R1,
            tool: T1,
            content: "A private blockchain is a particular kind of blockchain network where network control is exercised solely by one entity or group. In practise, private blockchain networks prioritise privacy above complete disclosures. So, private blockchains are undoubtedly for you if you're interested in a system where privacy is the main priority."
        },

        {
            name: "Decentralized Apps (dApps)",
            firstLetter: "D",
            img: R2,
            tool: T2,
            content: "A private blockchain is a particular kind of blockchain network where network control is exercised solely by one entity or group. In practise, private blockchain networks prioritise privacy above complete disclosures. So, private blockchains are undoubtedly for you if you're interested in a system where privacy is the main priority."
        },

        {
            name: "Smart Contract",
            firstLetter: "S",
            img: R3,
            tool: T3,
            content: "Smart contracts are computer programmes that make it easier to satisfy the terms of a transaction. They are promoting efficiency to many firms by accelerating autonomous capabilities while avoiding any third-party intervention, expensive costs, and time lags. forming the foundation for numerous blockchain-based DApps."
        },

        {
            name: "Crypto Wallet",
            firstLetter: "C",
            img: R4,
            tool: T4,
            content: "We develop an effective and dependable wallet for you to store your private transaction keys and securely process your transactions using our cutting-edge and revolutionary cryptocurrency wallet development methodologies."
        },

        {
            name: "Asset Tokenization Platforms",
            firstLetter: "A",
            img: R5,
            tool: T5,
            content: "Asset tokenization platform make it possible for people and businesses to produce a digital evidence of ownership for tangible liquid assets like money or real estate. These asset-backed tokens are distinct from security tokens in that they have liquid value and real-world capital. A versatile method for managing different digital assets and enabling transactions is provided by digital assets."
        },
        {
            name: "Blokchain based Market Platform",
            firstLetter: "B",
            img: R6,
            tool: T6,
            content: "A marketplace built on blockchain technology enables cryptocurrency payments and the direct exchange of items between customers and sellers. Buyers' ability to see the provenance and history of items kept on the blockchain increases seller credibility and increases the transparency of transactions."
        },

    ]

    const valueData = [
        {
            content: "Our DevOps services and DevOps solutions offer multiple value-added benefits such as:",
            points: ["Custom-developed monitoring solution", "Enhanced quality", "Automated infrastructure provisioning",
                "Improved innovation", "Resiliency", "Reduced outages", "Increased agility", "Scalability"]
        }
    ]

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <Layout>
                <div className='research-outer'>
                    <Top bgimg={Blockchain_img1} />
                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Blockchain Development Services</u>
                    </div>
                    <div className='research-component'>
                        <Details detailData={detailData} />
                    </div>

                    <div className='research-component'>
                        <Grid gridData={gridData} />
                    </div>

                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Benefits of Blockchain</u>
                    </div>
                    <div style={{ width: "90%", display: "flex", justifyContent: "center", marginTop: "5%", marginBottom: "5%" }}>
                        <img src={mode === "dark" ? Blockchain_img2 : Blockchain_img3} />
                    </div>


                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Awards & Recognition</u>
                    </div>
                    <div className='research-component'>
                        <Award img={A1} i={"1"} />
                    </div>

                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Our Recent Projects</u>
                    </div>
                    <div className='research-component'>
                        <Project mode={mode} projectData={projectData} />
                    </div>

                    <div className='reserach-title' style={{ color: mode === "dark" ? "white" : "black" }}>
                        <u>Featured Blog posts</u>
                    </div>
                    <div className='research-component'>
                        <Blogs />
                    </div>

                </div>
            </Layout>
    )
}
