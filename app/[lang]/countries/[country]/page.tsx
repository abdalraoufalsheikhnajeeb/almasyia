// // app/[lang]/countries/[country]/page.tsx
// import Image from 'next/image';
// import React from 'react';
// import { Metadata } from 'next';
// import { countries } from '../../data';
// import { Locale } from '../../../../i18n-config';

// interface CountryPageProps {
//   params: {
//     lang: Locale;
//     country: string;
//   };
// }

// interface CountryData {
//   route: string;
//   id: number;
//   src: string;
//   titleen: string;
//   titlear: string;
//   titleru: string;
// }

// export async function generateStaticParams() {
//   const langs: Locale[] = ['en', 'ar', 'ru'];
//   const paths = langs.flatMap((lang) =>
//     countries.map((country) => ({
//       lang,
//       country: country.route,
//     }))
//   );
//   return paths;
// }

// export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
//   const countryData = countries.find((country) => country.route === params.country);
//   const title =
//     params.lang === 'ar'
//       ? countryData?.titlear
//       : params.lang === 'ru'
//       ? countryData?.titleru
//       : countryData?.titleen;
//   return {
//     title: title || 'Country',
//     description: countryData?.descriptionEN || 'Country description',
//   };
// }

// const CountryPage = ({ params }: CountryPageProps) => {
//   const countryData = countries.find((country) => country.route === params.country);

//   if (!countryData) {
//     return <div>Country not found</div>;
//   }

//   const title =
//     params.lang === 'ar'
//       ? countryData.titlear
//       : params.lang === 'ru'
//       ? countryData.titleru
//       : countryData.titleen;

//   const description =
//     params.lang === 'ar'
//       ? countryData.descriptionAR
//       : params.lang === 'ru'
//       ? countryData.descriptionRU
//       : countryData.descriptionEN;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <Image src={countryData.src} alt={title} width={800} height={400} />
//       <p>{description}</p>
//     </div>
//   );
// };

// export default CountryPage;
