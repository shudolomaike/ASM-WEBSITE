import { LeadInput } from '../../types';

export interface NotionLeadProperties {
  Name: { title: [{ text: { content: string } }] };
  Division: { select: { name: string } };
  Phone: { phone_number: string };
  Email?: { email: string };
  Organisation?: { rich_text: [{ text: { content: string } }] };
  EventType?: { select: { name: string } };
  EventDate?: { date: { start: string } };
  Venue?: { rich_text: [{ text: { content: string } }] };
  BudgetRange?: { select: { name: string } };
  Deliverables?: { multi_select: { name: string }[] };
  Notes?: { rich_text: [{ text: { content: string } }] };
  SourcePage: { rich_text: [{ text: { content: string } }] };
  Status: { select: { name: 'New Enquiry' | 'Contacted' | 'Proposal Sent' | 'Won' | 'Archived' } };
}

export interface NotionLeadResponse {
  id: string;
  created_time: string;
  url?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  enquiryId: string;
  message: string;
  lead: LeadInput;
  timestamp: string;
  notionSynced: boolean;
}
