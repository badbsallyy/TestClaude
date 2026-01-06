"use client";

import { Twitter, Facebook, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";

interface BlogShareProps {
  title: string;
  url: string;
}

export function BlogShare({ title, url }: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:bg-blue-400",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: "hover:bg-blue-700",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
        Teilen:
      </span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:text-white transition-colors ${link.color}`}
          aria-label={`Share on ${link.name}`}
        >
          {link.icon}
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <LinkIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
