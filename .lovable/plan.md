

## Plan: Update Data, Fix UI Issues, Restructure Desktop

### Changes Overview

**1. Fix countdown date → March 18, 2026 09:00:00**
- `CountdownCard.tsx` line 4: change `2026-04-15T09:00:00` → `2026-03-18T09:00:00`

**2. Fix StatusBar — remove "PSI", show battery %**
- `StatusBar.tsx`: Replace `PressureGauge` with a simple battery percentage display (e.g., "87%"). Remove "PSI" text entirely.

**3. Update event names in both mobile and desktop**
- `EventsPage.tsx`: Replace current tech events with: CAD Modelling (Flagship), Brain Sparks, Paper Presentation, Component-Meshing, Retro Racers. Replace non-tech with: Fact Forge, Frame Flux, Otaku Style, Rapid Rumble.
- `DesktopEventsContent.tsx`: Same event name updates.

**4. Mobile Page 2 — Replace content with Title Sponsor Datapad + Comms Array**
- `HomePage.tsx` Page 2: Remove Schedule widget, Sponsors grid, and Announcements log. Replace with:
  - **Title Sponsor Datapad**: Large premium metallic placard for a single main sponsor placeholder.
  - **Comms Array**: Emergency contacts styled as mechanical switchboard — Syed Nayem: 9042818580, Senthil: 9080191348, Chidambaram: 9751894475.

**5. Mobile Map → Full-screen dark modal with Google Maps iframe + back arrow**
- `MapPage.tsx`: Replace SVG blueprint with Google Maps iframe (MSEC). Add `ArrowLeft` back button in header. Remove BottomDock from this page (full-screen modal style).

**6. Mobile Schedule → Add back arrow**
- `SchedulePage.tsx`: Add `ArrowLeft` back button header, similar to EventsPage.

**7. Mobile PhoneFrame — fix layout so dock is always visible**
- `PhoneFrame.tsx`: Ensure container uses `flex flex-col` properly so footer/dock never scroll off.

**8. Mobile LockScreen — gold gradient track follows gear handle**
- `LockScreen.tsx`: Change the track fill from `gold-gradient opacity-20` to an intense `from-yellow-600 to-yellow-400` gradient with glow shadow that dynamically follows the drag position.

**9. Desktop Shelf → 4 icons only (Home, Events, Map, Schedule)**
- `DesktopShelf.tsx`: Remove instruction, about, gallery, prize, sponsors from shelf. Keep only 4.
- Update `DesktopApp` type accordingly — but keep the removed apps as valid types for desktop shortcuts.

**10. Desktop Shortcuts — left-side OS-style icons**
- `DesktopOS.tsx`: Add a left-side column of desktop shortcut icons for Instruction, About, Gallery, Prizes, Sponsors. Clicking opens their respective windows.

**11. Desktop Home window grid buttons → wired to open windows**
- `DesktopHomeContent.tsx`: Accept an `onOpenApp` callback. Wire each grid button to open its respective desktop window (instruction, about, gallery, prize).

**12. Desktop Map window → larger default (800x500)**
- `DesktopOS.tsx` appMeta: Update map width to 800, height to 500.

### Files Modified
- `src/components/CountdownCard.tsx` — date fix
- `src/components/StatusBar.tsx` — remove PSI, show battery %
- `src/pages/EventsPage.tsx` — new event names
- `src/components/desktop/DesktopEventsContent.tsx` — new event names
- `src/pages/HomePage.tsx` — Page 2 content (sponsor datapad + comms array)
- `src/pages/MapPage.tsx` — Google Maps iframe modal
- `src/pages/SchedulePage.tsx` — add back arrow
- `src/components/LockScreen.tsx` — gold gradient track
- `src/components/desktop/DesktopShelf.tsx` — 4 icons only
- `src/components/desktop/DesktopOS.tsx` — desktop shortcuts on left, map size, pass onOpenApp
- `src/components/desktop/DesktopHomeContent.tsx` — wire grid buttons to open windows

