import React from 'react'
import "./Terms.css"
import Terms_img1 from "../PoliciesImages/Terms_img1.png"
import Terms_img2 from "../PoliciesImages/Terms_img2.png"
import Terms_img3 from "../PoliciesImages/Terms_img3.png"

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box, Stack
} from '@chakra-ui/react'

import { useMediaQuery } from '@chakra-ui/react'

export default function Terms({ mode }) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
    return (
        <div className='terms-outer' style={{ backgroundColor: mode === "dark" ? "#211F22" : "white" }}>
            <img className="terms-bgimg" src={Terms_img3} />
            <div className='terms-inner'>
                <div className='terms-content-1' style={{ color: mode === "dark" ? "white" : "black" }}>
                    PLEASE CAREFULLY READ THESE TERMS AND CONDITIONS. YOU ACKNOWLEDGE AND AGREE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS WITHOUT LIMITATION OR QUALIFICATION BY ACCESSING, BROWSING, REVIEWING, AND/OR USING THE SITE. YOU ALSO AGREE THAT YOU SHALL COMPLY WITH ALL APPLICABLE LAWS, RULES, AND REGULATIONS. DO NOT USE THE SITE IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
                </div>

                <div className='terms-content-2' style={{ color: mode === "dark" ? "#C6C6C6" : "#7E7E7E" }}>
                    The terms and conditions of any other proprietary notices and copyright information that may be present on the Site must be complied with. The information on the website might include typographical or technical mistakes. Parts of these Terms and Conditions may be revised, amended, modified, or deleted at any time without prior notice from Big Bros Digital Media, who has the exclusive right to make such decisions. You are always obligated to read the most recent edition of these Terms and Conditions. Any changes to these Terms and Conditions that are made will be considered accepted by you if you continue to use the Site.
                </div>
                {/* <div> */}
                <Stack direction="column" spacing={10} marginTop="2%" width={isLargerThan1000 ? "70%" : "80%"} >
                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem" >
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Accessing & using the site; Restrictions on Use
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">
                                Big Bros Digital Media hereby grants you a limited, personal, non-exclusive, non-transferable, non-sublicensable, freely revocable licence to access and use the Site solely for your own personal, non-commercial, and legal purposes, provided that you maintain all copyright, trademark, and other intellectual property notices therein. This licence is subject to your continued compliance with these Terms and Conditions. Furthermore, Big Bros Digital Media does not give you permission to imply or otherwise infer that Big Bros Digital Media supports or endorses the political opinions, causes, ideas, goods, or services of any third party. The reserving of all other rights is clearly made here.
                                <br /><br />
                                You agree to abide by all relevant laws, rules and regulations and other limitations on use of the service or Content when using the Site, including any services and functions connected thereto. You must abide by these terms and conditions and not: (i) archive, download, reproduce, distribute, edit, display, perform, publish, licence, make derivative works of, offer for sale, or exploit any content on or information received from the site; (ii) remove any and all notices of copyright or other property rights from the Site or any Content; (iii) bypass, remove, change, deactivate, degrade, or otherwise frustrate any content safeguards implemented on the Site; (iv) access the Site with any robot, spider, scraper, or other automatic device; (v) reverse-engineer, decompile, or disassemble any software, or other items or procedures that are accessed through the Site; (vi) introducing any code, item, or website manipulation in any form; (vii) employ any technique for data mining, data collection, or extraction; (viii) transfer or transmit any content, including computer viruses or other computer code, files, or programmes, that is intended to disrupt, disable, or restrict the performance of any computer software or hardware or telecommunications equipment connected to the Site; (ix) eliminate, alter, deactivate, restrict, hinder, or conceal any advertising in relation to the Site; or (x) use the Site for any illegal activity or in violation of any local, state, national, or international law, including but not limited to laws pertaining to privacy, data protection, and intellectual property.
                                <br /><br />
                                Big Bros Digital Media has the right to change, suspend, or cancel the Site at any time for any reason, without warning or incurring any obligation to you or any third parties. Due to maintenance, computer equipment issues, or other factors, the Site might become inaccessible. This could harm your systems, software, data, or operations, for which Big Bros Digital Media disclaims all responsibility.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Hyperlinking
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                Big Bros Digital Media gives no assurances of any kind for any other websites you may access through this one. Please be aware that any non- Big Bros Digital Media websites you view are independent from Big Bros Digital Media and that Big Bros Digital Media has no control over their content, even if Big Bros Digital Media has provided the website's owner with information or services. Additionally, a link to a website that is not run by Big Bros Digital Media does not imply that Big Bros Digital Media approves of it or assumes any liability for its usage or its content. Big Bros Digital Media really disclaims all responsibility and accountability for this content. It is your responsibility to take care to make sure that everything you choose for your usage is free of harmful elements like viruses, worms, trojan horses, and other similar things.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Copyright & use of site content
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                Copyright protection is provided by U.S. and international laws for all content, features, and functionality on the Site, including text, graphics, videos, audio recordings, software, algorithms, artwork, interfaces, photographs, logos, icons, and images. These elements collectively are referred to as "Content," and they are the sole property of Big Bros Digital Media or its licensors. Without the prior written consent of Big Bros Digital Media or the copyright owner in each instance, none of the Content may be copied, reproduced, distributed, republished, downloaded, displayed, posted, or transmitted in any form or by any means, including but not limited to electronic, mechanical, photocopying, recording, or otherwise. Without Big Bros Digital Media's prior written consent, you may not "mirror" or "frame" any Content or the Site in whole or in part. Any unlawful use of the Content might be against the law in terms of copyright, trademark, publicity, and/or laws governing communications. All rights are hereby reserved, except otherwise stated. You are solely responsible for making sure that any information or Content you download from the Site is free of viruses and other computer code that might disable, delete, harm, or otherwise interfere with your systems, software, data, or operations.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Trademarks
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                The "Trademarks" used and displayed on the Site, including but not limited to Big Bros Digital Media®, are registered and unregistered trademarks of Big Bros Digital Media. Others may own additional trademarks, service marks, logos, and trade names. No licence or right to use any Trademark or other Big Bros Digital Media intellectual property displayed on the Site is granted by implication, estoppel, or any other language in the content of the Site. To the fullest extent of the law, Big Bros Digital Media vigorously pursues its intellectual property rights. You may not refer to or attribute any information to Big Bros Digital Media or its licensors in any public medium for promotional or advertising purposes, or otherwise, or for the purpose of persuading a third party, without the prior written consent of Big Bros Digital Media. This includes using the trademark and trade name Big Bros Digital Media® or any other Trademarks in advertising or publicity pertaining to the distribution of Content on the Site. Additionally, Big Bros Digital Media forbids the use of Big Bros Digital Media® and any other Trademarks in links to or from any websites without express written consent from Big Bros Digital Media.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        User postings
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                You understand and agree that Big Bros Digital Media is the owner of all information you post, submit, share, or otherwise publish on the Site, and that Big Bros Digital Media has the unlimited right to use, publish in electronic form and other formats, distribute, and exploit any such material ("Submissions"). In connection with Big Bros Digital Media's use and publishing of such Submissions, you expressly release Big Bros Digital Media from any and all claims on the grounds of any claimed or real violations of any privacy or publicity rights, moral rights, rights of attribution, or any other intellectual property rights. This implies that everything you post, upload, share, or otherwise publish on the Site will become Big Bros Digital Media's property and that Big Bros Digital Media may use it for any reason, now or in the future, without paying you or requiring additional consent from you. Additionally, you renounce any claims against Big Bros Digital Media for any real or claimed infringement of any intellectual property rights originating from or connected to the Submissions, including any claims for violation of moral rights, rights of attribution, privacy, and publicity. The authenticity or reliability of any Submissions published, uploaded, placed on any bulletin board, or otherwise transmitted through the Site by any user, information provider, or other third party is not guaranteed or endorsed by Big Bros Digital Media. You understand and agree that any reliance on such Submissions shall be at your alone choice, liability, and risk. Big Bros Digital Media explicitly disclaims any and all liability relating to Submissions. You promise not to upload, submit, distribute, or otherwise publish on the website any content that: (i) constitute threats, libel, defamation, or obscenity; (ii) would be a criminal crime, give rise to civil liability, or otherwise violate the law, or that encourages such behaviour; (iii) violate any third party's intellectual property, privacy, or other rights; (iv) have a virus or other harmful component; (v) include marketing; or (vi) comprise or contain assertions that are untrue or deceptive. Big Bros Digital Media maintains the right, in its sole discretion, to refuse to post any information or Submission and the right to delete any such Submission, in whole or in part, from the Site for any reason.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        No services, endorsement or personal consultation
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                Information you acquire by using the Site might contain lags, omissions, or errors. You are given access to the content on the Site with the understanding that Big Bros Digital Media is not offering you any advice or services about investments, consulting, law, accounting, taxes, careers, or other matters. Information on the site should not be used as a substitute for consulting with professional advisers or as a basis for business, investing, or other decisions. Furthermore, neither Big Bros Digital Media nor any user, information provider, or other person or entity makes any representations as to the validity or reliability of any advice, opinion, statement, or other information that is posted, uploaded, downloaded, or otherwise made available through the Site by any of these parties. You understand and agree that any reliance on any such statement, memorandum, advice, opinion, or other information shall be at your exclusive discretion, risk, and liability. Furthermore, if your use of the Site in whole or in part implies that Big Bros Digital Media supports or endorses the causes, ideologies, political campaigns, political viewpoints, websites, goods, or services of a third party, Big Bros Digital Media does not offer you any licence or other authority to use the Site in any way.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Disclaimer of warranties
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                The website and all of its content are offered "as is" and "as available" with no warranties of any kind.  DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW. Without limitation, Big Bros Digital Media DOES NOT REPRESENT OR WARRANT THAT, IN PARTICULAR, (1) The information on the website is accurate, reliable, and correct; (2) The website's functions must be uninterrupted or error-free; or (3) DEFECTS SHALL BE CORRECTED, OR THAT VIRUSES OR OTHER HARMFUL COMPONENTS ARE NOT PRESENT ON THE WEBSITE OR THE SERVER THAT MAKES IT AVAILABLE.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Limitation of liabilities
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                Under no circumstances will Big Bros Digital Media or any of its predecessors, successors, parents, subsidiaries, affiliates, officers, directors, shareholders, investors, employees, agents, representatives, attorneys, and each of their respective heirs, successors, and assigns, be liable for any damages, including direct, incidental, punitive, special, consequential, or exempt damages resulting from the use of, or inability to use, the site or the information, content, or materials. Even if Big Bros Digital Media has been informed of the likelihood of such damages, use of the site, including for viruses allegedly received from the site, may result in legal action under any theory of responsibility, including contract, tort (including negligence), strict liability, or other theories. This waiver covers all damages or injuries, including those brought on by theft, destruction, unauthorized access to, alteration of, or use of any record, as well as errors, omissions, interruptions, deletions, defects, delays in operation or transmission, computer viruses, corrupted files, communication-line issues, network or system outages.
                                <br /><br />
                                In no event shall Big Bros Digital Media or any of its predecessors, successors, parents, subsidiaries, affiliates, officers, directors, shareholders, investors, employees, agents, representatives, and attorneys, and each of their respective heirs, successors, and assigns, total liability to you for all damages, losses, and causes of action, whether in contract, tort (including, but not limited to, negligence), or otherwise, exceed $1. Any jurisdictions might not permit the exclusion of implied warranties, in which case all users might not be covered by some of the aforementioned exclusions.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Indemnification
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                You hereby release and hold harmless Big Bros Digital Media, its predecessors, successors, parents, subsidiaries, affiliates, officers, directors, shareholders, investors, employees, agents, representatives, and attorneys, as well as each of their respective heirs, successors, and assigns (collectively, the "Indemnified Parties") from and against any and all liability and costs, including, without limitation, reasonable attorneys' fees, incurred by any or all of the Indemnified Parties in connection with the subject matter hereof (i) your use of or access to the Site, or (ii) any violation of these Terms and Conditions by you, including any infraction of the promises, assurances, and covenants you made when accepting these Terms and Conditions. You must offer all reasonable assistance in the defence of any such allegation. Big Bros Digital Media maintains the right to take sole responsibility for the defence and management of any issue for which you are required to provide indemnification.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Enforcement of terms & conditions
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                Regardless of any issues of conflict of law, these terms and conditions are governed by and construed in accordance with the laws of the Commonwealth of Massachusetts in the United States of America. You hereby explicitly consent to the Commonwealth of Massachusetts' courts having sole jurisdiction over any disputes. Furthermore, you agree and fully consent to the Commonwealth of Massachusetts exercising personal jurisdiction over any dispute or claim involving Big Bros Digital Media. The validity and enforceability of the other terms shall not be affected if any portion of these Terms and Conditions may be or become void, illegal, or unenforceable.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Infringement notices & takedown
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                Any information that violates a person's or organization's copyright or other intellectual property rights, including their right to privacy and publicity, is not permitted to be posted by Big Bros Digital Media. You should inform Big Bros Digital Media of your copyright infringement claim in line with the following manner if you think any content on the Site violates your copyright or other intellectual property rights. Big Bros Digital Media is obligated under the Digital Millennium Copyright Act to process notices of suspected infringement and take necessary action ("DMCA"). The Site's Designated Agent, who is: is required to receive notices of alleged copyright infringement under the DMCA.
                                <br /><br />
                                Person Name,<br />
                                Big Bros Digital Media( Big Bros Digital Media), <br />
                                Address-<br />
                                Email: <br />
                                Telephone: +91 1234567890<br />
                                <br /><br />
                                The notification must be in writing and include the information below in order to be valid.<br />
                                <br /><br />
                                Physical or electronic signature of the representative acting on behalf of the holder of the allegedly infringing exclusive right;<br />
                                Identification of the allegedly infringed copyrighted work or, in the case of many allegedly infringed works at a single web site, a representative list of those works at that site;<br />
                                Information reasonably adequate to allow the service provider to find the content, identification of the allegedly infringing material or the allegedly infringing behavior, and instructions for removal or disablement of access to the material;<br />
                                Information that is at least adequate to allow the service provider to contact the complaining party, such as the complaining person's address, phone number, and, if available, email address;<br />
                                A declaration that the complaining party, in good faith, believes that the copyright owner, the owner's agent, or the law does not permit use of the work in the way complained of; and<br />
                                A declaration that the details in the notice are true and, under pain of perjury, that the complaining party has the right to speak on behalf of the holder of the allegedly violated exclusive right.<br />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>



                    <Accordion borderRadius="0.5rem" allowMultiple>
                        <AccordionItem borderRadius="0.5rem">
                            <h2>
                                <AccordionButton width="100%" backgroundColor="#E0E0E0" borderRadius="0.5rem" borderBottomRadius="0%" _hover={{ color: "#BC312E" }}>
                                    <Box as="span" flex='1' textAlign='left' fontWeight="500" padding="1%">
                                        Entire agreement
                                    </Box>
                                    <AccordionIcon backgroundColor="#FF928E" borderRadius="100%" color="white" _hover={{ backgroundColor: "#BC312E" }}
                                    />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} backgroundColor="#e0e0e0">

                                All earlier or contemporaneous understandings or agreements, whether written or oral, regarding the subject matter of these Terms and Conditions are superseded and replaced by these Terms and Conditions, which serve as the complete agreement between you and Big Bros Digital Media with respect to that subject matter. Any waiver of any of these terms and conditions must be in writing and signed by Big Bros Digital Media to be valid. Any failure to enforce a term or condition shall not be construed as a waiver of any subsequent violation of that or any other term or condition.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Stack>

                {/* </div> */}
            </div>
        </div >
    )
}
