import React from "react";
import "./index.css";

type FilterProps = {
  filterDoneTodo: boolean;
  switchFilterDoneTodo: () => void;
};

const Filter = (props: FilterProps) => {
  return (
    <div className="filter">
      <input
        type="checkbox"
        checked={props.filterDoneTodo}
        onChange={props.switchFilterDoneTodo}
      />
      隱藏已完成事項
    </div>
  );
};

export default Filter;
