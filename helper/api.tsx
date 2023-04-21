// api.js

export const getHighlights = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/highlights`);
  const data = await response.json();
  return data;
};

export const getCategories = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/categories`);
  const data = await response.json();
  return data;
};

export const getActivities = async (type: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/activities/${type}`
  );

  console.log(type , "api")
  const data = await response.json();
  return data;
};
