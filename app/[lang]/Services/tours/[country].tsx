// pages/countries/[country].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { countries } from '../../data';

const CountryPage = ({ countryData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{countryData.titleen}</h1>
      <img src={countryData.src} alt={countryData.titleen} />
      <p>{countryData.descriptionEN}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = countries.map((country) => ({
    params: { country: country.route.toLowerCase() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = countries.find((c) => c.route.toLowerCase() === params.country);

  return {
    props: {
      countryData: country || null,
    },
  };
};

export default CountryPage;
