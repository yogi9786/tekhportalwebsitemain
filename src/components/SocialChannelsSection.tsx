import React from "react";

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.64 1.65 1.65 0 0 0 1.66 1.65 1.64 1.64 0 0 0 1.65-1.65c0-.9-.74-1.64-1.65-1.64"/>
  </svg>
);

const WhatsappIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.112.553 4.095 1.517 5.82l-1.517 5.54 5.679-1.488c1.669.914 3.585 1.436 5.629 1.436 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
  </svg>
);

interface SocialItem {
  id: string;
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  hoverClass: string;
}

const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: "instagram",
    name: "Instagram (@tekh_portal)",
    url: "https://www.instagram.com/tekh_portal",
    icon: InstagramIcon,
    hoverClass: "hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] hover:shadow-lg hover:shadow-[#E1306C]/30"
  },
  {
    id: "facebook",
    name: "Facebook (Tekhportal Agency)",
    url: "https://www.facebook.com/profile.php?id=61552701975439",
    icon: FacebookIcon,
    hoverClass: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/30"
  },
  {
    id: "youtube",
    name: "YouTube (Tekhportal Official)",
    url: "https://www.youtube.com/channel/UC4JtvFLyIrzne_TBK-iyHzg",
    icon: YoutubeIcon,
    hoverClass: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-lg hover:shadow-[#FF0000]/30"
  },
  {
    id: "linkedin",
    name: "LinkedIn (Tekhportal)",
    url: "https://www.linkedin.com/in/tekhportal/",
    icon: LinkedinIcon,
    hoverClass: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/30"
  },
  {
    id: "whatsapp",
    name: "WhatsApp Direct (+91 90662 34321)",
    url: "https://wa.me/919066234321",
    icon: WhatsappIcon,
    hoverClass: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/30"
  }
];

export const SocialChannelsSection: React.FC = () => {
  return (
    <section id="socials" className="w-full bg-[#edf5ef] py-6 sm:py-8 border-t border-b border-[#07382c]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6">
        <span className="text-xs sm:text-sm font-sans font-black text-[#07382c] uppercase tracking-widest">
          Follow Us:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
          {SOCIAL_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                aria-label={item.name}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#07382c]/15 text-[#07382c] shadow-xs flex items-center justify-center transition-all duration-300 hover:scale-110 ${item.hoverClass}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialChannelsSection;
