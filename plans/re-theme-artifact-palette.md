# Re-theme to artifact palette + add missing sections

## Context

The user shared a Claude-artifact wedding invitation design and asked to compare its theme
against this project. The artifact uses a warm cream background with **olive green**
(`#55642F`) as the dominant accent and **terracotta** (`#C0552C`) as a dedicated CTA/highlight
color. The current site (`src/app/globals.css`) instead uses a blue-leaning forest-green +
mustard-gold palette, and the `Envelope` opening screen (`src/components/envelope.tsx`) is
hardcoded in literal maroon/red hex values that bypass the theme system entirely — which is
why it reads as red regardless of any CSS-variable changes.

The user wants: (1) the site's color system switched to the artifact's olive/terracotta/cream
palette, with the red envelope fixed as the priority, and (2) two sections that exist in the
artifact but not on the site — a gift/bank-QR section ("Mừng cưới") and an embedded map
("Chỉ đường") — added. A public wishes wall ("Lời chúc") was considered and explicitly
deferred: the RSVP flow only *writes* to a Google Sheets webhook with no read-back API, and
building new backend infra for it is out of scope for now; the existing private `wish` field
in the RSVP form stays as-is.

## 1. Palette overhaul — `src/app/globals.css`

Replace the `:root` custom properties with the artifact-derived palette. Every component that
consumes these via the `@theme inline` → Tailwind token mapping (`bg-accent`, `text-ink`,
`bg-deep`, `bg-paper`, `border-line`, etc.) updates automatically — no per-component edits
needed except the two files in §3 that use literal hex.

| Token | Old | New |
|---|---|---|
| `--wed-bg` | `#f3efe2` | `#F6F3EA` |
| `--wed-bg-2` | `#e8e1c9` | `#EDE9DD` |
| `--wed-surface` | `#fffdf6` | `#FFFDF8` |
| `--wed-ink` | `#22301f` (green-black) | `#2B2A26` (warm charcoal) |
| `--wed-ink-soft` | `#57624e` (sage-grey) | `#6E6A5E` (warm taupe) |
| `--wed-accent` | `#a9863f` (mustard) | `#55642F` (olive — primary accent) |
| `--wed-accent-soft` | `#cdb888` | `#E4C98F` (soft gold) |
| `--wed-deep` | `#1c2e1f` | `#3E4A22` (deep olive) |
| `--wed-deep-2` | `#294a2c` | `#2B2A26` |
| `--wed-line` | `rgba(34,48,31,.16)` | `rgba(43,42,38,.14)` |
| `--wed-highlight` *(new)* | — | `#C0552C` (terracotta CTA color) |

Add `--color-highlight: var(--wed-highlight);` to the `@theme inline` block so `bg-highlight` /
`text-highlight` / `border-highlight` become usable Tailwind utilities, matching the existing
`color-accent`, `color-ink`, etc. pattern.

`.wed-bg-overlay`'s `rgba(251,250,246,.35)` already matches the artifact's lightest cream —
leave unchanged.

## 2. Route primary CTAs through `highlight` (terracotta)

The artifact reserves terracotta specifically for calls-to-action while olive handles
decorative/label text. Mirror that split:
- `src/components/rsvp-form.tsx` (~line 103): submit button `bg-accent text-[#2a1e0d]` →
  `bg-highlight text-surface`.
- `src/components/invitation.tsx` (~line 27): "Xem chỉ đường" button `bg-ink text-surface` →
  `bg-highlight text-surface`.
- New map section's button (§5) uses the same `bg-highlight text-surface`.

Everything already on `bg-accent`/`text-accent` (script headings, timeline icons/lines,
dresscode label, Thanks accent, Families label) needs no change — it inherits the new olive.

## 3. Fix the red Envelope + Album seal — literal hex, not tokens

