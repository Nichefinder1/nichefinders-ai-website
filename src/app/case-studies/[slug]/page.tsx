import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '@/lib/constants';
import CaseStudyClient from './CaseStudyClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) return {};

  const title = `${study.client.name} Case Study | NicheFinders AI`;
  const description = `See how ${study.client.name} (${study.client.location}) achieved measurable results with AI automation. ${study.results[0]?.metric}: ${study.results[0]?.value} ${study.results[0]?.timeframe ?? ''}.`.trim();

  return {
    title: `${study.client.name} | Case Study`,
    description,
    openGraph: { title, description },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) notFound();

  return <CaseStudyClient slug={slug} />;
}
