"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
require("./my-button.css");
// fill in an array with the objects
let toChooseFrom = [
    { company: "Argos Scientific Inc,",
        date: "July 2023 - May 2024",
        desc: "Data Analyst – Air Quality Monitoring & R&D Collaboration",
        b1: "Analyzed multi-year fence-line air quality datasets across multiple sites, measuring particulate matter (PM2.5 and PM10), volatile organic compounds (VOCs), and gas concentrations with sub-ppb accuracy.",
        b2: "Applied fiber optic sensing and high-reflectivity mirror systems to increase gas detection sensitivity by ~30–35%, improving confidence intervals and reducing false positives.",
        b3: "Built and maintained 4 fully operational air quality monitoring stations, overseeing calibration, upkeep, and real-time data transmission for 12+ particulate matter monitor units.",
        b4: "Produced comprehensive equipment operation manuals for scientific teams, ensuring consistent calibration protocols and reducing onboarding time for new technicians by 40%.",
        b5: "Coordinated R&D projects with global teams, managing international shipping logistics to destinations including Israel, Taiwan, and Saudi Arabia for sensitive environmental monitoring equipment.",
        b6: "Developed automation scripts in Python to preprocess sensor data, apply anomaly detection algorithms, and reduce manual data handling time by 60%"
    }
];
/**
 * This class will be used to make objects that will
 * populate a scrollable view. The objects will store the
 * date and description of the notable achievment.
 *
 */
class JobExperience extends react_1.Component {
    render() {
        // convert array elements to JSX
        let sDetails = toChooseFrom.map((i) => (<ul style={{ fontSize: "23px" }}> 

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "25px", marginTop: "30px" }}>
                    <span style={{ fontSize: "28px", marginBottom: "10px" }}>{i.company}</span>
                    <span style={{ textAlign: "right", fontSize: "28px", marginBottom: "10px" }}>{i.date}</span> 
                </div>
                <div style={{ fontSize: "25px", }}>
                    <i>
                        {i.desc}
                    </i>
                </div>
                <ul>
                    <li>{i.b1}</li>
                    <li>{i.b2}</li>
                    <li>{i.b3}</li>
                    <li>{i.b4}</li>
                    <li>{i.b5}</li>
                    <li>{i.b6}</li>
                </ul>
            </ul>));
        return <div>
                <div style={{ fontSize: "23px", marginTop: "8px" }}>
                    {sDetails}
                </div>             
            </div>;
    }
}
/**
 * This class is a framework for the game description.
 */
class Description extends react_1.Component {
    render() {
        // text reading the name of the game
        // the rules
        // and lets the player see their score
        return <div>
                <ul>
                    
                    {/* Name */}
                    <div style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}>
                        Dmytro Hodarenko
                    </div>

                    {/* Contact Info */}
                    <div style={{ textAlign: "center", fontSize: "20px", marginTop: "12px", marginBottom: "24px" }}>
                        dmytro.hodarenko@wsu.edu • (360) 843-3912 • <a href="https://app.joinhandshake.com/profiles/n52mv5" target="_blank" rel="noreferrer">Handshake Profile</a>
                    </div>

                    {/* Objective */}
                    <div style={{ fontSize: "30px", fontWeight: "600", marginTop: "24px", borderBottom: "2px solid #bbb", paddingBottom: "4px" }}>
                        Objective
                    </div>
                    <div style={{ fontSize: "23px", marginTop: "8px" }}>
                        Leverage early exposure to Data Science and environmental analytics to apply advanced measurement techniques and AI-driven analysis to achieve the companies goals in procedure automation and AI integration. 
                    </div>

                    {/* Education */}
                    <div style={{ fontSize: "30px", fontWeight: "600", marginTop: "24px", borderBottom: "2px solid #bbb", paddingBottom: "4px" }}>
                        Education
                    </div>
                    <div style={{ marginTop: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "28px" }}>
                        <span>Washington State University, Vancouver, WA</span>
                        <span>Expected June 2026</span>
                    </div>
                    <div style={{ fontSize: "23px", marginBottom: "12px" }}>
                        <i>
                            Bachelor of Science in Computer Science and Minor in Math • 3.21 GPA
                        </i>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "28px" }}>
                        <span>Clark College, Vancouver, WA</span>
                        <span>Fall 2018 - Spring 2021</span>
                    </div>
                    <div style={{ fontSize: "23px" }}>
                        <i>
                            Associates of Arts, General Transfer Degree • 3.54 GPA
                        </i>
                    </div>
                    </div>


                    {/* Job Experience */}
                    <div style={{ fontSize: "30px", fontWeight: "600", marginTop: "24px", borderBottom: "2px solid #bbb", paddingBottom: "4px" }}>
                        Job Experience
                    </div>
                </ul> 
        </div>;
    }
}
/**
 * This class is a framework for the game description.
 */
