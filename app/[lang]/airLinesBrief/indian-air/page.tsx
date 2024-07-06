import Image from "next/image";
import React from "react";

const AirIndia: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Air India</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/indianair.webp"
          alt="Air India"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Air India is the flag carrier airline of India, headquartered in New
          Delhi. Established in 1932, it operates a fleet of Airbus and Boeing
          aircraft serving domestic and international destinations across Asia,
          Europe, North America, and Australia.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Air India was founded by J. R. D. Tata in 1932 as Tata Airlines. It
          became Air India in 1946 and was nationalized in 1953. The airline has
          played a key role in connecting India to the world and has undergone
          several transformations over the decades.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of modern Airbus and Boeing
          aircraft, such as the Airbus A320, Airbus A321, Boeing 777, and Boeing
          787 Dreamliner. Air India focuses on maintaining a reliable and
          efficient fleet to ensure passenger safety and comfort.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Air India serves a wide range of destinations across Asia, Europe,
          North America, and Australia. Key destinations include Delhi, Mumbai,
          London, New York, Sydney, and Tokyo.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to enhance the travel
          experience, including in-flight entertainment, gourmet meals, and
          comfortable seating. First and Business Class passengers enjoy
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
          Air India's frequent flyer program, Flying Returns, rewards loyal
          customers with miles that can be redeemed for flights, upgrades, and
          other benefits. Members enjoy perks such as priority check-in, extra
          baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Air India is easy through their official website,
          mobile app, and authorized travel agents. The customer service team is
          available to assist with reservations, inquiries, and special
          requests. The airline also offers convenient online check-in and
          mobile boarding pass options.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Air India is committed to sustainable practices and supporting local
          communities. The airline engages in various CSR initiatives, including
          environmental conservation efforts, education programs, and charitable
          partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Air India
          website or contact their customer service at +91 124 2641407. Follow
          them on social media for the latest updates and promotions.
        </p>
      </div>
    </div>
  );
};

export default AirIndia;
