import React from "react";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      {name} <br />
      children = {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름"
};

export default MyComponent;
