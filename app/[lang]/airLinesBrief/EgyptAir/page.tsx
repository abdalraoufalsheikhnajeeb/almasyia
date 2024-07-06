import Image from "next/image";
import React from "react";

const EgyptAir: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">EgyptAir</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/egyptair.webp"
          alt="EgyptAir"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          EgyptAir is the flag carrier airline of Egypt, headquartered at Cairo
          International Airport. Founded in 1932, it operates scheduled
          passenger and freight services to over 75 destinations in the Middle
          East, Europe, Africa, Asia, and the Americas.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Established in 1932, EgyptAir is one of the world's oldest airlines.
          It has grown significantly over the decades, modernizing its fleet and
          expanding its network. EgyptAir is a member of the Star Alliance,
          enhancing its global reach.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of modern Airbus and Boeing
          aircraft, such as the Airbus A320, Airbus A330, Boeing 737, and Boeing
          787 Dreamliner. EgyptAir focuses on maintaining a young and efficient
          fleet to ensure passenger safety and comfort.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          EgyptAir serves a wide range of destinations across the Middle East,
          Europe, Africa, Asia, and the Americas. Key destinations include
          Cairo, New York, London, Paris, and Dubai.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to enhance the travel
          experience, including in-flight entertainment, meals, and comfortable
          seating. Business and First Class passengers enjoy additional perks
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
          EgyptAir's frequent flyer program, EgyptAir Plus, rewards loyal
          customers with miles that can be redeemed for flights, upgrades, and
          other benefits. Members enjoy perks such as priority check-in, extra
          baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with EgyptAir is easy through their official website,
          mobile app, and authorized travel agents. The customer service team is
          available to assist with reservations, inquiries, and special
          requests. The airline also offers convenient online check-in and
          mobile boarding pass options.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          EgyptAir is committed to sustainable practices and supporting local
          communities. The airline engages in various CSR initiatives, including
          environmental conservation efforts, education programs, and charitable
          partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official EgyptAir
          website or contact their customer service at +20 2 2265 0000. Follow
          them on social media for the latest updates and promotions.
        </p>
        <div>
          <h2 className="text-2xl font-semibold mb-4">General Information</h2>
          <table className="w-full text-left text-gray-700">
            <tbody>
              <tr>
                <td className="font-semibold py-2">Code IATA</td>
                <td className="py-2">MS</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">ICAO Code</td>
                <td className="py-2">MSR</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">The owner</td>
                <td className="py-2">The Egyptian government</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Company Headquarters</td>
                <td className="py-2">Cairo – Arab Republic of Egypt</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">
                  The Main Operational Airport
                </td>
                <td className="py-2">Cairo International Airport</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Number of destinations</td>
                <td className="py-2">80 destinations</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Year of establishment</td>
                <td className="py-2">1932</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EgyptAir;
