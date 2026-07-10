export type LeadSource = "missed_call" | "voicemail" | "sms" | "web_form";
export type LeadStatus = "new" | "quoted" | "won" | "lost";
export type PipelineColumn = "inbox" | "contacted" | "quoted" | "closed";

export interface Message {
  id: string;
  direction: "inbound" | "outbound" | "system";
  text: string;
  timestamp: string;
  automated?: boolean;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  service: string;
  source: LeadSource;
  status: LeadStatus;
  column: PipelineColumn;
  aiSummary: string;
  voicemailTranscript?: string;
  quoteAmount?: number;
  followUpDue?: boolean;
  responseTimeSeconds?: number;
  createdAt: string;
  lastActivity: string;
  messages: Message[];
}

export interface ActivityEvent {
  id: string;
  type: "missed_call" | "voicemail" | "sms_sent" | "follow_up" | "status_change";
  leadName: string;
  description: string;
  timestamp: string;
}

export const SAMPLE_LEADS: Lead[] = [
  {
    id: "lead-1",
    name: "Marcus Chen",
    phone: "(512) 555-0142",
    service: "Roof repair — storm damage",
    source: "voicemail",
    status: "new",
    column: "inbox",
    aiSummary:
      "Homeowner with hail damage on south-facing shingles. Needs inspection this week. Mentioned insurance claim already filed.",
    voicemailTranscript:
      "Hi, this is Marcus Chen at 142 Oak Trail. We had some hail last Tuesday and I've got missing shingles on the south side of the roof. Insurance already sent an adjuster but I need someone to come take a look and give me a quote. Call me back at 512-555-0142. Thanks.",
    responseTimeSeconds: 47,
    createdAt: "2026-07-10T18:42:00",
    lastActivity: "2026-07-10T18:43:00",
    messages: [
      {
        id: "m1",
        direction: "system",
        text: "Missed call from (512) 555-0142 — voicemail received",
        timestamp: "2026-07-10T18:42:00",
      },
      {
        id: "m2",
        direction: "outbound",
        text: "Hi Marcus! Thanks for calling Summit Roofing. We got your voicemail about hail damage on Oak Trail — we can schedule a free inspection tomorrow between 9–11am or 2–4pm. Which works better?",
        timestamp: "2026-07-10T18:42:47",
        automated: true,
      },
      {
        id: "m3",
        direction: "inbound",
        text: "Tomorrow 9-11 works great. Do you work with State Farm claims?",
        timestamp: "2026-07-10T18:51:00",
      },
    ],
  },
  {
    id: "lead-2",
    name: "Unknown caller",
    phone: "(737) 555-0891",
    service: "HVAC — AC not cooling",
    source: "missed_call",
    status: "new",
    column: "contacted",
    aiSummary:
      "Missed call with no voicemail. Auto-SMS sent. Customer replied: AC unit blowing warm air, needs service ASAP.",
    responseTimeSeconds: 38,
    createdAt: "2026-07-10T17:15:00",
    lastActivity: "2026-07-10T17:18:00",
    messages: [
      {
        id: "m4",
        direction: "system",
        text: "Missed call from (737) 555-0891 — no voicemail",
        timestamp: "2026-07-10T17:15:00",
      },
      {
        id: "m5",
        direction: "outbound",
        text: "Hey, saw you called Summit HVAC — how can I help?",
        timestamp: "2026-07-10T17:15:38",
        automated: true,
      },
      {
        id: "m6",
        direction: "inbound",
        text: "AC stopped cooling yesterday. House is 82 degrees. Can someone come today?",
        timestamp: "2026-07-10T17:18:00",
      },
      {
        id: "m7",
        direction: "outbound",
        text: "Absolutely — we have a tech available between 4–6pm today. What's your address?",
        timestamp: "2026-07-10T17:19:00",
        automated: true,
      },
    ],
  },
  {
    id: "lead-3",
    name: "Diane Foster",
    phone: "(512) 555-0337",
    service: "Landscaping — backyard redesign",
    source: "web_form",
    status: "quoted",
    column: "quoted",
    aiSummary:
      "Wants full backyard redesign: patio, native plants, irrigation. Budget ~$15k. Quote sent $14,200.",
    quoteAmount: 14200,
    followUpDue: true,
    createdAt: "2026-07-08T10:30:00",
    lastActivity: "2026-07-09T14:00:00",
    messages: [
      {
        id: "m8",
        direction: "system",
        text: "Web form submission received",
        timestamp: "2026-07-08T10:30:00",
      },
      {
        id: "m9",
        direction: "outbound",
        text: "Hi Diane! Thanks for reaching out about your backyard project. I'd love to learn more — are you free for a quick call Thursday?",
        timestamp: "2026-07-08T10:31:00",
        automated: true,
      },
      {
        id: "m10",
        direction: "inbound",
        text: "Thursday at 2pm works. Budget is around 15k.",
        timestamp: "2026-07-08T11:45:00",
      },
    ],
  },
  {
    id: "lead-4",
    name: "Tom & Lisa Rivera",
    phone: "(512) 555-0678",
    service: "Kitchen remodel — cabinet install",
    source: "sms",
    status: "won",
    column: "closed",
    aiSummary:
      "Referred by previous customer. Signed contract for cabinet installation. Start date July 21.",
    quoteAmount: 8700,
    createdAt: "2026-07-03T09:00:00",
    lastActivity: "2026-07-07T16:30:00",
    messages: [
      {
        id: "m11",
        direction: "inbound",
        text: "Hey Mike referred us. Need cabinets installed in our kitchen. Can you quote?",
        timestamp: "2026-07-03T09:00:00",
      },
      {
        id: "m12",
        direction: "outbound",
        text: "Welcome! Mike is great — we'd love to help. Can you send a few photos of the kitchen?",
        timestamp: "2026-07-03T09:02:00",
        automated: true,
      },
    ],
  },
  {
    id: "lead-5",
    name: "Greenfield Property Mgmt",
    phone: "(512) 555-0912",
    service: "Commercial cleaning — 3 offices",
    source: "voicemail",
    status: "lost",
    column: "closed",
    aiSummary:
      "Property manager seeking weekly cleaning for 3 office suites. Chose competitor with lower bid.",
    voicemailTranscript:
      "This is Sarah from Greenfield Property Management. We're looking for a commercial cleaning service for three office suites downtown. About 4,000 square feet total, weekly service. Please call back.",
    quoteAmount: 2200,
    createdAt: "2026-07-01T14:20:00",
    lastActivity: "2026-07-05T11:00:00",
    messages: [
      {
        id: "m13",
        direction: "system",
        text: "Voicemail transcribed and follow-up sent",
        timestamp: "2026-07-01T14:21:00",
      },
      {
        id: "m14",
        direction: "outbound",
        text: "Hi Sarah! Got your message about cleaning for three downtown office suites. We specialize in commercial — happy to do a walkthrough this week.",
        timestamp: "2026-07-01T14:21:42",
        automated: true,
      },
    ],
  },
  {
    id: "lead-6",
    name: "James Okonkwo",
    phone: "(737) 555-0445",
    service: "Plumbing — water heater replacement",
    source: "missed_call",
    status: "new",
    column: "inbox",
    aiSummary:
      "Missed call, auto-SMS sent. No reply yet. Follow-up scheduled in 18 hours.",
    followUpDue: false,
    responseTimeSeconds: 41,
    createdAt: "2026-07-10T16:00:00",
    lastActivity: "2026-07-10T16:00:41",
    messages: [
      {
        id: "m15",
        direction: "system",
        text: "Missed call from (737) 555-0445 — no voicemail",
        timestamp: "2026-07-10T16:00:00",
      },
      {
        id: "m16",
        direction: "outbound",
        text: "Hey, saw you called — how can I help?",
        timestamp: "2026-07-10T16:00:41",
        automated: true,
      },
    ],
  },
];

