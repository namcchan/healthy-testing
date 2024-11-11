import { CupIcon, KnifeIcon } from "@/components/icons";

const items = [
  { icon: <KnifeIcon />, title: "Morning" },
  { icon: <KnifeIcon />, title: "Lunch" },
  { icon: <KnifeIcon />, title: "Dinner" },
  { icon: <CupIcon />, title: "Snack" },
];

export const SuggestionSection = () => {
  return (
    <section className="container flex items-center justify-evenly gap-4 py-8">
      {items.map((item, index) => (
        <div className="w-[136px] h-[136px]" key={index}>
          <div className="w-[116px] h-full bg-[url('/images/bg-suggestion.png')] bg-contain bg-center grid place-content-center">
            {item.icon}
            <h6 className="text-white text-center text-lg">{item.title}</h6>
          </div>
        </div>
      ))}
    </section>
  );
};
