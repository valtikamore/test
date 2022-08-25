//libraries
import { Link } from 'react-router-dom';
//utils
import { ImageTypes } from 'utils/constants';
//components
import { Image } from 'components';

interface Props {
  path: '/';
  children: JSX.Element | JSX.Element[];
}

export const Logo = ({ path, children }: Props) => {
  return <Link to={path}>{children}</Link>;
};
