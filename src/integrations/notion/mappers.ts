import { LeadInput } from '../../types';
import { NotionLeadProperties } from './types';

/**
 * Maps incoming ASMG lead input to standardized Notion Database properties
 */
export function mapLeadToNotionProperties(lead: LeadInput): NotionLeadProperties {
  return {
    Name: {
      title: [{ text: { content: lead.name || 'Anonymous Lead' } }],
    },
    Division: {
      select: { name: lead.division.toUpperCase() },
    },
    Phone: {
      phone_number: lead.phone,
    },
    ...(lead.email ? { Email: { email: lead.email } } : {}),
    ...(lead.organisation ? {
      Organisation: { rich_text: [{ text: { content: lead.organisation } }] },
    } : {}),
    ...(lead.eventType ? {
      EventType: { select: { name: lead.eventType } },
    } : {}),
    ...(lead.eventDate ? {
      EventDate: { date: { start: lead.eventDate } },
    } : {}),
    ...(lead.venue ? {
      Venue: { rich_text: [{ text: { content: lead.venue } }] },
    } : {}),
    ...(lead.budgetRange ? {
      BudgetRange: { select: { name: lead.budgetRange } },
    } : {}),
    Deliverables: {
      multi_select: (lead.deliverables || []).map((deliv) => ({ name: deliv.slice(0, 50) })),
    },
    Notes: {
      rich_text: [{ text: { content: lead.message || 'No additional notes provided' } }],
    },
    SourcePage: {
      rich_text: [{ text: { content: lead.sourcePage || '/' } }],
    },
    Status: {
      select: { name: 'New Enquiry' },
    },
  };
}
