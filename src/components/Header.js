import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-header">
      <div className="title-flag">
        <Image
          src="/assets/flag-tumaco.png"
          height={30}
          width={60}
          alt="tumaco flag"
        />
        <p className="cartel-title">Cartel De Tumaco</p>
      </div>
      <div className="header-links">
        <a href="#history">Notre Histoire</a>
        <a href="#history">Nos Ambitions</a>
        <a href="#history">Membres</a>
        <a href="">La Gazette du Cartel</a>
      </div>
    </header>
  );
};

export default Header;
