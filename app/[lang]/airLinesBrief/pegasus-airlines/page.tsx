import Image from "next/image";
import React from "react";

const PegasusAirlines: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Pegasus Airlines</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/pegasusairlines.webp"
          alt="Pegasus Airlines"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Pegasus Airlines is a Turkish low-cost airline headquartered in
          Istanbul. Established in 1990, it operates scheduled flights to over
          110 destinations in 42 countries across Europe, Asia, and the Middle
          East.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Pegasus Airlines was founded in 1990 as a joint venture between Aer
          Lingus, Silkar Yatırım, and Net Holding. Since then, it has grown to
          become one of Turkey's leading low-cost carriers, known for its
          affordable fares and extensive route network.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet primarily consists of modern Airbus A320 and
          Boeing 737 aircraft. Pegasus Airlines focuses on maintaining a young
          and efficient fleet to ensure passenger safety and comfort.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Pegasus Airlines serves a wide range of destinations across Europe,
          Asia, and the Middle East. Key destinations include Istanbul, Ankara,
          London, Dubai, Tel Aviv, and Tbilisi.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to enhance the travel
          experience, including in-flight entertainment, meal options, and
          comfortable seating. Passengers can also purchase additional services
          such as extra legroom seats, priority boarding, and extra baggage
          allowance.
        </p>
        <h2 className="text-2xl font-semibold mb-2">In-Flight Experience</h2>
        <p className="text-gray-700 mb-4">
          Passengers can enjoy a pleasant in-flight experience with Pegasus
          Airlines. The airline offers a selection of movies, TV shows, music,
          and games as part of its in-flight entertainment system. Meals and
          snacks can be purchased on board to suit various dietary preferences.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Frequent Flyer Program</h2>
        <p className="text-gray-700 mb-4">
          Pegasus Airlines' frequent flyer program, Pegasus Plus, rewards loyal
          customers with points that can be redeemed for flights, upgrades, and
          other benefits. Members enjoy perks such as priority check-in, extra
          baggage allowance, and exclusive offers.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Pegasus Airlines is easy through their official
          website, mobile app, and authorized travel agents. The customer
          service team is available to assist with reservations, inquiries, and
          special requests. The airline also offers online check-in and a mobile
          boarding pass option.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Pegasus Airlines is committed to sustainable practices and supporting
          local communities. The airline engages in various CSR initiatives,
          including environmental conservation efforts, education programs, and
          charitable partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Pegasus
          Airlines website or contact their customer service at +90 850 250 67
          02. Follow them on social media for the latest updates and promotions.
        </p>
      </div>
    </div>
  );
};

export default PegasusAirlines;
