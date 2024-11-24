import { Locale } from "../../../../i18n-config";

const page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  return (
    <div className="container mx-auto pt-28 p-4">
      <h1>coming soon</h1>
    </div>
  );
};

export default page;
