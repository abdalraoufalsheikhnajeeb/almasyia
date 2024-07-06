import Image from "next/image";
import React from "react";

const AirFrance: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Air France</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/fanceair.png"
          alt="Air France"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Air France is the national airline of France, headquartered in
          Tremblay-en-France. Established in 1933, it operates a fleet of Airbus
          and Boeing aircraft serving domestic and international destinations
          across the world.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Air France was founded in 1933 from a merger of several smaller
          airlines. Over the decades, it has grown to become one of the world's
          leading airlines, known for its commitment to safety, comfort, and
          service quality. Air France is a founding member of the SkyTeam global
          airline alliance.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of modern Airbus and Boeing
          aircraft, such as the Airbus A320, Airbus A350, Boeing 777, and Boeing
          787 Dreamliner. Air France maintains a young and efficient fleet to
          ensure passenger safety and comfort.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Air France serves a wide range of destinations across Europe, Asia,
          Africa, the Americas, and Oceania. Key destinations include Paris, New
          York, Tokyo, Los Angeles, and Johannesburg.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to enhance the travel
          experience, including in-flight entertainment, gourmet meals, and
          comfortable seating. Business and First Class passengers enjoy
          additional perks such as lie-flat seats, premium dining, and access to
          exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">In-Flight Experience</h2>
        <p className="text-gray-700 mb-4">
          Passengers can enjoy a state-of-the-art in-flight entertainment system
          with a wide selection of movies, TV shows, music, and games. The
          airline also offers Wi-Fi on many of its flights, enabling passengers
          to stay connected.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Frequent Flyer Program</h2>
        <p className="text-gray-700 mb-4">
          Air France's frequent flyer program, Flying Blue, rewards loyal
          customers with miles that can be redeemed for flights, upgrades, and
          other benefits. Members enjoy perks such as priority check-in, extra
          baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Air France is easy through their official
          website, mobile app, and authorized travel agents. The customer
          service team is available to assist with reservations, inquiries, and
          special requests. The airline also offers convenient online check-in
          and mobile boarding pass options.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Air France is committed to sustainable practices and supporting local
          communities. The airline engages in various CSR initiatives, including
          environmental conservation efforts, education programs, and charitable
          partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Air
          France website or contact their customer service at +33 9 69 39 36 54.
          Follow them on social media for the latest updates and promotions.
        </p>
      </div>
    </div>
  );
};

export default AirFrance;
