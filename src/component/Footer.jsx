/** @format */

const Footer = () => {
  const socialMedia = [
    {
      icon: "logo-instagram",
      link: "https://www.instagram.com/maretaisnaini_",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/mareta-nur-isnaini",
    },
    {
      icon: "logo-github",
      link: "https://github.com/maretaeta",
    },
    {
      icon: "mail-outline",
      link: "mailto:maretanur197@gmail.com",
    },
  ];

  return (
    <footer id="contact" className="bg-cyan-950 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2024 Eta . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {socialMedia.map((social) => (
              <a
                key={social.icon}
                href={social.link}
                className="text-white hover:text-gray-200 cursor-pointer ms-5 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon name={social.icon} ></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
