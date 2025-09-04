import {Hero} from '@/src/components/residency/hero';
import {ResidencyTypes} from '@/src/components/residency/residency-types';
import {StepByStepProcess} from '@/src/components/residency/step-by-step-process';
import {FAQ} from '@/src/components/residency/faq';
import {CTASection} from '@/src/components/cta-section';



export default async function ResidencyPage() {
  

  return (
    <>
      <Hero />
      <ResidencyTypes  />
      <StepByStepProcess  />
      <FAQ  />
      <CTASection  />
    </>
  );
}
