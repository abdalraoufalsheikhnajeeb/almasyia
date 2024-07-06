import Image from "next/image";
import React from "react";

const Emirates: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Emirates</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/emirates.webp"
          alt="Emirates"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Emirates is a state-owned airline based in Dubai, United Arab
          Emirates. Founded in 1985, it operates over 3,600 flights per week to
          more than 150 destinations in 80 countries across six continents.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Established in 1985, Emirates has grown to become one of the world's
          largest and most prestigious airlines, renowned for its commitment to
          luxury and service excellence. The airline is a subsidiary of The
          Emirates Group, owned by the government of Dubai.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of modern Airbus and Boeing
          aircraft, such as the Airbus A380 and Boeing 777. Emirates is known
          for maintaining one of the youngest and most technologically advanced
          fleets in the industry.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Emirates serves an extensive network of destinations, covering major
          cities and popular tourist spots across the Middle East, Africa,
          Europe, Asia, the Americas, and Oceania. Key destinations include
          Dubai, London, New York, Sydney, and Tokyo.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to ensure a high-quality
          travel experience, including award-winning in-flight entertainment,
          gourmet meals, and comfortable seating. First and Business Class
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
          Emirates' frequent flyer program, Skywards, rewards loyal customers
          with miles that can be redeemed for flights, upgrades, and other
          benefits. Members enjoy perks such as priority check-in, extra baggage
          allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Emirates is easy through their official website,
          mobile app, and authorized travel agents. The customer service team is
          available to assist with reservations, inquiries, and special
          requests. The airline also offers convenient online check-in and
          mobile boarding pass options.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Emirates is committed to sustainable practices and supporting local
          communities. The airline engages in various CSR initiatives, including
          environmental conservation efforts, education programs, and charitable
          partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Emirates
          website or contact their customer service at +971 600 555555. Follow
          them on social media for the latest updates and promotions.
        </p>
      </div>
    </div>
  );
};

export default Emirates;
