import { useNavigation } from '../contexts/NavigationContext';

export function useNavigate() {
  const { startLoading } = useNavigation();

  const navigate = (path: string) => {
    startLoading(path);
  };

  return navigate;
}