import Image from "next/image";
import React from "react";

const S7Airlines: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">S7 Airlines</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/s7airlines.webp"
          alt="S7 Airlines"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          S7 Airlines, also known as Siberia Airlines, is a major Russian
          airline headquartered in Novosibirsk. Established in 1957, it operates
          domestic and international flights to over 150 destinations across
          Europe, Asia, and the Middle East.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          S7 Airlines was founded in 1957 and has grown to become one of
          Russia's leading airlines. The airline joined the oneworld alliance in
          2010, enhancing its global reach and connectivity.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of modern Airbus and Boeing
          aircraft, such as the Airbus A320, Airbus A321, and Boeing 737. S7
          Airlines is known for maintaining a young and efficient fleet.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          S7 Airlines serves a wide range of destinations across Europe, Asia,
          and the Middle East. Key destinations include Moscow, Saint
          Petersburg, Beijing, Bangkok, Dubai, and Tokyo.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to ensure a high-quality
          travel experience. This includes in-flight entertainment, meal
          options, and comfortable seating. Business Class passengers enjoy
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
          S7 Airlines' frequent flyer program, S7 Priority, rewards loyal
          customers with miles that can be redeemed for flights, upgrades, and
          other benefits. Members enjoy perks such as priority check-in, extra
          baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with S7 Airlines is easy through their official
          website, mobile app, and authorized travel agents. The customer
          service team is available to assist with reservations, inquiries, and
          special requests. The airline also offers convenient online check-in
          and mobile boarding pass options.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          S7 Airlines is committed to sustainable practices and supporting local
          communities. The airline engages in various CSR initiatives, including
          environmental conservation efforts, education programs, and charitable
          partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official S7
          Airlines website or contact their customer service at +7 495 783 0707.
          Follow them on social media for the latest updates and promotions.
        </p>
      </div>
    </div>
  );
};

export default S7Airlines;
