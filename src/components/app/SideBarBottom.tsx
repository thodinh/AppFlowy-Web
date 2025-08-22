import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReactComponent as TemplateIcon } from '@/assets/icons/template.svg';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as TrashIcon } from '@/assets/icons/delete.svg';
import { QuickNote } from '@/components/quick-note';
import { ThemeModeContext } from '@/components/main/useAppThemeMode';
import { useContext } from 'react';
import { ReactComponent as MoonIcon } from '@/assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '@/assets/icons/sun.svg';

function SideBarBottom() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isDark, setDark } = useContext(ThemeModeContext) || {};

  return (
    <div
      className={'px-4 sticky bottom-0 bg-bg-base'}
    >
      <div
        className={'flex py-4  border-t border-line-divider gap-1 justify-around items-center'}

      >
        <Tooltip title={isDark ? t('settings.appearance.themeMode.light') : t('settings.appearance.themeMode.dark')}>
          <IconButton
            size={'small'}
            onClick={() => setDark?.(!isDark)}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </Tooltip>

        <Tooltip title={t('trash.text')}>
          <IconButton
            size={'small'}
            onClick={() => {
              navigate('/app/trash');
            }}
          >
            <TrashIcon />
          </IconButton>
        </Tooltip>

        <QuickNote />
      </div>

    </div>
  );
}

export default SideBarBottom;