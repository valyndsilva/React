import {
  HeaderContainer,
  NavContainer,
  FooterContainer,
  HomeContainer,
  AboutContainer,
  PostPageContainer,
  NewPostContainer,
  MissingContainer,
  EditPostContainer,
} from './containers';
import * as ROUTES from './routes/routes';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
function App() {
  return (
    <div className="App">
      <HeaderContainer title="ReactJS Blog App" />
      <DataProvider>
        <NavContainer />
        <Routes>
          <Route exact index path={ROUTES.HOME} element={<HomeContainer />} />
          <Route exact path={ROUTES.NEWPOST} element={<NewPostContainer />} />
          <Route path={ROUTES.EDITPOST} element={<EditPostContainer />} />
          <Route path={ROUTES.POSTPAGE} element={<PostPageContainer />} />
          <Route path={ROUTES.ABOUT} element={<AboutContainer />} />
          <Route path={ROUTES.MISSING} element={<MissingContainer />} />
        </Routes>
      </DataProvider>
      <FooterContainer />
    </div>
  );
}

export default App;
