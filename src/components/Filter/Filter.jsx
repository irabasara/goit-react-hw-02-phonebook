// import css from './filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="filter">
        <input
          name="filter"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="find contact"
        />
      </label>
    </div>
  );
};
