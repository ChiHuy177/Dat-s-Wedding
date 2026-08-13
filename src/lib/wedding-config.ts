export const weddingConfig = {
  groom: "Tuấn Đạt",
  bride: "Lan Hương",
  weddingDateISO: "2026-09-20T16:00:00+07:00",
  weddingDateLabel: "Chủ Nhật · 20 · 09 · 2026",
  weddingDateShort: "20.09.2026",

  ceremony: {
    time: "16:00, Chủ Nhật 20/09/2026",
    venue: "Tiamo",
    address: "Phú Lợi",
    mapUrl: "https://maps.google.com/?q=Tiamo+Phu+Loi",
  },

  groomFamily: {
    label: "Nhà trai",
    parents: ["Ông Nguyễn Văn A", "Bà Nguyễn Thị B"],
  },
  brideFamily: {
    label: "Nhà gái",
    parents: ["Ông Nguyễn Văn C", "Bà Nguyễn Thị D"],
  },

  loveStory:
    "Từ một lần gặp gỡ tình cờ đến một lời hứa trọn đời — câu chuyện của chúng mình được viết bằng tiếng cười, niềm tin, và niềm vui khi tìm thấy nhau.",

  timeline: [
    { time: "14:30", label: "Rước dâu", icon: "car" },
    { time: "16:00", label: "Lễ thành hôn", icon: "rings" },
    { time: "18:30", label: "Khai tiệc", icon: "plate" },
    { time: "20:00", label: "Âm nhạc & giao lưu", icon: "music" },
  ] as const,

  dresscodeColors: ["#22301f", "#a9863f", "#e8e1c9", "#5c4322", "#ffffff"],

  photos: {
    hero: "/img/hero.jpg",
    loveStory: "/img/love-story.jpg",
    album: [
      "/img/album-01.jpg",
      "/img/album-02.jpg",
      "/img/album-03.jpg",
      "/img/album-04.jpg",
      "/img/album-05.jpg",
      "/img/album-06.jpg",
      "/img/album-07.jpg",
      "/img/album-08.jpg",
      "/img/album-09.jpg",
      "/img/album-10.jpg",
      "/img/album-11.jpg",
      "/img/album-12.jpg",
    ],
  },

  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export type WeddingConfig = typeof weddingConfig;
