"use client";
import Link from "next/link";
import React, { useState } from "react";
import Styles from "./link.module.css";

import Navlink from "./navLink/navlink";
import Image from "next/image";
import { handlelogout } from "@/lib/action";

const Links = ({session}) => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const isAdmin = true;
  return (
    <div className={Styles.container}>
      <div className={Styles.linkss}>
        {links.map((linkss) => (
          <Navlink item={linkss} key={linkss.title} />
        ))}
        {session?.user ? (
          <>
            {session?.user.isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handlelogout}>
              <button className={Styles.logout}> Logout </button>
            </form>
          </>
        ) : (
          <Navlink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={Styles.menubtn}
        src={"/mn.png"}
        alt=""
        width={40}
        height={40}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={Styles.mobilelinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
