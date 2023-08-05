import { icons } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter,FaMobileAlt,FaHandsHelping, FaNetworkWired } from "react-icons/fa";
import { IoMdBrowsers ,IoMdSchool} from "react-icons/io";
import { DiScrum } from "react-icons/di";
import { MdVerifiedUser,MdDomainVerification,MdScreenSearchDesktop } from "react-icons/md";


export const data = {
    email:"hakcawa#gmail.com",
    socialLinks: [
        {
            plateform: "github",
            link: "https://github.com/hackawama",
            icon: <FaGithub size={25} color="lightgray" className="mx-1" />
        },
        {
            plateform: "twitter",
            link: "https://twitter.com/isaady2",
            icon: <FaTwitter size={25} color="lightgray" className="mx-1" />
        },
        {
            plateform: "linkedin",
            link: "https://www.linkedin.com/in/saad-abbou-66555625b/",
            icon: <FaLinkedin size={25} color="lightgray" className="mx-1" />
        }

    ],
    skills:[  {name:"python", progress:"70%"},{name:"spring",  progress:"90%"},{name:"nodejs",  progress:"80%"}, {name:"react", progress:"90%"},{name:"nextjs", progress:"60%"}, {name:"expo",progress:"80%"}, {name:"git", progress:"80%"},{name:"postgres", progress:"70%"}, {name:"mango", progress:"50&"}, {name:"docker", progress:"60%" }],
    
    tools:[ "nessus", "acunetix", "elastic", "openvas", "owasp",  "snort","suricata","wazuh","pfsense"],
    services:[
        {
            title:"Web App developement",
            icon:<IoMdBrowsers size={30} color="black" className="mx-1" />,
        },
        {
            title:"Mobile App developement",
            icon:<FaMobileAlt size={30} color="black" className="mx-1" />,
        },
        {
            title:"Application Security Verification",
            icon:<MdDomainVerification size={30} color="black" className="mx-1" />,
        },
        {
            title:"Cyber Security Consulting",
            icon:<FaHandsHelping size={30} color="black" className="mx-1" />,
        },
        {
            title:"ICS Auditing, Risk Management",
            icon:<MdVerifiedUser size={30} color="black" className="mx-1" />,
        },
        {
            title:"Open Source SOC deployement",
            icon:<FaNetworkWired size={30} color="black" className="mx-1" />,
        },
        {
            title:"Secured SDLC",
            icon:<DiScrum size={30} color="black" className="mx-1" />,
        },
        {
            title:"Vulnreabilty Assesment",
            icon:<MdScreenSearchDesktop size={30} color="black" className="mx-1" />,
        },
        {
            title:"Training & Awarness",
            icon:<IoMdSchool size={30} color="black" className="mx-1" />,
        },
       
    ],
    aboutme:[
        "Hi,",
        "I'm a Software Engenier and Cyber Security Expert.",
        "Coding is my PASSION and Cyber Security is my daily job.",
        "I’m a self taught software developer and I hold a engineering degree in Cyber Security.",
        "This website is all about my journey in the tech feild.",
        "I'm sharing, also, all my personnel dev project and i'm doing my best to share everything i know in an easier way"
    ],
    footerSigniture: "H.B @2023 V1.0",
    title: "Cyber Security & Software Enginering",
    subtitle: "It's all about The impact!"

}