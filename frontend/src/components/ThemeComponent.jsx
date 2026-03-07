import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Theme options matching App.css theme classes
export const themeOptions = [
  { name: 'Blue', value: 'blue', color: '#1e40af' },
  { name: 'Green', value: 'green', color: '#028508' },
  { name: 'Yellow', value: 'yellow', color: '#fcc40b' },
  { name: 'Yellow Dark', value: 'yellow_Dark', color: '#fcc40b' },
  { name: 'Purple', value: 'purple', color: '#4c1d95' },
  { name: 'Gray', value: 'gray', color: '#374151' },
  { name: 'Orange', value: 'orange', color: '#b34700' },
  { name: 'Pink', value: 'pink', color: '#d7286e' },
  { name: 'Teal', value: 'teal', color: '#134e4a' },
  { name: 'Teal Dark', value: 'teal_Dark', color: '#0f3e3a' },
  { name: 'Cyan', value: 'cyan', color: '#046d80' },
  { name: 'Cyan Dark', value: 'cyan_Dark', color: '#046d80' },
  { name: 'Indigo', value: 'indigo', color: '#3a377b' },
  { name: 'Lime', value: 'lime', color: '#46710e' },
  { name: 'Brown', value: 'brown', color: '#654341' },
  { name: 'Violet', value: 'violet', color: '#553c9a' },
  { name: 'Amber', value: 'amber', color: '#92400e' },
  { name: 'Emerald', value: 'emerald', color: '#037953' },
  { name: 'Fuchsia', value: 'fuchsia', color: '#851441' },
  { name: 'Slate', value: 'slate', color: '#64748b' },
  { name: 'Slate Dark', value: 'slate_Dark', color: '#334155' },
  { name: 'Dark', value: 'dark', color: '#1f2937' },
  { name: 'Light', value: 'light', color: '#f3f4f6' },
  { name: 'Black', value: 'black', color: '#000000' },
];

const STORAGE_KEY = 'avgfx_theme';

// Simulated async localStorage operations for TanStack Query
const fetchTheme = async () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored || 'blue'; // Default theme
};

const updateTheme = async (newTheme) => {
  localStorage.setItem(STORAGE_KEY, newTheme);
  return newTheme;
};

export const useTheme = () => {
  const queryClient = useQueryClient();

  // Use useQuery to READ theme from localStorage (treating as async data)
  const { data: currentTheme = 'blue', isLoading } = useQuery({
    queryKey: ['theme'],
    queryFn: fetchTheme,
    staleTime: Infinity, // Keep data fresh indefinitely
    gcTime: Infinity, // Keep in cache forever (formerly cacheTime)
  });

  // Use useMutation to UPDATE theme to localStorage
  const mutation = useMutation({
    mutationFn: updateTheme,
    onSuccess: (newTheme) => {
      // Update the query cache with the new theme
      queryClient.setQueryData(['theme'], newTheme);
    },
  });

  const setTheme = (theme) => {
    mutation.mutate(theme);
  };

  return {
    currentTheme,
    setTheme,
    isLoading,
    isPending: mutation.isPending,
  };
};

const ThemeComponent = ({ children }) => {
  const { currentTheme, isLoading } = useTheme();

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#f3f4f6',
        }}
      >
        <div
          style={{
            padding: '20px',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return <div className={currentTheme}>{children}</div>;
};

export default ThemeComponent;
