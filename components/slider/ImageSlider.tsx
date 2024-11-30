"use client";

import { sliderImages } from "./SliderData";
import Link from "next/link";

export default function ImageGrid() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="grid grid-cols-4 gap-4">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className="relative"
          >
            <div className="aspect-square w-full">
              <Link
                href="/visit/candy-ai"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-xl"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}