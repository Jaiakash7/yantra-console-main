

## Plan: Major Overhaul — Swipeable Mobile Home + Expanded Desktop OS

This is a significant restructuring of both mobile and desktop interfaces per the new requirements.

---

### MOBILE CHANGES

**1. Add "Schedule" to BottomDock (4 buttons: Home, Events, Map, Schedule)**
- Update `BottomDock.tsx` — add Schedule icon (Clock), route to `/schedule`
- Create `src/pages/SchedulePage.tsx` — timeline-style schedule view
- Add route in `App.tsx`

**2. Rebuild HomePage as swipeable 2-page carousel**
- Replace current `HomePage.tsx` with a `drag="x"` Framer Motion carousel
- **Page 1**: CountdownCard at top, 2x2 grid of square mechanical switch buttons (Instruction, About, Gallery, Prize), wide "Explore Events" ignition button with glowing indicator
- **Page 2**: Schedule widget, Sponsors widget, "Live System Announcements" styled as mechanical log
- Remove: DynamicIsland from page body (keep as header), EventHighlights, GearGrid (replace with new 2x2 grid), WaveformVisualizer, Sponsors/Prize sheet triggers
- Create sub-pages: `InstructionPage`, `AboutPage`, `GalleryPage`, `PrizePage` (or render as sheets)

**3. Rebuild Events page with exact 5 Tech + 4 Non-Tech events**
- Update `eventsData` in `EventsPage.tsx` to have exactly 5 technical and 4 non-technical events
- Remove the EventsIndex category picker — go directly to a single events page with two sections
- Update route: `/events` renders the full events list (no sub-categories)

**4. Create new pages for grid buttons**
- `InstructionPage.tsx`, `AboutPage.tsx`, `GalleryPage.tsx`, `PrizePage.tsx`
- Add routes in `App.tsx`

---

### DESKTOP CHANGES

**5. Expand DesktopShelf with all icons**
- Update `DesktopApp` type to include: `home`, `events`, `map`, `schedule`, `instruction`, `about`, `gallery`, `prize`, `sponsors`
- Update `DesktopShelf.tsx` with 9 icons
- Update `appMeta` in `DesktopOS.tsx`

**6. Auto-open Home window on desktop boot**
- In `DesktopOS`, initialize `openApps` with `["home"]` and `focusOrder` with `["home"]`
- Center the home window position

**7. Desktop Home window content**
- Create `DesktopHomeContent.tsx` — CountdownCard, 2x2 grid buttons, "Explore Events" button (opens events window)
- Remove the embedded mobile `HomePage` component from desktop windows

**8. Desktop Events window — wide split layout**
- Create `DesktopEventsContent.tsx` — two-column grid showing 5 Tech + 4 Non-Tech events as "Project Folders"
- No phone frame, no category navigation

**9. Desktop Map window — Google Maps iframe**
- Replace SVG blueprint map with embedded Google Maps iframe centered on MSEC Chennai
- Style container as radar/tracking screen aesthetic

**10. Create desktop content for new apps**
- `DesktopInstructionContent`, `DesktopAboutContent`, `DesktopGalleryContent`, `DesktopPrizeContent`, `DesktopScheduleContent`

---

### NEW FILES
- `src/pages/SchedulePage.tsx`
- `src/pages/InstructionPage.tsx`
- `src/pages/AboutPage.tsx`
- `src/pages/GalleryPage.tsx`
- `src/pages/PrizePage.tsx`
- `src/components/desktop/DesktopHomeContent.tsx`
- `src/components/desktop/DesktopEventsContent.tsx`
- `src/components/desktop/DesktopMapContent.tsx`
- `src/components/desktop/DesktopScheduleContent.tsx`
- `src/components/desktop/DesktopInstructionContent.tsx`
- `src/components/desktop/DesktopAboutContent.tsx`
- `src/components/desktop/DesktopGalleryContent.tsx`
- `src/components/desktop/DesktopPrizeContent.tsx`

### MODIFIED FILES
- `src/pages/HomePage.tsx` — complete rewrite as swipeable carousel
- `src/pages/EventsPage.tsx` — update to 5 tech + 4 non-tech, single page
- `src/pages/MapPage.tsx` — keep for mobile, no changes
- `src/components/BottomDock.tsx` — add Schedule (4 buttons)
- `src/components/GearGrid.tsx` — replace with 2x2 mechanical switches
- `src/components/desktop/DesktopOS.tsx` — expanded app types, auto-open home, new content renderers
- `src/components/desktop/DesktopShelf.tsx` — 9 icons
- `src/App.tsx` — add new routes
- `src/pages/EventsIndex.tsx` — may be removed or simplified

### TECHNICAL NOTES
- Swipeable carousel: `drag="x"` with `dragConstraints`, `onDragEnd` snap logic using velocity/offset threshold
- 2x2 grid buttons: `grid grid-cols-2 gap-3`, each button ~square with icon + label, mechanical switch styling (thick border, inset shadows)
- "Explore Events" ignition button: wide, gold-bordered, pulsing green "SYSTEM LIVE" dot
- Google Maps embed: `<iframe src="https://www.google.com/maps/embed?pb=..." />` with MSEC coordinates (13.0285°N, 80.2210°E)
- Desktop home auto-open: `useState<DesktopApp[]>(["home"])` as initial state

