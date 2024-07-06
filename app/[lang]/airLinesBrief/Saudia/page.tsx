import Image from "next/image";
import React from "react";

const SaudiaAir: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">
          Saudia (Saudi Arabian Airlines)
        </h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/saudia.webp"
          alt="Saudia"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Saudia, also known as Saudi Arabian Airlines, is the national carrier
          of Saudi Arabia. Established in 1945, it operates domestic and
          international flights to over 95 destinations across the Middle East,
          Africa, Asia, Europe, and North America.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Saudia was founded in 1945 with a single DC-3 aircraft gifted by U.S.
          President Franklin D. Roosevelt. Over the decades, it has grown into
          one of the largest airlines in the Middle East, playing a pivotal role
          in the region's aviation industry.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes a mix of modern aircraft such as the
          Boeing 777, Boeing 787 Dreamliner, and Airbus A320 family. Saudia
          ensures its fleet is maintained to the highest safety and comfort
          standards.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Saudia serves a wide range of destinations, including major cities and
          popular tourist spots across the Middle East, Africa, Asia, Europe,
          and North America. Key destinations include Jeddah, Riyadh, Dubai,
          Cairo, London, and New York.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to enhance the travel
          experience, including in-flight entertainment, gourmet meals, and
          comfortable seating. Business and First Class passengers enjoy
          additional amenities such as lie-flat seats, premium dining, and
          exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">In-Flight Experience</h2>
        <p className="text-gray-700 mb-4">
          Passengers can enjoy a range of in-flight entertainment options,
          including movies, TV shows, music, and games. The airline also offers
          Wi-Fi on select flights, allowing passengers to stay connected during
          their journey.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Frequent Flyer Program</h2>
        <p className="text-gray-700 mb-4">
          Saudia's frequent flyer program, Alfursan, rewards loyal customers
          with points that can be redeemed for flights, upgrades, and other
          benefits. Members enjoy perks such as priority check-in, additional
          baggage allowance, and access to exclusive lounges.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Saudia is easy through their official website,
          mobile app, and authorized travel agents. The customer service team is
          available to assist with reservations, inquiries, and special
          requests. The airline also offers online check-in and a mobile
          boarding pass option.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Saudia is committed to sustainable practices and supporting local
          communities. The airline engages in various CSR initiatives, including
          environmental conservation efforts, education programs, and charitable
          partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Saudia
          website or contact their customer service at +966 920022222. Follow
          them on social media for the latest updates and promotions.
        </p>

        <div>
      <h2 className="text-2xl font-semibold mb-4">Airline Information</h2>
      <table className="w-full text-left text-gray-700">
        <tbody>
          <tr>
            <td className="font-semibold py-2">IATA Code</td>
            <td className="py-2">SV</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">ICAO Code</td>
            <td className="py-2">SVA</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Main Company</td>
            <td className="py-2">Saudi Arabian Airlines</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Company Headquarters</td>
            <td className="py-2">Jeddah-Saudi Arabia</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Number of destinations</td>
            <td className="py-2">102 destinations</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Year of operation</td>
            <td className="py-2">1945</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Logo</td>
            <td className="py-2">"Welcome to your world"</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Alliances</td>
            <td className="py-2">Sky Team Alliance - "Shared Code" Alliance</td>
          </tr>
          <tr>
            <td className="font-semibold py-2">Customer Service Number</td>
            <td className="py-2"><a href="tel:920022222" className="text-blue-500">920022222</a></td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
    </div>
  );
};

export default SaudiaAir;
