import { Currency, CartItem, DeliveryOption } from '../types';
import { CONTACT_INFO } from '../data/products';

export const formatPrice = (
  priceUGX: number,
  priceUSD: number,
  currency: Currency
): string => {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(priceUSD);
  }

  return `UGX ${new Intl.NumberFormat('en-UG').format(priceUGX)}`;
};

/**
 * Encodes a direct WhatsApp URL with a pre-filled luxury inquiry or order ticket
 */
export const createWhatsAppOrderLink = (params: {
  productName?: string;
  priceUGX?: number;
  priceUSD?: number;
  currency?: Currency;
  size?: string;
  color?: string;
  customNotes?: string;
  isCustomBespoke?: boolean;
  bespokeDetails?: Record<string, string>;
  cartItems?: CartItem[];
  deliveryOption?: DeliveryOption;
  totalUGX?: number;
  totalUSD?: number;
  customerName?: string;
  customerPhone?: string;
  customerAddress?: string;
}): string => {
  const cleanPhone = CONTACT_INFO.primaryWhatsApp.replace(/[^0-9]/g, '');

  let message = `✨ *JAMMY HANDMADE - ORDER INQUIRY* ✨\n\n`;

  if (params.cartItems && params.cartItems.length > 0) {
    message += `Hello Jammy! I would like to place an order from your website:\n\n`;
    message += `🛍️ *ITEMIZED BAG (${params.cartItems.length} items):*\n`;

    params.cartItems.forEach((item, index) => {
      const priceStr = formatPrice(
        item.product.priceUGX * item.quantity,
        item.product.priceUSD * item.quantity,
        params.currency || 'UGX'
      );
      message += `\n${index + 1}. *${item.product.name}* (Qty: ${item.quantity})\n`;
      message += `   • Size: ${item.size}\n`;
      message += `   • Yarn Color: ${item.color.name}\n`;
      if (item.customNotes) {
        message += `   • Custom Notes: "${item.customNotes}"\n`;
      }
      message += `   • Subtotal: ${priceStr}\n`;
    });

    if (params.deliveryOption) {
      const deliveryCostStr = formatPrice(
        params.deliveryOption.costUGX,
        params.deliveryOption.costUSD,
        params.currency || 'UGX'
      );
      message += `\n🚚 *DELIVERY REGION:*\n${params.deliveryOption.label} (${deliveryCostStr})\n`;
    }

    if (params.totalUGX && params.totalUSD) {
      const grandTotalStr = formatPrice(
        params.totalUGX,
        params.totalUSD,
        params.currency || 'UGX'
      );
      message += `\n💎 *ESTIMATED TOTAL: ${grandTotalStr}*\n`;
    }

    if (params.customerName) {
      message += `\n👤 *CLIENT DETAILS:*\n`;
      message += `Name: ${params.customerName}\n`;
      if (params.customerPhone) message += `Phone: ${params.customerPhone}\n`;
      if (params.customerAddress) message += `Delivery Address: ${params.customerAddress}\n`;
    }
  } else if (params.isCustomBespoke && params.bespokeDetails) {
    message += `Hello Jammy! I would like to commission a *Bespoke Custom Crochet Piece*:\n\n`;
    message += `👗 *Garment / Piece Type:* ${params.bespokeDetails.garmentType || 'Custom Piece'}\n`;
    message += `🧶 *Stitch & Silhouette:* ${params.bespokeDetails.stitchStyle || 'Artisan Couture'}\n`;
    message += `🎨 *Yarn Palette:* ${params.bespokeDetails.primaryColor || 'Custom Shade'}\n`;
    message += `📏 *Custom Measurements:*\n`;
    if (params.bespokeDetails.bust) message += `   • Bust: ${params.bespokeDetails.bust}\n`;
    if (params.bespokeDetails.waist) message += `   • Waist: ${params.bespokeDetails.waist}\n`;
    if (params.bespokeDetails.hips) message += `   • Hips: ${params.bespokeDetails.hips}\n`;
    if (params.bespokeDetails.length) message += `   • Desired Length: ${params.bespokeDetails.length}\n`;
    if (params.bespokeDetails.eventDate) message += `📅 *Event / Needed By:* ${params.bespokeDetails.eventDate}\n`;
    if (params.bespokeDetails.additionalNotes) {
      message += `📝 *Design Notes:* ${params.bespokeDetails.additionalNotes}\n`;
    }
  } else if (params.productName) {
    message += `Hello Jammy! I am interested in ordering:\n`;
    message += `*${params.productName}*\n`;
    if (params.size) message += `• Size: ${params.size}\n`;
    if (params.color) message += `• Selected Color: ${params.color}\n`;
    if (params.priceUGX && params.priceUSD) {
      message += `• Price: ${formatPrice(params.priceUGX, params.priceUSD, params.currency || 'UGX')}\n`;
    }
    if (params.customNotes) {
      message += `• Custom Requests: ${params.customNotes}\n`;
    }
  }

  message += `\nPlease confirm production availability, timeline, and payment details. Thank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};
