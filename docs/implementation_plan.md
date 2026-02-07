# Adding Missing Sections to UHFC Turf Ground

Adding new sections identified from reference design while maintaining the existing "Electric Arena" aesthetic.

## Sections to Add

### 1. [NEW] About Section ("Who We Are")
- Company description with paragraph text
- Two feature images with captions
- Key highlights/bullet points

### 2. [NEW] Stats Counter
- Animated counters showing key metrics
- 4 stats: Years, Members, Turfs, Events

### 3. [NEW] Coaches Section ("Our Team")
- Coach cards with photos, names, roles
- Social links
- 3-column grid layout

### 4. [NEW] News Section
- Latest news/updates cards
- Image + title + excerpt
- 3-column grid

### 5. [NEW] Testimonials Section
- Customer reviews
- Quote cards with attribution

## Files to Create/Modify

| Action | File |
|--------|------|
| [NEW] | `components/About.tsx` |
| [NEW] | `components/Stats.tsx` |
| [NEW] | `components/Coaches.tsx` |
| [NEW] | `components/News.tsx` |
| [NEW] | `components/Testimonials.tsx` |
| [MODIFY] | `app/page.tsx` - Import and render new sections |

## Design System (Keeping Current)
- Background: `#080c14` / `var(--surface)`
- Accent: `#a8ff00` (Electric Pitch Green)
- Font: Michroma for headings, Syne for body
- Framer Motion for animations
