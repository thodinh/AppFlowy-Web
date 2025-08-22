import LoginProvider from '@/components/login/LoginProvider';
import MagicLink from '@/components/login/MagicLink';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowRight } from '@/assets/icons/arrow_right.svg';

export function Login({ redirectTo }: { redirectTo: string }) {
  const { t } = useTranslation();

  return (
    <div className={'py-10  text-text-primary flex flex-col h-full items-center justify-between gap-5 px-4'}>
      <div className={'flex flex-1 flex-col items-center justify-center w-full gap-5'}>
        <div
          onClick={() => {
            window.location.href = '/';
          }}
          className={'flex w-full cursor-pointer flex-col items-center justify-center gap-5'}
        >
          <Logo className={'h-9 w-9'} />
          <div className={'text-xl font-semibold'}>{t('welcomeTo')} iSphere</div>
        </div>
        <MagicLink redirectTo={redirectTo} />
        <div className={'flex w-full items-center justify-center gap-2 text-text-secondary'}>
          <Separator className={'flex-1'} />
          {t('web.or')}
          <Separator className={'flex-1'} />
        </div>
        <LoginProvider redirectTo={redirectTo} />
      </div>

    </div>
  );
}

export default Login;
