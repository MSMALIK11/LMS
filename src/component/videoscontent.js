
// import img1 from '../images/bg2.jpg'
import imgb from '../images/img-1.jpg'
import imga from '../images/img-2.jpg'
// import imgjs from '../images/img-3.jpg'

// import img5 from '../images/img-5.jpg'
import img7 from '../images/img-7.jpg'

import imgreact from '../images/react.jpeg';
import link1 from './lacture/p-1.mp4';
import link2 from './lacture/p-2.mp4';
import Rintro from './lacture/intro.mp4';
import prerequisite from './lacture/prerequisites.mp4';
import jsxInReact from './lacture/jsx in react.mp4';
import rendermultipleelement from './lacture/render-multiple-element-in-jsx.mp4'
import fragment from './lacture/react-fragment.mp4';
import jsxattr from './lacture/jsx in react.mp4';

import googlefonts from './lacture/How to use Google fonts in React JS Application in Hindi in 2020 #15.mp4'

import props from './lacture/props-in-jsx.mp4'

const content = {
  courses: [
    {
      id: "1",
      title: "  become a react developere from scratch to advanced",
      author: "maximillion",
      duritation: "8 total hours",
      price: "$5",
      lactures: "100 lactures",
      image: imgreact,
      active: true,
      lacture: [
        {
          id: "1",
          title: "introduction to react",

          link: Rintro,
        },
        {
          id: "2",
          title: "prerequisite",

          link: prerequisite,
        },
        {
          id: "3",
          title: "jsx in react",

          link: jsxInReact,
        },
        {
          id: "4",
          title: "how to render multiple elements in reactjs",

          link: rendermultipleelement,
        },
        {
          id: "5",
          title: "understanding react fragment in react",

          link: fragment,
        },
        {
          id: "6",
          title: "jsx attribute in reactJS",

          link: jsxattr,
        },
        {
          id: "7",
          title: "how to use google fonts ",

          link: googlefonts,
        },
        {
          id: "8",
          title: "props in reactjs ",

          link: props,
        },
      ],
    },
    {
      id: "2",
      title: "become a web developere from scratch to advanced  ",
      author: "maximillion",
      duritation: "8 total hours",
      price: "$5",
      lactures: "100 lactures",
      image: img7,
      active: false,
      lacture: [
        {
          id: "1",
          title: "introduction to html",
          // "link":"https://www.youtube.com/watch?v=PqGn1GTmEJs&list=RDPqGn1GTmEJs&start_radio=1"
          link: link1,
        },
        {
          id: "2",
          title: "Learn about HTML tag",
          // link: "https://www.youtube.com/watch?v=NwdQx2P_ytk&list=RDPqGn1GTmEJs&index=11",
          link: link2,
        },
      ],
    },
    {
      id: "3",
      title: "learn angular fundamentals from beginning to advanced",
      author: "maximillion",
      duritation: "8 total hours",
      price: "$5",
      lactures: "100 lactures",
      active: false,
      lacture: [
        {
          id: "1",
          title: "introduction to AngularJS",
          // "link":"https://www.youtube.com/watch?v=O3Z_LKxPJXQ&list=RDiet_C7hkAOg&index=10"
          link: link1,
        },
        {
          id: "2",
          title: " hello world program",
          // "link":"https://www.youtube.com/watch?v=QCXaa1mEUK0&list=RDiet_C7hkAOg&index=12"
          link: link2,
        },
      ],
    },
    {
      id: "4",
      title: "bootstrap 5 from scratch to exert with 5 real project ",
      author: "maximillion",
      duritation: "10 total hours",
      price: "$5",
      lactures: "100 lactures",
      image: imgb,
      active: false,
      lacture: [
        {
          id: "1",
          title: "introduction to AngularJS",
          // "link":"https://www.youtube.com/watch?v=O3Z_LKxPJXQ&list=RDiet_C7hkAOg&index=10"
          link: link1,
        },
        {
          id: "2",
          title: " hello world program",
          // "link":"https://www.youtube.com/watch?v=QCXaa1mEUK0&list=RDiet_C7hkAOg&index=12"
          link: link2,
        },
      ],
    },
    // {
    //   "id":"4",
    //     "title":"bootstrap 5 from scratch to exert with 5 real project ",
    //     "author":"maximillion",
    //     "duritation":"10 total hours",
    //     "price":"$5",
    //     "lactures":"100 lactures",
    //     "image":imgb,

    // },
    // {
    //   "id":"5",
    //     "title":"learn modern web designer and developer course  ",
    //     "author":"maximillion",
    //     "duritation":"13 total hours",
    //     "price":"$5",
    //     "lactures":"151 lactures",
    //     "image":img5,

    // },
    // {
    //   "id":"6",
    //   "title":" the comlete javascript from beginner to advanced  ",
    //   "author":"maximillion",
    //   "duritation":"13 total hours",
    //   "price":"$5",
    //   "lactures":"150lactures",
    //   "image":imgjs,

    // },
  ],
};

export default content;
