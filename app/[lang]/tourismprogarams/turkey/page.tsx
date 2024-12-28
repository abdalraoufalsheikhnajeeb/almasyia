import { Locale } from "../../../../i18n-config";
import { Turkey } from "../../programs";
const page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  return (
    <div className="container mx-auto  min-h-screen">
      <div className="bg-white rounded-xl p-8 shadow-xl">
        {Turkey.map((item, index) => {
          const {
            nameEN,
            nameAR,
            nameRU,
            descriptionAR,
            descriptionEN,
            descriptionRU,
          } = item;
          const title =
            lang === "en" ? nameEN : lang === "ar" ? nameAR : nameRU;
          const description =
            lang === "en"
              ? descriptionEN
              : lang === "ar"
              ? descriptionAR
              : descriptionRU;
          if (!description) {
            return (
              <div key={index} className="mt-6 text-center">
                <h2 className="text-accent text-2xl font-bold mb-4">{title}</h2>
              </div>
            );
          }
          return (
            <div key={index} className="p-4">
              <div className="flex box flex-col lg:flex-row items-center gap-4">
                <h2 className="text-center whitespace-nowrap text-accent text-2xl lg:text-3xl font-extrabold mb-4 tracking-tight group-hover:underline">
                  {title}
                </h2>
                <p className="text-start text-base lg:text-lg text-white leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
