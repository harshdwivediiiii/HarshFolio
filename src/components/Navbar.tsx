"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Menu, Info, Folder, Mail,Search, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle"; // Import your ModeToggle component
import { useTheme } from "next-themes"; // Import useTheme

type NavLinkItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

const navLinks: NavLinkItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon className="w-5 h-5" />,
  },
  {
    title: "About",
    path: "/about",
    icon: <Info className="w-5 h-5" />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <Folder className="w-5 h-5" />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Mail className="w-5 h-5" />,
  },
];

const Navbar: React.FC = () => {
  const { theme } = useTheme(); // Get the current theme
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLinks, setFilteredLinks] = useState<NavLinkItem[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      setFilteredLinks(navLinks.filter(link => link.title.toLowerCase().includes(query)));
    } else {
      setFilteredLinks([]);
    }
  };

  return (
    <nav className={`fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 ${theme === 'light' ? 'bg-white' : 'bg-[#121212]'}`}>
      <div className={`flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        <Link
          href={"/"}
          className={`text-2xl md:text-5xl font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}
        >
          Harshfolio
        </Link>
        
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="    Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-black text-black dark:text-white"
          />
          {searchQuery && (
            <ul className="absolute left-0 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md mt-1 shadow-md">
              {filteredLinks.length > 0 ? (
                filteredLinks.map((link, index) => (
                  <li key={index} className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                    {link.icon}
                    <Link href={link.path} className="ml-2">{link.title}</Link>
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500 dark:text-gray-400">No results found</li>
              )}
            </ul>
          )}
        </div>

        <ModeToggle />

        <div className="mobile-menu block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className={`bg-[#121212] ${theme === 'light' ? 'bg-white' : 'bg-[#121212]'} text-${theme === 'light' ? 'black' : 'white'}`}>              
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <ModeToggle/>
              <ul className="flex flex-col space-y-4 mt-4">
                {navLinks.map((link, index) => (
                  <li key={index} className={`flex items-center space-x-2 transition duration-300 transform hover:scale-105 ${theme === 'light' ? 'hover:text-yellow-600' : 'hover:text-yellow-100'}`}>                    
                    {link.icon}
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        <div className="menu hidden md:flex md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className={`flex items-center space-x-2 transition duration-300 transform ${theme === 'light' ? 'text-black hover:text-yellow-600' : 'text-white hover:text-yellow-100'}`}>                
                {link.icon}
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;