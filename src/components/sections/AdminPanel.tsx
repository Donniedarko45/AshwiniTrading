import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, KeyRound, AlertCircle, FileText, CheckSquare, 
  Trash2, Plus, Edit2, Save, X, Phone, Settings, 
  HelpCircle, MessageSquare, Image, LogOut, Check, Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const [activeTab, setActiveTab] = useState<'enquiries' | 'blogs' | 'testimonials' | 'faqs' | 'settings'>('enquiries');

  // Database States
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  
  // Settings Forms
  const [contactSettings, setContactSettings] = useState<any>({
    phone: '',
    email: '',
    address: '',
    businessHours: { weekdays: '', sunday: '' }
  });
  const [bannerSettings, setBannerSettings] = useState<any>({
    badge: '',
    title: '',
    subtitle: '',
    description: ''
  });
  const [seoSettings, setSeoSettings] = useState<any>({
    title: '',
    description: '',
    keywords: '',
    canonicalUrl: ''
  });

  // Action/Form UI States
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogSlug, setBlogSlug] = useState('');
  const [blogSummary, setBlogSummary] = useState('');
  const [blogCategory, setBlogCategory] = useState('Technical Analysis');
  const [blogThumbnail, setBlogThumbnail] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogPublished, setBlogPublished] = useState(true);

  const [faqQuestion, setFaqQuestion] = useState('');
  const [faqAnswer, setFaqAnswer] = useState('');
  const [faqCategory, setFaqCategory] = useState('GENERAL');

  const [testName, setTestName] = useState('');
  const [testRole, setTestRole] = useState('');
  const [testContent, setTestContent] = useState('');
  const [testRating, setTestRating] = useState(5);

  const [settingsStatus, setSettingsStatus] = useState('');

  // Auto slug generator for blog form
  useEffect(() => {
    if (!editingBlog && blogTitle) {
      setBlogSlug(blogTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    }
  }, [blogTitle, editingBlog]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('ata_admin_token', 'admin123');
      setLoginError('');
      fetchData();
    } else {
      setLoginError('Invalid passcode. Access Denied.');
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('ata_admin_token');
    if (saved === 'admin123') {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('ata_admin_token');
  };

  const headers = {
    'Content-Type': 'application/json',
    'x-admin-token': 'admin123'
  };

  const fetchData = async () => {
    try {
      // Enquiries
      const enqRes = await fetch('/api/admin/enquiries', { headers });
      const enqData = await enqRes.json();
      if (enqData.success) setEnquiries(enqData.enquiries);

      // Blogs
      const blogRes = await fetch('/api/admin/blogs', { headers });
      const blogData = await blogRes.json();
      if (blogData.success) setBlogs(blogData.blogs);

      // Testimonials
      const testRes = await fetch('/api/testimonials');
      const testData = await testRes.json();
      if (testData.success) setTestimonials(testData.testimonials);

      // FAQs
      const faqRes = await fetch('/api/faqs');
      const faqData = await faqRes.json();
      if (faqData.success) setFaqs(faqData.faqs);

      // Settings
      fetchSettings();
    } catch (e) {
      console.error("Error fetching admin data:", e);
    }
  };

  const fetchSettings = async () => {
    try {
      const cRes = await fetch('/api/settings/contact_details');
      if (cRes.ok) {
        const cData = await cRes.json();
        setContactSettings(cData.value);
      }

      const bRes = await fetch('/api/settings/homepage_banners');
      if (bRes.ok) {
        const bData = await bRes.json();
        setBannerSettings(bData.value);
      }

      const sRes = await fetch('/api/settings/seo_settings');
      if (sRes.ok) {
        const sData = await sRes.json();
        setSeoSettings(sData.value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // ─── Enquiries actions ───
  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    const res = await fetch(`/api/admin/enquiries/${id}`, { method: 'DELETE', headers });
    if (res.ok) {
      setEnquiries(prev => prev.filter(e => e.id !== id));
    }
  };

  // ─── Blog actions ───
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      title: blogTitle,
      slug: blogSlug,
      content: blogContent,
      summary: blogSummary,
      category: blogCategory,
      thumbnail: blogThumbnail,
      published: blogPublished
    };

    let res;
    if (editingBlog) {
      res = await fetch(`/api/admin/blogs/${editingBlog.id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(payload)
      });
    } else {
      res = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload)
      });
    }

    if (res.ok) {
      setBlogModalOpen(false);
      clearBlogForm();
      fetchData();
    } else {
      const err = await res.json();
      alert(err.error || 'Failed to save blog');
    }
  };

  const handleEditBlog = (blog: any) => {
    setEditingBlog(blog);
    setBlogTitle(blog.title);
    setBlogSlug(blog.slug);
    setBlogSummary(blog.summary);
    setBlogCategory(blog.category);
    setBlogThumbnail(blog.thumbnail);
    setBlogContent(blog.content);
    setBlogPublished(blog.published);
    setBlogModalOpen(true);
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    const res = await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE', headers });
    if (res.ok) {
      setBlogs(prev => prev.filter(b => b.id !== id));
    }
  };

  const clearBlogForm = () => {
    setEditingBlog(null);
    setBlogTitle('');
    setBlogSlug('');
    setBlogSummary('');
    setBlogCategory('Technical Analysis');
    setBlogThumbnail('');
    setBlogContent('');
    setBlogPublished(true);
  };

  // ─── Testimonial Actions ───
  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/testimonials', {
      method: 'POST',
      headers,
      body: JSON.stringify({ name: testName, role: testRole, content: testContent, rating: testRating })
    });
    if (res.ok) {
      setTestName('');
      setTestRole('');
      setTestContent('');
      fetchData();
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    const res = await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE', headers });
    if (res.ok) {
      setTestimonials(prev => prev.filter(t => t.id !== id));
    }
  };

  // ─── FAQ Actions ───
  const handleAddFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/faqs', {
      method: 'POST',
      headers,
      body: JSON.stringify({ question: faqQuestion, answer: faqAnswer, category: faqCategory })
    });
    if (res.ok) {
      setFaqQuestion('');
      setFaqAnswer('');
      fetchData();
    }
  };

  const handleDeleteFaq = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    const res = await fetch(`/api/admin/faqs/${id}`, { method: 'DELETE', headers });
    if (res.ok) {
      setFaqs(prev => prev.filter(f => f.id !== id));
    }
  };

  // ─── Save Settings ───
  const handleSaveSettings = async (key: string, value: any) => {
    setSettingsStatus('Saving...');
    const res = await fetch('/api/admin/settings', {
      method: 'POST',
      headers,
      body: JSON.stringify({ key, value })
    });
    if (res.ok) {
      setSettingsStatus('Settings saved successfully!');
      setTimeout(() => setSettingsStatus(''), 3000);
      fetchSettings();
    } else {
      setSettingsStatus('Failed to save settings.');
    }
  };

  // Login Render
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-bg-deep flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-serif font-semibold text-brand-navy">Admin Portal</h2>
            <p className="text-slate-400 text-xs sm:text-sm">Please verify your credentials to manage academy content.</p>
          </div>
          {loginError && (
            <div className="bg-brand-error/10 border border-brand-error/25 text-brand-error text-xs rounded-xl p-3.5 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <KeyRound className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              <Input
                type="password"
                placeholder="Enter admin passcode"
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                className="pl-12 h-12 border-slate-200 rounded-xl"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-brand-navy text-white hover:bg-slate-800 font-bold transition-all cursor-pointer"
            >
              Verify Passcode
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg-deep pt-28 pb-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-brand-navy text-white p-6 sm:p-8 rounded-3xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full inline-block">
              Secure Session Active
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-medium">Academy Management Panel</h1>
            <p className="text-slate-400 text-xs sm:text-sm">Verify enquiries, modify static text parameters, publish blogs, and manage feedback.</p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="flex items-center gap-2 border-white/10 hover:bg-white/10 text-white rounded-xl h-11 cursor-pointer flex-shrink-0"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Tab Switcher Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Sidebar (3 Cols) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto gap-2 p-1 bg-slate-100 rounded-2xl lg:p-2 border border-slate-200/50">
            {[
              { id: 'enquiries', label: 'Enquiry Leads', icon: CheckSquare },
              { id: 'blogs', label: 'Blogs & Articles', icon: FileText },
              { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
              { id: 'faqs', label: 'Frequently FAQs', icon: HelpCircle },
              { id: 'settings', label: 'Global Settings', icon: Settings }
            ].map(tab => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex-shrink-0 lg:w-full ${
                    isSelected 
                      ? 'bg-brand-navy text-white shadow-sm' 
                      : 'text-slate-600 hover:bg-slate-200/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Core Panel Content (9 Cols) */}
          <div className="lg:col-span-9 bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm min-h-[500px]">
            
            {/* T1. ENQUIRIES TAB */}
            {activeTab === 'enquiries' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-brand-navy">Form Submission Enquiries ({enquiries.length})</h2>
                  <Button variant="outline" size="sm" onClick={fetchData} className="cursor-pointer">Refresh</Button>
                </div>

                {enquiries.length === 0 ? (
                  <p className="text-slate-400 text-sm italic text-center py-12">No enquiries submitted yet.</p>
                ) : (
                  <div className="overflow-x-auto border border-slate-100 rounded-2xl">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-semibold">
                          <th className="p-4">Contact</th>
                          <th className="p-4">Details</th>
                          <th className="p-4">Message</th>
                          <th className="p-4">Submitted At</th>
                          <th className="p-4 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-medium">
                        {enquiries.map(enq => (
                          <tr key={enq.id} className="hover:bg-slate-50/50">
                            <td className="p-4 space-y-1">
                              <div className="font-bold text-brand-navy">{enq.fullName}</div>
                              <div className="text-slate-500">{enq.phone}</div>
                              <div className="text-slate-400 font-light">{enq.email}</div>
                            </td>
                            <td className="p-4 space-y-1">
                              <div><span className="text-slate-400 text-[10px] uppercase font-bold block">Course</span> {enq.interestedCourse}</div>
                              <div className="text-slate-500"><span className="text-slate-400 text-[10px] uppercase font-bold block">Mode | City</span> {enq.learningMode} ({enq.city})</div>
                            </td>
                            <td className="p-4 max-w-xs truncate text-slate-500 font-normal italic">
                              {enq.message || 'N/A'}
                            </td>
                            <td className="p-4 text-slate-400 text-xs">
                              {new Date(enq.createdAt).toLocaleString()}
                            </td>
                            <td className="p-4 text-center">
                              <button 
                                onClick={() => handleDeleteEnquiry(enq.id)}
                                className="p-2 text-brand-error hover:bg-brand-error/10 rounded-lg transition-colors cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* T2. BLOGS TAB */}
            {activeTab === 'blogs' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-brand-navy">Manage Blog Posts ({blogs.length})</h2>
                  <Button 
                    onClick={() => { clearBlogForm(); setBlogModalOpen(true); }}
                    className="flex items-center gap-1.5 bg-brand-navy text-white hover:bg-slate-800 rounded-xl h-10 cursor-pointer text-xs"
                  >
                    <Plus className="w-4 h-4" />
                    New Article
                  </Button>
                </div>

                {blogs.length === 0 ? (
                  <p className="text-slate-400 text-sm italic text-center py-12">No blog articles published.</p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {blogs.map(blog => (
                      <div key={blog.id} className="bg-slate-50 border border-slate-200/50 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-300 transition-colors">
                        <div className="space-y-3">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${blog.published ? 'bg-brand-success/10 text-brand-success' : 'bg-slate-200 text-slate-500'}`}>
                            {blog.published ? 'Published' : 'Draft'}
                          </span>
                          <h4 className="font-bold text-brand-navy text-base leading-tight line-clamp-1">{blog.title}</h4>
                          <p className="text-slate-500 text-xs line-clamp-2">{blog.summary}</p>
                          <span className="text-[10px] font-bold text-slate-400 block">Category: {blog.category}</span>
                        </div>
                        <div className="flex items-center justify-end gap-2 border-t border-slate-200/50 pt-4 mt-4">
                          <button 
                            onClick={() => handleEditBlog(blog)}
                            className="p-2 text-brand-navy hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1"
                          >
                            <Edit2 className="w-3.5 h-3.5" /> Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteBlog(blog.id)}
                            className="p-2 text-brand-error hover:bg-brand-error/10 rounded-lg transition-colors cursor-pointer text-xs flex items-center gap-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" /> Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* T3. TESTIMONIALS TAB */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-brand-navy">Student Testimonials ({testimonials.length})</h2>
                </div>

                <form onSubmit={handleAddTestimonial} className="bg-slate-50 border border-slate-200/50 p-5 rounded-2xl grid sm:grid-cols-3 gap-4 items-end">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Student Name</label>
                    <Input placeholder="Srinivas R." value={testName} onChange={e => setTestName(e.target.value)} required className="h-10 border-slate-200 rounded-xl" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Role / Course Details</label>
                    <Input placeholder="IT Professional (TA Course)" value={testRole} onChange={e => setTestRole(e.target.value)} required className="h-10 border-slate-200 rounded-xl" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Rating (Stars)</label>
                    <select 
                      value={testRating} 
                      onChange={e => setTestRating(Number(e.target.value))}
                      className="w-full h-10 border border-slate-200 rounded-xl px-3 bg-white text-sm"
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                      <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                      <option value="3">⭐⭐⭐ (3 Stars)</option>
                    </select>
                  </div>
                  <div className="sm:col-span-3 space-y-1">
                    <label className="text-xs font-bold text-slate-500">Review Content</label>
                    <textarea 
                      placeholder="Enter review feedback here..." 
                      rows={3} 
                      value={testContent}
                      onChange={e => setTestContent(e.target.value)}
                      required
                      className="w-full border border-slate-200 rounded-xl p-3 bg-white text-sm" 
                    />
                  </div>
                  <div className="sm:col-span-3 flex justify-end">
                    <Button type="submit" className="bg-brand-navy text-white hover:bg-slate-800 rounded-xl h-10 cursor-pointer text-xs">
                      Add Testimonial
                    </Button>
                  </div>
                </form>

                <div className="space-y-4">
                  {testimonials.map(t => (
                    <div key={t.id} className="border border-slate-100 rounded-2xl p-5 flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-brand-navy">{t.name}</span>
                          <span className="text-[10px] text-slate-400 font-medium">({t.role})</span>
                        </div>
                        <div className="text-brand-primary text-xs font-bold">{'★'.repeat(t.rating)}</div>
                        <p className="text-slate-500 text-sm font-normal leading-relaxed">{t.content}</p>
                      </div>
                      <button 
                        onClick={() => handleDeleteTestimonial(t.id)}
                        className="text-brand-error p-2 hover:bg-brand-error/10 rounded-lg cursor-pointer flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* T4. FAQs TAB */}
            {activeTab === 'faqs' && (
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-brand-navy">Manage FAQs ({faqs.length})</h2>
                </div>

                <form onSubmit={handleAddFaq} className="bg-slate-50 border border-slate-200/50 p-5 rounded-2xl grid sm:grid-cols-2 gap-4 items-end">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">FAQ Question</label>
                    <Input placeholder="Do I need prior experience?" value={faqQuestion} onChange={e => setFaqQuestion(e.target.value)} required className="h-10 border-slate-200 rounded-xl" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Category</label>
                    <select 
                      value={faqCategory} 
                      onChange={e => setFaqCategory(e.target.value)}
                      className="w-full h-10 border border-slate-200 rounded-xl px-3 bg-white text-sm"
                    >
                      <option value="GENERAL">General</option>
                      <option value="COURSE">Course & Curriculum</option>
                      <option value="REVIEW">Reviews</option>
                      <option value="TRAINING">Corporate Training</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-500">FAQ Answer</label>
                    <textarea 
                      placeholder="Enter detailed answer here..." 
                      rows={3} 
                      value={faqAnswer}
                      onChange={e => setFaqAnswer(e.target.value)}
                      required
                      className="w-full border border-slate-200 rounded-xl p-3 bg-white text-sm" 
                    />
                  </div>
                  <div className="sm:col-span-2 flex justify-end">
                    <Button type="submit" className="bg-brand-navy text-white hover:bg-slate-800 rounded-xl h-10 cursor-pointer text-xs">
                      Add FAQ
                    </Button>
                  </div>
                </form>

                <div className="space-y-4">
                  {faqs.map(f => (
                    <div key={f.id} className="border border-slate-100 rounded-2xl p-5 flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold bg-brand-primary/10 text-brand-primary px-2.5 py-0.5 rounded-full uppercase">
                          {f.category}
                        </span>
                        <h4 className="font-bold text-brand-navy text-sm pt-2">{f.question}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{f.answer}</p>
                      </div>
                      <button 
                        onClick={() => handleDeleteFaq(f.id)}
                        className="text-brand-error p-2 hover:bg-brand-error/10 rounded-lg cursor-pointer flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* T5. GLOBAL SETTINGS TAB */}
            {activeTab === 'settings' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-brand-navy">Site Configurations & settings</h2>
                  {settingsStatus && (
                    <span className="text-xs font-bold text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full">
                      {settingsStatus}
                    </span>
                  )}
                </div>

                {/* S1. Contact Information */}
                <div className="space-y-4 border border-slate-150 p-6 rounded-2xl">
                  <h3 className="font-bold text-brand-navy text-base flex items-center gap-2 border-b pb-2">
                    <Phone className="w-4.5 h-4.5 text-brand-primary" /> Contact Details Settings
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Phone Coordinate</label>
                      <Input value={contactSettings.phone} onChange={e => setContactSettings({...contactSettings, phone: e.target.value})} className="h-10 border-slate-200 rounded-xl" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Email Coordinate</label>
                      <Input value={contactSettings.email} onChange={e => setContactSettings({...contactSettings, email: e.target.value})} className="h-10 border-slate-200 rounded-xl" />
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Head Office Address</label>
                      <Input value={contactSettings.address} onChange={e => setContactSettings({...contactSettings, address: e.target.value})} className="h-10 border-slate-200 rounded-xl" />
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <Button onClick={() => handleSaveSettings('contact_details', contactSettings)} className="bg-brand-navy text-white hover:bg-slate-800 rounded-xl text-xs h-9 cursor-pointer">
                      Save Contact Settings
                    </Button>
                  </div>
                </div>

                {/* S2. Homepage Banner text */}
                <div className="space-y-4 border border-slate-150 p-6 rounded-2xl">
                  <h3 className="font-bold text-brand-navy text-base flex items-center gap-2 border-b pb-2">
                    <FileText className="w-4.5 h-4.5 text-brand-primary" /> Homepage Banner Content
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Hero Badge</label>
                      <Input value={bannerSettings.badge} onChange={e => setBannerSettings({...bannerSettings, badge: e.target.value})} className="h-10 border-slate-200 rounded-xl" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Main Title</label>
                      <Input value={bannerSettings.title} onChange={e => setBannerSettings({...bannerSettings, title: e.target.value})} className="h-10 border-slate-200 rounded-xl" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Subtitle</label>
                      <Input value={bannerSettings.subtitle} onChange={e => setBannerSettings({...bannerSettings, subtitle: e.target.value})} className="h-10 border-slate-200 rounded-xl" />
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Hero Description Paragraph</label>
                      <textarea value={bannerSettings.description} onChange={e => setBannerSettings({...bannerSettings, description: e.target.value})} rows={3} className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <Button onClick={() => handleSaveSettings('homepage_banners', bannerSettings)} className="bg-brand-navy text-white hover:bg-slate-800 rounded-xl text-xs h-9 cursor-pointer">
                      Save Banner Settings
                    </Button>
                  </div>
                </div>

                {/* S3. SEO Meta Settings */}
                <div className="space-y-4 border border-slate-150 p-6 rounded-2xl">
                  <h3 className="font-bold text-brand-navy text-base flex items-center gap-2 border-b pb-2">
                    <Settings className="w-4.5 h-4.5 text-brand-primary" /> SEO & Meta Header Configurations
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Browser Page Title</label>
                      <Input value={seoSettings.title} onChange={e => setSeoSettings({...seoSettings, title: e.target.value})} className="h-10 border-slate-200 rounded-xl" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Canonical URL</label>
                      <Input value={seoSettings.canonicalUrl} onChange={e => setSeoSettings({...seoSettings, canonicalUrl: e.target.value})} className="h-10 border-slate-200 rounded-xl" />
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Meta Description</label>
                      <textarea value={seoSettings.description} onChange={e => setSeoSettings({...seoSettings, description: e.target.value})} rows={2} className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-slate-500">Meta Keywords (comma separated)</label>
                      <Input value={seoSettings.keywords} onChange={e => setSeoSettings({...seoSettings, keywords: e.target.value})} className="h-10 border-slate-200 rounded-xl" />
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <Button onClick={() => handleSaveSettings('seo_settings', seoSettings)} className="bg-brand-navy text-white hover:bg-slate-800 rounded-xl text-xs h-9 cursor-pointer">
                      Save SEO Settings
                    </Button>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* BLOG MODAL (Add/Edit Blog Form overlay) */}
      <AnimatePresence>
        {blogModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setBlogModalOpen(false)}
                className="absolute right-6 top-6 p-2 text-slate-400 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold text-brand-navy mb-6 font-serif border-b pb-3">
                {editingBlog ? 'Modify Blog Article' : 'Write New Blog Article'}
              </h3>

              <form onSubmit={handleSaveBlog} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Article Title *</label>
                    <Input value={blogTitle} onChange={e => setBlogTitle(e.target.value)} required className="h-10 border-slate-200 rounded-xl text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Slug (URL path) *</label>
                    <Input value={blogSlug} onChange={e => setBlogSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, '-'))} required className="h-10 border-slate-200 rounded-xl text-sm" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500">Category</label>
                    <select 
                      value={blogCategory}
                      onChange={e => setBlogCategory(e.target.value)}
                      className="w-full h-10 border border-slate-200 rounded-xl px-3 bg-white text-sm"
                    >
                      <option value="Technical Analysis">Technical Analysis</option>
                      <option value="Fundamental Analysis">Fundamental Analysis</option>
                      <option value="Futures & Options">Futures & Options</option>
                      <option value="AI & Finance">AI & Finance</option>
                      <option value="Market Insights">Market Insights</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-xs font-bold text-slate-500">Thumbnail Image URL</label>
                    <Input placeholder="https://..." value={blogThumbnail} onChange={e => setBlogThumbnail(e.target.value)} className="h-10 border-slate-200 rounded-xl text-sm" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500">Short Summary *</label>
                  <Input value={blogSummary} onChange={e => setBlogSummary(e.target.value)} required className="h-10 border-slate-200 rounded-xl text-sm" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500">Blog Content (Markdown supported) *</label>
                  <textarea 
                    rows={10} 
                    value={blogContent}
                    onChange={e => setBlogContent(e.target.value)}
                    required
                    className="w-full border border-slate-200 rounded-xl p-4 text-sm font-sans"
                    placeholder="Write article details here..."
                  />
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input 
                    type="checkbox" 
                    id="publishedCheck" 
                    checked={blogPublished}
                    onChange={e => setBlogPublished(e.target.checked)}
                    className="w-4.5 h-4.5 border-slate-200 rounded cursor-pointer"
                  />
                  <label htmlFor="publishedCheck" className="text-sm text-slate-600 font-bold select-none cursor-pointer">
                    Publish immediately (visible on site)
                  </label>
                </div>

                <div className="flex justify-end gap-3 border-t pt-5 mt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setBlogModalOpen(false)}
                    className="rounded-xl h-11 px-5 cursor-pointer text-xs"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-brand-navy text-white hover:bg-slate-800 rounded-xl h-11 px-6 cursor-pointer text-xs"
                  >
                    {editingBlog ? 'Save Changes' : 'Publish Post'}
                  </Button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
