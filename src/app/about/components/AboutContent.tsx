"use client";

const AboutContent = () => {
  return (
    <section className="py-16 px-4 relative z-20 -mt-10">
      <div className="container mx-auto max-w-[1400px] min-h-[800px] bg-white p-12 rounded-lg shadow-lg">
        <div className="space-y-20">
          <div id="company-history">
            <h2 className="text-3xl font-medium mb-4 text-center text-black">Company History </h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <div className="max-w-[800px] mx-auto">
              <p className="text-gray-700 text-base leading-relaxed">
              We at Secure Matrix Constro Engineering Solutions are manufacturers of innovative construction materials designed to enhance security and durability. Since 2017, we have specialized in the production and supply of a wide range of products, including PVC-coated wire, gabion mattresses, fencing systems, and wall finishing solutions.
              <br></br>
              <br></br>
              Our focus is on delivering innovative, sustainable, and reliable materials that cater to the needs of both residential and industrial projects. Guided by a strong commitment to integrity and customer satisfaction, we aim to be a trusted partner in the construction industry.              </p>
            </div>
          </div>

          <div id="vision">
            <h2 className="text-3xl font-medium mb-4 text-center text-black">Our Vision </h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <div className="max-w-[800px] mx-auto">
              <p className="text-gray-700 text-base leading-relaxed">
              We envision taking our technologically advanced solutions to the global stage, benefiting industries and communities worldwide. Our goal is to become a global leader in engineering solutions, driven by a commitment to innovation and excellence. We aim to consistently push the boundaries, set new industry standards, and exceed client expectations through sustainable, high-quality offerings.              </p>
            </div>
          </div>

          <div id="mission">
            <h2 className="text-3xl font-medium mb-4 text-center text-black">Our Mission 
            </h2>
            <div className="w-20 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <div className="max-w-[800px] mx-auto">
              <p className="text-gray-700 text-base leading-relaxed mb-8">
              At the heart of our mission lies a relentless pursuit of innovation and excellence. We're dedicated to providing top-quality products and services that not only meet but surpass customer expectations. With a diverse range of offerings, we strive to be your preferred partner, delivering exceptional value and service.
              We're committed to continuous improvement, constantly refining our processes and systems to ensure optimal results. By staying ahead of industry trends and embracing emerging technologies, we aim to deliver cutting-edge solutions that address the evolving needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
