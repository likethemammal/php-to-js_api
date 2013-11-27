<?php

require('backend.php');

class API
{
    public static function API_Test_Function_callable($params)
    {
        $name = $params['name'];
        $color = $params['color'];
        return Backend::API_Test_Function($name, $color);
    }

    // Add more API functions here...

}

$api = new API();
$method = '';
$params = array();

if (isset($_GET['method'])) {
    $method = $_GET['method'];
}
if (isset($_GET['params'])) {
    $params = $_GET['params'];
}

if (!method_exists($api, $method . '_callable')) {
    exit;
} else {
    $result = json_encode(call_user_func_array(array($api, $method . '_callable'), array($params)));
    echo $result;
}

?>