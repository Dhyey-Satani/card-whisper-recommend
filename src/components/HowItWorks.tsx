
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Tell Us About Yourself",
    description: "Provide your financial details and card preferences using our simple recommendation form.",
    icon: <CheckCircle className="text-blue-600 w-8 h-8" />
  },
  {
    title: "Get Personalized Matches",
    description: "See the best-fit Indian credit cards based on your profile and needs.",
    icon: <CheckCircle className="text-green-600 w-8 h-8" />
  },
  {
    title: "Apply Instantly",
    description: "Click directly to the bank site or read full card details to apply securely.",
    icon: <ArrowRight className="text-indigo-600 w-8 h-8" />
  }
];

const HowItWorks = () => (
  <section className="py-12 px-4 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center px-6 py-4 rounded-xl bg-gray-50 shadow hover:shadow-lg transition-all min-w-[220px] max-w-xs mx-auto"
          >
            <span>{step.icon}</span>
            <h3 className="font-semibold text-lg my-3">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
            {i < steps.length - 1 &&
              <div className="hidden md:block mt-4">
                <ArrowRight className="text-blue-200 w-7 h-7" />
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
