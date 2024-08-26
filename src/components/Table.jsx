import satData from "./satData";

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((satData, id) => (
          <tr key={id}>
            <td>{satData.name}</td>
            <td>{satData.type}</td>
            <td>{satData.launchDate}</td>
            <td>{satData.operational ? "Active" : "Inactive"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
