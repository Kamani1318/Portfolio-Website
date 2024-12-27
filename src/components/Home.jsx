import React from 'react';
import css from './../assets/icons8-css-144.png';
import express from './../assets/icons8-express-js-144.png';
import html from './../assets/icons8-html5-144.png';
import jupyter from './../assets/icons8-jupyter-144.png';
import node_js from './../assets/icons8-node-js-144.png';
import python from './../assets/icons8-python-144.png';
import react from './../assets/icons8-react-js-144.png';
import typescript from './../assets/icons8-typescript-144.png';
import postgresql from './../assets/icons8-postgresql-144.png';
import javascript from './../assets/icons8-javascript-144.png';
import pytorch from './../assets/icons8-pytorch-144.png';
import mongodb from './../assets/icons8-mongodb-144.png'
import graphql from './../assets/icons8-graphql-144.png'
import avatar from './../assets/Avatar-removebg-preview.png'
const Home = () => {
  const backend_icons = [
    { title: 'Express JS', image: express },
    { title: 'Node JS', image: node_js },
    { title: 'PostgreSQL', image: postgresql },
    { title : 'MongoDB' , image : mongodb},
    { title : 'GraphQL' , image : graphql},
  ];

  const ml_icons = [
    { title: 'Python', image: python },
    { title: 'Jupyter', image: jupyter },
    { title: 'Pytorch', image: pytorch },
  ];

  const frontend_icons = [
    { title: 'Javascript', image: javascript },
    { title: 'React JS', image: react },
    { title: 'Typescript', image: typescript },
    { title: 'CSS', image: css },
    { title: 'HTML', image: html },
  ];

  return (
    <>
    <div className='bg-black'>
      <div className="flex justify-center items-center pt-16 pb-8 px-10">
        <div className="flex justify-center items-center box-content h-[400px] w-[1250px] p-4 bg-color_7 border-gray-800 rounded-3xl">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Hey I'm Aryan Kamani!
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                I'm a Sofware Developer that loves to pick up new technologies and find interesting problems to solve with tech!
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
              className='ml-24 w-64'
                src={avatar}
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-white px-20 text-4xl font-extrabold'>Skills</h1>
      {/* Frontend Development Section */}
      <section className="flex justify-center items-center py-4 px-16">
        <div className="bg-color_1 dark:bg-gray-800 rounded-3xl w-full max-w-screen-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className='mb-24'>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                Frontend Development
              </h2>
              <p className="mb-2 font-light text-gray-200 md:text-lg">
                Love making websites and designing them. My key areas of focus are making websites more user-friendly, responsive and interactive. 
                I enjoy working with javascript and continue to learn new concepts like state management, testing .etc.
              </p>
            </div>
            
            {/* Right Column: Icons */}
            <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
              {frontend_icons.map((icon, index) => (
                <div key={index} className="text-center text-gray-500 dark:text-gray-400">
                  <img
                    className="mx-auto mb-4 w-24 h-24 bg-white p-3 rounded-lg"
                    src={icon.image}
                    alt={icon.title}
                  />
                  <h3 className="mb-1 text-md font-bold tracking-tight text-white">
                    {icon.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Backend Development Section */}
      <section className="flex justify-center items-center py-4 px-16">
        <div className="bg-color_2 rounded-3xl w-full max-w-screen-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
              {backend_icons.map((icon, index) => (
                <div key={index} className="text-center text-gray-500 dark:text-gray-400">
                  <img
                    className="mx-auto mb-4 w-24 h-24 bg-white p-3 rounded-lg"
                    src={icon.image}
                    alt={icon.title}
                  />
                  <h3 className="mb-1 text-md font-bold tracking-tight text-white">
                    {icon.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className='mb-36'>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                Backend Development
              </h2>
              <p className="mb-2 font-light text-gray-200 md:text-lg">
                Have just recently got into backend and personally love working with Node.js.
                Am currently learning more about databases and the use of APIs and Postman. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ML Engineering Section */}
      <section className="flex justify-center items-center py-4 px-16">
        <div className="bg-color_3 rounded-3xl w-full max-w-screen-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                ML Engineering
              </h2>
              <p className="mb-6 font-light text-gray-200 md:text-lg">
                Have over 2 years of experience in this field. Have worked with training and inferencing existing models as well as models built from scratch using pytorch.
                Have a solid understanding of transformers, GANs and CNNs and have worked with various datasets. 
              </p>
            </div>
            <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
              {ml_icons.map((icon, index) => (
                <div key={index} className="text-center text-gray-500 dark:text-gray-400">
                  <img
                    className="mx-auto mb-4 w-24 h-24 bg-white p-3 rounded-lg"
                    src={icon.image}
                    alt={icon.title}
                  />
                  <h3 className="mb-1 text-md font-bold tracking-tight text-white">
                    {icon.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
