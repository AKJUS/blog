export interface Sponsor {
  name: string;
  url: string;
  image: string;
  tier: string;
  imageAlt?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Tanner Linsley",
    url: "https://tanstack.com/",
    image: "https://avatars.githubusercontent.com/u/72518640?s=400",
    tier: "💍 Platinum",
  },
  {
    name: "Workleap",
    url: "https://www.workleap.com",
    image: "https://avatars.githubusercontent.com/u/53535748?s=400",
    tier: "💎 Diamond",
  },
  {
    name: "wevm",
    url: "https://wevm.dev/",
    image: "https://avatars.githubusercontent.com/u/109633172?s=400",
    tier: "🥇 Gold",
  },
  {
    name: "React Bricks",
    url: "https://reactbricks.com/",
    image: "https://avatars.githubusercontent.com/u/60979227?s=400",
    tier: "🥉 Bronze",
  },
  {
    name: "ElevenLabs",
    url: "https://elevenlabs.io/",
    image: "https://avatars.githubusercontent.com/u/94471909?s=400",
    tier: "🥉 Bronze",
  },
  {
    name: "Advantys",
    url: "https://www.advantys.com/",
    image: "https://avatars.githubusercontent.com/u/20905387?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "Jonas Daniels",
    url: "https://github.com/jnsdls",
    image: "https://avatars.githubusercontent.com/u/8204858?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "MonoLisa",
    url: "https://www.monolisa.dev/?ref=dominik",
    image: "https://avatars.githubusercontent.com/u/61585124?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "Nadav Lebovitch",
    url: "https://github.com/nadavl",
    image: "https://avatars.githubusercontent.com/u/5332234?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "Jeremy Brown",
    url: "https://github.com/jlbmagic",
    image: "https://avatars.githubusercontent.com/u/20194907?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "deliver.media",
    url: "https://deliver.media/",
    image: "https://avatars.githubusercontent.com/u/120005519?s=400",
    tier: "🥳 Sponsor",
  },
  {
    name: "Matt Sutkowski",
    url: "https://github.com/msutkowski",
    image: "https://avatars.githubusercontent.com/u/784953?s=400",
    tier: "🎗 Supporter",
  },
  {
    name: "Thomas Ballinger",
    url: "https://ballingt.com",
    image: "https://avatars.githubusercontent.com/u/458879?s=400",
    tier: "🎗 Supporter",
  },
  {
    name: "Robin Wieruch",
    url: "https://www.robinwieruch.de/",
    image: "https://avatars.githubusercontent.com/u/2479967?s=400",
    tier: "🎗 Supporter",
  },
  {
    name: "Venue Ink",
    url: "https://www.venue.ink/",
    image: "https://avatars.githubusercontent.com/u/67328248?s=400",
    tier: "🎗 Supporter",
  },
  {
    name: "nuqs",
    url: "https://nuqs.dev/",
    image: "https://avatars.githubusercontent.com/u/43356325?s=400",
    imageAlt: "47ng",
    tier: "🪙 Custom",
  },
];

const premiumTiers = new Set([
  "💍 Platinum",
  "💎 Diamond",
  "🥇 Gold",
  "🥉 Bronze",
  "🥳 Sponsor",
]);

export const premiumSponsors = sponsors.filter((sponsor) =>
  premiumTiers.has(sponsor.tier),
);
