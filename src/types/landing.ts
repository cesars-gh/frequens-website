/**
 * Type definitions for reusable landing page components.
 * Each landing page (TDAH, Autismo, Adicciones, etc.) provides content
 * following these interfaces to create consistent, data-driven pages.
 */

// Common types
export type IconName = string;

export interface InfoBox {
	icon: IconName;
	title: string;
	description: string;
}

export interface FeatureCard {
	icon: IconName;
	title: string;
	description: string;
}

export interface BenefitItem {
	icon?: IconName;
	title: string;
	description: string;
}

export interface ProcessStep {
	number: number;
	title: string;
	description: string;
}

export interface FAQItem {
	question: string;
	answer: string;
}

export interface Testimonial {
	image: string;
	imageAlt: string;
	quote: string;
	author: string;
}

// Section-specific content types

export interface HeroSectionContent {
	headline: string;
	description: string;
	infoBoxes: InfoBox[];
}

export interface WhySectionContent {
	title: string;
	paragraphs: string[];
	highlights: FeatureCard[];
}

export interface HowItWorksSectionContent {
	title: string;
	statistic: string;
	cards: FeatureCard[];
}

export interface WhoCanBenefitSectionContent {
	title: string;
	subtitle: string;
	beneficiaries: FeatureCard[];
	ctaText: string;
}

export interface BenefitsSectionContent {
	title: string;
	benefits: BenefitItem[];
}

export interface ScienceEvidenceSectionContent {
	title: string;
	subtitle: string;
	evidenceCards: FeatureCard[];
}

export interface ProcessSectionContent {
	title: string;
	subtitle: string;
	steps: ProcessStep[];
	ctaText: string;
}

export interface FAQSectionContent {
	title: string;
	faqs: FAQItem[];
}

export interface TestimonialsSectionContent {
	title: string;
	testimonials: Testimonial[];
}

export interface FinalCTASectionContent {
	title: string;
	description: string;
	ctaText: string;
	footnote: string;
}

// Complete landing page content
export interface LandingPageContent {
	// SEO metadata
	meta: {
		title: string;
		description: string;
		keywords: string;
	};
	// Section content
	hero: HeroSectionContent;
	whyEMT: WhySectionContent;
	howItWorks: HowItWorksSectionContent;
	whoCanBenefit: WhoCanBenefitSectionContent;
	benefits: BenefitsSectionContent;
	scienceEvidence: ScienceEvidenceSectionContent;
	process: ProcessSectionContent;
	faq: FAQSectionContent;
	testimonials: TestimonialsSectionContent;
	finalCTA: FinalCTASectionContent;
}
