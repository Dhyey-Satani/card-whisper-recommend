
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PlaceholderBrandLogo from "./ui/PlaceholderBrandLogo";

const brands = [
  {
    name: "HDFC Bank",
    logo: "https://companieslogo.com/img/orig/HDB-bb7d4d7c.png?t=1631234355"
  },
  {
    name: "ICICI Bank",
    logo: "https://companieslogo.com/img/orig/ICICIBANK.NS-21ba1ded.png?t=1601078170"
  },
  {
    name: "SBI Card",
    logo: "https://www.sbicard.com/sbicard/media/en/images/sbi-card-logo-528x190.png"
  },
  {
    name: "Axis Bank",
    logo: "https://seeklogo.com/images/A/axis-bank-logo-915D831CD0-seeklogo.com.png"
  },
  {
    name: "American Express",
    logo: "https://companieslogo.com/img/orig/AXP-768790b2.png"
  },
  {
    name: "Citi",
    logo: "https://logowik.com/content/uploads/images/citi-group-inc2940.jpg"
  }
];

const FeaturedBrands = () => (
  <section className="py-12 bg-background transition-colors">
    <div className="max-w-5xl mx-auto text-center mb-5">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Featured Card Brands</h2>
      <p className="text-muted-foreground text-base mb-5">Compare top cards from leading Indian & global banks.</p>
    </div>
    <div className="max-w-4xl mx-auto">
      <Carousel opts={{ align: "center", loop: true }}>
        <CarouselContent>
          {brands.map((brand, i) => (
            <CarouselItem key={brand.name} className="basis-1/2 md:basis-1/4 flex justify-center items-center">
              <div className="bg-card rounded-lg shadow p-5 flex flex-col items-center transition-transform hover:scale-105">
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="h-12 w-auto object-contain mb-2" />
                ) : (
                  <PlaceholderBrandLogo bankName={brand.name} />
                )}
                <span className="text-xs font-medium text-muted-foreground">{brand.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
);

export default FeaturedBrands;

