export const findFirstParam = (pathname) => {
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];
  return firstSegment;
};

export const findSecondParam = (pathname) => {
  const pathSegments = pathname.split("/").filter(Boolean);
  const secondSegment = pathSegments[1];
  return secondSegment;
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
