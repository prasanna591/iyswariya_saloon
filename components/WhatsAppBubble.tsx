import { waLink } from "@/lib/site";
import { IconWhatsApp } from "@/components/Icons";

export default function WhatsAppBubble() {
  return (
    <a
      href={waLink("Hi! I'd like to book your salon services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Iyswariya on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lift transition-transform duration-300 hover:scale-110"
    >
      <IconWhatsApp className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/60" />
    </a>
  );
}