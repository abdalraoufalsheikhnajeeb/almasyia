import Image from "next/image";
import React from "react";

const RoyalJordanian: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Royal Jordanian Airlines</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/jordanair.png"
          alt="Royal Jordanian Airlines"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Royal Jordanian Airlines is the flag carrier airline of Jordan.
          Established in 1963, it operates scheduled international flights to
          four continents from its main hub at Queen Alia International Airport
          in Amman.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Royal Jordanian was founded in 1963 by a Royal Decree issued by His
          Majesty King Hussein. The airline has since grown to become a leading
          carrier in the Middle East, known for its reliability and high-quality
          service.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of modern Airbus and Boeing
          aircraft, such as the Airbus A320, Airbus A321, Boeing 787 Dreamliner,
          and Embraer 175. Royal Jordanian maintains its fleet to the highest
          safety and comfort standards.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Royal Jordanian serves an extensive network of destinations, covering
          Europe, Asia, Africa, and North America. Key destinations include
          London, Paris, New York, Bangkok, and Cairo.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to enhance the travel
          experience, including in-flight entertainment, gourmet meals, and
          comfortable seating. Crown Class passengers enjoy additional perks
          such as lie-flat seats, premium dining, and access to exclusive
          lounges.
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
          Royal Jordanian's frequent flyer program, Royal Club, rewards loyal
          customers with miles that can be redeemed for flights, upgrades, and
          other benefits. Members enjoy perks such as priority check-in, extra
          baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Royal Jordanian is easy through their official
          website, mobile app, and authorized travel agents. The customer
          service team is available to assist with reservations, inquiries, and
          special requests. The airline also offers convenient online check-in
          and mobile boarding pass options.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Royal Jordanian is committed to sustainable practices and supporting
          local communities. The airline engages in various CSR initiatives,
          including environmental conservation efforts, education programs, and
          charitable partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Royal
          Jordanian website or contact their customer service at +962 6 510
          0000. Follow them on social media for the latest updates and
          promotions.
        </p>
      </div>
    </div>
  );
};

export default RoyalJordanian;
