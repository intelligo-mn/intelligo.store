import PageHeader from "@components/ui/page-header";
import Container from "@components/ui/container";
import AccountNav from "@components/my-account/account-nav";
import AccountNavMobile from "@components/my-account/account-nav-mobile";
import Subscription from "@components/common/subscription";
import { ROUTES } from "@lib/routes";

import { IoHomeOutline } from "@react-icons/all-files/io5/IoHomeOutline";
import { IoCartOutline } from "@react-icons/all-files/io5/IoCartOutline";
import { IoPersonOutline } from "@react-icons/all-files/io5/IoPersonOutline";
import { IoCallOutline } from "@react-icons/all-files/io5/IoCallOutline";
import { IoSettingsOutline } from "@react-icons/all-files/io5/IoSettingsOutline";

const accountMenu = [
  {
    slug: ROUTES.ACCOUNT,
    name: "text-dashboard",
    icon: <IoHomeOutline className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  },
  {
    slug: ROUTES.ACCOUNT_ORDERS,
    name: "text-orders",
    icon: <IoCartOutline className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  },
  {
    slug: ROUTES.ACCOUNT_ADDRESS,
    name: "text-account-address",
    icon: <IoPersonOutline className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  },
  {
    slug: ROUTES.ACCOUNT_CONTACT_NUMBER,
    name: "text-contact-number",
    icon: <IoCallOutline className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  },
  {
    slug: ROUTES.ACCOUNT_CHANGE_PASSWORD,
    name: "text-change-password",
    icon: <IoSettingsOutline className="w-[18px] md:w-5 h-[18px] md:h-5" />,
  },
];

const AccountLayout: React.FunctionComponent<{}> = ({ children }) => {
  return (
    <>
      <PageHeader pageHeader="text-page-my-account" />
      <Container>
        <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex  md:flex-row w-full">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="lg:hidden">
              <AccountNavMobile options={accountMenu} />
            </div>
            <div className="hidden lg:block flex-shrink-0 md:w-2/6 2xl:w-4/12 ltr:md:pr-8 ltr:lg:pr-12 ltr:xl:pr-16 ltr:2xl:pr-20 rtl:md:pl-8 rtl:lg:pl-12 rtl:xl:pl-16 rtl:2xl:pl-20 pb-2 md:pb-0">
              <AccountNav options={accountMenu} />
            </div>
            <div className="lg:w-4/6 2xl:w-8/12 mt-6 lg:mt-0">{children}</div>
          </div>
        </div>

        <Subscription />
      </Container>
    </>
  );
};

export default AccountLayout;
