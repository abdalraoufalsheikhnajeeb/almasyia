import Image from "next/image";
import React from "react";

const QatarAirways: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Qatar Airways</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/qatarairways.webp"
          alt="Qatar Airways"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Qatar Airways is the state-owned flag carrier of Qatar. Established in
          1993, it operates a hub-and-spoke network, flying to over 160
          international destinations across Africa, Asia, Europe, the Americas,
          and Oceania from its base at Hamad International Airport in Doha.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Qatar Airways was founded in 1993 and has since grown to become one of
          the world’s leading airlines, known for its commitment to providing a
          high level of service and luxury. It is a member of the Oneworld
          alliance, enhancing its connectivity globally.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of modern Airbus and Boeing
          aircraft, such as the Airbus A350, Airbus A380, Boeing 777, and Boeing
          787 Dreamliner. Qatar Airways is renowned for maintaining a young and
          technologically advanced fleet.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Qatar Airways serves an extensive network of destinations, covering
          major cities and popular tourist spots across Africa, Asia, Europe,
          the Americas, and Oceania. Key destinations include Doha, London, New
          York, Sydney, Tokyo, and Paris.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to ensure a high-quality
          travel experience, including award-winning in-flight entertainment,
          gourmet meals, and comfortable seating. Business and First Class
          passengers enjoy additional perks such as lie-flat seats, premium
          dining, and access to exclusive lounges.
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
          Qatar Airways' frequent flyer program, Privilege Club, rewards loyal
          customers with Qmiles that can be redeemed for flights, upgrades, and
          other benefits. Members enjoy perks such as priority check-in, extra
          baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Qatar Airways is easy through their official
          website, mobile app, and authorized travel agents. The customer
          service team is available to assist with reservations, inquiries, and
          special requests. The airline also offers convenient online check-in
          and mobile boarding pass options.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Qatar Airways is committed to sustainable practices and supporting
          local communities. The airline engages in various CSR initiatives,
          including environmental conservation efforts, education programs, and
          charitable partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Qatar
          Airways website or contact their customer service at +974 4023 0000.
          Follow them on social media for the latest updates and promotions.
        </p>
      </div>
    </div>
  );
};

export default QatarAirways;
