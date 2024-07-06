import Image from "next/image";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Syrian Air</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/syrianair.webp"
          alt="Syrian Air"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Syrian Air, also known as Syrian Arab Airlines, is the national
          carrier of Syria. Established in 1946, it operates domestic and
          international flights to various destinations in the Middle East,
          Europe, Asia, and Africa.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Syrian Air was founded shortly after World War II and has played a
          crucial role in connecting Syria with the rest of the world. Despite
          challenges, the airline continues to operate and serve its passengers.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of Airbus and Boeing aircraft.
          Syrian Air maintains its fleet to ensure safety and comfort for its
          passengers, with regular maintenance and upgrades.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Syrian Air serves a range of destinations across the Middle East,
          Europe, Asia, and Africa. Key destinations include Cairo, Beirut,
          Moscow, Tehran, and Khartoum.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers various services to enhance the travel experience,
          including in-flight entertainment, meal options, and comfortable
          seating. Syrian Air also provides special assistance services for
          passengers with disabilities or special needs.
        </p>
        <h2 className="text-2xl font-semibold mb-2">In-Flight Experience</h2>
        <p className="text-gray-700 mb-4">
          Passengers can enjoy a pleasant in-flight experience with Syrian Air.
          The airline offers a selection of movies, TV shows, music, and games
          as part of its in-flight entertainment system. Meals are prepared to
          cater to different dietary preferences.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Frequent Flyer Program</h2>
        <p className="text-gray-700 mb-4">
          Syrian Air offers a frequent flyer program that rewards loyal
          customers with various benefits, such as priority boarding, extra
          baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Syrian Air is convenient through their official
          website, mobile app, and authorized travel agents. The customer
          service team is available to assist with reservations, inquiries, and
          special requests. The airline also offers online check-in services to
          streamline the travel experience.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Syrian Air is committed to contributing positively to the community.
          The airline engages in various corporate social responsibility
          initiatives, including environmental conservation efforts, support for
          local communities, and participation in humanitarian missions.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, you can visit the official
          website of Syrian Air or contact their customer service. Follow them
          on social media for the latest updates and promotions.
        </p>
      </div>
    </div>
  );
};

export default page;
