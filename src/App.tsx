import React, { useState, useEffect } from 'react';
import { SiteHeader } from './components/asmg/SiteHeader';
import { SiteFooter } from './components/asmg/SiteFooter';
import { HomeView } from './views/HomeView';
import { DivisionView } from './views/DivisionView';
import { WorkView } from './views/WorkView';
import { LiveHubView } from './views/LiveHubView';
import { GalleriesView } from './views/GalleriesView';
import { EquipmentView } from './views/EquipmentView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { QuoteBookingModal } from './components/forms/QuoteBookingModal';
import { ShowreelModal } from './components/asmg/ShowreelModal';
import { BrandFlagsDrawer } from './components/asmg/BrandFlagsDrawer';
import { DivisionKey } from './types';
import { trackEvent } from './lib/analytics';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === '' ? '/' : window.location.pathname;
    }
    return '/';
  });

  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);

  // Modals state
  const [bookingModalState, setBookingModalState] = useState<{
    isOpen: boolean;
    division?: DivisionKey | 'integrated';
    product?: string;
  }>({
    isOpen: false,
  });

  const [showreelOpen, setShowreelOpen] = useState(false);
  const [brandFlagsOpen, setBrandFlagsOpen] = useState(false);

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    trackEvent('page_view', { path });
  };

  const openBookingModal = (division?: DivisionKey | 'integrated', product?: string) => {
    setBookingModalState({
      isOpen: true,
      division: division || 'all-schools-media',
      product: product || '',
    });
  };

  const closeBookingModal = () => {
    setBookingModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSelectProject = (slug: string) => {
    setSelectedProjectSlug(slug);
    navigate('/work');
  };

  // Render correct view based on path
  const renderCurrentView = () => {
    const normalized = currentPath.toLowerCase();

    if (normalized === '/' || normalized === '/home') {
      return (
        <HomeView
          onNavigate={navigate}
          onOpenBooking={openBookingModal}
          onOpenShowreel={() => setShowreelOpen(true)}
          onOpenBrandFlags={() => setBrandFlagsOpen(true)}
          onSelectProject={handleSelectProject}
        />
      );
    }

    if (normalized === '/all-schools-media') {
      return (
        <DivisionView
          divisionKey="all-schools-media"
          onNavigate={navigate}
          onOpenBooking={openBookingModal}
          onSelectProject={handleSelectProject}
          onOpenBrandFlags={() => setBrandFlagsOpen(true)}
        />
      );
    }

    if (normalized === '/sports-express') {
      return (
        <DivisionView
          divisionKey="sports-express"
          onNavigate={navigate}
          onOpenBooking={openBookingModal}
          onSelectProject={handleSelectProject}
          onOpenBrandFlags={() => setBrandFlagsOpen(true)}
        />
      );
    }

    if (normalized === '/wildfive-pictures') {
      return (
        <DivisionView
          divisionKey="wildfive-pictures"
          onNavigate={navigate}
          onOpenBooking={openBookingModal}
          onSelectProject={handleSelectProject}
          onOpenBrandFlags={() => setBrandFlagsOpen(true)}
        />
      );
    }

    if (normalized === '/5th-floor-studio') {
      return (
        <DivisionView
          divisionKey="5th-floor-studio"
          onNavigate={navigate}
          onOpenBooking={openBookingModal}
          onSelectProject={handleSelectProject}
          onOpenBrandFlags={() => setBrandFlagsOpen(true)}
        />
      );
    }

    if (normalized === '/digital-marketing') {
      return (
        <DivisionView
          divisionKey="digital-marketing"
          onNavigate={navigate}
          onOpenBooking={openBookingModal}
          onSelectProject={handleSelectProject}
          onOpenBrandFlags={() => setBrandFlagsOpen(true)}
        />
      );
    }

    if (normalized === '/work') {
      return (
        <WorkView
          onOpenBooking={openBookingModal}
          selectedProjectSlug={selectedProjectSlug}
          onClearSelectedProject={() => setSelectedProjectSlug(null)}
        />
      );
    }

    if (normalized === '/live') {
      return <LiveHubView />;
    }

    if (normalized === '/galleries') {
      return <GalleriesView />;
    }

    if (normalized === '/equipment') {
      return <EquipmentView />;
    }

    if (normalized === '/about') {
      return (
        <AboutView
          onOpenBrandFlags={() => setBrandFlagsOpen(true)}
          onOpenBooking={() => openBookingModal()}
        />
      );
    }

    if (normalized === '/contact') {
      return <ContactView onOpenBooking={openBookingModal} />;
    }

    // Terms or Privacy
    if (normalized === '/privacy' || normalized === '/terms') {
      return (
        <div className="max-w-4xl mx-auto px-4 py-20 text-slate-300">
          <h1 className="font-cinzel text-3xl font-bold text-white mb-4">
            {normalized === '/privacy' ? 'Privacy Policy & Data Security' : 'Production Terms & Conditions'}
          </h1>
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-400 bg-[#0e1118] p-8 rounded-2xl border border-slate-800">
            <p>
              All Schools Media Group (ASMG) operates under strict data privacy, child safeguarding, and intellectual property standards for all school events, sports broadcasts, and private family ceremonies in Zimbabwe.
            </p>
            <p>
              High-resolution client galleries published to Pixieset are secured by individual PIN access when requested by institutional authorities or wedding clients. Production raw footage is safeguarded on redundant local and cloud storage arrays for a minimum of 12 months post-delivery.
            </p>
            <p>
              Commercial quotes provided via our digital booking desk are fixed for 30 days from dispatch and strictly respect the verified single-source contact registry.
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-6 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase font-mono"
          >
            Return to Homepage
          </button>
        </div>
      );
    }

    // Default Fallback: Home
    return (
      <HomeView
        onNavigate={navigate}
        onOpenBooking={openBookingModal}
        onOpenShowreel={() => setShowreelOpen(true)}
        onOpenBrandFlags={() => setBrandFlagsOpen(true)}
        onSelectProject={handleSelectProject}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Global Header */}
      <SiteHeader
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenBooking={openBookingModal}
        onOpenBrandFlags={() => setBrandFlagsOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">{renderCurrentView()}</main>

      {/* Global Cinematic Footer */}
      <SiteFooter
        onNavigate={navigate}
        onOpenBrandFlags={() => setBrandFlagsOpen(true)}
        onOpenBooking={() => openBookingModal()}
      />

      {/* Modal: Quote & Booking Desk */}
      <QuoteBookingModal
        isOpen={bookingModalState.isOpen}
        onClose={closeBookingModal}
        defaultDivision={bookingModalState.division}
        defaultProduct={bookingModalState.product}
      />

      {/* Modal: Master Showreel Video Player */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />

      {/* Drawer: Critical Brand Flags Checklist (Section 3 Launch Gate) */}
      <BrandFlagsDrawer
        isOpen={brandFlagsOpen}
        onClose={() => setBrandFlagsOpen(false)}
      />
    </div>
  );
}
