---
layout: post
title: Array Manipulation in PHP
category: php
---

##### Get Previous & Next Items in an Array

    function array_navigate($array, $key)
    {
        $keys = array_keys($array);
        $index = array_flip($keys);
        $return = array();
        $return['prev'] = (isset($keys[$index[$key]-1])) ? $keys[$index[$key]-1] : end($keys); 
	$return['next'] = (isset($keys[$index[$key]+1])) ? $keys[$index[$key]+1] : current($keys); 
        return $return;
    }

source [here](http://snipplr.com/view/5356/previous-next-keys-in-array/), thanks **naz**

##### Recursively Traverse a Multi-dimensional Array

    function traverseArray($array)
    { 
        // Loops through each element. If element again is array, function is recalled. If not, result is echoed.
        foreach($array as $key=>$value)
	{ 
		if(is_array($value))
		{ 
			traverseArray($value); 
		}else{
			echo $key." = ".$value."<br />\n"; 
		} 
	}
    }

source [here](http://snipplr.com/view/10200/recursively-traverse-a-multidimensional-array/), thanks **sidisinsane**
