type IconProps = { className?: string };

export function IconInstagram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function IconTikTok({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14.5 2h2.2c.2 2.2 1.8 3.9 4 4v2.1a6.3 6.3 0 0 1-4-.9V15a4.5 4.5 0 1 1-4.5-4.5h.5v2.2a2.3 2.3 0 1 0 2.3 2.3V2Z" />
    </svg>
  );
}

export function IconYoutube({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.8 8.2a2.7 2.7 0 0 0-1.9-1.9C18.1 6 12 6 12 6s-6.1 0-7.9.3A2.7 2.7 0 0 0 2.2 8.2 29 29 0 0 0 2 12a29 29 0 0 0 .2 3.8 2.7 2.7 0 0 0 1.9 1.9c1.8.3 7.9.3 7.9.3s6.1 0 7.9-.3a2.7 2.7 0 0 0 1.9-1.9 29 29 0 0 0 .2-3.8 29 29 0 0 0-.2-3.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}
