The solution involves using the `useLocation` hook instead of `useParams`. This hook provides access to the entire location object, including the pathname.  By parsing the pathname, we can extract the required parameters manually. This approach works regardless of the component's nesting level. Here's the corrected code:

```javascript
import { useLocation } from 'react-router-dom';

function UserProfile() {
  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.split('/').slice(-1)[0]; // Extract the ID from the pathname

  // ... rest of the component using the extracted 'id'
  return (
    <div>
      <h1>User Profile - {id}</h1>
    </div>
  );
}

export default UserProfile;
```
This solution provides a more robust way to handle parameter extraction in React Router v6, ensuring that parameters are correctly accessed even in complex component structures.