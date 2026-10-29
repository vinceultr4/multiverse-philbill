# multiverse-philbill
Tinder for real Filipino bills, shopping lists &amp; creator level-up tools. Upload proof + short story. Swipe to fund.
# Multiverse PhilBill / Timeline Swipe

**Tinder for real Filipino bills, shopping lists, and creator level-up tools.**

Upload an unpaid bill or a high-signal wishlist item. Attach a short, honest story of the choice-point that created this timeline. People with excess liquidity swipe right and clear it.

No charity theater. No middlemen. Just resonance + action.

---

## Vision

Most people in the Philippines carry real financial pressure (utilities, school fees, hospital balances, rent, food).  
At the same time, many high-agency creators and kinetic operators are already skilled but blocked by missing tools (cameras, electric motorcycles, production gear).

This app treats both as legitimate timeline data.

You don’t beg.  
You present proof of current reality + the next logical node.  
Someone who resonates funds it.

---

## Core Concept

- **Receivers** upload:
  - Real bill / shopping list / specific wishlist item
  - Photo of the actual document or product
  - Short eligibility story (text or voice)
- **Donors** swipe through a clean feed
- Right swipe = fund
- Money moves directly (GCash / Maya / bank)
- Both sides get clean documentation

Special category for **Creator Level-Up**: high-ticket tools only accepted when the poster can prove they already operate at a high level in that domain.

Example:
> “I already wheelie the Raider 150 into 3rd gear. I have real seat time on Sur-Ron Bee and Talaria Sting. I need the Stark Varg’s power delivery to take the same skill into a higher performance band and document it.”

---

## Why This Version

- Filipino-first (language, payment rails, cultural context)
- Stories are mandatory and short — no trauma porn, no long applications
- Creator Level-Up requires proof of existing skill
- Zero forced content creation in return
- Designed so the product itself creates shareable proof

---

## Tech Stack (Free-first)

- Frontend: Next.js
- Backend + DB + Auth + Storage: Supabase
- Deploy: Vercel
- Payments: Manual GCash/Maya first → Xendit/PayMongo later
- Early no-code option: Tally + Airtable

Intentionally simple so one motivated developer can ship an MVP.

---

## Current Status

Blueprint complete.  
Looking for the first vibe-coder who wants to turn this into a working product.

---

## How to Contribute

1. Fork this repo
2. Build the MVP screens (upload + swipe feed + basic matching)
3. Open a PR or just ship a working version and claim credit
4. First clean working prototype gets featured as the official launch version

If you just want to help shape the product, open an Issue with clear suggestions.

---

## Roadmap (Rough)

**Phase 1 – MVP**
- Upload flow (bill + story + photo)
- Swipe feed
- Basic donor filters
- Manual payment confirmation

**Phase 2**
- Creator Level-Up verification light-touch
- Public optional case studies
- Simple donor dashboard

**Phase 3**
- Better matching
- Recurring / larger funding
- Mobile polish

---

## License

MIT — free to fork, improve, and ship.

---

## Call to Action

If this idea resonates, do one of three things:

1. Star the repo
2. Fork and start building
3. Share it with one developer who actually ships

The original spark came from an X post.  
This is the Filipino multiverse version of that idea.

Let’s see who turns the blueprint into reality.

## Starter Code

Basic schema, types, and a SwipeCard component are ready.

To start building:

1. Create a new Next.js app
2. Install `@supabase/supabase-js`
3. Add the files from `/starter` (or copy the code blocks below)
4. Set up a free Supabase project and run the schema.sql
5. Add your Supabase URL + Anon key to `.env.local`

First person who ships a working upload + swipe feed gets featured.
