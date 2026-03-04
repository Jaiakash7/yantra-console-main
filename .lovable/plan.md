

## Plan: Events Hub + Event Details System

Replace the current flat events list with a two-page system: an icon-grid Events Hub (`/events`) and individual Event Details pages (`/events/:id`).

---

### New Files

**1. `src/data/eventsData.ts`** — Central data array
- Each event: `id` (slug), `title`, `type` ('technical'|'non-technical'), `category` ('flagship'|'special'|'standard'|'none'), `icon` (Lucide component name), `duration`, `venue`, `teamSize`, `description`, `guidelines[]`
- Technical (5): CAD Modeling with Autodesk Fusion 360 (flagship, `Cpu`), Paper Presentation (special, `FileText`), Stress Analysis using Ansys (standard, `Activity`), Split Muff Coupling Assembly (standard, `Wrench`), Retro Racers (standard, `Car`)
- Non-Technical (4): Free Fire E-Sports Tournament (none, `Gamepad2`), Treasure Hunt (none, `MapPin`), Frame Flux (none, `Film`), Otaku Style (none, `Sparkles`)
- Prize logic by category: flagship → ₹1500/₹1000/₹750, special → ₹1000/₹750/₹500, standard → ₹750/₹500/₹250, none → no prizes
- Contacts array: Syed Nayem (9042818580), Senthil (9080191348), Mr. Chidambaram (9751894475)

**2. `src/pages/EventsHub.tsx`** — The icon-grid hub (replaces `EventsPage.tsx`)
- **Mobile**: Back arrow header. "TECHNICAL" section heading → `grid grid-cols-2` with first 4 events as square glassmorphic cards; 5th (flagship) spans `col-span-2` full-width at bottom. "NON-TECHNICAL" heading → `grid grid-cols-2` for 4 events.
- **Desktop** (`lg:` classes): Expand to `lg:grid-cols-4` for both sections, icons spread horizontally.
- Each card: dark glass (`bg-zinc-900/60 backdrop-blur-md border border-zinc-800`), large centered Lucide icon glowing in accent color, bold monospace title underneath. Clicking navigates to `/events/:id`.
- BottomDock at bottom (mobile only).

**3. `src/pages/EventDetails.tsx`** — Individual event detail page
- Reads `:id` from URL params, looks up event in `eventsData`.
- **Slide-in animation**: `initial={{ x: "100%" }} animate={{ x: 0 }}` transition.
- **Mobile** (`flex-col`): Hero header (icon + title + type badge + specs row), Overview section, conditional Prize Podium (3-col gold/silver/bronze with category-based amounts — skip entirely for non-tech), Guidelines list, Contacts with green call buttons, Registration CTA pinned at bottom.
- **Desktop** (`lg:flex-row`): Left fixed pane (hero + overview + CTA), right scrollable pane (guidelines + prizes).
- **Prize Podium**: 3-column layout. Gold (🥇), Silver (🥈), Bronze (🥉). Values from category mapping. Only rendered if `type === 'technical'`.
- **Registration CTA**: Full-width `bg-black border border-zinc-800` button, white monospace text "INITIALIZE REGISTRATION SEQUENCE", `hover:bg-zinc-900 shadow-[0_0_20px_rgba(74,144,226,0.3)]`.

### Modified Files

**4. `src/App.tsx`**
- Replace `EventsPage` import with `EventsHub` for `/events` route.
- Add new route: `/events/:id` → `<Framed><EventDetails /></Framed>`.

**5. `src/components/desktop/DesktopEventsContent.tsx`**
- Rewrite to import from `eventsData.ts`. Display as a 4-column icon grid matching the hub aesthetic. Each card clickable — calls an `onOpenEventDetail?` callback or opens an internal detail view within the same window.

**6. `src/components/desktop/DesktopOS.tsx`**
- No structural changes needed; `DesktopEventsContent` update propagates automatically.

### Technical Notes
- The `eventsData` array uses string icon names mapped to Lucide components via a lookup object to keep data serializable.
- Mobile cards use `aspect-square` for square proportions; flagship card uses `col-span-2` with a wider aspect ratio.
- Event detail page uses `useParams()` to resolve event ID.
- All existing theme variables (gold primary, zinc backgrounds) are reused — no new CSS variables needed.

