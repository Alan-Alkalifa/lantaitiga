const benefits = [
  { title: "Expertise", description: "Years of experience in delivering cutting-edge IT solutions" },
  { title: "Innovation", description: "Stay ahead with the latest technologies and methodologies" },
  { title: "Quality", description: "Rigorous testing and best practices for reliable solutions" },
  { title: "Support", description: "Dedicated team providing round-the-clock assistance" }
];

export default function Benefits() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center group cursor-default">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-bg-secondary transition-colors duration-300">
              {benefit.title}
            </h3>
            <p className="text-text-primary/70">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
