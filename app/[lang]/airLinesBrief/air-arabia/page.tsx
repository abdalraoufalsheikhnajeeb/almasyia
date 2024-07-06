import Image from "next/image";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Air Arabia</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/arabia.webp"
          alt="Air Arabia"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Air Arabia is a low-cost airline headquartered in Sharjah, United Arab
          Emirates. Founded in 2003, it operates scheduled flights to over 170
          destinations across the Middle East, North Africa, Asia, and Europe.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Established as the first low-cost carrier in the Middle East, Air
          Arabia has grown to become a major player in the region's aviation
          industry. The airline focuses on providing affordable travel options
          while maintaining high safety and service standards.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          Air Arabia's fleet consists primarily of Airbus A320 aircraft, known
          for their efficiency and reliability. The airline continually updates
          and maintains its fleet to ensure passenger safety and comfort.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Air Arabia serves a wide range of destinations, including major cities
          and popular tourist spots in the Middle East, North Africa, Asia, and
          Europe. Key destinations include Cairo, Mumbai, Istanbul, Moscow, and
          Nairobi.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a variety of services to enhance the travel
          experience, including in-flight entertainment, meal options, and
          comfortable seating. Air Arabia also provides additional services such
          as travel insurance, hotel booking, and car rental through its
          website.
        </p>
        <h2 className="text-2xl font-semibold mb-2">In-Flight Experience</h2>
        <p className="text-gray-700 mb-4">
          Passengers can enjoy a range of in-flight entertainment options,
          including movies, TV shows, music, and games. The airline also offers
          a buy-on-board menu with a selection of meals, snacks, and beverages.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Frequent Flyer Program</h2>
        <p className="text-gray-700 mb-4">
          Air Arabia's frequent flyer program, Airewards, allows members to earn
          points with every flight and redeem them for a variety of rewards,
          including free flights, seat upgrades, and additional services.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Air Arabia is easy through their official
          website, mobile app, and authorized travel agents. The customer
          service team is available to assist with reservations, inquiries, and
          special requests. The airline also offers online check-in and a mobile
          boarding pass option.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Air Arabia is committed to sustainable practices and supporting local
          communities. The airline engages in various CSR initiatives, including
          environmental conservation efforts, education programs, and charitable
          partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Air
          Arabia website or contact their customer service at +971 6 558 0000.
          Follow them on social media for the latest updates and promotions.
        </p>
      </div>
    </div>
  );
};

export default page;
