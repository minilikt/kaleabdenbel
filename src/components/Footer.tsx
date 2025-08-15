import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:kaleab@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Kaleab Denbel</h3>
              <p className="text-muted-foreground">
                Full Stack Developer passionate about creating exceptional digital experiences 
                and solving complex problems with modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Let&apos;s Connect</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>San Francisco, CA</p>
                <a 
                  href="mailto:kaleab@example.com"
                  className="hover:text-primary transition-colors"
                >
                  kaleabdenbelkebede@gmail.com
                </a>
                <a 
                  href="tel:+15551234567"
                  className="hover:text-primary transition-colors"
                >
                  +251 988 815 914
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Kaleab Denbel. Made with using React & Tailwind CSS
            </p>
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};