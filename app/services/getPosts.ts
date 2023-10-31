export const getAllPosts = async () => {
   // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   console.log(response);
  
    if (!response.ok) throw new Error("Failed to fetch posts");
  
    return response.json();
  };
  
  export const getPostsBySearch = async (search: string) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?q=${search}`
    );
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
  };