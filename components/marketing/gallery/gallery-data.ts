export type PouchProduct = {
  name: string;
  description: string;
  imageSrc: string;
  strengths: string[];
};

export type LifestyleProduct = {
  name: string;
  price: string;
  imageSrc: string;
};

export type GalleryPouchSeries = {
  kind: "pouch";
  id: string;
  name: string;
  products: PouchProduct[];
  /** Premium chapter uses bordered panels in Figma */
  shell?: "premium";
};

export type GalleryLifestyleSeries = {
  kind: "lifestyle";
  id: string;
  name: string;
  items: LifestyleProduct[];
};

export type GallerySeries = GalleryPouchSeries | GalleryLifestyleSeries;

export type GalleryChapter = {
  id: string;
  title: string;
  series: GallerySeries[];
};

export const galleryChapters: GalleryChapter[] = [
  {
    id: "chapter-one",
    title: "Chapter One: Classic",
    series: [
      {
        kind: "pouch",
        id: "chapter-one-classic-mint",
        name: "Classic Mint Series",
        products: [
          {
            name: "Arctic Freeze",
            description: "Intense menthol blast for maximum clarity.",
            imageSrc: "/images/gallery/black-cherry.png",
            strengths: ["6MG", "9MG", "15MG", "20MG"],
          },
        ],
      },
      {
        kind: "pouch",
        id: "chapter-one-crafted",
        name: "Crafted Beverage Series",
        products: [
          {
            name: "Black Espresso",
            description: "Rich, dark-roasted coffee bean essence.",
            imageSrc: "/images/gallery/blue-razz.png",
            strengths: ["6MG", "9MG", "15MG"],
          },
        ],
      },
      {
        kind: "pouch",
        id: "chapter-one-sweet-fusion",
        name: "Sweet Fusion Series",
        products: [
          {
            name: "Honey Melon",
            description: "Juicy summer melon with a floral honey finish.",
            imageSrc: "/images/gallery/cool-mint.png",
            strengths: ["6MG", "9MG", "15MG"],
          },
        ],
      },
    ],
  },
  {
    id: "chapter-two-premium",
    title: "Chapter Two: Premium",
    series: [
      {
        kind: "pouch",
        id: "chapter-two-classic-mint",
        name: "Classic Mint Series",
        shell: "premium",
        products: [
          {
            name: "Premium Arctic",
            description: "Elevated menthol with botanical undertones",
            imageSrc: "/images/gallery/gummy-bear.png",
            strengths: ["6MG", "9MG", "15MG", "20MG"],
          },
        ],
      },
      {
        kind: "pouch",
        id: "chapter-two-crafted",
        name: "Crafted Beverage Series",
        shell: "premium",
        products: [
          {
            name: "Vintage Tea",
            description: "Hand-picked aged tea leaf profile.",
            imageSrc: "/images/gallery/mango-ice.png",
            strengths: ["6MG", "9MG", "15MG"],
          },
        ],
      },
      {
        kind: "pouch",
        id: "chapter-two-sweet-fusion",
        name: "Sweet Fusion Series",
        shell: "premium",
        products: [
          {
            name: "Velvet Berry",
            description: "Premium wild berry blend with creamy finish.",
            imageSrc: "/images/gallery/skittles-ice.png",
            strengths: ["6MG", "9MG", "15MG", "20MG"],
          },
        ],
      },
    ],
  },
];

