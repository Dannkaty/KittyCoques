<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5a6d694fe9145f56d7e3c7ee221c409f
{
    public static $files = array (
        '267e3cbd46dd11e66d11a3ca1e30c494' => __DIR__ . '/../..' . '/src/Functions/CoreFunctions.php',
        '223902d09c3f35f31ec5c0dcc5efd24c' => __DIR__ . '/../..' . '/src/Functions/HelperFunctions.php',
        '94c7b93bf3339265fa1816d966b5b74b' => __DIR__ . '/../..' . '/src/Functions/AjaxFunctions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WP_Delicious\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WP_Delicious\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5a6d694fe9145f56d7e3c7ee221c409f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5a6d694fe9145f56d7e3c7ee221c409f::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
