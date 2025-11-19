'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
        <footer className="border-t border-[#e2e8f0] py-8 px-6 lg:px-8 bg-[#fafbfc]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-base text-[#718096]">
          © {currentYear} Allen Pandey. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
