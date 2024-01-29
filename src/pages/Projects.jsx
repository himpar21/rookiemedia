// import { Link } from "react-router-dom";

// import { CTA } from "../components";
// import { projects } from "../constants";
// import { arrow } from "../assets/icons";

// const Projects = () => {
//   return (
//     <section className='max-container'>
//       <h1 className='head-text'>
//         My{" "}
//         <span className='blue-gradient_text drop-shadow font-semibold'>
//           Projects
//         </span>
//       </h1>

//       <p className='text-slate-500 mt-2 leading-relaxed'>
//         I've embarked on numerous projects throughout the years, but these are
//         the ones I hold closest to my heart. Many of them are open-source, so if
//         you come across something that piques your interest, feel free to
//         explore the codebase and contribute your ideas for further enhancements.
//         Your collaboration is highly valued!
//       </p>
//       <div className='flex flex-wrap my-20 gap-16'>
//         {projects.map((project) => (
//           <div className='lg:w-[400px] w-full' key={project.name}>
//               <div className={`btn-back rounded-xl ${project.theme}`} />
//               {/* <div className='btn-front rounded-xl flex justify-center items-center'> */}
//                 <img
//                   src={project.imageURL}
//                   alt='threads'
//                   className='w-100 h-300 rounded-xl object-contain'
//                 />
//               {/* </div> */}

//             <div className='mt-5 flex flex-col'>
//               <h4 className='text-2xl font-poppins font-semibold'>
//                 {project.name}
//               </h4>
//               <p className='mt-2 text-slate-500'>{project.description}</p>
//               <div className='mt-5 flex items-center gap-2 font-poppins'>
//                 <Link
//                   to={project.link}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='font-semibold text-blue-600'
//                 >
//                   Live Link
//                 </Link>
//                 <img
//                   src={arrow}
//                   alt='arrow'
//                   className='w-4 h-4 object-contain'
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <hr className='border-slate-200' />

//       <CTA />
//     </section>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import './project.css';
const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideoURL, setCurrentVideoURL] = useState("");

  const openModal = (videoURL) => {
    setCurrentVideoURL(videoURL);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentVideoURL("");
    setModalIsOpen(false);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className={`btn-back rounded-xl ${project.theme}`} />
            <img
              src={project.imageURL}
              alt={project.name}
              className="w-100 h-300 rounded-xl object-contain cursor-pointer"
              onClick={() => openModal(project.videoURL)}
            />

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="video-modal" // Add a custom class for styling
        overlayClassName="video-overlay" // Add a custom class for styling the overlay
      >
        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src={currentVideoURL}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <button className="close-button" onClick={closeModal}>
            Close Video
          </button>
      </Modal>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
