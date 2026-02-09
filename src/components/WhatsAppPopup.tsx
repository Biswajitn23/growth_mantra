import { MessageCircle } from "lucide-react";

const WhatsAppPopup = () => {
  const phoneNumber = "8839707272";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
      aria-label="Chat with us on WhatsApp"
      title="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppPopup;
