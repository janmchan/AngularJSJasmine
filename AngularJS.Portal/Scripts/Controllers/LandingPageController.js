var LandingPageController = function ($scope) {
    
}
var HeroDetailsController = function ($scope) {
    $scope.models = {
        tab: 1,
        name: 'Sven',
        image: 'http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Medium/_Class_Str/Sven.png',
        overview: 'Overview Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque ultricies tortor et efficitur. Donec id scelerisque orci. Morbi eget ex non purus dictum vestibulum. Integer tortor sem, pretium in rutrum eget, tincidunt eget nunc. Praesent sit amet iaculis eros. Vestibulum elementum molestie orci, cursus fermentum leo feugiat id. Praesent lacus augue, condimentum quis maximus rutrum, ornare in mi. Curabitur efficitur justo porttitor lorem auctor, pellentesque malesuada erat euismod. Aliquam condimentum massa eget metus vehicula, eu placerat ante volutpat. Duis ut nulla eget eros pretium vehicula. Maecenas sit amet accumsan tortor, vel ornare odio. Nullam id rhoncus tellus, vitae rhoncus ligula. Nunc at dictum odio. Nullam a erat nec ligula euismod tincidunt sit amet vel turpis.' +
            'Fusce maximus massa eu nulla dignissim imperdiet. Proin sit amet pulvinar mi. Curabitur ut ipsum tempus, convallis arcu nec, rhoncus dolor. Vestibulum ultrices lorem ut orci volutpat, quis vehicula sem porta. Morbi non ipsum vitae ex sollicitudin ultrices sed id ex. Nam aliquam commodo neque nec placerat. Pellentesque vitae nisi faucibus, lacinia massa id, aliquam dui. Nullam faucibus quam sit amet diam sagittis commodo ut a dolor. Nulla sed odio viverra, bibendum nibh eget, pretium eros.',
        bio:  'bio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque ultricies tortor et efficitur. Donec id scelerisque orci. Morbi eget ex non purus dictum vestibulum. Integer tortor sem, pretium in rutrum eget, tincidunt eget nunc. Praesent sit amet iaculis eros. Vestibulum elementum molestie orci, cursus fermentum leo feugiat id. Praesent lacus augue, condimentum quis maximus rutrum, ornare in mi. Curabitur efficitur justo porttitor lorem auctor, pellentesque malesuada erat euismod. Aliquam condimentum massa eget metus vehicula, eu placerat ante volutpat. Duis ut nulla eget eros pretium vehicula. Maecenas sit amet accumsan tortor, vel ornare odio. Nullam id rhoncus tellus, vitae rhoncus ligula. Nunc at dictum odio. Nullam a erat nec ligula euismod tincidunt sit amet vel turpis.' +
            'Fusce maximus massa eu nulla dignissim imperdiet. Proin sit amet pulvinar mi. Curabitur ut ipsum tempus, convallis arcu nec, rhoncus dolor. Vestibulum ultrices lorem ut orci volutpat, quis vehicula sem porta. Morbi non ipsum vitae ex sollicitudin ultrices sed id ex. Nam aliquam commodo neque nec placerat. Pellentesque vitae nisi faucibus, lacinia massa id, aliquam dui. Nullam faucibus quam sit amet diam sagittis commodo ut a dolor. Nulla sed odio viverra, bibendum nibh eget, pretium eros.',
       abilities:  'abilities Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque ultricies tortor et efficitur. Donec id scelerisque orci. Morbi eget ex non purus dictum vestibulum. Integer tortor sem, pretium in rutrum eget, tincidunt eget nunc. Praesent sit amet iaculis eros. Vestibulum elementum molestie orci, cursus fermentum leo feugiat id. Praesent lacus augue, condimentum quis maximus rutrum, ornare in mi. Curabitur efficitur justo porttitor lorem auctor, pellentesque malesuada erat euismod. Aliquam condimentum massa eget metus vehicula, eu placerat ante volutpat. Duis ut nulla eget eros pretium vehicula. Maecenas sit amet accumsan tortor, vel ornare odio. Nullam id rhoncus tellus, vitae rhoncus ligula. Nunc at dictum odio. Nullam a erat nec ligula euismod tincidunt sit amet vel turpis.' +
                'Fusce maximus massa eu nulla dignissim imperdiet. Proin sit amet pulvinar mi. Curabitur ut ipsum tempus, convallis arcu nec, rhoncus dolor. Vestibulum ultrices lorem ut orci volutpat, quis vehicula sem porta. Morbi non ipsum vitae ex sollicitudin ultrices sed id ex. Nam aliquam commodo neque nec placerat. Pellentesque vitae nisi faucibus, lacinia massa id, aliquam dui. Nullam faucibus quam sit amet diam sagittis commodo ut a dolor. Nulla sed odio viverra, bibendum nibh eget, pretium eros.'
        
    }
    this.selectTab = function (setTab) {
        $scope.models.tab = setTab;
    }
    this.isSelected = function (checkTab) {
        return $scope.models.tab === checkTab;
    }
}


// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope'];
