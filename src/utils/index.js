import { isEmpty } from "lodash";

export const validateTicketInfo = (ticketDetails = {}) => {
  if (isEmpty(ticketDetails?.title)) {
    return true;
  }
  if (isEmpty(ticketDetails?.description)) {
    return true;
  }
  if (isEmpty(ticketDetails?.category)) {
    return true;
  }
  if (isEmpty(ticketDetails?.priority)) {
    return true;
  }
  return false;
};

export const formatDate = (date = new Date()) => {
  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();
};

/** Logic to Auto generate Ticket ID */
var count = 120;

export const generateTicketId = () => {
  count++;
  return `TC-${count}`;
};

export const createTicket = (ticketInfo) => {
  return {
    title: ticketInfo?.title,
    description: ticketInfo?.description,
    category: ticketInfo?.category,
    priority: ticketInfo?.priority,
    id: generateTicketId(),
    createdBy: "John Doe",
    createdAt: formatDate(),
    status: "NEW",
  };
};
