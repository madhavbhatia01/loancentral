"use client";

import React, { useState } from "react";
import { MessageSquare, Send, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "General Inquiry",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 md:py-20 hm-bg-paper-soft space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="px-3.5 py-1.5 rounded-full hm-bg-mint-soft border hm-border-mint hm-text-mint text-xs font-bold ">
          Customer Support &amp; Assistance
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold hm-text-ink max-w-3xl mx-auto leading-tight">
          How can we help you today?
        </h1>

        <p className="hm-text-ink-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Submit your question or query regarding loan eligibility, repayment schedules, or consent privacy. Our automated support ticket system will route your query to the dedicated team.
        </p>
      </section>

      {/* Main Support Query Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hm-bg-card p-8 sm:p-12 rounded-3xl border hm-border-rule shadow-xl space-y-6">
          
          <div className="flex items-center gap-3 pb-4 border-b hm-border-rule">
            <div className="w-10 h-10 rounded-xl hm-bg-mint-soft hm-text-blue flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold hm-text-ink">Submit a Customer Support Ticket</h2>
              <p className="text-xs hm-text-muted">Fill in the details below to log a support request.</p>
            </div>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold hm-text-ink-soft ">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border hm-border-rule text-sm focus:outline-none hm-focus focus:ring-1 hm-focus"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold hm-text-ink-soft ">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border hm-border-rule text-sm focus:outline-none hm-focus focus:ring-1 hm-focus hm-bg-card"
                  >
                    <option>General Inquiry</option>
                    <option>Loan Eligibility &amp; Criteria</option>
                    <option>EMI Calculator Questions</option>
                    <option>Privacy &amp; Data Consent</option>
                    <option>Grievance &amp; Compliance</option>
                  </select>
                </div>

              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold hm-text-ink-soft ">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Brief summary of your query"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border hm-border-rule text-sm focus:outline-none hm-focus focus:ring-1 hm-focus"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold hm-text-ink-soft ">
                  Detailed Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please describe your question in detail..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border hm-border-rule text-sm focus:outline-none hm-focus focus:ring-1 hm-focus"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl hm-primary hm-hover-primary hm-text-paper font-bold text-sm flex items-center justify-center gap-2 shadow-lg hm-shadow-primary transition-colors"
              >
                <span>Submit Ticket</span>
                <Send className="w-4 h-4 hm-text-coral" />
              </button>
            </form>
          ) : (
            <div className="p-8 rounded-2xl hm-bg-mint-soft border hm-border-mint text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full hm-bg-mint-soft hm-text-mint flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold hm-text-mint">
                Support Request Submitted Successfully!
              </h3>
              <p className="text-xs hm-text-mint max-w-md mx-auto">
                Thank you, <strong className="hm-text-mint">{formData.name}</strong>. Your ticket regarding &quot;{formData.subject}&quot; has been logged into our support system.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: "", category: "General Inquiry", subject: "", message: "" });
                }}
                className="px-6 py-2.5 hm-bg-mint hm-text-paper rounded-xl text-xs font-semibold hm-hover-mint transition-colors mt-2"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Security & Transparency Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl hm-bg-blue-soft hm-text-ink-soft border hm-border-blue text-xs flex items-center gap-4">
          <ShieldCheck className="w-8 h-8 hm-text-blue flex-shrink-0" />
          <p className="leading-relaxed">
            LoanCentral provides direct web ticketing for customer query resolution in accordance with RBI Digital Lending Framework standards. All submitted information is encrypted using 256-bit SSL protocols.
          </p>
        </div>
      </section>

    </div>
  );
}
