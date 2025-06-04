import he from 'he';

export const findParam = (pathname, index) => {
  const pathSegments = pathname.split("/").filter(Boolean);
  const segment = pathSegments[index];
  return segment;
};

export const codingStringToArray = (string) => {
  return string.split("-").map(Number);
};

export const codingValues = [
  "Wordpress",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "PHP",
  "MySql",
  "Bootstrap",
  "iyzico",
  "API",
  "Tailwind",
];

export const getLanguage = (value) => {
  if (value === "tr") {
    return "0";
  } else {
    return "1";
  }
};

export const getSeoDescription = (text, limit = 150) => {
  const decodedDescription  = he.decode(text);
  const match = decodedDescription.match(/[^.!?]+[.!?]/);
  const sentence = match ? match[0] + match[1] : decodedDescription;
  return sentence.length > limit ? sentence.slice(0, limit) + "..." : sentence;
};
