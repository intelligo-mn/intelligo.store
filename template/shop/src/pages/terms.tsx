import { termsAndServices } from '@/framework/static/terms';
import { Link, Element } from 'react-scroll';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';

function makeTitleToDOMId(title: string) {
  return title.toLowerCase().split(' ').join('_');
}

export default function TermsPage() {
  const { t } = useTranslation('terms');
  const { title, date, content } = termsAndServices;

  return (
    <>
      <Seo title="Terms" url="terms" />
      <section className="mx-auto w-full max-w-1920 bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <header className="mb-10 sm:mt-2 lg:mb-14 xl:mt-4">
          <h1 className="mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl">
            {t(title)}
          </h1>
          <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
            {date}
          </p>
        </header>
        {/* End of page header */}

        <div className="flex flex-col md:flex-row">
          <nav className="mb-8 md:mb-0 md:w-72 xl:w-3/12">
            <ol className="sticky z-10 md:top-16 lg:top-22">
              {content?.map((item) => (
                <li key={item.title}>
                  <Link
                    spy={true}
                    offset={-120}
                    smooth={true}
                    duration={500}
                    to={makeTitleToDOMId(item.title)}
                    activeClass="text-sm lg:text-base text-heading font-semibold"
                    className="inline-flex cursor-pointer py-3 uppercase text-sub-heading"
                  >
                    {t(item.title)}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          {/* End of section scroll spy menu */}

          <div className="md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8">
            {content?.map((item) => (
              <Element
                key={item.title}
                name={makeTitleToDOMId(item.title)}
                className="mb-10"
              >
                <h2 className="mb-4 text-lg font-bold text-heading md:text-xl lg:text-2xl">
                  {t(item.title)}
                </h2>
                <div
                  className="leading-loose text-body-dark"
                  dangerouslySetInnerHTML={{ __html: t(item.description) }}
                />
              </Element>
            ))}
          </div>
          {/* End of content */}
        </div>
      </section>
    </>
  );
}

TermsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'terms'])),
    },
  };
};
