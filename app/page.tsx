import Hero        from "@/components/home/Hero";
import Services    from "@/components/home/Services";
import Stats       from "@/components/home/Stats";
import Ecosystem   from "@/components/home/Ecosystem";
import About       from "@/components/home/About";
import Team        from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import FAQ         from "@/components/home/FAQ";
import CTA         from "@/components/home/CTA";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who are AIT Digital Solutions courses designed for?",
      acceptedAnswer: { "@type": "Answer", text: "Our courses are designed for beginners, intermediate learners, and professionals who want to build income-generating skills in the digital economy. Whether you're a student, job seeker, business owner, or freelancer — we have a pathway for you." },
    },
    {
      "@type": "Question",
      name: "Do I need any prior experience to join?",
      acceptedAnswer: { "@type": "Answer", text: "Most of our courses are beginner-friendly and require no prior technical knowledge. We start from the fundamentals and progressively advance to expert-level strategies. You just need a smartphone or laptop and a strong desire to learn." },
    },
    {
      "@type": "Question",
      name: "How are the courses delivered?",
      acceptedAnswer: { "@type": "Answer", text: "We offer a blended learning experience — live online sessions, recorded video lectures, WhatsApp group support, and hands-on practical assignments. Our students get real-world project experience, not just theoretical knowledge." },
    },
    {
      "@type": "Question",
      name: "What services does AIT provide beyond training?",
      acceptedAnswer: { "@type": "Answer", text: "Beyond training, we offer full digital services: website development, mobile app development, digital marketing campaigns, branding, YouTube and TikTok automation setup, and e-commerce store management. We build and manage your digital presence." },
    },
    {
      "@type": "Question",
      name: "How can I enroll in a course or get a service quote?",
      acceptedAnswer: { "@type": "Answer", text: "Simply click the 'Get Started' button or WhatsApp us at 0316 6768001. Our team will guide you through the enrollment process, recommend the right course based on your goals, and provide a custom service quote within 24 hours." },
    },
    {
      "@type": "Question",
      name: "Is there any support after course completion?",
      acceptedAnswer: { "@type": "Answer", text: "Yes! Every student gets lifetime access to our alumni community, course updates, and priority support. We believe in long-term relationships — your success is our reputation." },
    },
    {
      "@type": "Question",
      name: "Does AIT issue certificates upon completion?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, we issue professional certificates upon successful course completion that you can add to your CV and LinkedIn profile. Our certificates are recognized by industry partners and clients." },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <Services />
      <Stats />
      <Ecosystem />
      <About />
      <Team />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
