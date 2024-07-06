import Image from "next/image";
import React from "react";

const TurkishAirlines: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Turkish Airlines</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/turkishairlines.webp"
          alt="Turkish Airlines"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Turkish Airlines is the national flag carrier airline of Turkey.
          Founded in 1933, it operates scheduled services to over 300
          destinations in Europe, Asia, Africa, and the Americas, making it one
          of the largest carriers in the world by number of destinations.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Established in 1933, Turkish Airlines has grown from a small regional
          player into a major global airline. It has continuously expanded its
          route network and fleet, playing a significant role in connecting
          Turkey with the world.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of modern Airbus and Boeing
          aircraft, such as the Airbus A330, Airbus A350, Boeing 777, and Boeing
          787 Dreamliner. Turkish Airlines is known for maintaining a young and
          efficient fleet.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Turkish Airlines serves an extensive network of destinations, covering
          Europe, Asia, Africa, and the Americas. Key destinations include
          Istanbul, Ankara, New York, London, Paris, Tokyo, and Johannesburg.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to ensure a high-quality
          travel experience. This includes in-flight entertainment, gourmet
          meals, and comfortable seating. Business Class passengers enjoy
          additional perks such as lie-flat seats, premium dining, and exclusive
          lounge access.
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
          Turkish Airlines' frequent flyer program, Miles&Smiles, rewards loyal
          customers with miles that can be redeemed for flights, upgrades, and
          other benefits. Members enjoy perks such as priority check-in, extra
          baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Turkish Airlines is easy through their official
          website, mobile app, and authorized travel agents. The customer
          service team is available to assist with reservations, inquiries, and
          special requests. The airline also offers convenient online check-in
          and mobile boarding pass options.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Turkish Airlines is committed to sustainable practices and supporting
          local communities. The airline engages in various CSR initiatives,
          including environmental conservation efforts, education programs, and
          charitable partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Turkish
          Airlines website or contact their customer service at +90 212 444
          0849. Follow them on social media for the latest updates and
          promotions.
        </p>
      </div>
    </div>
  );
};

export default TurkishAirlines;
