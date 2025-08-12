import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const handleQuickLinkClick = () => {
    // Scroll to top instantly when footer links are clicked
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/+919677689494",
      color: "text-blue-400",
      svg: (
        <svg className="w-6 h-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient gradientTransform="matrix(0,-512,-512,0,256.001,512)" gradientUnits="userSpaceOnUse" id="_Linear1" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" style={{ stopColor: "#25cf43" }} />
              <stop offset="1" style={{ stopColor: "#61fd7d" }} />
            </linearGradient>
          </defs>
          <path d="M116.225,-0.001c-11.264,0.512 -26.112,1.536 -32.768,3.072c-10.24,2.048 -19.968,5.12 -27.648,9.216c-9.728,4.608 -17.92,10.752 -25.088,17.92c-7.68,7.68 -13.824,15.872 -18.432,25.6c-4.096,7.68 -7.168,17.408 -9.216,27.648c-1.536,6.656 -2.56,21.504 -2.56,32.768c-0.512,4.608 -0.512,10.752 -0.512,13.824l0,251.905l0,13.824c0.512,11.264 1.536,26.112 3.072,32.768c2.048,10.24 5.12,19.968 9.216,27.648c4.608,9.728 10.752,17.92 17.92,25.088c7.68,7.68 15.872,13.824 25.6,18.432c7.68,4.096 17.408,7.168 27.648,9.216c6.656,1.536 21.504,2.56 32.768,2.56c4.608,0.512 10.752,0.512 13.824,0.512l251.904,0l13.824,0c11.264,-0.512 26.112,-1.536 32.768,-3.072c10.24,-2.048 19.968,-5.12 27.648,-9.216c9.728,-4.608 17.92,-10.752 25.088,-17.92c7.68,-7.68 13.824,-15.872 18.432,-25.6c4.096,-7.68 7.168,-17.408 9.216,-27.648c1.536,-6.656 2.56,-21.504 2.56,-32.768c0.512,-4.608 0.512,-10.752 0.512,-13.824l0,-265.729c-0.512,-11.264 -1.536,-26.112 -3.072,-32.768c-2.048,-10.24 -5.12,-19.968 -9.216,-27.648c-4.608,-9.728 -10.752,-17.92 -17.92,-25.088c-7.68,-7.68 -15.872,-13.824 -25.6,-18.432c-7.68,-4.096 -17.408,-7.168 -27.648,-9.216c-6.656,-1.536 -21.504,-2.56 -32.768,-2.56c-4.608,-0.512 -10.752,-0.512 -13.824,-0.512l-265.728,0Z" fill="url(#_Linear1)" fillRule="nonzero" />
          <path d="M344.754,289.698c-4.56,-2.282 -26.98,-13.311 -31.161,-14.832c-4.18,-1.521 -7.219,-2.282 -10.259,2.282c-3.041,4.564 -11.78,14.832 -14.44,17.875c-2.66,3.042 -5.32,3.423 -9.88,1.14c-4.561,-2.281 -19.254,-7.095 -36.672,-22.627c-13.556,-12.087 -22.709,-27.017 -25.369,-31.581c-2.66,-4.564 -0.283,-7.031 2,-9.304c2.051,-2.041 4.56,-5.324 6.84,-7.986c2.28,-2.662 3.04,-4.564 4.56,-7.606c1.52,-3.042 0.76,-5.705 -0.38,-7.987c-1.14,-2.282 -10.26,-24.72 -14.06,-33.848c-3.701,-8.889 -7.461,-7.686 -10.26,-7.826c-2.657,-0.132 -5.7,-0.16 -8.74,-0.16c-3.041,0 -7.98,1.141 -12.161,5.704c-4.18,4.564 -15.96,15.594 -15.96,38.032c0,22.438 16.34,44.116 18.62,47.159c2.281,3.043 32.157,49.089 77.902,68.836c10.88,4.697 19.374,7.501 25.997,9.603c10.924,3.469 20.866,2.98 28.723,1.806c8.761,-1.309 26.98,-11.029 30.781,-21.677c3.799,-10.649 3.799,-19.777 2.659,-21.678c-1.139,-1.902 -4.179,-3.043 -8.74,-5.325m-83.207,113.573l-0.061,0c-27.22,-0.011 -53.917,-7.32 -77.207,-21.137l-5.539,-3.287l-57.413,15.056l15.325,-55.959l-3.608,-5.736c-15.184,-24.145 -23.203,-52.051 -23.192,-80.704c0.033,-83.611 68.083,-151.635 151.756,-151.635c40.517,0.016 78.603,15.811 107.243,44.474c28.64,28.663 44.404,66.764 44.389,107.283c-0.035,83.617 -68.083,151.645 -151.693,151.645m129.102,-280.709c-34.457,-34.486 -80.281,-53.487 -129.103,-53.507c-100.595,0 -182.468,81.841 -182.508,182.437c-0.013,32.156 8.39,63.546 24.361,91.212l-25.892,94.545l96.75,-25.37c26.657,14.535 56.67,22.194 87.216,22.207l0.075,0c100.586,0 182.465,-81.852 182.506,-182.448c0.019,-48.751 -18.946,-94.59 -53.405,-129.076" fill="#fff" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "text-blue-400",
      svg: (
        <svg className="w-6 h-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M273,233.8v-0.7c-0.1,0.2-0.3,0.5-0.5,0.7H273z" fill="#2A7AB9" />
          <path d="M447.7,29.6H64.2C45.9,29.6,31,44.1,31,62v388c0,17.9,14.9,32.4,33.2,32.4h383.5c18.4,0,33.3-14.5,33.3-32.4 V62C481,44.1,466.1,29.6,447.7,29.6z M167.4,408.7h-68V204.2h68V408.7z M133.4,176.2H133c-22.8,0-37.5-15.7-37.5-35.3 c0-20.1,15.2-35.3,38.4-35.3c23.3,0,37.6,15.3,38,35.3C171.9,160.5,157.1,176.2,133.4,176.2z M412.5,408.7h-68V299.2 c0-27.5-9.8-46.2-34.4-46.2c-18.8,0-30,12.6-34.9,24.9c-1.8,4.4-2.2,10.5-2.2,16.6v114.2h-68c0,0,0.9-185.3,0-204.5h68v28.9 c9-13.9,25.2-33.8,61.3-33.8c44.7,0,78.2,29.2,78.2,92.1V408.7z" fill="#2A7AB9" />
        </svg>
      )
    },
    {
      name: "Gmail",
      href: "mailto:hello@giglabs.com",
      color: "text-red-400",
      svg: (
        <svg className="w-6 h-6" viewBox="0 0 48 48" width="48px" height="48px" xmlns="http://www.w3.org/2000/svg">
          <path d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" fill="#4caf50" />
          <path d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" fill="#1e88e5" />
          <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
          <path d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" fill="#c62828" />
          <path d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" fill="#fbc02d" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/90 to-primary py-16 relative overflow-hidden border-t-2 border-primary/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About GIGLABS */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              GIGLABS
            </h3>
            <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
              Transforming creative visions into digital reality through innovative design and development solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  onClick={handleQuickLinkClick}
                  className="block text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-1 transform text-sm sm:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 transform hover:scale-110 bg-white p-2 rounded-lg hover:bg-white/90 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/50 pt-8 text-center mt-8">
          <p className="text-blue-100 text-sm sm:text-base">
            2025 GIGLABS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;