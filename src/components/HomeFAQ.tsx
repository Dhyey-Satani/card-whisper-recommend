
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

const faq = [
  {
    q: "Is this a government site?",
    a: "No. This is a private service to help you compare credit cards independently."
  },
  {
    q: "How does the recommendation engine work?",
    a: "We compare your preferences with 100+ Indian credit cards and show matches based on features, eligibility, and rewards."
  },
  {
    q: "Will applying affect my credit score?",
    a: "Just viewing cards on our site does not affect your score. Applying for a card may initiate a credit check by the issuer."
  },
  {
    q: "Is this free?",
    a: "Yes! Our basic card comparison is completely free to use."
  },
  {
    q: "How often is this list updated?",
    a: "We strive to keep our card data current. For newly launched cards or corrections, please suggest updates!"
  }
];

const HomeFAQ = () => (
  <section className="max-w-3xl mx-auto py-12 px-4">
    <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible>
      {faq.map((item, i) => (
        <AccordionItem key={i} value={item.q.replace(/\W+/g, "")}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);

export default HomeFAQ;
