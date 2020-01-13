import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, __RouterContext } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
//
function useRouter() {
  return useContext(__RouterContext);
}
//
const Main = () => {
  const { location } = useRouter();
  //console.log('Location', location);
  //
  const transitions = useTransition(location, location => location.key, {
    from: { opacity: 0, position: 'absolute', marginTop: '10vh', transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' }
  });
  // const transitions = useTransition(location, location => location.key, {
  //   from: {
  //     opacity: 0,
  //     position: 'absolute',
  //     width: '100%',
  //     transform: 'translate3d(100%, 0, 0)'
  //   },
  //   enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' }
  // });

  return transitions.map(({ item, props: aniProps, key }) => (
    <animated.div
      key={key}
      style={{
        ...aniProps,
        width: '100%',
        height: '90vh'
      }}
    >
      {
        // location=item :is there to stop route changing before fade out and keeping uptodate
      }
      <Switch location={item}>
        <Route exact path="/" component={One} />
        <Route exact path="/two" component={Two} />
        <Route exact path="/three" component={Three} />
      </Switch>
    </animated.div>
  ));
};
const Routes = () => {
  return (
    <Router>
      <ul className="router-nav">
        <NavLink to="/">One</NavLink>
        <NavLink to="/two">Two</NavLink>
        <NavLink to="/three">Three</NavLink>
      </ul>
      <Main />
    </Router>
  );
};

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  );
}

const One = () => {
  return (
    <div className="page-route">
      <h1>One</h1>
    </div>
  );
};
const Two = () => {
  return (
    <div className="page-route two">
      <h1>Two</h1>
    </div>
  );
};
const Three = () => {
  return (
    <div className="page-route three">
      <h1>Three</h1>
    </div>
  );
};

export default Routes;
