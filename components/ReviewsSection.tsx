"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Star, ShieldCheck, CheckCircle2, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const reviews = [
    {
      name: "Ananya Sharma",
      role: "QA Engineer · IT Services",
      location: "Bengaluru, Karnataka",
      avatar: "/images/reviewer-ananya.webp",
      tag: "Month-End Support",
      review:
        "My car broke down mid-month. Instead of getting locked into long-term compounding debt, LoanCentral gave me a simple single-bullet repayment aligned with my next salary date. Direct bank disbursal was smooth and transparent!",
    },
    {
      name: "Rahul Verma",
      role: "Operations Specialist · Logistics",
      location: "Powai, Mumbai",
      avatar: "/images/reviewer-rahul.webp",
      tag: "Medical Emergency",
      review:
        "Needed immediate funds for hospital deposit before corporate health insurance reimbursement kicked in. Paperless e-KYC via DigiLocker was seamless, and all charges were clearly shown upfront before OTP consent.",
    },
    {
      name: "Priya Nair",
      role: "Digital Marketing Specialist",
      location: "Viman Nagar, Pune",
      avatar: "/images/reviewer-priya.webp",
      tag: "Delayed Salary Support",
      review:
        "Company payroll was delayed over the festive break and I needed to clear apartment rent and utility bills on time. LoanCentral was a lifesaver—clean disbursal and zero hidden charges when I settled on salary day.",
    },
    {
      name: "Vikramaditya Rao",
      role: "Senior Cloud Support Lead",
      location: "HITEC City, Hyderabad",
      avatar: "/images/reviewer-vikram.webp",
      tag: "Certification & Skills",
      review:
        "Signed up for an advanced cloud architect certification cohort before the registration deadline. Repaid in a single settlement after my salary credited. Super transparent pricing and regulated NBFC partnership.",
    },
  ];

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = ((index % reviews.length) + reviews.length) % reviews.length;
    setActiveIndex(clamped);
    const card = container.children[clamped] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - 16,
        behavior: "smooth",
      });
    }
  };

  // Auto-advance every 4 seconds when not hovering or dragging
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % reviews.length;
        const container = scrollRef.current;
        if (container) {
          const card = container.children[next] as HTMLElement | undefined;
          if (card) {
            container.scrollTo({
              left: card.offsetLeft - 16,
              behavior: "smooth",
            });
          }
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, reviews.length]);

  // Update active dot on manual scroll / swipe
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    let closestIdx = 0;
    let minDiff = Infinity;
    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const diff = Math.abs(el.offsetLeft - 16 - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    setActiveIndex(closestIdx);
  };

  // Mouse drag-to-slide handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - container.offsetLeft;
    dragScrollLeft.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.4;
    scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <section id="reviews" className="py-14 sm:py-20 hm-bg-paper-soft border-b hm-border-rule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header (Zero Figures) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full hm-bg-blue-soft border hm-border-blue hm-text-blue text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 hm-text-blue" />
              <span>Real Borrower Feedback</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black hm-text-ink tracking-tight">
              Trusted by{" "}
              <span className="hm-text-blue">
                salaried professionals across India.
              </span>
            </h2>
            <p className="text-xs sm:text-sm hm-text-ink-soft max-w-xl leading-relaxed">
              Swipe, drag, or select any verified borrower story below to see how professionals handle mid-month expenses.
            </p>
          </div>

          {/* Interactive Controls: Rating Card + Prev/Next Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="p-3.5 sm:p-4 rounded-2xl hm-bg-card border hm-border-rule shadow-sm flex items-center gap-3 flex-shrink-0">
              <div className="text-center pr-3 border-r hm-border-rule">
                <div className="text-sm sm:text-base font-black hm-text-ink">Top Rated</div>
                <div className="flex items-center justify-center gap-0.5 hm-text-coral mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 hm-fill-coral hm-text-coral" />
                  ))}
                </div>
              </div>
              <div className="text-xs space-y-0.5">
                <div className="font-bold hm-text-ink">Verified Borrowers</div>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold hm-text-mint">
                  <CheckCircle2 className="w-3 h-3" /> Salaried Verified
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToCard(activeIndex - 1)}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 flex items-center justify-center shadow-xs transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollToCard(activeIndex + 1)}
                aria-label="Next review"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 flex items-center justify-center shadow-xs transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 1-Row Draggable, Swipeable & Auto-Sliding Horizontal Track */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            stopDragging();
          }}
          className="space-y-4"
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            className={`flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`w-[300px] sm:w-[360px] flex-shrink-0 snap-start p-5 sm:p-6 rounded-3xl hm-bg-card border transition-all flex flex-col justify-between space-y-4 ${
                  activeIndex === idx
                    ? "border-blue-400 shadow-md"
                    : "hm-border-rule shadow-xs hover:shadow-md"
                }`}
              >
                {/* Header: Indian Salaried Face Avatar, Name, Verified Tag */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 hm-border-blue flex-shrink-0 bg-slate-100">
                      <Image
                        src={rev.avatar}
                        alt={`${rev.name} - Salaried Borrower`}
                        fill
                        sizes="48px"
                        className="object-cover pointer-events-none"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-bold hm-text-ink">{rev.name}</h3>
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded hm-bg-mint-soft hm-text-mint text-[10px] font-bold border hm-border-mint">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                        </span>
                      </div>
                      <div className="text-xs hm-text-muted">{rev.role}</div>
                      <div className="text-[11px] hm-text-muted font-medium">{rev.location}</div>
                    </div>
                  </div>
                </div>

                {/* Tag Pill (Zero Figures) */}
                <div className="flex items-center justify-between text-[11px] font-semibold py-1.5 px-3 rounded-xl hm-bg-paper-soft border hm-border-rule">
                  <span className="hm-text-coral">{rev.tag}</span>
                  <div className="flex items-center gap-0.5 hm-text-coral">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 hm-fill-coral hm-text-coral" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative text-xs sm:text-[13px] hm-text-ink-soft leading-relaxed font-normal flex-1">
                  <Quote className="w-4 h-4 hm-text-blue mb-1 opacity-60" />
                  <p>"{rev.review}"</p>
                </div>

                {/* Review Footer */}
                <div className="pt-2.5 border-t hm-border-rule flex items-center justify-between text-[11px] hm-text-muted">
                  <span>Verified Salaried Borrower</span>
                  <span className="hm-text-mint font-semibold">Direct Bank Credit</span>
                </div>
              </div>
            ))}
          </div>

          {/* Clickable Reviewer Selector Dots / Pills */}
          <div className="flex items-center justify-center gap-2 pt-1">
            {reviews.map((rev, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Select review by ${rev.name}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === idx
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Metric Strip (Zero Figures) */}
        <div className="p-4 sm:p-6 rounded-2xl hm-bg-card border hm-border-rule shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-base sm:text-lg font-black hm-text-ink">Direct Disbursal</div>
            <div className="text-[11px] sm:text-xs hm-text-muted font-medium mt-0.5">To Salary Account</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-black hm-text-blue">Paperless KYC</div>
            <div className="text-[11px] sm:text-xs hm-text-muted font-medium mt-0.5">Digital Verification</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-black hm-text-ink">Zero Advance</div>
            <div className="text-[11px] sm:text-xs hm-text-muted font-medium mt-0.5">No Upfront Application Fee</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-black hm-text-mint">Regulated</div>
            <div className="text-[11px] sm:text-xs hm-text-muted font-medium mt-0.5">RBI Regulated NBFC Partner</div>
          </div>
        </div>

      </div>
    </section>
  );
}
