<?php
/**
 * @author    Mauri de Souza Nunes <mauri870@gmail.com>
 * @copyright Copyright (c) 2016, Mauri de Souza Nunes <github.com/mauri870>
 * @license   https://opensource.org/licenses/MIT MIT License
 */
namespace App\Tests\Front;

use App\Tests\AbstractTestCase;

class FrontEndTest extends AbstractTestCase
{
    public function test_if_can_render_the_homepage()
    {
        $this->visit('/')
            ->see('Antvel eCommerce')
            ->assertResponseOk();
    }

    public function test_if_the_homepages_are_equal()
    {
        $this->assertEquals(
            $this->visit('/'),
            $this->visit('home')
        );
    }

    public function test_about_page()
    {
        $this->visit('/')
            ->click(trans('company.about_us'))
            ->seePageIs('about')
            ->see(trans('company.about_us'))
            ->assertResponseOk();
    }

    public function test_refunds_page()
    {
        $this->visit('/')
            ->click(trans('company.refund_policy'))
            ->seePageIs('refunds')
            ->see(trans('company.refund_policy'))
            ->assertResponseOk();
    }

    public function test_privacy_page()
    {
        $this->visit('/')
            ->click(trans('company.privacy_policy'))
            ->seePageIs('privacy')
            ->see(trans('company.privacy_policy'))
            ->assertResponseOk();
    }

    public function test_terms_page()
    {
        $this->visit('/')
            ->click(trans('company.terms_of_service'))
            ->seePageIs('terms')
            ->see(trans('company.terms_of_service'))
            ->assertResponseOk();
    }

    public function test_account_links_on_homepage_as_a_guest()
    {
        $this->visit('/')
            ->click(trans('user.login'))
            ->seePageIs('auth/login')
            ->see(trans('user.sign_in_your_account'))
            ->assertResponseOk();

        $this->visit('/')
            ->click(trans('user.register'))
            ->seePageIs('auth/register')
            ->see(trans('user.set_up_new_account'))
            ->assertResponseOk();
    }

    public function test_wish_list_links_as_a_guest()
    {
        $this->visit('wishes')
            ->see(trans('user.sign_in_your_account'))
            ->assertResponseOk();

        $this->visit('/')
            ->click(trans('user.your_wishlist'))
            ->see(trans('user.sign_in_your_account'))
            ->assertResponseOk();
    }
}
