import type { ImageMetadata } from 'astro';

import phonePaglyph from '../assets/misc/phone-mockup-paglyph.png';
import phoneHoppr from '../assets/misc/phone-mockup-hoppr.png';
import phoneTribel from '../assets/misc/phone-mockup-tribel.png';

import toolCursor from '../assets/misc/tool-cursor.jpg';
import toolClaude from '../assets/misc/tool-claude.jpg';
import toolSwift from '../assets/misc/tool-swift.png';
import toolSwiftUI from '../assets/misc/tool-swiftui.png';
import toolXcode from '../assets/misc/tool-xcode.png';
import toolFlutter from '../assets/misc/tool-flutter.jpg';
import toolCloudflare from '../assets/misc/tool-cloudflare.jpg';
import toolRevenueCat from '../assets/misc/tool-revenuecat.jpg';
import toolFigma from '../assets/misc/tool-figma.png';

// Each tool site's Open Graph image (its `og:image`). Swift.org sets none, so Swift uses Apple's page.
import previewCursor from '../assets/misc/tool-preview-cursor.png';
import previewClaude from '../assets/misc/tool-preview-claude-code.jpg';
import previewSwift from '../assets/misc/tool-preview-swift.jpg';
import previewSwiftUI from '../assets/misc/tool-preview-swiftui.png';
import previewXcode from '../assets/misc/tool-preview-xcode.jpg';
import previewFlutter from '../assets/misc/tool-preview-flutter.png';
import previewCloudflare from '../assets/misc/tool-preview-cloudflare.png';
import previewRevenueCat from '../assets/misc/tool-preview-revenuecat.jpg';
import previewFigma from '../assets/misc/tool-preview-figma.png';

import whatsapp from '../assets/icons/whatsapp.svg';
import linkedin from '../assets/icons/linkedin.svg';
import github from '../assets/icons/github.svg';
import threads from '../assets/icons/threads.svg';
import x from '../assets/icons/x.svg';

import flagSingapore from '../assets/icons/flags/SG.svg';
import flagUae from '../assets/icons/flags/AE.svg';

export type ProjectId = 'paglyph' | 'hoppr' | 'tribel';

export interface Project {
	id: ProjectId;
	name: string;
	kind: 'Personal' | 'Client';
	description: string;
	mockup: ImageMetadata;
}

export const projects: Record<ProjectId, Project> = {
	paglyph: {
		id: 'paglyph',
		name: 'Paglyph',
		kind: 'Personal',
		description: 'A vocabulary companion for people who read in English, especially non-native speakers.',
		mockup: phonePaglyph,
	},
	hoppr: {
		id: 'hoppr',
		name: 'Hoppr',
		kind: 'Personal',
		description:
			'An AI-powered trip planner that generates personalized itineraries. Built as the final project for the CodeWithChris+ iOS course.',
		mockup: phoneHoppr,
	},
	tribel: {
		id: 'tribel',
		name: 'Tribel',
		kind: 'Client',
		description:
			'Turns saved travel inspiration from Pinterest, Instagram, and blogs into categorized, shareable plans for nomads and remote teams.',
		mockup: phoneTribel,
	},
};

export const achievements = [
	{ value: '6+', label: 'Projects shipped' },
	{ value: '7+', label: 'Satisfied clients' },
	{ value: '5+', label: 'Years of experience' },
];

export const experience = [
	{ period: 'Mar 2026 – Now', role: 'Design Engineer', company: 'Freelance · Remote', current: true },
	{ period: 'Jan 2025 – Mar 2026', role: 'Founding Mobile Engineer', company: 'Tribel · Singapore' },
	{ period: 'Jan 2023 – Sep 2025', role: 'Mobile Engineer', company: 'Koltiva · Jakarta' },
	{ period: 'May 2025', role: 'Freelance Flutter Instructor', company: 'Hacktiv8 · Banten' },
	{ period: 'Apr 2021 – Dec 2022', role: 'Mobile Engineer', company: 'LingoTalk · Jakarta' },
];

export const testimonials = [
	{
		quote:
			'Aditya is a rock-solid collaborator. He’s incredibly stable, reliable, and never shies away from a challenge outside of his comfort zone. He was instrumental in shipping Tribel from Day 1, and his ability to adapt to new requirements makes him an asset to any team.',
		name: 'Sharmaine T.',
		title: 'Founder of Tribel',
		location: { name: 'Singapore', flag: flagSingapore, country: 'Singapore' },
	},
	{
		quote:
			'Aditya was an outstanding Flutter developer on our project. His speed of delivery was truly impressive, consistently meeting tight deadlines without compromising on quality. Aditya provided constant support throughout the development process, always ready to address any issues and offer solutions promptly. His expertise in Flutter ensured a smooth and efficient development experience, and his commitment to delivering the best results was evident at every stage. I highly recommend Aditya for any Flutter development needs; his reliability and speed make him a valuable asset to any team.',
		name: 'Rakesh PD',
		title: 'Senior Software Engineer',
		location: { name: 'Dubai', flag: flagUae, country: 'United Arab Emirates' },
	},
];

// `crop` mirrors the design, where these logos are scaled to 106.67% to trim their built-in padding.
export const tools = [
	{ name: 'Cursor', icon: toolCursor, href: 'https://cursor.com', preview: previewCursor },
	{ name: 'Claude Code', icon: toolClaude, href: 'https://claude.com/product/claude-code', preview: previewClaude },
	{ name: 'Swift', icon: toolSwift, crop: true, href: 'https://developer.apple.com/swift/', preview: previewSwift },
	{ name: 'SwiftUI', icon: toolSwiftUI, crop: true, href: 'https://developer.apple.com/swiftui/', preview: previewSwiftUI },
	{ name: 'Xcode', icon: toolXcode, crop: true, href: 'https://developer.apple.com/xcode/', preview: previewXcode },
	{ name: 'Flutter', icon: toolFlutter, href: 'https://flutter.dev', preview: previewFlutter },
	{ name: 'Cloudflare', icon: toolCloudflare, href: 'https://www.cloudflare.com', preview: previewCloudflare },
	{ name: 'RevenueCat', icon: toolRevenueCat, href: 'https://www.revenuecat.com', preview: previewRevenueCat },
	{ name: 'Figma', icon: toolFigma, href: 'https://www.figma.com', preview: previewFigma },
];

// TODO: fill in the real email address and social profile URLs.
export const contact = {
	email: 'hello.adityarohman@gmail.com',
	booking: 'https://cal.com/adityarhmaan/app-development-project-discussion',
};

export const socials = [
	{ label: 'WhatsApp', href: 'https://wa.me/6282359525949', icon: whatsapp },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/adityarohman', icon: linkedin },
	{ label: 'GitHub', href: 'https://github.com/codestronaut', icon: github },
	{ label: 'Threads', href: 'https://www.threads.com/@adityarhmaan__', icon: threads },
	{ label: 'X', href: 'https://x.com/adityarhmaan_', icon: x },
];

export const profile = {
	name: 'Aditya Rohman',
	headline: 'Design Engineer',
};