export const RECENT_ACTIVITY: ActivityEvent[] = [
  {
    id: "a1",
    type: "voicemail",
    leadName: "Marcus Chen",
    description: "Voicemail transcribed → SMS sent in 47s",
    timestamp: "2026-07-10T18:42:47",
  },
  {
    id: "a2",
    type: "sms_sent",
    leadName: "James Okonkwo",
    description: "Missed-call auto-text sent in 41s — awaiting reply",
    timestamp: "2026-07-10T16:00:41",
  },
  {
    id: "a3",
    type: "follow_up",
    leadName: "Diane Foster",
    description: "24h follow-up sent on open $14,200 quote",
    timestamp: "2026-07-10T14:00:00",
  },
  {
    id: "a4",
    type: "status_change",
    leadName: "Tom & Lisa Rivera",
    description: "Marked Won — contract signed",
    timestamp: "2026-07-07T16:30:00",
  },
];

export const DEMO_STATS = {
  leadsCapturedToday: 4,
  avgResponseSeconds: 42,
  openQuotes: 2,
  recoveredThisMonth: 7,
};

export const FEATURES = [
  {
    title: "Voicemail → SMS in 60s",
    description:
      "AI transcribes every voicemail and sends a personalized text response before the lead calls your competitor.",
    icon: "voicemail",
  },
  {
    title: "Missed-call capture",
    description:
      "No voicemail? No problem. Auto-texts \"Hey, saw you called — how can I help?\" to start the conversation.",
    icon: "phone",
  },
  {
    title: "Unified pipeline",
    description:
      "Calls, texts, and web forms land in one kanban board with AI-generated summaries — no more scattered notes.",
    icon: "pipeline",
  },
  {
    title: "Auto follow-up",
    description:
      "No reply in 24 hours? LeadCatcher sends a second touch on your configured cadence.",
    icon: "clock",
  },
  {
    title: "Quote tracker",
    description:
      "Mark leads New, Quoted, Won, or Lost. Get reminders on open quotes so nothing slips through.",
    icon: "quote",
  },
  {
    title: "Agent-powered",
    description:
      "Transcription, response generation, and follow-up sequences run autonomously — you just close deals.",
    icon: "agent",
  },
];

export const PIPELINE_COLUMNS: { id: PipelineColumn; label: string }[] = [
  { id: "inbox", label: "New Leads" },
  { id: "contacted", label: "Contacted" },
  { id: "quoted", label: "Quoted" },
  { id: "closed", label: "Won / Lost" },
];

export const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  quoted: "Quoted",
  won: "Won",
  lost: "Lost",
};

export const STATUS_COLORS: Record<LeadStatus, string> = {
  new: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  quoted: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  won: "bg-brand-500/20 text-brand-300 border-brand-500/30",
  lost: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
};

export const SOURCE_LABELS: Record<LeadSource, string> = {
  missed_call: "Missed Call",
  voicemail: "Voicemail",
  sms: "SMS",
  web_form: "Web Form",
};
