import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { GiLoveLetter } from "react-icons/gi";
import { MdHolidayVillage } from "react-icons/md";
import { BiSolidInstitution } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { FaGhost } from "react-icons/fa";
import { SiStudyverse } from "react-icons/si";
import { GiFertilizerBag } from "react-icons/gi";
import { GiCyberEye } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { GiCabbage } from "react-icons/gi";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


function Experience() {
  return (
    <>
        <Navbar/>
        <div className='wrapper'>
            <h1>Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 2022 - Dec 2022"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<GiLoveLetter />}
                >
                    <h3 className="vertical-timeline-element-title">Delfess (Del Confess) IT Del</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        System Analyst
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2023 - Jun 2023"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<MdHolidayVillage />}
                >
                    <h3 className="vertical-timeline-element-title">First Year Project - Pangombusan Village Website Design</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        System Analyst, Tester
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Oct 2023 - Dec 2023"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<BiSolidInstitution />}
                >
                    <h3 className="vertical-timeline-element-title">User Interface Design Project - Redesign of the Del Institute of Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        UI/UX Designer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2023 - Dec 2023"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Apocalypse Scholl Management System</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        System Analyst, Tester
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2023 - Dec 2023"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<BiSolidInstitution />}
                >
                    <h3 className="vertical-timeline-element-title">IT Del Student Management Information System</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        Application Developer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Mar 2024 - May 2024"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<SiStudyverse />}
                >
                    <h3 className="vertical-timeline-element-title">StudySphere Website-Based Tutoring Application</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        System Analyst, Tester
                    </p>
                </VerticalTimelineElement>
                 <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2024 - Jun 2024"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Second Year Project - Education App for Monitoring Presence and Environment: SMAN 1 Parmaksian</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        System Analyst, Tester
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jun 2024 - Jul 2024"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<FaGhost />}
                >
                    <h3 className="vertical-timeline-element-title">Nightmare Seeker</h3>
                    <h4 className="vertical-timeline-element-subtitle">Apple Developer Academy</h4>
                    <p>
                        iOS App Developer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Sep 2024 - Dec 2024"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<GiFertilizerBag />}
                >
                    <h3 className="vertical-timeline-element-title">AgriFuture Application</h3>
                    <h4 className="vertical-timeline-element-subtitle">PT Kinema Systrans Multimedia</h4>
                    <p>
                        App Developer
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2024 - Dec 2024"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<GiCyberEye />}
                >
                    <h3 className="vertical-timeline-element-title">Testing Security Headers on Web Servers to Improve Protection Against Cyber Attacks</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        Cybersecurity Analyst
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2024 - Dec 2024"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<MdDashboard />}
                >
                    <h3 className="vertical-timeline-element-title">Locker Studio for Dashboard Report</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        Data Analyst
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2025 - Jul 2025"
                    iconStyle={{ background: '#222831', color: '#fff' }}
                    icon={<GiCabbage />}
                >
                    <h3 className="vertical-timeline-element-title">Final Year Project - Application of Deep Learning with Faster R-CNN Algorithm for Website-Based Cabbage Crop Calculation (Case Study: Herbal and Horticultural Technology Science Park)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institut Teknologi Del</h4>
                    <p>
                        Computer Vision Engineer Intern
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        <Footer/>
        <ScrollToTop/>
    </>
  )
}

export default Experience