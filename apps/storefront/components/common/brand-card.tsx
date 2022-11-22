import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@lib/routes";
import { useTranslation } from "next-i18next";
import { Type } from "@framework/types";
import { filterBrandImages } from "@lib/filter-brands";
import React from "react";

const BrandCard: React.FC<{ brand: Type }> = ({ brand }) => {
  const { slug, name, images } = brand;
  const { t } = useTranslation("common");

  // Filter images
  const filterImages = filterBrandImages(images, "grid-layout");

  return (
    <Link
      href={{
        pathname: ROUTES.SEARCH,
        query: { brand: slug },
      }}
    >
      <a className="group flex justify-center text-center relative overflow-hidden rounded-md">
        <Image
          src={
            filterImages?.image?.[0]?.original ??
            "/assets/placeholder/brand-bg.svg"
          }
          alt={name || t("text-brand-thumbnail")}
          width={428}
          height={428}
          className="rounded-md object-cover transform transition-transform ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
        />
        <div className="absolute top left bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
        <div className="absolute top left h-full w-full flex items-center justify-center p-8">
          <img
            src={
              filterImages?.image?.[1]?.original ??
              "/assets/placeholder/brand-bg.svg"
            }
            alt={name || t("text-brand-thumbnail")}
            className="flex-shrink-0"
          />
        </div>
      </a>
    </Link>
  );
};

export default BrandCard;
