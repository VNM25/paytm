export function Heading({ title }) {
  return <div className="text-4xl font-extrabold text-center">{title}</div>;
}

export function Subheading({ title }) {
  return <div className="text-lg mx-5 text-wrap font-medium text-gray-500 text-center">{title}</div>;
}
