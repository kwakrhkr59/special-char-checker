import React from "react";
import { Mail, Github, Linkedin } from "lucide-react"; 

const contactLinks = [
  {
    href: "mailto:kwakrhkr59@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://github.com/kwakrhkr59",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/hyeonjeong-kwak",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={iconGroupStyle}>
          {contactLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p style={copyrightStyle}>
          &copy; {new Date().getFullYear()} Hyeonjeong Kwak. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// 스타일 정의
const footerStyle = {
  width: "100%",
  padding: "40px 0",
  marginTop: "60px",
  borderTop: "1px solid var(--border)",
  textAlign: "center",
};

const containerStyle = {
  maxWidth: "720px",
  margin: "0 auto",
  padding: "0 20px",
};

const iconGroupStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  marginBottom: "16px",
};

const linkStyle = {
  color: "var(--text-muted)",
  transition: "color 0.2s ease",
  display: "inline-flex",
  alignItems: "center",
};

const copyrightStyle = {
  fontSize: "13px",
  color: "var(--text-muted)",
  fontFamily: "'Pretendard', sans-serif",
};

export default Footer;