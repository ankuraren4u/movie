import React from "react";
import { Dropdown } from "./../../components/Dropdown";
import { TypeDropdownList, YearDropdownList } from "./../../constants";
import StarRatingComponent from "react-star-rating-component";
import { useMovieHook } from "../../hooks";
import "./styles.scss";
export const Sidebar: React.FC = () => {
  let { filter, updateFilter, genres } = useMovieHook();

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    let value: string | number = e.currentTarget.value;
    let type = e.currentTarget.name;
    
    if(type === 'genre') {
      value = parseInt(value);
    }

    let filterObj = ({
      ...filter,
      ...{ [type]: value }
    });

    if (type === "type") {
      delete filterObj["genre"];
    }


    if(value === '') {
      delete filterObj[type];
    }
    updateFilter(filterObj);

  };

  return (
    <div className="sidebar">
      <h4 className="sidebar__header">Discover Options</h4>
      <Dropdown
        name="type"
        key="type"
        optionList={TypeDropdownList}
        value={filter ? filter.type : ""}
        handleChange={handleChange}
      />
      <Dropdown
        name="genre"
        key="genre"
        optionList={filter && filter.type ? genres[filter.type] : null}
        value={filter ? filter.genre : ""}
        handleChange={handleChange}
      />
      <Dropdown
        name="from"
        key="from"
        optionList={YearDropdownList}
        value={filter ? filter.from : ""}
        baseClass="width-s"
        handleChange={handleChange}
      />
      <div className="pull-left date-seperator">-</div>
      <Dropdown
        name="to"
        key="to"
        optionList={YearDropdownList}
        value={filter ? filter.to : ""}
        baseClass="width-s"
        handleChange={handleChange}
      />

      <div className="pull-left">
      <StarRatingComponent
        name="rating"
        value={filter ? filter.rating: 0}
        starCount={5} /* number of icons in rating, default `5` */
        onStarClick={(nextValue, prevValue, name) => {
          let filterObj: any = ({
            ...filter,
            ...{ rating: nextValue }
          });
          updateFilter(filterObj);
        }}
        starColor="#F6CC39" /* color of selected icons, default `#ffb400` */
        emptyStarColor="#4F5759" /* color of non-selected icons, default `#333` */
      />
      </div>
    </div>
  );
};
