<?php

namespace app\Helpers;

/**
 * Antvel - Products Color Helper.
 *
 * @author  Gustavo Ocanto <gustavoocanto@gmail.com>
 */
class colorsHelper
{
    private $colors = [
            ['name' => 'alice_blue',                'code' => '#F0F8FF'],
            ['name' => 'antique_white',            'code' => '#FAEBD7'],
            ['name' => 'aqua',                    'code' => '#00FFFF'],
            ['name' => 'aquamarine',                'code' => '#7FFFD4'],
            ['name' => 'azure',                    'code' => '#F0FFFF'],
            ['name' => 'beige',                    'code' => '#F5F5DC'],
            ['name' => 'bisque',                    'code' => '#FFE4C4'],
            ['name' => 'black',                    'code' => '#000000'],
            ['name' => 'blue',                    'code' => '#0000FF'],
            ['name' => 'blue_violet',                'code' => '#8A2BE2'],
            ['name' => 'brown',                    'code' => '#A52A2A'],
            ['name' => 'burly_wood',                'code' => '#DEB887'],
            ['name' => 'cadet_blue',                'code' => '#5F9EA0'],
            ['name' => 'chartreuse',                'code' => '#7FFF00'],
            ['name' => 'chocolate',                'code' => '#D2691E'],
            ['name' => 'coral',                    'code' => '#FF7F50'],
            ['name' => 'corn_flower_blue',        'code' => '#6495ED'],
            ['name' => 'cyan',                    'code' => '#00FFFF'],
            ['name' => 'dark_blue',                'code' => '#00008B'],
            ['name' => 'dark_cyan',                'code' => '#008B8B'],
            ['name' => 'dark_golden_rod',            'code' => '#B8860B'],
            ['name' => 'dark_green',                'code' => '#A9A9A9'],
            ['name' => 'dark_grey',                'code' => '#006400'],
            ['name' => 'dark_khaki',                'code' => '#BDB76B'],
            ['name' => 'dark_magenta',            'code' => '#8B008B'],
            ['name' => 'dark_olive_green',        'code' => '#556B2F'],
            ['name' => 'dark_orange',                'code' => '#FF8C00'],
            ['name' => 'dark_orchid',                'code' => '#9932CC'],
            ['name' => 'dark_red',                'code' => '#8B0000'],
            ['name' => 'dark_salmon',                'code' => '#E9967A'],
            ['name' => 'dark_slate_blue',            'code' => '#483D8B'],
            ['name' => 'dark_slate_grey',            'code' => '#2F4F4F'],
            ['name' => 'dark_turquoise',            'code' => '#00CED1'],
            ['name' => 'dark_violet',                'code' => '#9400D3'],
            ['name' => 'deep_pink',                'code' => '#FF1493'],
            ['name' => 'deep_sky_blue',            'code' => '#00BFFF'],
            ['name' => 'dim_grey',                'code' => '#696969'],
            ['name' => 'dodger_blue',                'code' => '#1E90FF'],
            ['name' => 'fire_brick',                'code' => '#B22222'],
            ['name' => 'floral_white',            'code' => '#FFFAF0'],
            ['name' => 'forest_green',            'code' => '#228B22'],
            ['name' => 'fuchsia',                    'code' => '#FF00FF'],
            ['name' => 'gold',                    'code' => '#FFD700'],
            ['name' => 'goldenrod',                'code' => '#DAA520'],
            ['name' => 'green',                    'code' => '#808080'],
            ['name' => 'green_yellow',            'code' => '#008000'],
            ['name' => 'grey',                    'code' => '#ADFF2F'],
            ['name' => 'honey_dew',                'code' => '#F0FFF0'],
            ['name' => 'hot_pink',                'code' => '#FF69B4'],
            ['name' => 'indian_red',                'code' => '#CD5C5C'],
            ['name' => 'indigo',                    'code' => '#4B0082'],
            ['name' => 'ivory',                    'code' => '#FFFFF0'],
            ['name' => 'khaki',                    'code' => '#F0E68C'],
            ['name' => 'lavender',                'code' => '#E6E6FA'],
            ['name' => 'lavender_blush',            'code' => '#FFF0F5'],
            ['name' => 'lawn_green',                'code' => '#CFC00'],
            ['name' => 'lemon_chiffon',            'code' => '#FFFACD'],
            ['name' => 'light_blue',                'code' => '#ADD8E6'],
            ['name' => 'light_coral',                'code' => '#F08080'],
            ['name' => 'light_cyan',                'code' => '#E0FFFF'],
            ['name' => 'light_golden_rod_yellow',    'code' => '#FAFAD2'],
            ['name' => 'light_green',                'code' => '#90EE90'],
            ['name' => 'light_grey',                'code' => '#D3D3D3'],
            ['name' => 'light_pink',                'code' => '#FFB6C1'],
            ['name' => 'light_sea_green',            'code' => '#20B2AA'],
            ['name' => 'light_sky_blue',            'code' => '#87CEFA'],
            ['name' => 'light_steel_blue',        'code' => '#B0C4DE'],
            ['name' => 'light_yellow',            'code' => '#FFFFE0'],
            ['name' => 'lime',                    'code' => '#00FF00'],
            ['name' => 'lime_green',                'code' => '#32CD32'],
            ['name' => 'magenta',                    'code' => '#FF00FF'],
            ['name' => 'maroon',                    'code' => '#800000'],
            ['name' => 'medium_aqua_marine',        'code' => '#66CDAA'],
            ['name' => 'medium_blue',                'code' => '#0000CD'],
            ['name' => 'medium_orchid',            'code' => '#BA55D3'],
            ['name' => 'medium_purple',            'code' => '#9370D8'],
            ['name' => 'medium_sea_green',        'code' => '#3CB371'],
            ['name' => 'medium_slate_blue',        'code' => '#7B68EE'],
            ['name' => 'medium_spring_green',        'code' => '#00FA9A'],
            ['name' => 'medium_violet_red',        'code' => '#C71585'],
            ['name' => 'misty_rose',                'code' => '#FFE4E1'],
            ['name' => 'moccasin',                'code' => '#FFE4B5'],
            ['name' => 'navy',                    'code' => '#000080'],
            ['name' => 'olive',                    'code' => '#808000'],
            ['name' => 'olive_drab',                'code' => '#6B8E23'],
            ['name' => 'orange',                    'code' => '#FFA500'],
            ['name' => 'orange_red',                'code' => '#FF4500'],
            ['name' => 'pale_green',                'code' => '#98FB98'],
            ['name' => 'pale_turquoise',            'code' => '#AFEEEE'],
            ['name' => 'pale_violet_red',            'code' => '#D87093'],
            ['name' => 'peru',                    'code' => '#CD853F'],
            ['name' => 'pink',                    'code' => '#FFC0CB'],
            ['name' => 'plum',                    'code' => '#DDA0DD'],
            ['name' => 'purple',                    'code' => '#800080'],
            ['name' => 'red',                        'code' => '#FF0000'],
            ['name' => 'royal_blue',                'code' => '#4169E1'],
            ['name' => 'saddle_brown',            'code' => '#8B4513'],
            ['name' => 'salmon',                    'code' => '#FA8072'],
            ['name' => 'sandy_brown',                'code' => '#F4A460'],
            ['name' => 'sea_green',                'code' => '#2E8B57'],
            ['name' => 'sea_shell',                'code' => '#FFF5EE'],
            ['name' => 'sienna',                    'code' => '#A0522D'],
            ['name' => 'silver',                    'code' => '#C0C0C0'],
            ['name' => 'sky_blue',                'code' => '#87CEEB'],
            ['name' => 'slate_blue',                'code' => '#6A5ACD'],
            ['name' => 'slate_grey',                'code' => '#708090'],
            ['name' => 'snow',                    'code' => '#FFFAFA'],
            ['name' => 'spring_green',            'code' => '#00FF7F'],
            ['name' => 'steel_blue',                'code' => '#4682B4'],
            ['name' => 'tan',                        'code' => '#D2B48C'],
            ['name' => 'teal',                    'code' => '#008080'],
            ['name' => 'thistle',                    'code' => '#D8BFD8'],
            ['name' => 'tomato',                    'code' => '#FF6347'],
            ['name' => 'turquoise',                'code' => '#40E0D0'],
            ['name' => 'violet',                    'code' => '#EE82EE'],
            ['name' => 'wheat',                    'code' => '#F5DEB3'],
            ['name' => 'white',                    'code' => '#FFFFFF'],
            ['name' => 'yellow',                    'code' => '#FFFF00'],
            ['name' => 'yellow_green',            'code' => '#9ACD32'],
        ];

    public function getArrayCodeAsKey()
    {
        $array = [];
        foreach ($this->colors as $row) {
            $array[$row['code']] = trans('colors.'.$row['name']);
        }

        return $array;
    }

    public function getArrayNameAsKey()
    {
        $array = [];
        foreach ($this->colors as $row) {
            $array[$row['name']] = $row['code'];
        }

        return $array;
    }

    public function filter($data)
    {
        $return = null;
        foreach ($this->colors as $row) {
            if (in_array($data, $row)) {
                $return = $row;
                break;
            }
        }

        return $return;
    }

    public function getName($data)
    {
        $name = $this->filter($data);

        return !$name ? '' : $name['name'];
    }

    public function getCode($data)
    {
        $code = $this->filter($data);

        return !$code ? '' : $code['code'];
    }
}
