import { usePublishContext } from '@/application/publish';
import { AFScroller } from '@/components/_shared/scroller';
import { ReactComponent as AppFlowyLogoLight } from '@/assets/icons/appflowy-light.svg';
import { ReactComponent as AppFlowyLogoDark } from '@/assets/icons/appflowy-dark.svg';
import { ThemeModeContext } from '@/components/main/useAppThemeMode';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileOutline from 'src/components/_shared/mobile-outline/MobileOutline';

function PublishMobileFolder({ onClose }: { onClose: () => void }) {
  const outline = usePublishContext()?.outline;
  const viewId = usePublishContext()?.viewMeta?.view_id;
  const navigateToView = usePublishContext()?.toView;
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeModeContext) || {};

  return (
    <AFScroller overflowXHidden className={'flex w-full flex-1 flex-col px-4'}>
      <div
        onClick={() => {
          navigate('/');
        }}
        className={'sticky top-0 z-[10] w-full bg-bg-body py-2 pb-0'}
      >
        {isDark ? <AppFlowyLogoDark width={100} height={'auto'} /> : <AppFlowyLogoLight width={100} height={'auto'} />}
      </div>
      {outline && (
        <MobileOutline outline={outline} onClose={onClose} selectedViewId={viewId} navigateToView={navigateToView} />
      )}
    </AFScroller>
  );
}

export default PublishMobileFolder;
