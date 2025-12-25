import { motion } from "framer-motion";

const tickerItems = [
  "🔥 BREAKING: Kenyan Design Takes Over Global Stage",
  "📰 NEW: Tech Hub in Nairobi Launches Creative Incubator",
  "🎨 TRENDING: Matatu Art Featured in International Exhibition",
  "⚡ ALERT: Gen Z Redefining African Digital Culture",
  "🌍 UPDATE: Kenyan Creatives Winning Global Awards",
  "💡 HOT: The Future of African Innovation is Here",
];

const NewsTicker = () => {
  return (
    <div className="ticker-wrapper border-b-[3px] border-foreground">
      <div className="ticker-content font-display text-sm uppercase tracking-wider">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={index} className="mx-8 inline-block">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
