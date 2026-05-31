export const galleryData = [
  {
    title: "New Year's Festival",
    shortTitle: "New Years",
    slug: "new-years-festival",
    coverImage: "/assets/gallery/New Year's Festival/Overview.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/assets/gallery/New Year's Festival/${String(i + 1).padStart(3, '0')}.jpg`)
  },
  {
    title: "Sports Meet",
    shortTitle: "Sports Meet",
    slug: "sports-meet",
    coverImage: "/assets/gallery/Sport Meet/Overview.jpg",
    images: Array.from({ length: 9 }, (_, i) => `/assets/gallery/Sport Meet/${String(i + 1).padStart(3, '0')}.jpg`)
  },
  {
    title: "Colors Day",
    shortTitle: "Colors Day",
    slug: "colors-day",
    coverImage: "/assets/gallery/Colors Day/Overview.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/assets/gallery/Colors Day/${String(i + 1).padStart(3, '0')}.jpg`)
  },
  {
    title: "Shapes Day",
    shortTitle: "Shapes Day",
    slug: "shapes-day",
    coverImage: "/assets/gallery/Shapes Day/Overview.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/assets/gallery/Shapes Day/${String(i + 1).padStart(3, '0')}.jpg`)
  },
  {
    title: "Environmental Activities",
    shortTitle: "Environmental Activities",
    slug: "environmental-activities",
    coverImage: "/assets/gallery/Environmental Activities/Overview.jpg",
    images: Array.from({ length: 10 }, (_, i) => `/assets/gallery/Environmental Activities/${String(i + 1).padStart(3, '0')}.jpg`)
  },
  {
    title: "Vesak Festival",
    shortTitle: "Vesak",
    slug: "vesak-festival",
    coverImage: "/assets/gallery/Vesak Festival/Overview.jpg",
    images: Array.from({ length: 9 }, (_, i) => `/assets/gallery/Vesak Festival/${String(i + 1).padStart(3, '0')}.jpg`)
  }
];
