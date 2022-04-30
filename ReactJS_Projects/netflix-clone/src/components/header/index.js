import { SearchTwoTone } from "@mui/icons-material";
import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Frame,
  Group,
  Logo,
  NavLink,
  TextLink,
  Gradient,
  Search,
  SearchInput,
  Picture,
  DropDown,
  Profile,
  ButtonLink,
  Feature,
  Title,
  Text,
  Controls,
  PlayButton,
  MoreInfoButton,
  MaturityIcon,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.NavLink = function HeaderNavLink({ to, children, ...restProps }) {
  return (
    <NavLink {...restProps}>
      <ReactRouterLink to={to}>{children} </ReactRouterLink>
    </NavLink>
  );
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Gradient = function HeaderGradient({ children, ...restProps }) {
  return <Gradient {...restProps}>{children}</Gradient>;
};

Header.Search = function HeaderSearch({
  // searchTerm,
  // setSearchTerm,
  onChange,
  searchQuery,
  setSearchQuery,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...restProps}>
      {/* //setting setSearchActive state based on the previous state */}
      <SearchTwoTone
        onClick={() => setSearchActive((setSearchActive) => !setSearchActive)}
      />
      <SearchInput
        // value={searchTerm}
        // onChange={({ target }) => setSearchTerm(target.value)}
        value={searchQuery}
        // onChange={({ target }) => setSearchQuery(target.value)}
        onChange={onChange}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.DropDown = function HeaderDropDown({ children, ...restProps }) {
  return <DropDown {...restProps}>{children}</DropDown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.Controls = function HeaderControls({ children, ...restProps }) {
  return <Controls {...restProps}>{children}</Controls>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.MoreInfoButton = function HeaderMoreInfoButton({
  children,
  ...restProps
}) {
  return <MoreInfoButton {...restProps}>{children}</MoreInfoButton>;
};

Header.MaturityIcon = function HeaderMaturityIcon({ children, ...restProps }) {
  return <MaturityIcon {...restProps}>{children}</MaturityIcon>;
};
