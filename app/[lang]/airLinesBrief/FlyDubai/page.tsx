import Image from "next/image";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Flydubai</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/flyDubai.webp"
          alt="Flydubai"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Flydubai, legally known as Dubai Aviation Corporation, is a
          government-owned low-cost airline in Dubai, United Arab Emirates.
          Established in 2008, Flydubai operates flights to over 90 destinations
          across the Middle East, Africa, Asia, and Europe.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Flydubai was founded to support Dubai's commercial and tourism sectors
          by providing accessible and affordable air travel options. Since its
          inception, the airline has rapidly expanded its route network and
          fleet.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet primarily consists of Boeing 737-800 and Boeing
          737 MAX aircraft. These modern planes are equipped with advanced
          safety features and provide a comfortable travel experience.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Flydubai serves a wide range of destinations, including major cities
          and popular holiday spots in the Middle East, Africa, Asia, and
          Europe. Key destinations include Dubai, Beirut, Baku, Kathmandu,
          Tbilisi, and Zanzibar.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          Flydubai offers a variety of services to enhance the travel
          experience, including in-flight entertainment, meal options, and
          comfortable seating. Business class passengers enjoy additional
          amenities such as spacious seats, premium meals, and priority
          boarding.
        </p>
        <h2 className="text-2xl font-semibold mb-2">In-Flight Experience</h2>
        <p className="text-gray-700 mb-4">
          Passengers can enjoy a range of in-flight entertainment options,
          including movies, TV shows, music, and games. The airline also
          provides Wi-Fi on select flights, allowing passengers to stay
          connected during their journey.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Frequent Flyer Program</h2>
        <p className="text-gray-700 mb-4">
          Flydubai's frequent flyer program, OPEN, rewards loyal customers with
          points that can be redeemed for flights, upgrades, and other benefits.
          Members enjoy perks such as priority check-in, additional baggage
          allowance, and exclusive offers.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Flydubai is easy through their official website,
          mobile app, and authorized travel agents. The customer service team is
          available to assist with reservations, inquiries, and special
          requests. The airline also offers online check-in and a mobile
          boarding pass option.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Flydubai is committed to sustainable practices and supporting local
          communities. The airline engages in various CSR initiatives, including
          environmental conservation efforts, education programs, and charitable
          partnerships.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, visit the official Flydubai
          website or contact their customer service at +971 600 544 445. Follow
          them on social media for the latest updates and promotions.
        </p>
      </div>
    </div>
  );
};

export default page;
