import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { AppRootState } from "../../redux/store";

const Profile = () => {
  const username = useSelector((state: AppRootState) => state.auth.username);
  const password = useSelector((state: AppRootState) => state.auth.password);
  const auth = () =>
    username === "admin" && password === "password" ? true : false;

  if (!auth()) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <p>
        Redux is a powerful state management library for JavaScript
        applications, often used in combination with popular front-end
        frameworks such as React. It provides a predictable and centralized way
        to manage the state of an application, which can help simplify code and
        make it easier to debug and maintain.
      </p>
      <p>
        The core idea behind Redux is that an application's state is stored in a
        single, centralized store. This store is updated using actions, which
        are plain JavaScript objects that describe what should change in the
        state. Reducers are functions that take the current state and an action
        as inputs, and return the new state. This way, the state of an
        application is updated in a predictable and consistent way.
      </p>
      <p>
        One of the key benefits of using Redux is that it allows developers to
        separate concerns in their code. With Redux, the state of an application
        is kept separate from the components that render it. This means that
        components can be written in a more declarative way, and can be easily
        reused across different parts of the application. It also makes it
        easier to test components, since they don't depend on the state of the
        application.
      </p>
      <p>
        Another advantage of using Redux is that it provides a way to handle
        asynchronous data flow. Asynchronous operations, such as making API
        requests, can be managed using middleware in Redux. This can help
        simplify the code and make it easier to reason about, since all the
        logic for handling asynchronous data is centralized in one place.
      </p>
      <p>
        However, Redux can be a bit daunting to learn at first, and may not be
        necessary for smaller applications. In some cases, it may be more
        appropriate to use simpler state management solutions, or to manage
        state within individual components. But for larger applications with
        complex state requirements, Redux can be a powerful tool for simplifying
        code and improving maintainability.
      </p>
      <p>
        Overall, Redux is a useful library for managing state in JavaScript
        applications, and is especially popular in the React community. It
        provides a way to centralize state management, separate concerns in
        code, and handle asynchronous data flow in a consistent and predictable
        way. While it may not be necessary for all applications, it can be a
        valuable tool for larger and more complex projects.
      </p>
    </div>
  );
};

export default Profile;
