import { Locale } from "../../../../i18n-config";

const page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="flex h-[80vh] w-full justify-center items-center">
      <h2 className="animate-pulse text-4xl font-bold">Coming Soon</h2>
    </div>
  );
};

export default page;
