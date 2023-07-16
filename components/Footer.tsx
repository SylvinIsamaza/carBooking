import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gay-100">
      <div className="flex max-md:flex-col justify-between flex-wrap gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car hub 2023 <br />
            All right reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((footer) => (
            <div className="footer__link" key={footer.title}>
              <h3 className="font-bold">{footer.title}</h3>
              {footer.links.map((link)=>(
                <Link key={link.title} href={link.url} className="text-gray-500">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 CarHub. All right Reserved</p>
          <div className="footer__copyrights-link">
            <Link href='/' className="text-gray-500">
              Privacy policy
            </Link>
            <Link href='/' className="text-gray-500">
              Terms of Use
            </Link>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
