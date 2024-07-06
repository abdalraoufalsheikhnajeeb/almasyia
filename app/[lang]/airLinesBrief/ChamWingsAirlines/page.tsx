import Image from "next/image";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Cham Wings Airlines</h1>
        <Image
          width={420}
          height={300}
          quality={10}
          src="/images/chamwings.webp"
          alt="Cham Wings Airlines"
          className="w-32 h-32 mb-4"
        />
        <p className="text-gray-700 mb-4">
          Cham Wings Airlines is a private Syrian airline founded in 2007. It
          operates scheduled and charter flights across the Middle East, Europe,
          and North Africa. The airline aims to provide high-quality service and
          comfortable travel experiences for its passengers.
        </p>
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <p className="text-gray-700 mb-4">
          Cham Wings Airlines was established to meet the growing demand for air
          travel in Syria and the surrounding region. Over the years, it has
          expanded its network and fleet, becoming a significant player in the
          regional aviation market.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Fleet</h2>
        <p className="text-gray-700 mb-4">
          The airline's fleet includes modern Airbus A320 aircraft, known for
          their reliability and comfort. The aircraft are equipped with advanced
          safety features and amenities to enhance the passenger experience.
          Regular maintenance and updates ensure the fleet meets the highest
          safety standards.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Destinations</h2>
        <p className="text-gray-700 mb-4">
          Cham Wings Airlines serves a variety of destinations including major
          cities in the Middle East, Europe, and North Africa. Some of the key
          destinations include Dubai, Beirut, Kuwait, Baghdad, Khartoum, and
          Yerevan. The airline continually evaluates and adds new routes based
          on passenger demand and market opportunities.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-gray-700 mb-4">
          The airline offers a range of services to ensure passenger comfort and
          satisfaction. This includes in-flight entertainment, meal options, and
          various seating arrangements to cater to different passenger needs.
          Special assistance services are also available for passengers with
          disabilities or special requirements.
        </p>
        <h2 className="text-2xl font-semibold mb-2">In-Flight Experience</h2>
        <p className="text-gray-700 mb-4">
          Passengers can enjoy a pleasant in-flight experience with Cham Wings
          Airlines. The airline offers a selection of movies, music, and games
          as part of its in-flight entertainment system. Meals are prepared with
          high-quality ingredients, catering to different dietary preferences.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Frequent Flyer Program</h2>
        <p className="text-gray-700 mb-4">
          Cham Wings Airlines has a frequent flyer program that rewards loyal
          customers with various benefits, such as priority boarding, extra
          baggage allowance, and access to exclusive lounges. Members can earn
          points with every flight and redeem them for rewards and discounts.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Booking and Customer Service
        </h2>
        <p className="text-gray-700 mb-4">
          Booking flights with Cham Wings Airlines is convenient through their
          official website, mobile app, and authorized travel agents. The
          customer service team is available 24/7 to assist with reservations,
          inquiries, and special requests. The airline also offers a
          user-friendly online check-in service to streamline the travel
          experience.
        </p>
        <h2 className="text-2xl font-semibold mb-2">
          Corporate Social Responsibility
        </h2>
        <p className="text-gray-700 mb-4">
          Cham Wings Airlines is committed to contributing positively to the
          community. The airline engages in various corporate social
          responsibility initiatives, including environmental conservation
          efforts, support for local communities, and participation in
          humanitarian missions.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          For more information or to book a flight, you can visit the official
          website of Cham Wings Airlines or contact their customer service at
          +963 11 9999. Follow them on social media for the latest updates and
          promotions.
        </p>
      </div>
    </div>
  );
};

export default page;
