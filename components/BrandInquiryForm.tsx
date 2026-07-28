'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function BrandInquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const brandData = {
      brand_name: formData.get('brand_name') as string,
      contact_person: formData.get('contact_person') as string,
      email: formData.get('email') as string,
      campaign_type: formData.get('campaign_type') as string,
      budget_range: formData.get('budget_range') as string,
      message: formData.get('message') as string,
    };

    try {
      const { error: insertError } = await supabase.from('brand_inquiries').insert([brandData]);
      if (insertError) throw insertError;
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-earth-card p-8 rounded-2xl border border-earth-muted/20 max-w-3xl mx-auto shadow-xl">
      <div className="mb-8 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-earth-accent">Partnerships & Collabs</span>
        <h3 className="text-2xl font-bold mt-2 text-earth-sand">Let's create something authentic together.</h3>
        <p className="text-earth-muted text-sm mt-1">Fill out the brief below to request media kits, rates, or campaign proposals.</p>
      </div>

      {success ? (
        <div className="p-6 rounded-xl bg-earth-dark text-center border border-earth-accent/30">
          <h4 className="font-bold text-earth-accent text-lg">Inquiry Received</h4>
          <p className="text-earth-muted text-sm mt-1">Thanks for reaching out! Chloe's management or partnership team will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-earth-muted mb-2">Brand / Company</label>
              <input 
                required 
                name="brand_name" 
                type="text" 
                placeholder="e.g. Patagonia, Canon, Tourism Board" 
                className="w-full bg-earth-dark border border-earth-muted/30 rounded-xl px-4 py-3 text-earth-sand focus:outline-none focus:border-earth-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-earth-muted mb-2">Contact Name</label>
              <input 
                required 
                name="contact_person" 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-earth-dark border border-earth-muted/30 rounded-xl px-4 py-3 text-earth-sand focus:outline-none focus:border-earth-accent transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-earth-muted mb-2">Email Address</label>
              <input 
                required 
                name="email" 
                type="email" 
                placeholder="name@brand.com" 
                className="w-full bg-earth-dark border border-earth-muted/30 rounded-xl px-4 py-3 text-earth-sand focus:outline-none focus:border-earth-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-earth-muted mb-2">Campaign Focus</label>
              <select 
                name="campaign_type"
                className="w-full bg-earth-dark border border-earth-muted/30 rounded-xl px-4 py-3 text-earth-sand focus:outline-none focus:border-earth-accent transition-colors"
              >
                <option value="Sponsored Reel / Post">Sponsored Reel / Post</option>
                <option value="Destination / Tourism Campaign">Destination / Tourism Campaign</option>
                <option value="UGC Content Creation">UGC Content Creation</option>
                <option value="Other Partnership">Other Partnership</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-earth-muted mb-2">Campaign Details & Timeline</label>
            <textarea 
              required 
              rows={4}
              name="message" 
              placeholder="Tell us about your goals, deliverables, and dates..." 
              className="w-full bg-earth-dark border border-earth-muted/30 rounded-xl px-4 py-3 text-earth-sand focus:outline-none focus:border-earth-accent transition-colors resize-none"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 rounded-xl bg-earth-sand text-earth-dark font-medium hover:bg-earth-accent transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Sending Inquiry...' : 'Submit Partnership Request'}
          </button>
        </form>
      )}
    </div>
  );
}
