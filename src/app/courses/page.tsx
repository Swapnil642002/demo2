import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { PageHero, CtaBand } from "@/components/sections";
import { CourseCard } from "@/components/course-card";
import { COURSES } from "@/lib/courses";

export const metadata: Metadata = { title: "Courses", description: "GNM nursing and D.Pharma (Ayurveda) — duration, fees, eligibility." };

export default function CoursesPage() {
  return (
    <>
      <PageHero eyebrow="Courses" title="Programmes of study" lead="Two diploma programmes, each with its own detail page covering curriculum, careers, fees and eligibility." />
      <Container className="py-12 grid gap-6 md:grid-cols-2">
        {COURSES.map((c) => <CourseCard key={c.id} course={c} />)}
      </Container>
      <CtaBand />
    </>
  );
}
