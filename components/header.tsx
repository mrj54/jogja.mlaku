// app/components/Header.tsx
'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/hooks/useLanguage";
import { translations } from "@/app/i18n/translations";

type TranslationType = {
  [key: string]: {
    nav: {
      home: string;
      explore: string;
      about: string;
    };
    [key: string]: any;
  };
};

const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
};

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <Button 
      variant="outline" 
      onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
    >
      {language.toUpperCase()}
    </Button>
  );
}

function LanguageAwareText({ textKey }: { textKey: string }) {
  const { language } = useLanguage();
  const t = (translations as TranslationType)[language];
  
  const text = getNestedValue(t, textKey) || textKey;
  
  return <>{text}</>;
}

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 px-5 items-center justify-between">
        {/* <div className="flex-1" /> */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/img/logo.png"
            alt="Jogja.Melaku Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-semibold text-xl">Jogja.Melaku</span>
        </Link>
        
        <nav className="flex-1 flex justify-end items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            <LanguageAwareText textKey="nav.home" />
          </Link>
          <Link href="/explore" className="text-sm font-medium hover:text-primary">
            <LanguageAwareText textKey="nav.explore" />
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            <LanguageAwareText textKey="nav.about" />
          </Link>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}