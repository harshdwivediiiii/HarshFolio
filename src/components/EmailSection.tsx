"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

const EmailSection: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div
        suppressHydrationWarning
        className={`absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 w-80 h-80 rounded-full blur-lg ${
          theme === "dark" ? "bg-primary-900" : "bg-primary-300"
        }`}
      />
      
      <div className="z-10">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white my-2">Let&apos;s Connect</h5>
        <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
          I&apos;m currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/harshdwivediiiii" target="_blank" aria-label="GitHub">
            <Github className="w-6 h-6 text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/harshvardhan-dwivedi-86b375290" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition" />
          </Link>
        </div>
      </div>

      <Card className="p-6 w-full max-w-lg bg-white dark:bg-[#181818] shadow-lg">
        <CardContent>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm text-center">✅ Email sent successfully!</p>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input 
                name="email" 
                type="email" 
                placeholder="Your email" 
                required 
                className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white"
              />
              <Input 
                name="subject" 
                type="text" 
                placeholder="Subject" 
                required 
                className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white"
              />
              <Textarea 
                name="message" 
                placeholder="Message" 
                required 
                className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white"
              />
              <Button 
                type="submit" 
                className="w-full bg-primary-500 dark:bg-primary-700 hover:bg-primary-600 dark:hover:bg-primary-800 text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default EmailSection;