class Extra extends react_1.Component {
    render() {
        // text reading the name of the game
        // the rules
        // and lets the player see their score
        return <div>
                <ul>
                    {/* Personal Projects */}
                    <div style={{ fontSize: "30px", fontWeight: "600", marginTop: "24px", borderBottom: "2px solid #bbb", paddingBottom: "4px" }}>
                        Personal Projects
                    </div>
                    <div style={{ fontSize: "23px", marginTop: "8px" }}>
                        <li>
                            <div style={{ fontSize: "23px", fontWeight: "600" }}>
                                Small Business Website (AI-Enhanced)
                            </div>
                            Designed and deployed a responsive, interactive website using HTML, CSS, and JavaScript, integrating AI-driven design suggestions to improve UX flow, optimize layout, and enhance creative visuals. Implemented animated transitions and dynamic imagery to give the site a “living” feel while maintaining clean, readable code for future scalability. Resulted in a 50% reduction in bounce rate for the client.
                        </li>
                        <li>
                            <div style={{ fontSize: "23px", fontWeight: "600" }}>
                                Roblox Game Development (MVC + AI)
                            </div>
                            Engineered a modular, maintainable Lua game following the Model-View-Controller (MVC) architectural pattern, in compliance with Roblox development standards. Leveraged AI-assisted code generation for optimization, ensuring logical readability and future-proof scalability while incorporating advanced combat and environment interaction systems.
                        </li>
                        <li>
                            <div style={{ fontSize: "23px", fontWeight: "600" }}>
                                Micrograd Neural Network Optimization
                            </div>
                                Trained and optimized a micrograd-based neural network, applying a cross-entropy loss function to progressively improve classification accuracy over 10 training generations. Achieved a 90% increase in prediction accuracy compared to the baseline, with a measurable 15% reduction in loss through iterative parameter tuning and learning rate adjustments.
                        </li>
                        <li>
                            <div style={{ fontSize: "23px", fontWeight: "600" }}>
                                Personal Resume Hosting Site
                            </div>
                            Developed a portfolio website to showcase professional work, integrating lightweight animations, smooth transitions, and responsive scaling for mobile/desktop compatibility.
                        </li>
                    </div>

                    {/* Professional Skills */}
                    <div style={{ fontSize: "30px", fontWeight: "600", marginTop: "24px", borderBottom: "2px solid #bbb", paddingBottom: "4px" }}>
                        Professional Skills
                    </div>
                    <div style={{ fontSize: "23px", marginTop: "8px" }}>
                        Python • Java • TypeScript • JavaScript • C <br />
                        Git • Tableau • Data Analysis • Automation Scripting
                    </div>
                </ul>
            </div>;
    }
}
function Welcome() {
    return (<div className="welcome-wrap">
            {/* Squiggle filter + ring */}
            <div className="circle-wrap">
                <react_router_dom_1.Link to="/osume">
                    <button className="my-button circle-button" aria-label="Open resume" style={{
            justifyContent: "center",
            background: "#a143ffff",
            border: "none",
            cursor: "pointer"
        }}>
                        
                    </button>
                </react_router_dom_1.Link>
                    <svg viewBox="0 0 220 220" width="220" height="220" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 3,
            animation: "rotateText 12s linear infinite",
        }} aria-hidden="true">
                    <defs>
                        {/* Circle path for text to follow */}
                        <path id="text-circle" d="M110,110 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"/>
                    </defs>

                    <text fill="#222" fontSize="15" fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" letterSpacing="2" textAnchor="middle">
                        <textPath xlinkHref="#text-circle" startOffset="50%">
                            CLICK ME • CLICK ME • CLICK ME • CLICK ME • CLICK ME • CLICK ME •
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>);
}
const rootElem = document.getElementById('root');
if (rootElem == null) {
    alert('you forgot to put a root element in your HTML file.');
}
const root = (0, client_1.createRoot)(rootElem);
//<Board height={10} width={10}/>
root.render(<react_1.StrictMode>
        <react_router_dom_1.BrowserRouter>
            <react_router_dom_1.Routes>
               <react_router_dom_1.Route path="/" element={<div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            background: "#fafafaff"
        }}>
    
                           <Welcome />
                           
                       </div>}/>
                <react_router_dom_1.Route path="/osume" element={<div>
                            <Description />
                            <JobExperience />
                            <Extra />
                        </div>}/>
            </react_router_dom_1.Routes>
        </react_router_dom_1.BrowserRouter>
    </react_1.StrictMode>);
