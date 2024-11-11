const ITEMS = [
  "会員登録",
  "運営会社",
  "利用規約",
  "個人情報の取扱について",
  "特定商取引法に基づく表記",
  "お問い合わせ",
];

export const Footer = () => {
  return (
    <footer className="bg-dark-500">
      <ul className="flex flex-col sm:flex-row gap-6 sm:gap-12 sm:min-h-[128px]  items-center container py-6">
        {ITEMS.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer text-white hover:text-primary-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </footer>
  );
};
