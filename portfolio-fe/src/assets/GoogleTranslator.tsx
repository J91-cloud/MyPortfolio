import { useEffect, useRef } from "react";

interface GoogleTranslatorProps {
  selectedLanguage: string;
  handleLanguageChange: (lang: string) => void;
  show: boolean;
}

const GoogleTranslator = ({ selectedLanguage, handleLanguageChange, show }: GoogleTranslatorProps) => {
  const translateElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      // Load Google Translate script dynamically
      const addGoogleTranslateScript = () => {
        // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
        if (!window.google) {
          const script = document.createElement("script");
          script.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
          script.async = true;
          document.body.appendChild(script);
        }
        
// @ts-expect-error : Types are not available for google translate or not of concern at the moment.
        window.googleTranslateElementInit = () => {
            // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
          new window.google.translate.TranslateElement(
            { pageLanguage: selectedLanguage, includedLanguages: "en,fr" }, // Languages you want to support
            translateElementRef.current
          );
        };
      };

      addGoogleTranslateScript();
    }
  }, [show, selectedLanguage]);

  return (
    <div>
      {show && (
        <div ref={translateElementRef} style={{ display: "inline-block" }}></div>
      )}
    </div>
  );
};

export default GoogleTranslator;
