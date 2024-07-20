export const findFirstParam = (pathname) => {
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];
  return firstSegment;
};
