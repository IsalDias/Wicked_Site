export const metadata = {
  title: "Wicked Events | Event Planning & Management Australia",
  description:
    "Explore Wicked Revelations' upcoming and past events. Experience vibrant Sri Lankan-themed celebrations and professional corporate events in Australia. Book your tickets today!",
  keywords: [
    "events Australia",
    "upcoming events",
    "event calendar",
    "Sri Lankan events",
    "corporate events",
    "cultural celebrations",
    "event booking",
  ].join(", "),
  openGraph: {
    title: "Wicked Events | Event Planning Australia",
    description:
      "Discover upcoming and past events from Wicked Revelations. Premium event planning with Sri Lankan vibe in Australia.",
    url: "https://www.wickedrevelations.com/events",
    type: "website",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
