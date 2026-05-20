"use client";

import React, { useState } from "react";
import { Clock, Video, Globe, ChevronLeft, ChevronRight, User, Mail, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ConsultationPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const slots = ["10:00 AM", "10:30 AM", "11:00 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:00 PM"];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonthName = monthNames[currentMonth.getMonth()];
  const currentYear = currentMonth.getFullYear();

  // Normalize today's date to midnight for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const renderDays = () => {
    const days = [];

    // Empty slots for the first day offset
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`}></div>);
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth.getMonth(), i);
      const isPast = date < today;
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime();

      if (isPast) {
        days.push(
          <div key={i} className="h-12 flex items-center justify-center">
            <div className="text-gray-300 font-medium text-[15px]">{i}</div>
          </div>
        );
      } else {
        days.push(
          <div key={i} className="h-12 flex items-center justify-center">
            <div
              onClick={() => {
                setSelectedDate(date);
                setSelectedTime(null);
              }}
              className={`font-bold cursor-pointer flex items-center justify-center transition-all ${isSelected
                ? "text-white bg-[#f97316] border-[3px] border-blue-500 rounded-[10px] w-11 h-11"
                : "text-gray-900 hover:bg-blue-50 rounded-full w-10 h-10 text-[15px]"
                }`}
            >
              {i}
            </div>
          </div>
        );
      }
    }
    return days;
  };

  const formattedSelectedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    : "Select a Date";

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = selectedDate && selectedTime && formData.name && formData.email && formData.phone;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const subject = encodeURIComponent(`New Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Date: ${formattedSelectedDate}
Time: ${selectedTime}

Additional Notes:
${formData.notes}`);

    window.location.href = `mailto:info@betopialimited.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] py-20 px-4 md:px-6 font-sans">
      <div className="max-w-7xl mx-auto mt-12">

        {/* ═══════════════════════════════════════════
            TOP BANNER
        ═══════════════════════════════════════════ */}
        <div className="bg-[#f97316] rounded-xl p-8 text-white shadow-sm border-b-4 border-orange-600/30">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 text-xs font-semibold tracking-wide mb-4">
            Betopia Meeting
          </div>
          <h1 className="text-3xl font-bold mb-4 tracking-tight">30 Minute Meeting</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/95">
            <div className="flex items-center gap-2"><Clock size={16} /> 30 min</div>
            <div className="flex items-center gap-2"><Video size={16} /> Web conferencing details provided upon confirmation</div>
            <div className="flex items-center gap-2"><Globe size={16} /> Asia/Dhaka</div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            MAIN CONTENT SPLIT
        ═══════════════════════════════════════════ */}
        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 mt-4 flex flex-col md:flex-row min-h-[600px] overflow-hidden">

          {/* LEFT SIDE: CALENDAR */}
          <div className="w-full md:w-[60%] p-8 lg:p-12 border-b md:border-b-0 md:border-r border-gray-100">
            <h2 className="text-[26px] font-bold text-gray-800 mb-1 tracking-tight">Select a Date & Time</h2>
            <p className="text-gray-500 text-sm mb-10">Choose your preferred date and time slot</p>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

              {/* Calendar Grid */}
              <div className="flex-1 max-w-sm">
                <div className="flex items-center justify-between mb-8">
                  <button
                    type="button"
                    onClick={handlePrevMonth}
                    className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                  </button>
                  <span className="font-bold text-gray-900 text-[16px]">
                    {currentMonthName} {currentYear}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextMonth}
                    className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-y-4 mb-2 text-center text-[11px] font-bold text-blue-600 tracking-wider">
                  <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
                </div>

                <div className="grid grid-cols-7 gap-y-1 text-center">
                  {renderDays()}
                </div>
              </div>

              {/* Day details side-panel */}
              <div className="w-full lg:w-48 flex flex-col pt-8 lg:pt-0">
                <h3 className="font-bold text-gray-900 mb-6 tracking-tight text-[15px]">
                  {formattedSelectedDate}
                </h3>

                {selectedDate ? (
                  <div className="flex flex-col gap-3 pr-2 pb-2">
                    {slots.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-lg text-sm font-bold transition-all border outline-none ${selectedTime === time
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                          : "bg-white text-blue-600 border-blue-200 hover:border-blue-600 hover:bg-blue-50"
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-400 text-[13px] font-medium mt-16 text-center lg:text-left">
                    Select a date to view available time slots.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="w-full md:w-[40%] p-8 lg:p-12 bg-gray-50/50">
            <h2 className="text-[19px] font-bold text-gray-900 mb-2 tracking-tight">Enter Details</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-gray-800 mb-2 tracking-wide">
                  <User size={15} className="text-blue-600" /> Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full h-11 px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-[15px] placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-gray-800 mb-2 tracking-wide">
                  <Mail size={15} className="text-blue-600" /> Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full h-11 px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-[15px] placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-gray-800 mb-2 tracking-wide">
                  <Phone size={15} className="text-blue-600" /> Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full h-11 px-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-[15px] placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-gray-800 mb-2 tracking-wide">
                  <MessageSquare size={15} className="text-blue-600" /> Additional Notes
                </label>
                <div className="relative">
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Please share anything that will help prepare for our meeting..."
                    className="w-full p-4 rounded-[10px] border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-[15px] placeholder:text-gray-400 resize-none"
                  ></textarea>
                  <div className="absolute bottom-3 right-3 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                    <User size={11} className="text-white" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-[85%] lg:w-[65%] h-12 font-bold rounded-[10px] text-[15px] transition-all ${isFormValid
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 cursor-pointer"
                  : "bg-[#E5E7EB] text-gray-500 cursor-not-allowed"
                  }`}
              >
                Schedule Event
              </button>

              <div className="text-center md:text-left text-[11px] text-gray-500 leading-relaxed font-medium">
                By proceeding, you confirm that you have read and agree to <br className="hidden lg:block" />
                <Link href="#" className="text-blue-600 hover:underline">Terms of Use</Link> and <Link href="#" className="text-blue-600 hover:underline">Cookie policy</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
