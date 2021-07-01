export const Button = ({ link, children }) => {
  return (
    <a href={link} target="_blank" rel="noopenner noreferrer" className="py-3 px-5 bg-yellow rounded-2xl font-bold shadow inline-block">
      {children}
    </a>
  );
};
