import { Button } from "@/components/ui/button";

const items = [
  { label: "05.21.Morning", image: "/images/m01.jpg" },
  { label: "05.21.Lunch", image: "/images/l03.jpg" },
  { label: "05.21.Dinner", image: "/images/d01.jpg" },
  { label: "05.21.Snack", image: "/images/l01.jpg" },
  { label: "05.21.Morning", image: "/images/m01.jpg" },
  { label: "05.21.Lunch", image: "/images/l02.jpg" },
  { label: "05.21.Dinner", image: "/images/d02.jpg" },
  { label: "05.21.Snack", image: "/images/s01.jpg" },
];

export const GallerySection = () => {
  return (
    <section className="container space-y-4 text-center pb-8">
      <div className="grid grid-cols-4 gap-3">
        {items.map((item, index) => (
          <div
            className="aspect-square bg-center bg-cover flex items-end"
            key={index}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="bg-primary-300 text-white px-2 py-1 min-w-[120px]">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <Button className="bg-gradient-to-tr from-primary-300 via-primary-400 to-primary-500 h-[56px] max-w-[296px] w-full text-lg">
        記録をもっと見る
      </Button>
    </section>
  );
};
