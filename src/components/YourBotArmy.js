const YourBotArmy = ({ armyList, onRelease }) => {
  const release = (id) => {
    onRelease(id);
  };

  return (
    <section>
      <h2>Army</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Avatar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {armyList.map(({ id, name, avatar_url }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <img className="img" src={avatar_url} alt="" />
              </td>
              <td>
                <button onClick={() => release(id)}>Release</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default YourBotArmy;

