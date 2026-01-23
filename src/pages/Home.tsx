const Home = () => {
  return (
    <>
      {/* Hero section with dark background so header starts transparent */}
      <section className="relative min-h-[70vh] flex items-center bg-burgundy-800">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-700" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-space-md lg:px-space-lg py-space-3xl">
          <h1 className="heading-xl text-white mb-space-md max-w-3xl">
            Protecting What Matters Most
          </h1>
          <p className="body-lg text-white/80 max-w-2xl mb-space-lg">
            Family-owned independent insurance agency with 29+ years of trusted experience serving the Columbus metro area.
          </p>
          <div className="flex flex-wrap gap-space-sm">
            <a
              href="/get-quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded bg-white text-primary font-body font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get a Quote
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded border-2 border-white/30 text-white font-body font-medium transition-all duration-300 hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Placeholder content section */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-space-md lg:px-space-lg text-center">
          <h2 className="heading-md text-foreground mb-space-md">
            Welcome to Scioto Insurance Group
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            More content coming soon. Scroll up and down to see the header transition effect.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
