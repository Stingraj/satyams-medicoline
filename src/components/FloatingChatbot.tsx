import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const QUICK_REPLIES = [
  { text: 'What services do you offer?', keyword: 'services' },
  { text: 'Where do you provide services?', keyword: 'locations' },
  { text: 'How can I book a service?', keyword: 'book' },
  { text: 'What are your working hours?', keyword: 'timings' },
  { text: 'Tell me about ICU@Home', keyword: 'icu' },
  { text: 'Is doctor prescription required?', keyword: 'prescription' },
] as const;

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Hello! Welcome to Medicoline Healthcare. I am your virtual assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Show tooltip after a small delay on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Dismiss tooltip after 7 seconds
  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}-${Math.random()}`,
      sender: 'user',
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking and responding
    setTimeout(() => {
      const botResponseText = getBotResponse(text);
      const botMessage: Message = {
        id: `msg-${Date.now()}-${Math.random()}`,
        sender: 'bot',
        text: botResponseText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('service') || input.includes('offer') || input.includes('what do you do')) {
      return 'We offer 13 comprehensive home healthcare services:\n\n1. Nursing Care\n2. Doctors Consultation\n3. ECG@Home\n4. X-Ray@Home\n5. Physiotherapy & Home Rehab\n6. Dietitian & Personalised Diet Chart\n7. Home Sample Collection (Lab Partner: Manipal TRUtest)\n8. GDA / Patient Attendant\n9. Rental Medical Equipment (concentrator, beds, wheelchairs, etc.)\n10. Medicine Home Delivery\n11. Vaccination@Home\n12. Wound Dressing & Care\n13. 24/7 Emergency Backup during services.\n\nLet me know if you would like details on any specific service!';
    }

    if (input.includes('location') || input.includes('where') || input.includes('area') || input.includes('warangal') || input.includes('hanamkonda') || input.includes('kazipet') || input.includes('telangana')) {
      return 'We deliver quality home care services in Warangal | Hanamkonda | Kazipet regions in Telangana, India. We plan to expand to Hyderabad outskirts soon!';
    }

    if (input.includes('book') || input.includes('appointment') || input.includes('enquire') || input.includes('schedule') || input.includes('reserve')) {
      return 'You can easily book a service by:\n\n📞 Calling or WhatsApping us at +91 76542 47569\n📧 Emailing info@medicolinehealthcare.com\n📝 Submitting the Enquiry Form on our Contact Us page.\n\nOur care coordinator will assess your needs and confirm the booking within 2 hours!';
    }

    if (input.includes('timing') || input.includes('hour') || input.includes('when') || input.includes('open') || input.includes('sunday')) {
      return 'Our standard hours of operations are:\n\n• Monday to Saturday: 8:00 AM - 8:00 PM\n• Sunday: 9:00 AM - 5:00 PM\n\nEmergency backup coordination is available 24/7 for our registered patients on active home care packages.';
    }

    if (input.includes('icu') || input.includes('critical') || input.includes('ventilator') || input.includes('bipap') || input.includes('monitor') || input.includes('tracheostomy')) {
      return 'Our ICU@Home program provides hospital-grade critical care right at your bedside. It is ideal for post-discharge, ventilator/oxygen-dependent, and palliative care patients. It includes 24/7 skilled ICU nurses, advanced equipment rental, daily documentation, and 24/7 emergency backup.';
    }

    if (input.includes('prescription') || input.includes('doctor note') || input.includes('mandatory')) {
      return 'Yes, for advanced clinical procedures (such as IV administration, catheter insertion, tracheostomy management, etc.), a valid doctor\'s prescription is strictly mandatory to ensure safety. For basic nursing support, dietitian consultations, and physiotherapies, we conduct a pre-service coordinator assessment.';
    }

    if (input.includes('price') || input.includes('cost') || input.includes('charge') || input.includes('fee') || input.includes('rate')) {
      return 'Our pricing is highly transparent, ethical, and tailored to the exact level of care required. Services are digitally invoiced with zero hidden charges. For a detailed customized quote, please reach out to us at +91 76542 47569 with your medical requirements.';
    }

    if (input.includes('contact') || input.includes('phone') || input.includes('call') || input.includes('whatsapp') || input.includes('email') || input.includes('number')) {
      return 'Here are our official contact details:\n\n📞 Phone & WhatsApp: +91 76542 47569\n📧 General: info@medicolinehealthcare.com\n📧 Founder: founder@medicolinehealthcare.com\n📧 Support: support@medicolinehealthcare.com\n📧 Careers: careers@medicolinehealthcare.com';
    }

    if (input.includes('partner') || input.includes('investor') || input.includes('referral') || input.includes('doctor partner') || input.includes('commission')) {
      return 'We partner with healthcare professionals, clinics, and hospitals. Doctors who integrate Medicoline services enjoy a doctor-first referral network (patients are referred back for reviews) and a 10% structured referral commission program. For investment enquiries, email founder@medicolinehealthcare.com.';
    }

    if (input.includes('career') || input.includes('job') || input.includes('work') || input.includes('apply') || input.includes('hire') || input.includes('hiring')) {
      return 'We are hiring verified professionals on a freelancing basis! Openings include: Staff Nurse, Physiotherapist, Medical Lab Technician, Care Coordinator, and Dietitian. Submit your application directly on our Careers page or email your resume to careers@medicolinehealthcare.com.';
    }

    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('greetings')) {
      return 'Hello there! How can I assist you with Medicoline Home Care Services today? Feel free to ask about our services, booking process, or areas of operation.';
    }

    return 'Thank you for reaching out. I want to make sure you get the most accurate details. Please call or WhatsApp our support team directly at +91 76542 47569 or email support@medicolinehealthcare.com. We are ready to assist you right away!';
  };

  return (
    <>
      <style>{`
        .chatbot-container {
          font-family: 'Inter', sans-serif;
          z-index: 10000;
        }
        .chatbot-header {
          background: linear-gradient(135deg, #C0392B 0%, #9E2B20 100%);
        }
        .chatbot-bubble-pulse {
          box-shadow: 0 0 0 0 rgba(192, 57, 43, 0.4);
          animation: chatbot-pulse 2s infinite;
        }
        @keyframes chatbot-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(192, 57, 43, 0.5);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(192, 57, 43, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(192, 57, 43, 0);
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #F3F4F6;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }
      `}</style>

      <div className="chatbot-container fixed bottom-6 right-4 z-[1150] flex flex-col items-end sm:right-6">
        {/* Chat Widget Window */}
        {isOpen && (
          <div className="mb-4 flex h-[500px] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 transform origin-bottom-right scale-100 sm:h-[580px]">
            {/* Header */}
            <div className="chatbot-header text-white p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-sm tracking-wide leading-tight">MEDICOLINE AI</h3>
                  <span className="text-[10px] text-white/80 font-bold tracking-wider flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse"></span>
                    Online &middot; Home Care Assistant
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/15 rounded-full transition-colors text-white"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-4 bg-[#F9FAFB] custom-scrollbar flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 max-w-[85%] ${
                    msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                      msg.sender === 'user'
                        ? 'bg-red-50 text-[#C0392B] border-red-100'
                        : 'bg-white text-gray-500 border-gray-100'
                    }`}
                  >
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className="flex flex-col">
                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-[#C0392B] text-white rounded-tr-none shadow-sm'
                          : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-gray-400 mt-1 px-1 self-end">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto whitespace-nowrap custom-scrollbar shrink-0">
              {QUICK_REPLIES.map((reply, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(reply.text)}
                  className="bg-gray-50 hover:bg-red-50 hover:text-[#C0392B] text-gray-600 text-xs py-1.5 px-3 rounded-full border border-gray-100 hover:border-red-100 transition-all font-semibold"
                >
                  {reply.text}
                </button>
              ))}
            </div>

            {/* Form Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center shrink-0"
            >
              <input
                type="text"
                placeholder="Type your message here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-gray-50 border border-gray-100 focus:border-[#C0392B]/50 rounded-full py-2.5 px-4 text-xs sm:text-sm outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#C0392B] hover:bg-[#8F2D22] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        )}

        {/* Floating Toggle Button */}
        <div className="relative flex items-center">
          {/* Tooltip */}
          {showTooltip && !isOpen && (
            <div className="absolute right-16 max-w-[min(16rem,calc(100vw-7rem))] rounded-xl bg-gray-900 px-3 py-2 text-xs font-bold text-white shadow-lg animate-fade-in flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              Need Help? Chat with us
              <div className="absolute right-[-4px] top-[12px] w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          )}

          {/* Button */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setShowTooltip(false);
            }}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white chatbot-bubble-pulse transition-all duration-300 transform hover:scale-105 ${
              isOpen ? 'bg-gray-800 rotate-90 shadow-md' : 'bg-[#C0392B] shadow-lg'
            }`}
            aria-label="Chatbot help support"
          >
            {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
          </button>
        </div>
      </div>
    </>
  );
}
