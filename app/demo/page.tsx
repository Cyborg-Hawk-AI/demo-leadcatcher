"use client";

import { useState } from "react";
import { Header } from "@/components/layout";
import {
  SAMPLE_LEADS,
  RECENT_ACTIVITY,
  DEMO_STATS,
  PIPELINE_COLUMNS,
  STATUS_LABELS,
  STATUS_COLORS,
  SOURCE_LABELS,
  type Lead,
  type LeadStatus,
  type PipelineColumn,
} from "@/lib/data";

function formatTime(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string | number;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        accent
          ? "border-brand-500/30 bg-brand-500/10"
          : "border-white/5 bg-surface-800/50"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <p
        className={`mt-1 text-2xl font-bold ${
          accent ? "text-brand-300" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function LeadCard({
  lead,
  selected,
  onClick,
}: {
  lead: Lead;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-lg border p-3 text-left transition ${
        selected
          ? "border-brand-500/50 bg-brand-500/10 ring-1 ring-brand-500/30"
          : "border-white/5 bg-surface-700/50 hover:border-white/10 hover:bg-surface-700"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-white">{lead.name}</p>
        <span
          className={`shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-medium ${STATUS_COLORS[lead.status]}`}
        >
          {STATUS_LABELS[lead.status]}
        </span>
      </div>
      <p className="mt-1 text-xs text-zinc-400 line-clamp-1">{lead.service}</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-zinc-400">
          {SOURCE_LABELS[lead.source]}
        </span>
        {lead.responseTimeSeconds && (
          <span className="text-[10px] text-brand-400">
            {lead.responseTimeSeconds}s response
          </span>
        )}
        {lead.followUpDue && (
          <span className="text-[10px] text-amber-400">Follow-up due</span>
        )}
      </div>
    </button>
  );
}

function LeadDetail({
  lead,
  onStatusChange,
  onMoveColumn,
}: {
  lead: Lead;
  onStatusChange: (status: LeadStatus) => void;
  onMoveColumn: (column: PipelineColumn) => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-white/5 p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">{lead.name}</h2>
            <p className="text-sm text-zinc-400">{lead.phone}</p>
          </div>
          <select
            value={lead.status}
            onChange={(e) => onStatusChange(e.target.value as LeadStatus)}
            className="rounded-lg border border-white/10 bg-surface-700 px-3 py-1.5 text-sm text-white"
          >
            {(Object.keys(STATUS_LABELS) as LeadStatus[]).map((s) => (
              <option key={s} value={s}>
                {STATUS_LABELS[s]}
              </option>
            ))}
          </select>
        </div>
        <p className="mt-3 text-sm text-zinc-300">{lead.service}</p>
        {lead.quoteAmount && (
          <p className="mt-2 text-sm font-medium text-amber-300">
            Quote: {formatCurrency(lead.quoteAmount)}
            {lead.followUpDue && (
              <span className="ml-2 text-xs text-amber-400">
                · Reminder sent
              </span>
            )}
          </p>
        )}
      </div>

      <div className="border-b border-white/5 p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-brand-400">
          AI Summary
        </p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
          {lead.aiSummary}
        </p>
        {lead.voicemailTranscript && (
          <div className="mt-4 rounded-lg border border-white/5 bg-surface-900/50 p-3">
            <p className="text-xs font-medium text-zinc-500">
              Voicemail transcript
            </p>
            <p className="mt-1 text-sm italic text-zinc-400">
              &quot;{lead.voicemailTranscript}&quot;
            </p>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Conversation
        </p>
        <div className="space-y-3">
          {lead.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.direction === "inbound"
                  ? "justify-start"
                  : msg.direction === "outbound"
                    ? "justify-end"
                    : "justify-center"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  msg.direction === "inbound"
                    ? "bg-surface-700 text-zinc-200"
                    : msg.direction === "outbound"
                      ? "bg-brand-600 text-white"
                      : "bg-white/5 text-zinc-500 text-xs"
                }`}
              >
                {msg.automated && msg.direction === "outbound" && (
                  <span className="mb-1 block text-[10px] opacity-70">
                    AI auto-reply
                  </span>
                )}
                {msg.text}
                <p className="mt-1 text-[10px] opacity-60">
                  {formatTime(msg.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 p-4">
        <p className="mb-2 text-xs text-zinc-500">Move to column</p>
        <div className="flex flex-wrap gap-2">
          {PIPELINE_COLUMNS.map((col) => (
            <button
              key={col.id}
              type="button"
              onClick={() => onMoveColumn(col.id)}
              disabled={lead.column === col.id}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                lead.column === col.id
                  ? "bg-brand-500/20 text-brand-300"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {col.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActivityFeed() {
  const icons: Record<string, string> = {
    missed_call: "📞",
    voicemail: "🎙️",
    sms_sent: "💬",
    follow_up: "⏰",
    status_change: "✓",
  };

  return (
    <div className="space-y-3">
      {RECENT_ACTIVITY.map((event) => (
        <div
          key={event.id}
          className="flex gap-3 rounded-lg border border-white/5 bg-surface-800/50 p-3"
        >
          <span className="text-lg">{icons[event.type]}</span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white">{event.leadName}</p>
            <p className="text-xs text-zinc-400">{event.description}</p>
            <p className="mt-1 text-[10px] text-zinc-600">
              {formatTime(event.timestamp)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DemoPage() {
  const [leads, setLeads] = useState(SAMPLE_LEADS);
  const [selectedId, setSelectedId] = useState<string>(SAMPLE_LEADS[0].id);
  const [activeTab, setActiveTab] = useState<"pipeline" | "activity">(
    "pipeline"
  );

  const selectedLead = leads.find((l) => l.id === selectedId) ?? leads[0];

  const updateLead = (id: string, patch: Partial<Lead>) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...patch } : l))
    );
  };

  const handleStatusChange = (status: LeadStatus) => {
    const columnMap: Record<LeadStatus, PipelineColumn> = {
      new: "inbox",
      quoted: "quoted",
      won: "closed",
      lost: "closed",
    };
    updateLead(selectedId, { status, column: columnMap[status] });
  };

  const handleMoveColumn = (column: PipelineColumn) => {
    const statusMap: Record<PipelineColumn, LeadStatus | undefined> = {
      inbox: "new",
      contacted: "new",
      quoted: "quoted",
      closed: undefined,
    };
    const patch: Partial<Lead> = { column };
    const newStatus = statusMap[column];
    if (newStatus) patch.status = newStatus;
    updateLead(selectedId, patch);
  };

  return (
    <div className="flex min-h-screen flex-col bg-surface-900">
      <Header variant="demo" />

      <div className="border-b border-white/5 bg-surface-800/50 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-white">
              Summit Services — Lead Pipeline
            </h1>
            <p className="text-sm text-zinc-400">
              Roofing · HVAC · Landscaping · Demo data
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard
              label="Leads today"
              value={DEMO_STATS.leadsCapturedToday}
              accent
            />
            <StatCard
              label="Avg response"
              value={`${DEMO_STATS.avgResponseSeconds}s`}
            />
            <StatCard label="Open quotes" value={DEMO_STATS.openQuotes} />
            <StatCard
              label="Recovered/mo"
              value={DEMO_STATS.recoveredThisMonth}
            />
          </div>
        </div>
      </div>

      {/* Mobile tabs */}
      <div className="flex border-b border-white/5 md:hidden">
        <button
          type="button"
          onClick={() => setActiveTab("pipeline")}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "pipeline"
              ? "border-b-2 border-brand-500 text-brand-400"
              : "text-zinc-500"
          }`}
        >
          Pipeline
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("activity")}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === "activity"
              ? "border-b-2 border-brand-500 text-brand-400"
              : "text-zinc-500"
          }`}
        >
          Activity
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col md:flex-row">
        {/* Kanban */}
        <div
          className={`flex-1 overflow-x-auto p-4 md:p-6 ${
            activeTab !== "pipeline" ? "hidden md:block" : ""
          }`}
        >
          <div className="flex min-h-[500px] gap-4">
            {PIPELINE_COLUMNS.map((col) => {
              const columnLeads = leads.filter((l) => l.column === col.id);
              return (
                <div
                  key={col.id}
                  className="flex w-72 shrink-0 flex-col rounded-xl border border-white/5 bg-surface-800/30"
                >
                  <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                    <h3 className="text-sm font-medium text-zinc-300">
                      {col.label}
                    </h3>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-500">
                      {columnLeads.length}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-3">
                    {columnLeads.map((lead) => (
                      <LeadCard
                        key={lead.id}
                        lead={lead}
                        selected={lead.id === selectedId}
                        onClick={() => setSelectedId(lead.id)}
                      />
                    ))}
                    {columnLeads.length === 0 && (
                      <p className="py-8 text-center text-xs text-zinc-600">
                        No leads
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div
          className={`w-full border-t border-white/5 md:w-96 md:border-l md:border-t-0 lg:w-[420px] ${
            activeTab !== "pipeline" ? "hidden md:flex" : "flex"
          } flex-col bg-surface-800/50`}
        >
          <LeadDetail
            lead={selectedLead}
            onStatusChange={handleStatusChange}
            onMoveColumn={handleMoveColumn}
          />
        </div>

        {/* Activity sidebar */}
        <div
          className={`w-full border-t border-white/5 p-4 md:w-72 md:border-l md:border-t-0 ${
            activeTab !== "activity" ? "hidden md:block" : ""
          }`}
        >
          <h3 className="mb-4 text-sm font-medium text-zinc-300">
            Agent Activity
          </h3>
          <ActivityFeed />
          <div className="mt-6 rounded-xl border border-brand-500/20 bg-brand-500/5 p-4">
            <p className="text-xs font-medium text-brand-400">Automation</p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              Follow-up cadence: 24h → 72h → 7d. All agents running. Next
              scheduled action in 18h for James Okonkwo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
