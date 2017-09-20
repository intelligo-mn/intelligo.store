<?php namespace DbConfig;

use Terbium\DbConfig\Facade as DbConfig;

class DbConfigTest extends DbConfigTestCase
{

    public function setUp()
    {

        parent::setUp();

        DbConfig::clearDb();

    }

    public function testStore()
    {

        DbConfig::store('testCase.foo', 'bar');
        $this->assertTrue(DbConfig::has('testCase.foo'));
        $this->assertEquals('bar', DbConfig::get('testCase.foo'));
        $this->assertEquals(array('foo' => 'bar'), DbConfig::get('testCase'));

        DbConfig::store('a.b', 'c');
        $this->assertTrue(DbConfig::has('a'));
        $this->assertEquals(array('b' => 'c'), DbConfig::get('a'));

        DbConfig::clear();

        DbConfig::store('1.2.3.4.5.6.7.8', 'f');
        $this->assertTrue(DbConfig::has('1.2.3.4'));

        DbConfig::store('1.2.3.4.5.6.7.8.', 'f');
        $this->assertTrue(DbConfig::has('1.2.3.4.5.6.7.8.'));
        $this->assertEquals('f', DbConfig::get('1.2.3.4.5.6.7.8.'));


        //save and reload settings

        DbConfig::clear();
        $this->assertTrue(DbConfig::has('1.2.3.4.5.6.7.8.'));


    }


    public function _testForget()
    {

        DbConfig::store('a.b.c.d.e', 'f');
        DbConfig::forget('a.b.c');
        DbConfig::clear();
        $this->assertFalse(DbConfig::has('a.b.c', false));

        DbConfig::store('1.2.3.4.5.6', 'f');
        DbConfig::store('1.2.3.4.7.8', 'b');
        DbConfig::forget('1.2.3.4.5');
        DbConfig::clear();
        $this->assertFalse(DbConfig::has('1.2.3.4.5.6', false));
        $this->assertTrue(DbConfig::has('1.2.3.4', false));

        DbConfig::store('1.2.3.4.5.6.', 'f');

        DbConfig::forget('1.2.3.4.5.6.');
        DbConfig::forget('1.2.3.4.7.8.');
        DbConfig::clear();

        $this->assertFalse(DbConfig::has('1.2.3.4.5.6.', false));
        $this->assertTrue(DbConfig::has('1.2.3.4', false));
    }

    public function _testUnicode()
    {

        DbConfig::store('a.1', 'Hälfte');
        DbConfig::store('b.1', 'Höfe');
        DbConfig::store('c.1', 'Hüfte');
        DbConfig::store('d.1', 'saß');

        DbConfig::clear();

        $this->assertEquals('Hälfte', DbConfig::get('a.1'));
        $this->assertEquals('Höfe', DbConfig::get('b.1'));
        $this->assertEquals('Hüfte', DbConfig::get('c.1'));
        $this->assertEquals('saß', DbConfig::get('d.1'));
    }

    public function _testSetArray()
    {

        $array = array(
            'id'        => "foo",
            'user_info' => array(
                'username'        => "bar",
                'recently_viewed' => 1
            )
        );
        DbConfig::store('1.2', $array);
        DbConfig::clear();

        $this->assertEquals($array, DbConfig::get('1.2'));
    }

    public function _testFallback()
    {

        // null
        $this->_prepareFallback(null);


        // boolean
        $this->_prepareFallback(true);

        // integer
        $this->_prepareFallback(100);


        // float
        $this->_prepareFallback(1.234);
        $this->_prepareFallback(1.2e3);
        $this->_prepareFallback(7E-10);


        // string
        $this->_prepareFallback('wee');


        // arrays
        $data = array(
            'foo' => array('foo1' => 'foo-content'),
            'bar' => array('bar1' => 'var-content'),
            'baz' => 'baz-content',
        );

        $this->_prepareFallback($data);


        // objects
        $data = new \stdClass;
        $data->foo = new \stdClass;
        $data->foo->foo1 = 'foo-content';
        $data->bar = new \stdClass;
        $data->bar->bar1 = 'bar-content';
        $data->baz = 'baz-content';

        $this->_prepareFallback($data);
    }



    public function _testPackageFallback()
    {

        $fb = \Config::get('db-config::table');
        $db = DbConfig::get('db-config::table');

        $this->assertEquals($fb, $db);



        /* @todo - respect original Config::et
        \Config::set('db-config::feature','foo');
        $db = DbConfig::get('db-config::feature');

        $this->assertEquals('foo', $db);
        */

        $fb = \Config::get('db-config::not_existing');
        $db = DbConfig::get('db-config::not_existing');

        $this->assertEquals($fb, $db);

        $fb = \Config::get('db-config::not_existing', 'with_default');
        $db = DbConfig::get('db-config::not_existing', 'with_default');

        $this->assertEquals($fb, $db);

    }


    public function _testEnvironment()
    {
        DbConfig::store('testCase.foo', 'bar', 'production');
        DbConfig::store('testCase.foo', 'baz', 'local');

        DbConfig::clear();

        // now we are in testing environment
        $this->assertEquals('baz', DbConfig::get('testCase.foo'));


        DbConfig::store('1.2.3.4.5.6', 'bar', 'production');
        DbConfig::store('1.2.3.4', 'baz', 'local');

        DbConfig::clear();

        // now we are in testing environment
        $this->assertEquals('baz', DbConfig::get('1.2.3.4'));
        $this->assertFalse(DbConfig::has('1.2.3.4.5'));

    }

    function _prepareFallback($value)
    {

        \Config::set('foo.bar', $value);
        $fb = \Config::get('foo.bar');

        DbConfig::store('foo.bar', $value);
        DbConfig::clear();
        $db = DbConfig::get('foo.bar');

        $this->assertEquals($fb, $db);
    }



}