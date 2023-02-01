import React from "react";
import { generateKey } from "./../util/utils";

function TableHeader(props) {
  const { headerLabels, mode } = props;

  return (
    <thead>
      <tr>
      {(mode === 'single' || mode === 'multiple') ? (
        <th></th>
      ) : null}
        
        {Array.isArray(headerLabels) &&
          headerLabels.map((header, index) => (
            <th scope="col" key={generateKey("th", header, index)}>
              {header}
            </th>
          ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
