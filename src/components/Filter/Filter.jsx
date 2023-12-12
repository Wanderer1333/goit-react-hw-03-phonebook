export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <form>
        <input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={handleFilterChange}
          style={{
            padding: '5px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </form>
    </div>
  );
};
