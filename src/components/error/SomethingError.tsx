import emptyImageSrc from '@/assets/images/empty.png';
import { Alert } from '@mui/material';
import React from 'react';
import { ReactComponent as WarningIcon } from '@/assets/icons/close.svg';

function SomethingError({ error }: { error: Error }) {
  return (
    <div className={'flex h-full w-full flex-col items-center justify-center'}>
      <div className={'flex items-center gap-4 text-2xl font-bold text-text-title opacity-70'}>
        <WarningIcon className={'h-12 w-12'} />
        SomethingError
      </div>
      <Alert className={'max-w-[90%] whitespace-pre-wrap break-words px-6 '} severity={'error'}>
        {error.message}
      </Alert>
      <img src={emptyImageSrc} alt={'iSphere'} />
    </div>
  );
}

export default SomethingError;