`src/components/envelope.tsx` and `src/components/album.tsx` hold the only literal
(non-token) colors in the tree — all maroon: `#9a4a35`, `#6b2f22`, `#3d1912`, `#5c281d`,
`#4a2015`, `#7a5a25`. Replace with new literals (kept literal since they're gradient
mid-stops the flat CSS vars don't provide, consistent with how the file already works):

- `envelope.tsx:22` outer radial bg: maroon 3-stop → deep olive/charcoal —
  `radial-gradient(120%_90%_at_50%_0%,#3E4A22_0%,#2B2A26_60%,#1c1b17_100%)`.
- `envelope.tsx:67` body `linear-gradient(155deg, #9a4a35, #5c281d 75%)` and `envelope.tsx:90`
  flap `linear-gradient(160deg, #6b2f22 20%, #9a4a35)` → terracotta gradients, e.g.
  `linear-gradient(155deg, #C0552C, #8a3d1f 75%)` and `linear-gradient(160deg, #8a3d1f 20%, #C0552C)`
  — the envelope itself becomes the terracotta "pop" against the olive backdrop.
- `envelope.tsx:129` seal gradient end stop `#7a5a25` → `#8A7238` (artifact's gold-brown) so
  the seal reads gold, not muddy red-brown. Seal text `#4a2015` stays (dark brown reads fine
  on gold).
- Card-sliding-out bg `#fdf9ee` (line 72) and cream text `#f8ece2` (lines 22, 142) stay — both
  already sit inside the new cream family.
- `album.tsx:41` — same "囍" badge gradient as the envelope body; update identically for
  consistency between the two places it appears.

## 4. Update `dresscodeColors` — `src/lib/wedding-config.ts`

Swap `["#22301f","#a9863f","#e8e1c9","#5c4322","#ffffff"]` (tied to the old palette) for
`["#55642F", "#C0552C", "#E4C98F", "#2B2A26", "#FFFDF8"]` (olive, terracotta, gold, charcoal,
ivory) to match the new theme.

## 5. New section — embedded map ("Chỉ đường")

- `src/components/location.tsx`: `Reveal`-wrapped section placed after `Invitation`. Uses a
  key-less `https://www.google.com/maps?q=<url-encoded venue+address>&output=embed` iframe
  (no Maps API key required), sized like the existing `Photo` tiles, plus a
  `bg-highlight text-surface` button linking to `weddingConfig.ceremony.mapUrl` to open the
  native Maps app. Reuses existing `venue`/`address`/`mapUrl` config fields — no config
  changes needed.
- Keep the existing inline "Xem chỉ đường" link in `invitation.tsx` (cheap, useful on mobile),
  restyled per §2.
- Register `<Location />` in `src/app/page.tsx` between `Invitation` and `Families`.

## 6. New section — gift box ("Mừng cưới")

- `src/lib/wedding-config.ts`: add a `gift` object with placeholder values (same convention as
  `socials: [{ href: "#" }]` already uses for unfilled data):
  ```ts
  gift: {
    note: "Sự hiện diện của bạn là niềm hạnh phúc lớn nhất của chúng mình. Nếu muốn gửi lời chúc phúc bằng một món quà nhỏ, chúng mình xin trân trọng đón nhận qua:",
    accounts: [
      { owner: "Chú rể", name: "NGUYEN VAN A", bank: "Tên ngân hàng", number: "0000 0000 0000", qr: "" },
      { owner: "Cô dâu", name: "TRAN THI B", bank: "Tên ngân hàng", number: "0000 0000 0000", qr: "" },
    ],
  },
  ```
- `src/components/gift.tsx`: `Reveal`/`RevealStagger` section, one card per account (owner
  label, bank, account number, copy-to-clipboard button, and a QR block using the existing
  `Photo` component — an empty `qr` path falls back to `Photo`'s dashed-border placeholder
  box instead of erroring, same as the other photo slots do today).
- Register `<Gift />` in `src/app/page.tsx`, after `Dresscode` and before `Album`.

## Verification

- `npm run dev`, open in browser (or use the `/run` skill), confirm:
  - Envelope opening screen is olive/terracotta, not red/maroon.
  - Hero, LoveStory, Timeline, Dresscode swatches, Album seal badge, RSVP dark section +
    submit button, Thanks all render in the new palette with readable text contrast.
  - New `Location` section renders an embedded map for the configured address; its button
    opens `mapUrl`.
  - New `Gift` section renders both placeholder accounts and doesn't crash on the empty `qr`
    path.
- `npm run build` to catch type errors from the new config fields/components.
