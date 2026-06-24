import React from 'react';

export default function FloatingSocials() {
  const whatsappNumber = '919845961990';
  
  return (
    <div className="fixed bottom-24 lg:bottom-8 right-5 lg:right-8 z-40 flex flex-col gap-3.5 items-center">
      {/* Telegram Floating Button */}
      <a
        href="https://t.me/ashwinitrading"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-ext-telegram border-2 border-white flex items-center justify-center text-white shadow-lg shadow-ext-telegram/30 hover:shadow-xl hover:shadow-ext-telegram/45 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ext-telegram/40"
        aria-label="Chat on Telegram"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-white transition-transform group-hover:rotate-12">
          <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.578.192l-8.533 7.701-.33 4.955c.488 0 .702-.223.974-.485l2.336-2.27 4.862 3.592c.895.492 1.54.238 1.763-.832l3.19-15.022c.326-1.306-.5-1.9-.136-1.55z" />
        </svg>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Ashwini%20Trading%20Academy.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-ext-whatsapp border-2 border-white flex items-center justify-center text-white shadow-lg shadow-ext-whatsapp/30 hover:bg-ext-whatsapp-hover hover:shadow-xl hover:shadow-ext-whatsapp/45 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ext-whatsapp/40"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-white transition-transform group-hover:scale-105">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.182 1.449 4.825 1.451 5.436 0 9.859-4.407 9.862-9.823.001-2.623-1.02-5.088-2.871-6.942-1.851-1.854-4.312-2.874-6.932-2.875-5.437 0-9.86 4.408-9.863 9.825-.001 1.762.461 3.483 1.337 5.016l-.99 3.618 3.708-.971zm11.367-6.416c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.667.149-.198.298-.766.967-.939 1.165-.173.199-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.667-1.611-.913-2.206-.24-.579-.484-.501-.667-.51l-.57-.01c-.197 0-.518.074-.79.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>
    </div>
  );
}
