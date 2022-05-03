import { SearchTwoTone } from "@mui/icons-material";
import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Group,
  Logo,
  ButtonLink,
  Feature,
  Title,
  Text,
  TextLink,
  Controls,
  PlayButton,
  MoreInfoButton,
  Search,
  SearchInput,
  DropDown,
  Profile,
  Picture,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
// Header.Gradient = function HeaderGradient({ children, ...restProps }) {
//   return <Gradient {...restProps}>{children}</Gradient>;
// };

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
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

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
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

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
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
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};

Header.DropDown = function HeaderDropDown({ children, ...restProps }) {
  return <DropDown {...restProps}>{children}</DropDown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};
