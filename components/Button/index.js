export const Button = ({ link, children, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopenner noreferrer"
      className={`py-3 px-6 bg-yellow hover:bg-yellow-hover transition-colors rounded-2xl font-bold shadow-lg inline-block text-lg ${className}`}
    >
      {children}
    </a>
  );
};
