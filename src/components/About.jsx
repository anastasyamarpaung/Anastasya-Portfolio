import '../styles/About.css'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaFlutter } from "react-icons/fa6";
import { FaGit } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";

function About() {
  return (
    <section id="about">
        <div className='wrapper'>
            <h3>About</h3>
            <p>Anastasya Capritiani Marpaung</p>
            <p>I am a fresh graduate from Information Technology Study Program at Del Institute of Technology with a strong interest in System Analysis and Software Quality Assurance. I possess solid analytical skills and a deep understanding of designing system requirements, creating data flow models (such as DFD and ERD), and collaborating with stakeholders to ensure that the resulting solutions align with business objectives. Additionally, I have experience in software testing, ranging from system testing, integration testing, to creating test scenarios to ensure the system meets the highest quality standards. I am familiar with various tools such as Cucumber, Selenium, Katalon, and Robot Framework. During my studies, I was actively involved in academic projects and research focused on system testing and analysis. I also participated in a Machine Learning project using Python, which strengthened my technical skills and problem-solving abilities. With strong teamwork and communication skills, I am ready to contribute to the dynamically evolving world of technology.</p>
            <h4>Programming Language & Tools</h4>
            <div className='skills'>
                <FaHtml5 /><FaCss3Alt /><FaPhp /><FaReact /><IoLogoJavascript /><FaJava /><FaGolang /><FaFlutter /><FaGit /><FaLaravel />
                <FaBootstrap /><FaSwift /><SiKotlin /><SiDart /><SiPostman /><SiMysql /><FaPython />

            </div>
        </div>
    </section>
  )
}

export default About