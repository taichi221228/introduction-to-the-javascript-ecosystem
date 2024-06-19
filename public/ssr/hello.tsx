import React from "react";

export const Hello = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a sample component rendered on the server.</p>
    </div>
  );
};
