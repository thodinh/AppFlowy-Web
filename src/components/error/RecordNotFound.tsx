import emptyImageSrc from '@/assets/images/empty.png';
import React from 'react';
import { ReactComponent as WarningIcon } from '@/assets/icons/warning.svg';

function RecordNotFound({ noContent, isViewNotFound }: { noContent?: boolean; isViewNotFound?: boolean }) {
  return (
    <div className={'flex h-full w-full flex-col items-center justify-center px-4'}>
      {!noContent && (
        <>
          <div className={'flex items-center gap-4 text-2xl font-bold text-text-title opacity-70'}>
            <WarningIcon className={'h-12 w-12'} />
            {isViewNotFound ? 'Page Not Found' : 'Record Not Found'}
          </div>
        </>
      )}

      <img src={emptyImageSrc} alt={'iSphere'} />
    </div>
  );
}

export default RecordNotFound;
