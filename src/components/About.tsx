
import { Shield, TrendingUp, Users, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "We run our business with high ethical standards and transparency in every service.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuously developing financial solutions relevant to the needs of modern society.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Kepedulian",
      description: "Committed to providing the best service and helping the community in every kind of need.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professionalism",
      description: "Our services are backed by a professional team of experienced financial specialists.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="section-badge">About</div>
          <h2 className="section-title">Building <span className="text-gradient">Trust</span> with <span className="text-gradient">Quality Services</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-black/50 border border-neutral-800 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold mb-4">Trusted Financial Partner</h3>
              <p className="text-neutral-400 mb-6">
                We have helped millions of users find the right financial solution for their pressing needs.
              </p>
              
              <div className="bg-black/70 border border-neutral-800 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-500 mb-1">10,000+</div>
                <div className="text-sm text-neutral-400">Customers trust us</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-4 bg-black/50 border border-neutral-800 rounded-lg p-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/70 text-yellow-500 border border-neutral-800 shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-neutral-400 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
