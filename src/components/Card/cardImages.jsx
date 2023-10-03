import { PrimaryCard, SecondaryCard } from "./cardImage";

export default function CardImage({ primary }) {
  const primaryContainer = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delayChildren: 0.5, staggerChildren: 0.1 },
    },
    hidden: { y: 100 },
  };

  const miniModal = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hidden: {
      y: 100,
    },
  };

  const fakeProfiles = [
    {
      id: 0,
      avatar: "/freePeople.png",
      name: "Gigi Long Sleeve",
      phone: "Free People",
      amount: "$58.00",
    },
    {
      id: 1,
      avatar: "/mingaLonden.png",
      name: "Leia Flared Demin Midi Skirt",
      phone: "Minga Londen",
      amount: "$66.50",
    },
    {
      id: 2,
      avatar: "/docMartens.png",
      name: "8053 Leather Platform Shoes",
      phone: "Dr. Martens",
      amount: "$180.00",
    },
  ];

  if (primary)
    return (
      <PrimaryCard
        primaryContainer={primaryContainer}
        miniModal={miniModal}
        fakeProfiles={fakeProfiles}
      />
    );

  return <SecondaryCard />;
}