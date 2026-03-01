

## Plan: Refinements — Schedule Widget, Swipe Physics, Desktop Comms, Map Fix

Comparing current code to requirements, most features are already implemented. This plan addresses the remaining gaps.

---

### Changes

**1. Mobile HomePage Page 2 — Add Quick Schedule widget at top**
- Insert a "Quick Schedule" preview widget above the Sponsor Datapad showing: 09:00 Inauguration, 10:00 Tech Events, 14:00 Non-Tech Events
- Include a "Tap to view full →" link navigating to `/schedule`

**2. Mobile swipe physics fix**
- `HomePage.tsx`: Change `dragElastic={0.2}` → `dragElastic={0.1}`
- Add `style={{ touchAction: "pan-y" }}` to the drag container to prevent multi-touch bugs

**3. Contact name fix**
- Change `"CHIDAMBARAM"` → `"MR. CHIDAMBARAM"` in both `HomePage.tsx` contacts array

**4. LockScreen — intensify glow**
- Update track fill `boxShadow` to `0 0 15px rgba(255,215,0,0.8), 0 0 30px rgba(255,215,0,0.4)` for a more intense glow

**5. PhoneFrame — remove dead space**
- Add `pt-0 mt-0` to the outer wrapper, reduce notch padding

**6. Desktop — Replace SponsorsWidget with CommsArray widget**
- Create `src/components/desktop/CommsWidget.tsx` — a compact contacts HUD showing the 3 emergency contacts
- In `DesktopOS.tsx`: Replace `<SponsorsWidget />` with `<CommsWidget />` in the right-side widgets area

**7. Desktop Map window — increase to 800x600**
- `DesktopOS.tsx` appMeta: Change map height from 500 → 600
- `AppWindow.tsx`: Ensure the content div uses the full height (set `height` style on content area to `height - 40px`)

### Files Modified
- `src/pages/HomePage.tsx` — Quick Schedule widget, dragElastic, touch-action, contact name
- `src/components/LockScreen.tsx` — intensify glow shadow
- `src/components/PhoneFrame.tsx` — remove dead space
- `src/components/desktop/DesktopOS.tsx` — swap SponsorsWidget for CommsWidget, map height 600
- `src/components/desktop/CommsWidget.tsx` — new file

