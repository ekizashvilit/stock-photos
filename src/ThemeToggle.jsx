import { useGlobalContext } from './context';

const ThemeToggle = () => {
  const { data } = useGlobalContext();
  console.log(data);

  return <div>ThemeToggle</div>;
};
export default ThemeToggle;
