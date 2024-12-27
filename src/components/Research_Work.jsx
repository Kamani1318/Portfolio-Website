import React from "react";

const blogPosts = [
  {
    id: 1,
    category: "",
    icon: (
      <svg
      className="mr-1 w-3 h-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
        clipRule="evenodd"
      ></path>
      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
    </svg>
    ),
    date: "2023",
    title: "CoREGAN",
    description:
      "This paper was accepted in the Generative AI Workshop of The 3RD AI ML Systems Conference held in Bangalore out of 150+ papers submitted. It proposes a new model for Guided Depth Super Resolution using Laplacian Pyramids.",
    link: "https://dl.acm.org/doi/10.1145/3639856.3639897",
  },
  {
    id: 2,
    category: "",
    icon: (
      <svg
        className="mr-1 w-3 h-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
          clipRule="evenodd"
        ></path>
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
      </svg>
    ),
    date: "2023",
    title: "LaMAR",
    description:
      "This paper was accepted in the AAAI-24 Student Abstract and Poster Program out of 190+ papers submitted. It proposes a new model for Guided Thermal Super Resolution using Laplacian Pyramids and GANs",
    link: "https://ojs.aaai.org/index.php/AAAI/article/view/30463",
  },
];

const Research_Work = () => {
  return (
    <div className="bg-black">
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
            Research Work
          </h2>
          <p className="font-light sm:text-xl text-gray-400">
            Credit to MRM Research for the research work published
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="p-6 bg-color_5 rounded-lg border border-gray-700 shadow-md"
            >
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-primary-100 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                  {post.icon}
                  {post.category}
                </span>
                <span className="text-sm text-gray-100">{post.date}</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                <a href={post.link}>{post.title}</a>
              </h2>
              <p className="mb-5 font-light text-gray-200">
                {post.description}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href={post.link}
                  className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <div className='bg-black h-48'></div>
    </div>
  );
};

export default Research_Work;
