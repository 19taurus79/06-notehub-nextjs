"use client";
const Error = (error: Error) => {
  return <p>Could not fetch note details. {error.message}</p>;
};

export default Error;
