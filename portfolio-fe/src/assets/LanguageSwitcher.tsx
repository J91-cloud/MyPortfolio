import { useState } from "react";
import { Translate } from "@phosphor-icons/react";
import GoogleTranslator from "../assets/GoogleTranslator"; // Ensure this is the correct path for GoogleTranslator

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const [showTranslate, setShowTranslate] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    // Close the translator modal or widget after selecting the language
    setShowTranslate(false);
    // Call any function in GoogleTranslator to apply the translation
    // Pass the selected language to GoogleTranslator or set the page language here
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center space-x-2 text-center hover:bg-inherit md:flex-row ${className}`}
    >
      <div>
        <button
          className="flex text-sm text-blue-500 hover:bg-none hover:text-blue-500"
          onClick={() => setShowTranslate(!showTranslate)}
          type="button"
        >
          <Translate className="mx-1 h-6 w-6" color="#4689F6" />
          Change Language
        </button>
      </div>
      <div>
        {showTranslate && (
          <GoogleTranslator
            selectedLanguage={selectedLanguage}
            handleLanguageChange={handleLanguageChange}
            show={showTranslate}
          />
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
