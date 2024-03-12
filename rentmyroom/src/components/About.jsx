import React from 'react';
import Layout from '../Layout';
import aboutUsImg1 from 'D:/rentmyroom/aboutUsImg1.jpg';
import Footer from '../HomeComponents/Footer';

function About() {
  return (
    <div>
      <Layout />
      <div className='lg:w-full lg:h-auto'>
        <div className=' w-full bg-cover bg-center' style={{backgroundImage: `url(${aboutUsImg1})`}}>
          <div className='bg-black bg-opacity-50 h-full'>
            <h1 className='text-white px-44 pt-44 text-3xl font-semibold'>About Us</h1>
            <p className="text-white px-44 pt-4 pb-24 text-6xl font-nunito font-semibold">About Us - Who We Are?</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-5/12 lg:pl-20">
            <h1 className="pt-10 text-4xl font-nunito font-bold text-blue-950">Our Story</h1>
            <p className="font-normal text-slate-500">Check out our company story and work process</p>
            <p className="text-black pt-6 font-hanuman text-sm font-normal">
              At Rentmyroom, we believe in simplifying the process of finding your perfect space. Whether you're a student, young professional, or a family, we're dedicated to providing you with comfortable, affordable, and conveniently located rooms for rent. Our platform connects renters with landlords, offering a diverse range of options to suit every lifestyle and budget. With our user-friendly interface and comprehensive search features, finding your ideal room has never been easier. <br /> <br /> At RentmyRoom, we prioritize transparency, security, and customer satisfaction, ensuring a seamless rental experience for all parties involved. Join our community today and discover the perfect place to call home.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img className="lg:h-[450px] lg:w-[650px] lg:m-8 lg:p-8 rounded-md" src="https://funny-daffodil-350bc9.netlify.app/immio.jpg" alt="" />
        </div>
      </div>

      </div>
      <Footer />
    </div>
  );
}

export default About;
