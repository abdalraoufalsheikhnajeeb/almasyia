import Image from "next/image";
import React from "react";

const MiddleEastAirlines: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Middle East Airlines (MEA)</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/middleeastairlines.webp"
          alt="Middle East Airlines"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Middle East Airlines, also known as MEA, is the national flag carrier
          of Lebanon. Founded in 1945, MEA operates scheduled international
          flights to over 30 destinations in Europe, the Middle East, and Africa
          from its base at Beirut Rafic Hariri International Airport.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Established in 1945, Middle East Airlines has grown to become a
          significant player in the aviation industry, known for its reliable
          service and extensive network. MEA joined the SkyTeam alliance in
          2012, enhancing its global connectivity.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet consists of modern Airbus aircraft, including the
          A320, A321, and A330. MEA focuses on maintaining a young and efficient
          fleet to ensure passenger safety and comfort.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Middle East Airlines serves a range of destinations across Europe, the
          Middle East, and Africa. Key destinations include Paris, London,
          Dubai, Cairo, and Lagos.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers various services to enhance the travel experience,
          including in-flight entertainment, gourmet meals, and comfortable
          seating. Business Class passengers enjoy additional perks such as
          lie-flat seats, premium dining, and exclusive lounge access.
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
          Middle East Airlines' frequent flyer program, Cedar Miles, rewards
          loyal customers with miles that can be redeemed for flights, upgrades,
          and other benefits. Members enjoy perks such as priority check-in,
          extra baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with MEA is easy through their official website,
          mobile app, and authorized travel agents. The customer service team is
          available to assist with reservations, inquiries, and special
          requests. The airline also offers convenient online check-in and
          mobile boarding pass options.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          MEA is committed to sustainable practices and supporting local
          communities. The airline engages in various CSR initiatives, including
          environmental conservation efforts, education programs, and charitable
          partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Middle
          East Airlines website or contact their customer service at +961 1 629
          999. Follow them on social media for the latest updates and
          promotions.
        </p>
      </div>
    </div>
  );
};

export default MiddleEastAirlines;
