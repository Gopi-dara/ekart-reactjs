
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dropdown from 'react-bootstrap/Dropdown';

function UserDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <AccountCircleIcon/> Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="">Account Info</Dropdown.Item>
        <Dropdown.Item href="/UserHomePage/UserViewItems">view user</Dropdown.Item>
        <Dropdown.Item href="">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserDropdown;
