import { useDarkMode } from '../hooks/useDarkMode';

import { Moon, Sun } from 'phosphor-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      onClick={() => {
        setIsDark(!isDark);
      }}
      className='toggleTheme'
    >
      {isDark ? (
        <div className='themeContainer'>
          <Moon size={20} weight='bold' />
          <button className='themeText'>Dark Mode</button>
        </div>
      ) : (
        <div className='themeContainer'>
          <Sun size={20} weight='bold' />
          <button className='themeText'>Light Mode</button>
        </div>
      )}
    </button>
  );
}
