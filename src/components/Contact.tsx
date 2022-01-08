import React from 'react';

const buttonClass =
  'h-fit w-fit text-white hover:-translation-y-1 transition ease-in-out';

interface ContactProps {
  className: string;
  email: string;
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

export default function Contact(props: ContactProps) {
  const { className, email } = props;
  return (
    <div className={className}>
      <a className={buttonClass} href={email}>
        <MailIcon />
      </a>
      <a className={buttonClass} href={email}>
        <MailIcon />
      </a>
      <a className={buttonClass} href={email}>
        <MailIcon />
      </a>
      <a className={buttonClass} href={email}>
        <MailIcon />
      </a>
      <a className={buttonClass} href={email}>
        <MailIcon />
      </a>
    </div>
  );
}
