export const weddingConfig = {
  groom: "Tuấn Đạt",
  bride: "Lan Hương",
  groomFullName: "Lê Tuấn Đạt",
  brideFullName: "Nguyễn Lan Hương",
  weddingDateISO: "2026-09-20T11:00:00+07:00",
  weddingDateLabel: "Chủ Nhật · 20 · 09 · 2026",
  weddingDateShort: "20.09.2026",
  lunarDateLabel: "Tức ngày 10 tháng 08 năm Bính Ngọ",

  // Broken into parts for the bilingual date block in the ceremony panel.
  dateParts: {
    weekday: "Chủ Nhật",
    weekdayEn: "Sunday",
    day: "20",
    month: "Tháng 09",
    monthEn: "September",
    year: "2026",
  },

  // Lễ thành hôn — tại tư gia, buổi sáng.
  ceremony: {
    time: "09:00",
    venue: "Tư gia",
    venueEn: "Family home",
  },

  // Tiệc cưới — tại nhà hàng, buổi trưa.
  reception: {
    welcomeTime: "11:00",
    startTime: "12:00",
    venue: "Nhà Hàng Tiamo Phú Thịnh",
    address: "Đường số 2, Khu biệt thự Phú Thịnh, Phường Thủ Dầu Một, TP.HCM",
    mapUrl: "https://maps.google.com/?q=Nha+Hang+Tiamo+Phu+Thinh+Thu+Dau+Mot+TP+HCM",
    // Local time window used to build the "add to calendar" link.
    startISO: "2026-09-20T11:00:00+07:00",
    endISO: "2026-09-20T15:00:00+07:00",
  },

  groomFamily: {
    label: "Nhà trai",
    labelEn: "Groom's family",
    parents: ["Ông Lê Quang Hưng", "Bà Bùi Bích Phương"],
    address: "TP. Hồ Chí Minh",
    child: { order: "Trưởng nam", orderEn: "Groom", name: "Lê Tuấn Đạt" },
  },
  brideFamily: {
    label: "Nhà gái",
    labelEn: "Bride's family",
    parents: ["Ông Nguyễn Thanh Minh", "Bà Đào Thị Thanh Thuỷ"],
    address: "Lào Cai",
    child: { order: "Út nữ", orderEn: "Bride", name: "Nguyễn Lan Hương" },
  },

  loveStory:
    "Từ một lần gặp gỡ tình cờ đến một lời hứa trọn đời — câu chuyện của chúng mình được viết bằng tiếng cười, niềm tin, và niềm vui khi tìm thấy nhau.",

  schedule: [
    { time: "09:00", label: "Lễ thành hôn (tư gia)", labelEn: "Wedding ceremony" },
    { time: "11:00", label: "Đón khách", labelEn: "Welcome" },
    { time: "12:00", label: "Khai tiệc", labelEn: "Reception" },
  ] as const,

  dresscodeColors: ["#55642F", "#7A4A2B", "#E4C98F", "#F3EFE3"],

  photos: {
    hero: "/img/hero.jpg",
    loveStory: "/img/love-story.jpg",
    // Solo portraits for the "The Story of Love" pair (pre-tilted polaroid exports).
    groomPortrait: "/the-story-of-love/groom.png",
    bridePortrait: "/the-story-of-love/bride.png",
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

  gift: {
    note: "Sự hiện diện của bạn là niềm hạnh phúc lớn nhất của chúng mình. Nếu muốn gửi lời chúc phúc bằng một món quà nhỏ, chúng mình xin trân trọng đón nhận qua:",
    noteEn: "Your presence is the greatest gift we could ask for.",
    accounts: [
      { owner: "Chú rể", ownerEn: "Groom", name: "NGUYEN VAN A", bank: "Tên ngân hàng", number: "0000 0000 0000", qr: "" },
      { owner: "Cô dâu", ownerEn: "Bride", name: "TRAN THI B", bank: "Tên ngân hàng", number: "0000 0000 0000", qr: "" },
    ],
  },
};

export type WeddingConfig = typeof weddingConfig;
