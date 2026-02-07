# Component Architecture

## Core Layout
- **`Layout.tsx`**: Root layout managing global fonts (`Michroma`, `Outfit`, `Syne`), global styles, and the `SmoothScroll` wrapper.
- **`SmoothScroll.tsx`**: Wrapper component using `lenis/react` to enable smooth scrolling across the application.
- **`Navbar.tsx`**: Sticky navigation bar with Scroll Spy functionality (`IntersectionObserver`). Links to sections via hashtags.

## Page Sections
The `page.tsx` assembles these components in order:

1. **`Hero.tsx`** (`#the-pitch`): Landing screen with impactful imagery and call-to-actions.
2. **`About.tsx`**: Brief introduction to the complex.
3. **`Stats.tsx`**: Numerical highlights (e.g., Pitch Size, Capacity).
4. **`Facilities.tsx`** (`#facilities`): Detailed breakdown of amenities.
5. **`Coaches.tsx`**: Profiles of the coaching staff.
6. **`News.tsx`**: Latest updates and announcements.
7. **`Events.tsx`** (`#events`): Upcoming tournaments or matches.
8. **`Booking.tsx`** (`#booking`): Setup for booking slots (CTA).
9. **`Testimonials.tsx`**: User reviews and feedback.
10. **`Gallery.tsx`** (`#wall`): Image grid showcasing the turf and games.
11. **`Footer.tsx`**: Site footer with links and contact info.

## Data Components
- **`coach-data.ts`** (Implicit): Data source for `Coaches.tsx`.
- **`news-data.ts`** (Implicit): Data source for `News.tsx`.
