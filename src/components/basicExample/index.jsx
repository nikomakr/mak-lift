import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="btn1"  id="dropdown-basic">
        Fleet
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/boom">Boom</Dropdown.Item>
        <Dropdown.Item href="/scissors">Scissors</Dropdown.Item>
        <Dropdown.Item href="/mount">Mount</Dropdown.Item>
        <Dropdown.Item href="/spider">Spider</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;