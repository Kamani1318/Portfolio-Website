import React from 'react'
import blackbox_ai from './../assets/BlackBox-AI.png'
const Projects = () => {
  const items = [
    {
      title: 'Interactive Chatbot',
      description: 'An interactive chatbot with a custom UI built using React JS and Langchain JS that trains on pdfs, urls and other documents to give you a response. ',
      image: 'https://i.pinimg.com/originals/de/d0/bb/ded0bbdd8485e424327257405a86a884.gif',
      github : 'https://github.com/Kamani1318/Interactive-Chatbot',
    },
    {
      title: 'Chatbot + LRP',
      description: 'A Web app with explainable ML models, integrating Random Forest for Breast Cancer prediction with OCR explanations and an LRP model used to highlight critical features in eye images for cancer detection.',
      image: blackbox_ai,
      github : 'https://github.com/Kamani1318/GEHC-PCC-new'
    },
    {
      title: 'Amazon ML Challenge 24',
      description: 'Developed a pipeline that extracts text from images with around 43% accuracy using OCR and NER on the Amazon dataset which contained over 2 lakh images.',
      image: 'https://img.freepik.com/premium-vector/ocr-line-icon-optical-character-recognition_116137-11142.jpg',
      github : 'https://github.com/Kamani1318/Amazon-ML-Challenge-24'
    },
  ]
  return (
    <div className="bg-black p-12">
    <div className="flex flex-col items-center text-center">
      <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
          Projects
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {items.map((item,index) => (
        <div className="max-w-sm bg-amber-400 border border-gray-800 rounded-lg shadow">
          <a href="#">
              <img className="rounded-t-lg h-64 w-full object-fit" src={item.image} alt="" />
          </a>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {item.title}
                  </h5>
              </a>
              <p className="mb-3 font-normal text-white">
                {item.description}
              </p>
              <a
                  href={item.github}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Link
                  <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                  >
                      <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                  </svg>
              </a>
          </div>
      </div>
      ))}
    </div>
    </div>
  )
}

export default Projects;