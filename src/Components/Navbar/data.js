import React from "react";
import {
  FaTiktok,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    label: "News",
    name: "news",
  },
  {
    id: 2,
    label: "About",
    name: "about/whoweare",
  },
  {
    id: 3,
    label: "Featured",
    name: "featured",
  },
  {
    id: 4,
    label: "Artists",
    name: "artists",
  },
  {
    id: 5,
    label: "Packages",
    name: "packages",
  },
  {
    id: 6,
    label: "Contact",
    name: "contact",
  },
];

export const social = [
  {
    id: 1,
    name: "TikTok",
    url: "https://www.tiktok.com/@experiencemusicgroup/video/7018005515846405381?_d=secCgYIASAHKAESPgo8xYkm3aNMCKhTatwwY9mn9Va54IdpMzifhn2DejVjNj3COkusxhkjySMcY66Y%2FqOD4LfAZMn6cehhq45jGgA%3D&checksum=775922db94ae4e58f93aff4d0a16dbc4f25da9103c80490ffd9e0987002c2000&clips_cover_ab=v0&enable_clips=1&language=en&preview_pb=0&sec_user_id=MS4wLjABAAAAOI5BvOD0T8vupZApmmW--ct1Sh8_-lz8Yya1f7fX8jhrI4eEFbQJUHRURMQ6XfMy&share_app_id=1233&share_item_id=7018005515846405381&share_link_id=B242D781-885C-4BAA-BFF3-2662BE4B3959&source=h5_m&timestamp=1634007568&tt_from=sms&u_code=dl13903b7afejm&user_id=7013773129802925062&utm_campaign=client_share&utm_medium=ios&utm_source=sms&_r=1",
    icon: <FaTiktok size={23} />,
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/experiencemusicgroup/",
    icon: <FaInstagram size={23} />,
  },
  {
    id: 3,
    name: "Facebook",
    url: "https://www.facebook.com/ExperienceMusicGroup/",
    icon: <FaFacebookSquare size={23} />,
  },
  {
    id: 4,
    name: "YouTube",
    url: "https://www.youtube.com/user/ExperienceRecords?feature=mhee",
    icon: <FaYoutube size={23} />,
  },
  {
    id: 5,
    name: "Twitter",
    url: "https://twitter.com/ExpMusicGroup?lang=en",
    icon: <FaTwitter size={23} />,
  },
];
