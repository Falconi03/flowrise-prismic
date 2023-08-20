import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";

async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="header" className="py-4 md:py-6 lg:py-8 flex">
      <div className=" flex gap-4 items-center justify-between sm:flex-row flex-col">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex">
            {settings.data.navigation.map(({ label, link }, id) => {
              return (
                <li key={id}>
                  <PrismicNextLink field={link} className="p-3 ">
                    {label}
                  </PrismicNextLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}

export default Header;
