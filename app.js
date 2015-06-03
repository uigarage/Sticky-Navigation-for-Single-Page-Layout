(function() {
    var app = angular.module( 'store', [] );
    
    app.controller( 'StoreController', function() {
        this.products    = gems;
    }); 
    
    var gems    = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum, sem ut rutrum tempor, dolor diam aliquet mauris, quis facilisis ipsum nibh convallis nunc. In turpis enim, varius sit amet porttitor non, auctor in libero. Suspendisse egestas massa ipsum, eu congue risus hendrerit nec. Morbi sit amet lorem a sem malesuada posuere. Aenean a odio a arcu varius tristique. Cras vitae bibendum ipsum. Integer non condimentum justo, eget dignissim odio. Nulla varius leo lacus, sed dapibus nisl vulputate feugiat. Sed sed ornare risus. Duis gravida metus non semper pulvinar.',
            canPurchase: true,
            soldOut:  false,
            images: [
                {
                    full: 'http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-02.gif',
                    thumb: 'http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-02.gif'
                },
                {
                    full: 'http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-05.gif',
                    thumb: 'http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-05.gif'
                },
                {
                    full: 'http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-09.gif',
                    thumb: 'http://tylertadej.github.io/flatlandersGemStore-angularjs/images/gem-09.gif'
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: 'I love this product',
                    author: 'john@doe.com'
                },
                {
                    stars: 1,
                    body: 'dont waste ur money',
                    author: 'john@doe.com'
                }
                
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum, sem ut rutrum tempor, dolor diam aliquet mauris, quis facilisis ipsum nibh convallis nunc. In turpis enim, varius sit amet porttitor non, auctor in libero. Suspendisse egestas massa ipsum, eu congue risus hendrerit nec. Morbi sit amet lorem a sem malesuada posuere. Aenean a odio a arcu varius tristique. Cras vitae bibendum ipsum. Integer non condimentum justo, eget dignissim odio. Nulla varius leo lacus, sed dapibus nisl vulputate feugiat. Sed sed ornare risus. Duis gravida metus non semper pulvinar.',
            canPurchase: true,
            soldOut:  false,
            reviews: [
                {
                    stars: 3,
                    body: 'Great one',
                    author: 'john@doe.com'
                },
                {
                    stars: 1,
                    body: 'bull crap',
                    author: 'john@doe.com'
                }
                
            ]
        }
    ];
    
    app.controller('PanelController', function(){
        this.tab    = 1;
        
        this.selectTab  = function(setTab){
          this.tab  = setTab;  
        };
        
        this.isSelected = function(checkTab) {
          return this.tab   === checkTab;
        };
    });
    
    app.controller('ReviewController', function(){
       this.review  = {};
       
       this.addReview   = function(product) {
         product.reviews.push(this.review);
         this.review    = {};
       };
    });
})();

