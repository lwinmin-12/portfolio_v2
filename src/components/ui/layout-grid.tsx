"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
  link?: string;
  cusData?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full py-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className)} data-cursor={card.cusData}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden bg-white rounded-xl h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            )}
            layoutId={`card-${card.id}`}
          >
            {card.link ? (
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <ImageComponent card={card} />
              </a>
            ) : (
              <ImageComponent card={card} />
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200 hover:scale-110"
      )}
      alt="thumbnail"
    />
  );
};
