
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dropdown from 'react-bootstrap/Dropdown';

function AdminAccount() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <AccountCircleIcon/> Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/viewAdmin">Account Info</Dropdown.Item>
        <Dropdown.Item href="/updateAdmin">Update Account</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AdminAccount;
