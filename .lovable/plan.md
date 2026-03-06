

## Plan: Desktop Content Components Revamp

Scope: Only files inside `src/components/desktop/`. No changes to mobile pages, DesktopOS.tsx, DesktopLockScreen.tsx, or AppWindow.tsx.

---

### 1. DesktopHomeContent.tsx — Expanded layout with larger typography

- Remove `max-w-lg` constraint, use full width with `p-10`
- CountdownCard at top, then a horizontal layout: 4 grid buttons in a `grid-cols-4` row (not 2x2)
- Icon sizes bumped to `w-14 h-14`, labels to `text-sm`
- "EXPLORE EVENTS" button text to `text-lg`, padding `py-6`
- Overall spacing `space-y-8`

### 2. DesktopAboutContent.tsx — Wider horizontal card layout

- Remove `max-w-lg`, use full width `p-10`
- Logo size `w-36 h-36`
- Cards in a `grid grid-cols-2 gap-6` layout instead of vertical stack
- Section titles bumped to `text-sm`, body text to `text-base`
- Icon sizes to `w-6 h-6`, padding `p-6`

### 3. DesktopEventsContent.tsx — No-scroll single-screen grid with Register buttons

**Hub view (no selected event):**
- Remove `overflow-y-auto`, use `h-full flex flex-col justify-center p-8`
- Section headings bumped to `text-sm`
- Technical: `grid-cols-5` single row for 5 events
- Non-Technical: `grid-cols-4` single row for 4 events
- Remove `aspect-square` from cards, use compact padding `p-5`
- Icon size `w-10 h-10`, title text `text-[11px]`
- Add a small "REGISTER" button below each card title (`text-[9px] font-mono bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded-md mt-2`)

**Detail view (selected event):**
- Bump all text sizes: title `text-lg`, description `text-sm`, guidelines `text-sm`, labels `text-xs`
- Prize podium amounts `text-base`, contact names `text-sm`

### 4. PrizesContent.tsx — Sync data from mobile PrizesPage.tsx, expanded layout

- Keep the same 3 categories with identical prize amounts (CAD: ₹1500/1000/750, Paper: ₹1000/750/500, Standard: ₹750/500/250)
- Total banner: `text-7xl` for amount
- Category cards: larger `p-10`, title `text-lg`, subtitle `text-sm`
- Podium emoji `text-4xl`, amounts `text-xl`
- Benefits section: `text-sm` for items, `grid-cols-4` layout

### 5. DesktopPrizeContent.tsx — Remove duplicate, redirect to PrizesContent

- This file currently has stale/wrong prize data (₹10K, ₹6K, ₹3K). Replace its content entirely to match PrizesContent.tsx with the correct category-based prize structure and expanded typography. Use the same layout as PrizesContent.tsx since both serve desktop windows.

### 6. PrizePoolWidget.tsx — Sync data with correct prize info

- Replace stale data (CAD WARFARE ₹10K, etc.) with correct categories:
  - CAD MODELING: ₹1,500
  - PAPER PRESENTATION: ₹1,000  
  - STANDARD EVENTS: ₹750
- Update total to "TOTAL: ₹13,000+"
- Bump text sizes: event names `text-xs`, amounts `text-xs`, header `text-[10px]`, total `text-[10px]`
- Increase widget width from `w-56` to `w-64`

### 7. DesktopInstructionContent.tsx — Expanded layout

- Remove `max-w-lg`, use full width with `p-10`
- Cards in `grid grid-cols-2 gap-6` instead of vertical stack
- Title text `text-sm`, body text `text-base`, icons `w-6 h-6`, card padding `p-6`

### 8. DesktopScheduleContent.tsx — Larger typography

- Remove `max-w-2xl` constraint
- Time text `text-lg`, title `text-base`, venue `text-xs`, type badge `text-[9px]`
- Row padding `p-5`, gap `gap-6`

### 9. DesktopGalleryContent.tsx — Larger cards and text

- Padding `p-10`, gap `gap-6`
- Icon size `w-14 h-14`, label text `text-xs`

### 10. DesktopMapContent.tsx — Larger header text

- Header label `text-sm`, coordinates `text-xs`
- Corner brackets `w-6 h-6`, campus label `text-[9px]`

### Files Modified (all inside `src/components/desktop/`)
- DesktopHomeContent.tsx
- DesktopAboutContent.tsx
- DesktopEventsContent.tsx
- PrizesContent.tsx
- DesktopPrizeContent.tsx
- PrizePoolWidget.tsx
- DesktopInstructionContent.tsx
- DesktopScheduleContent.tsx
- DesktopGalleryContent.tsx
- DesktopMapContent.tsx

