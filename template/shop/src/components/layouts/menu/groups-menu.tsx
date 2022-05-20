import Scrollbar from '@/components/ui/scrollbar';
import { Menu, Transition } from '@headlessui/react';
import cn from 'classnames';
import { Fragment } from 'react';
import { getIcon } from '@/lib/get-icon';
import { CaretDown } from '@/components/icons/caret-down';
import * as groupIcons from '@/components/icons/groups';
import { useRouter } from 'next/router';
import Link from '@/components/ui/link';
import { ArrowDownIcon } from '@/components/icons/arrow-down';
import { useTypes } from '@/framework/type';
import useHomepage from '@/lib/hooks/use-homepage';
import type { Type } from '@/types';
import { TYPES_PER_PAGE } from '@/framework/client/variables';

interface GroupsMenuProps {
  className?: string;
  groups?: Type[];
  defaultGroup?: Type;
  variant?: 'colored' | 'minimal';
}

const GroupsMenu: React.FC<GroupsMenuProps> = ({
  className,
  groups,
  defaultGroup,
  variant = 'colored',
}) => {
  const router = useRouter();
  const selectedMenu =
    groups?.find((type) => router.asPath.includes(type.slug)) ?? defaultGroup;

  return (
    <Menu
      as="div"
      className="relative inline-block ltr:text-left rtl:text-right"
    >
      <Menu.Button
        className={cn(
          'flex items-center shrink-0 text-sm md:text-base font-semibold h-11 focus:outline-none text-heading xl:px-4',
          {
            'bg-gray-50 border border-border-200 rounded-lg px-3':
              variant === 'minimal',
            'bg-light xl:border border-border-200 xl:text-accent xl:min-w-150 rounded':
              variant === 'colored',
          },
          className
        )}
      >
        {({ open }) => (
          <>
            {variant === 'colored' && selectedMenu?.icon && (
              <span className="flex items-center justify-center w-5 h-5 ltr:mr-2 rtl:ml-2">
                {getIcon({
                  iconList: groupIcons,
                  iconName: selectedMenu?.icon,
                  className: 'max-h-full max-w-full',
                })}
              </span>
            )}
            <span className="whitespace-nowrap">{selectedMenu?.name}</span>
            <span className="flex ltr:pl-2.5 rtl:pr-2.5 pt-1 ltr:ml-auto rtl:mr-auto">
              {variant === 'colored' && (
                <CaretDown
                  className={open ? 'transform rotate-180' : undefined}
                />
              )}

              {variant === 'minimal' && (
                <ArrowDownIcon
                  className={cn('h-3 w-3', {
                    'transform rotate-180': open,
                  })}
                />
              )}
            </span>
          </>
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className={cn(
            'absolute mt-2 py-2 w-48 h-56 lg:h-72 2xl:h-auto min-h-40 max-h-56 sm:max-h-72 2xl:max-h-screen bg-light rounded shadow-700 focus:outline-none overflow-hidden',
            {
              'border border-border-200 ltr:right-0 rtl:left-0 ltr:origin-top-right rtl:origin-top-left':
                variant === 'minimal',
              'ltr:right-0 rtl:left-0 ltr:xl:right-auto rtl:xl:left-auto ltr:xl:left-0 rtl:xl:right-0 ltr:origin-top-right rtl:origin-top-left ltr:xl:origin-top-left rtl:xl:origin-top-right':
                variant !== 'minimal',
            }
          )}
        >
          <Scrollbar
            className="w-full h-full"
            options={{
              scrollbars: {
                autoHide: 'never',
              },
            }}
          >
            {groups?.map(({ id, name, slug, icon }) => (
              <Menu.Item key={id}>
                {({ active }) => (
                  <Link
                    href={`/${slug}`}
                    className={cn(
                      'flex space-x-4 rtl:space-x-reverse items-center w-full px-5 py-2.5 text-sm font-semibold capitalize transition duration-200 hover:text-accent focus:outline-none',
                      active ? 'text-accent' : 'text-body-dark'
                    )}
                  >
                    {icon && variant === 'colored' && (
                      <span className="flex items-center justify-center w-5 h-5">
                        {getIcon({
                          iconList: groupIcons,
                          iconName: icon,
                          className: 'max-h-full max-w-full',
                        })}
                      </span>
                    )}
                    <span>{name}</span>
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Scrollbar>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

type GroupsDropdownMenuProps = {
  variant?: 'colored' | 'minimal';
};

const GroupsDropdownMenu: React.FC<GroupsDropdownMenuProps> = ({ variant }) => {
  const { types } = useTypes({
    limit: TYPES_PER_PAGE,
  });
  //FIXME: remove this
  const { homePage } = useHomepage();
  return (
    <GroupsMenu groups={types} defaultGroup={homePage} variant={variant} />
  );
};

export default GroupsDropdownMenu;
