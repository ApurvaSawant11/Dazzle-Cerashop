import { v4 as uuid } from "uuid";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const FooterLinks = {
  categoryLinks: [
    {
      id: uuid(),
      linkName: "Bowls",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "Cups",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "Plates",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "Planters",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "Gifts",
      url: "#",
    },
  ],

  accountLinks: [
    {
      id: uuid(),
      linkName: "My Account",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "Wishlist",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "Cart",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "Track Order",
      url: "#",
    },
  ],

  helpLinks: [
    {
      id: uuid(),
      linkName: "Return & Refund",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "FAQ",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "Contact Us",
      url: "#",
    },
    {
      id: uuid(),
      linkName: "Privacy Policy",
      url: "#",
    },
  ],

  socialLinks: [
    {
      id: uuid(),
      linkName: <BsGithub />,
      url: "https://github.com/ApurvaSawant11",
    },
    {
      id: uuid(),
      linkName: <BsTwitter />,
      url: "https://twitter.com/ApurvaSawant11",
    },
    {
      id: uuid(),
      linkName: <BsLinkedin />,
      url: "https://www.linkedin.com/in/apurvasawant11",
    },
  ],
};

export { FooterLinks };
