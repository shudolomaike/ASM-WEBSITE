import React from 'react';
import { CinematicHero } from '../components/asmg/CinematicHero';
import { DivisionNavigator } from '../components/asmg/DivisionNavigator';
import { SelectedWork } from '../components/asmg/SelectedWork';
import { LiveBroadcastModule } from '../components/asmg/LiveBroadcastModule';
import { CapabilitiesMatrix } from '../components/asmg/CapabilitiesMatrix';
import { ProofAndStandards } from '../components/asmg/ProofAndStandards';
import { IntegratedSolution } from '../components/asmg/IntegratedSolution';
import { ProcessTimeline } from '../components/asmg/ProcessTimeline';
import { LatestMediaRail } from '../components/asmg/LatestMediaRail';
import { ConversionSection } from '../components/asmg/ConversionSection';
import { DivisionKey } from '../types';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenBooking: (division?: DivisionKey | 'integrated', product?: string) => void;
  onOpenShowreel: () => void;
  onOpenBrandFlags: () => void;
  onSelectProject: (slug: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenShowreel,
  onOpenBrandFlags,
  onSelectProject,
}) => {
  const scrollToDivisions = () => {
    const el = document.getElementById('divisions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 01. Cinematic Hero */}
      <CinematicHero
        onExploreClick={scrollToDivisions}
        onOpenShowreel={onOpenShowreel}
        onPlanProject={() => onOpenBooking()}
      />

      {/* 02. Five-Division Navigator */}
      <DivisionNavigator
        onSelectDivision={(key) => onNavigate(`/${key}`)}
      />

      {/* 03. Selected Work */}
      <SelectedWork
        onSelectProject={onSelectProject}
        onOpenBooking={(div) => onOpenBooking(div)}
        onOpenShowreel={onOpenShowreel}
      />

      {/* 04. Live Now Module */}
      <LiveBroadcastModule
        onGoToLiveHub={() => onNavigate('/live')}
      />

      {/* 05. Capabilities Matrix */}
      <CapabilitiesMatrix
        onOpenBooking={() => onOpenBooking()}
      />

      {/* 06. Proof & Standards */}
      <ProofAndStandards
        onOpenBrandFlags={onOpenBrandFlags}
      />

      {/* 07. Integrated Solutions */}
      <IntegratedSolution
        onOpenBooking={(div) => onOpenBooking(div)}
      />

      {/* 08. Process Timeline */}
      <ProcessTimeline />

      {/* 09. Latest Media (Pixieset Gateways) */}
      <LatestMediaRail
        onOpenGalleries={() => onNavigate('/galleries')}
      />

      {/* 10. Immediate Conversion */}
      <ConversionSection
        onOpenBooking={() => onOpenBooking()}
      />
    </div>
  );
};
