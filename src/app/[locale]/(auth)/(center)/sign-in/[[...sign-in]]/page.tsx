import { SignIn } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'SignIn',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const SignInPage = (props: { params: { locale: string } }) => {
  const fallbackRedirectUrl = props.params.locale === 'en'
    ? '/dashboard'
    : `/${props.params.locale}/dashboard`;

  return (
    <SignIn
      fallbackRedirectUrl={fallbackRedirectUrl}
    />
  );
};

export default SignInPage;
