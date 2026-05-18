const AnTitle = ({ title }: { title: string }) => {
  return (
    <div className="my-8 flex flex-col items-center text-center">
      <span className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        Alnujoom Almasiya
      </span>
      <h2 className="text-3xl font-bold text-primary lg:text-4xl">{title}</h2>
      <span
        aria-hidden="true"
        className="mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-accent to-[#e6c98f]"
      />
    </div>
  );
};

export default AnTitle;
