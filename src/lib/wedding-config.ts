export const weddingConfig = {
  groom: "Tuấn Đạt",
  bride: "Lan Hương",
  weddingDateISO: "2026-09-20T11:00:00+07:00",
  weddingDateLabel: "Chủ Nhật · 20 · 09 · 2026",
  weddingDateShort: "20.09.2026",

  ceremony: {
    time: "Đón khách 11:00 · Khai tiệc 12:00, Chủ Nhật 20/09/2026",
    venue: "Nhà Hàng Tiamo Phú Thịnh",
    address: "Đường số 2, Khu biệt thự Phú Thịnh, Phường Thủ Dầu Một, TP.HCM",
    mapUrl: "https://maps.google.com/?q=Nha+Hang+Tiamo+Phu+Thinh+Thu+Dau+Mot+TP+HCM",
  },

  groomFamily: {
    label: "Nhà trai",
    parents: ["Ông Lê Quang Hưng", "Bà Bùi Bích Phương"],
  },
  brideFamily: {
    label: "Nhà gái",
    parents: ["Ông Nguyễn Thanh Minh", "Bà Đào Thị Thanh Thuỷ"],
  },

  loveStory:
    "Từ một lần gặp gỡ tình cờ đến một lời hứa trọn đời — câu chuyện của chúng mình được viết bằng tiếng cười, niềm tin, và niềm vui khi tìm thấy nhau.",

  timeline: [
    { time: "09:00", label: "Lễ thành hôn (tư gia)", icon: "rings" },
    { time: "11:00", label: "Đón khách", icon: "car" },
    { time: "12:00", label: "Khai tiệc", icon: "plate" },
  ] as const,

  dresscodeColors: ["#55642F", "#C0552C", "#E4C98F", "#2B2A26", "#FFFDF8"],

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

  gift: {
    note: "Sự hiện diện của bạn là niềm hạnh phúc lớn nhất của chúng mình. Nếu muốn gửi lời chúc phúc bằng một món quà nhỏ, chúng mình xin trân trọng đón nhận qua:",
    accounts: [
      { owner: "Chú rể", name: "NGUYEN VAN A", bank: "Tên ngân hàng", number: "0000 0000 0000", qr: "" },
      { owner: "Cô dâu", name: "TRAN THI B", bank: "Tên ngân hàng", number: "0000 0000 0000", qr: "" },
    ],
  },
};

export type WeddingConfig = typeof weddingConfig;
