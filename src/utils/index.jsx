export const findParam = (pathname, index) => {
  const pathSegments = pathname.split("/").filter(Boolean);
  const segment = pathSegments[index];
  return segment;
};

export const codingStringToArray = (string) => {
  return string.split('-').map(Number);
}

export const codingValues = [
  'Wordpress',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'PHP',
  'MySql',
  'Bootstrap',
  'iyzico',
  'API',
  'Tailwind',
]
