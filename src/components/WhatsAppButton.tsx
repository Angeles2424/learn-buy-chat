
import React from 'react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  phoneNumber: string;
  courseTitle: string;
  price: number;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, courseTitle, price }) => {
  // Remove any non-numeric characters from the phone number
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  const message = `Hola, quiero comprar el curso ${courseTitle} por $${price}`;
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
  
  return (
    <Button 
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-lg w-full"
      onClick={() => window.open(whatsappUrl, '_blank')}
    >
      Comprar por WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
