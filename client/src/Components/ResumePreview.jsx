import React from 'react'
import ClassicTemplate from "./templates/ClassicTemplate.jsx"
import ModernTemplate from "./templates/ModernTemplate.jsx";
import MinimalTemplate from "./templates/MinimalTemplate.jsx";
import MinimalImageTemplate from "./templates/MinimalImageTemplate.jsx";
import CorporateTemplate from "./templates/CorporateTemplate.jsx";
import MinimalElegance from './templates/MinimalElegance.jsx';
import NeoAtsTemplate from './templates/NeoAtsTemplate.jsx';
import SidebarModern from './templates/SidebarModern.jsx';
import NeumorphismSoftUI from './templates/NeumorphismSoftUI.jsx';
import MagazineEditorial from './templates/MagazineEditorial.jsx';


const ResumePreview = ({data, template, accentColor, classes = ""}) => {

    const renderTemplate = ()=>{
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor}/>;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor}/>;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor}/>;
                 case "Corporate":
                return <CorporateTemplate data={data} accentColor={accentColor}/>;
                 case "minimal-elegance":
                return <MinimalElegance data={data} accentColor={accentColor}/>;

                 case "Neumorph":
                return <NeumorphismSoftUI data={data} accentColor={accentColor}/>;

                 case "Sidebar-modern":
                return <SidebarModern data={data} accentColor={accentColor}/>;

                 case "Neo-Ats":
                return <NeoAtsTemplate data={data} accentColor={accentColor}/>;
                
                 case "Magazine-editorial":
                return <MagazineEditorial data={data} accentColor={accentColor}/>;


            default:
                return <ClassicTemplate data={data} accentColor={accentColor}/>;
        }
    }

  return (
    <div className='w-full bg-gray-100'>
      <div id="resume-preview" className={"border border-gray-200 print:shadow-none print:border-none " + classes}>
        {renderTemplate()}
      </div>

      <style jsx>
        {`
        @page {
          size: letter;
          margin: 0;
        }
        @media print {
          html, body {
            width: 8.5in;
            height: 11in;
            overflow: hidden; 
          }
          body * {
            visibility: hidden;
          }
          #resume-preview, #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
            box-shadow: none !important;
            border: none !important;
          }
        }
        `}
      </style>
    </div>
  )
}

export default ResumePreview
