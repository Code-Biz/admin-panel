import { useAuthContext } from "../store/contextsAndEffects_provider";

const Home = () => {
  const { userData } = useAuthContext();
  return (
    <>
      <h1>Welcome Doctor {userData.username}</h1>
    </>
  );
};

const About = () => {
  return <h1>About Page</h1>;
};

const Contact = () => {
  const { userData } = useAuthContext();
  return (
    <>
      <label htmlFor="Email">Username</label>
      <input type="Email" placeholder={userData.username} readOnly />
      <br />
      <label htmlFor="Email">Email</label>
      <input type="Email" placeholder={userData.email} readOnly />
    </>
  );
};

export { Home, About, Contact };

//Click in forn of the Services and press Ctrl D again and again to select all occurrences of term services written anywhere in this file

//const [user, setUser] = useState({})
// Above line can be thoguht as of const [userState, setUserState] = useState({})

// ... to preservate the initial values/state
