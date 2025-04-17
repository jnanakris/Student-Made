import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 flex justify-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-10">

        <h1 className="text-4xl font-extrabold text-black-800 mb-2">About Us</h1>
        <h2 className="text-3xl font-bold text-black mb-6">Empowering Student Creativity</h2>

        <p className="text-lg text-black mb-6">
          Niner Mine is a student-powered marketplace crafted at UNC Charlotte. Our mission is simple: to provide 
          students a platform to showcase and sell their creations—whether that's handmade goods, digital designs, 
          art, or custom crafts. 
        </p>

        <p className="text-lg text-black mb-10">
          We're building a space where innovation meets community, helping local talent shine and creating meaningful 
          connections between creators and buyers.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {[
            {
              title: "For Students",
              text: "Turn your skills and hobbies into opportunities. Reach real customers and build your brand.",
            },
            {
              title: "For Buyers",
              text: "Discover one-of-a-kind items made by your peers. Support the campus community in style.",
            },
            {
              title: "For Creators",
              text: "From designers to developers, every creative voice has a place. Get featured and get noticed.",
            },
          ].map(({ title, text }, idx) => (
            <div key={idx} className="bg-green-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-900 mb-2">{title}</h3>
              <p className="text-black">{text}</p>
            </div>
          ))}
        </div>

        {/* Optional Team Section */}
        {/* <div>
          <h2 className="text-2xl font-bold text-black mb-4">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            // Add team cards here
          </div>
        </div> */}

        <p className="text-center text-black text-lg mt-12">
          Made with 💚 by students, for students. Welcome to the Niner Mine.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
