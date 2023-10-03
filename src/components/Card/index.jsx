import CardItem from "./cardItem";

export default function Card() {
  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="flex flex-col px-5 py-20 gap-20 sm:px-10 overflow-hidden lg:gap-40">
        <CardItem
          subtitle=""
          subhead="Your One Stop Shop for Everything"
          paragraph="Never worry about paying monthly fees or recurring payments again."
          img="/card-1.png"
          primary={true}
        />
        <CardItem
          subtitle="PAY ONCE, USE LIFETIME"
          subhead="Listen to your Second Sense."
          paragraph="Get curated clothing that works for you and only you."
          img="/card-2.png"
          primary={false}
        />
      </div>
    </div>
  );
}