import type { ImageMetadata } from 'astro';

import phonePaglyph from '../assets/figma/phone-paglyph.png';
import phoneHoppr from '../assets/figma/phone-hoppr.png';
import phoneTribel from '../assets/figma/phone-tribel.png';

import toolCursor from '../assets/figma/tool-cursor.jpg';
import toolClaude from '../assets/figma/tool-claude.jpg';
import toolSwift from '../assets/figma/tool-swift.png';
import toolSwiftUI from '../assets/figma/tool-swiftui.png';
import toolXcode from '../assets/figma/tool-xcode.png';
import toolFlutter from '../assets/figma/tool-flutter.jpg';
import toolCloudflare from '../assets/figma/tool-cloudflare.jpg';
import toolRevenueCat from '../assets/figma/tool-revenuecat.jpg';
import toolFigma from '../assets/figma/tool-figma.png';

import whatsapp from '../assets/figma/whatsapp.svg';
import linkedin from '../assets/figma/linkedin.svg';
import github from '../assets/figma/github.svg';
import threads from '../assets/figma/threads.svg';
import x from '../assets/figma/x.svg';

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
	},
];

// `crop` mirrors the design, where these logos are scaled to 106.67% to trim their built-in padding.
export const tools = [
	{ name: 'Cursor', icon: toolCursor },
	{ name: 'Claude Code', icon: toolClaude },
	{ name: 'Swift', icon: toolSwift, crop: true },
	{ name: 'SwiftUI', icon: toolSwiftUI, crop: true },
	{ name: 'Xcode', icon: toolXcode, crop: true },
	{ name: 'Flutter', icon: toolFlutter },
	{ name: 'Cloudflare', icon: toolCloudflare },
	{ name: 'RevenueCat', icon: toolRevenueCat },
	{ name: 'Figma', icon: toolFigma },
];

// TODO: fill in the real email address and social profile URLs.
export const contact = {
	email: 'hello@example.com',
};

export const socials = [
	{ label: 'WhatsApp', href: '#', icon: whatsapp },
	{ label: 'LinkedIn', href: '#', icon: linkedin },
	{ label: 'GitHub', href: '#', icon: github },
	{ label: 'Threads', href: '#', icon: threads },
	{ label: 'X', href: '#', icon: x },
];

export const profile = {
	name: 'Aditya Rohman',
	headline: 'Design Engineer',
};
