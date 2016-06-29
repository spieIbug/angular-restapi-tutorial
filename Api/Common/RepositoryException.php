<?php
/**
 * Created by PhpStorm.
 * User: yacmed
 * Date: 27/06/2016
 * Time: 14:45
 */

namespace Api\Common;


class RepositoryException{
    public function __construct(){
        set_error_handler(function($errno, $errstr, $errfile, $errline) {
            if ( E_RECOVERABLE_ERROR===$errno ) {
                throw new \ErrorException($errstr, $errno, 0, $errfile, $errline);
                // return true;
            }
            return false;
        },E_ALL);
    }
}