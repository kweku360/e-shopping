$(document).ready(function(){
    //Some value variables
    var once = 0;
    //lets setup product array
    var product  = {}
    //lets set up cart too
    var cart = {};
    cart.shipping = {};
    cart.item = []

       product.top = [ {
            id : "340924",
            name : "BIRKENSTOCK Arizona Stone Mens' Sandals ",
            price : 359.99,
            storeprice : 399.99,
            stock: 5,
            description : "The style Arizona is one of the most successful sandals ever.At work, free time, at sports and even seen on catwalks around the world the classic style of Birkenstock made itself a great reputation as a high-quality product with lifestyle character.",
            Category :["Fashion","Men's Shoes"],
            rating : 3,
            comments : [],
            pictures : ["903243","442134","442134"]
        },{
            id : "876654",
            name : "2 Polo Ralph Lauren Shirts",
            price : 86,
            storeprice : 90,
            stock: 17,
            description : "Any 2 Polo Ralph Lauren shirts of your choice",
            Category :["Fashion","Men's CLothing"],
            rating : 3,
            comments : [],
            pictures : ["765545","765545","765545"]
        },{
            id : "578212",
            name : "Curren Watch - Black",
            price : 100,
            storeprice : 110,
            stock: 4,
            description : "CURREN Branded Watches Movement: Japan Quartz movement watch watch face size: 4.5 cm*4.5 cm approx watch face material: glass watch dial material : stainless steel strap material: high quality alloy strap strap width: 2.2cm, length: 23cm. weight: Approx 135g",
            Category :["Fashion","Men's CLothing"],
            rating : 4,
            comments : [],
            pictures : ["478097","478097","478097"]
        },
           {
            id : "02123",
            name : "Toshiba Jet Black 15.6 Satellite C55-B5299 Laptop PC with Intel Celeron N2830 Processor, 2GB Memory, 500GB Hard Drive and Windows 8.1",
            price : 1700,
            storeprice : 1800,
            stock: 5,
            description : "The Toshiba Satellite Laptop C55-B5299 in Jet Black has everything you need to compute on the go. Microsoft Windows 8.1 lets you complete any task. Connect with friends and family on the built-in webcam.",
            Category :["Electronics and Home Appliances","Laptops"],
            rating : 4,
            comments : [],
            pictures : ["093423","342322","342322"]
        }]
    product.new = [ {
            id : "349965",
            name : "Microsoft Surface Pro 3 256GB Windows 8.1 Pro Intel Core i7",
            price : 5000,
            storeprice : 5100,
            stock: 6,
            description : "Meet the Microsoft Surface Pro 3 Tablet, the tablet that can replace your laptop. Wrapped in magnesium and loaded with a 12-inch ClearType Full HD display, 4th-generation Intel Core processor and up to 8GB of RAM in a sleek frame - just 0.36 inches thin and 1.76 pounds - with up to nine hours of Web-browsing battery life, Microsoft Surface Pro 3 Tablet has all the power, performance and mobility of a laptop in an incredibly lightweight, versatile form.",
            Category :["Electronics","Tablets"],
            rating : 4,
            comments : [],
            pictures : ["234323","342213","445566"]
        },{
            id : "689087",
            name : "Ralph Lauren Long Sleeve Polo",
            price : 60,
            storeprice : 63,
            stock: 6,
            description : "We have all the colours apart from pink",
            Category :["Fashion","Men's CLothing"],
            rating : 4,
            comments : [],
            pictures : ["109886","109886","109886"]
        },{
            id : "843567",
            name : "Samsung 260ltr Double Door Refrigerator",
            price : 1700,
            storeprice : 1750,
            stock: 3,
            description : "MODEL NO RT26FAREDSA SAMSUNG DOUBLE DOOR FRIDGE, TOP FREEZER COMPARTMENT, NO FROST, 260 LTR, LED DIGITAL DISPLAY, PREMIUM SILVER EXTERIOR, ENERGY SAVING",
            Category :["Home Appliances","Refrigerators"],
            rating : 4.5,
            comments : [],
            pictures : ["789900","789900","789900"]
        },{
            id : "894456",
            name : "Samsung 260ltr Double Door Refrigerator",
            price : 19.99,
            storeprice : 19.99,
            stock: 14,
            description : "Helps prevent children opening toilets Also suitable for use on appliances, cupboards and cabinets Not suitable for use on wooden toilet seats Easy to install",
            Category :["Kids","Kids Accesories"],
            rating : 2.5,
            comments : [],
            pictures : ["509893","509893","509893"]
        }]
    product.reccomended = [ {
            id : "345562",
            name : "Eclipse Kids Dayton Energy-Efficient Curtain",
            price : 258.99,
            storeprice : 271.99,
            stock: 19,
            description : "Get the Eclipse Kid's Dayton Curtain and experience the silence and darkness inside your kid's room with added beauty. It is a versatile choice and has the useful benefit of blackout. From a line of blackout window panels, this curtain is made from 100% woven polyester, so it offers a long-lasting performance. It reduces the level of heat and sunlight in the warm weather and keeps out the cold during the winter. ",
            Category :["Home","Decor","Curtains"],
            rating : 4,
            comments : [],
            pictures : ["945323","843231","843231"]
        },{
            id : "745324",
            name : "Computer Table Glass",
            price : 95.99,
            storeprice : 99.99,
            stock: 9,
            description : "Computer Table Glass",
            Category :["Home","Decor","Curtains"],
            rating : 3,
            comments : [],
            pictures : ["344231","344231","344231"]
        },{
            id : "612343",
            name : "HAWES & CURTIS Magenta Fitted Hipster Plain Ladies' Shirt",
            price : 65.99,
            storeprice : 99.99,
            stock: 9,
            description : "Computer Table Glass",
            Category :["Fashion","Women's Clothing"],
            rating : 3,
            comments : [],
            pictures : ["446789","446789","446789"]
        },{
            id : "443521",
            name : "Organic Moringa Tablet",
            price : 15.99,
            storeprice : 20.99,
            stock: 7,
            description : "Organic Moringa Tablet",
            Category :["Fashion","Women's Clothing"],
            rating : 3,
            comments : [],
            pictures : ["556789","556789","556789"]
        }]

    //clicked product
    var clicklist = [];

    var topdealtpl =  '<div class="topic-head col-sm-11"> <span>TOP DEALS</span> </div> <div class="owl-carousel col-sm-10"> {{#each top}} <div class="item"> <img src="assets/products/{{id}}/{{pictures.[0]}}.jpg"><div class="name-div"><a class="name">{{name}}..</a></div> <div class="price"> <span class="old">{{storeprice}} Ghc</span> <span class="new">{{price}} Ghc</span> </div> <a id="{{id}}" data-cat="top" class="addtocart btn btn-primary">Add To Cart</a> </div> {{/each}} </div>';
    var newtpl =  '<div class="topic-head col-sm-11"> <span>New Arrivals</span> </div> <div class="owl-carousel col-sm-10"> {{#each new}} <div class="item"> <img src="assets/products/{{id}}/{{pictures.[0]}}.jpg"><div class="name-div"><a class="name">{{name}}..</a></div> <div class="price"> <span class="old">{{storeprice}} Ghc</span> <span class="new">{{price}} Ghc</span> </div> <a id="{{id}}" data-cat="new" class="addtocart btn btn-primary">Add To Cart</a> </div> {{/each}} </div>';
    var reccomendedtpl =  '<div class="topic-head col-sm-11"> <span>Recommended</span> </div> <div class="owl-carousel col-sm-10"> {{#each reccomended}} <div class="item"> <img src="assets/products/{{id}}/{{pictures.[0]}}.jpg"><div class="name-div"><a class="name">{{name}}..</a></div> <div class="price"> <span class="old">{{storeprice}} Ghc</span> <span class="new">{{price}} Ghc</span> </div> <a id="{{id}}" data-cat="rec" class="addtocart btn btn-primary">Add To Cart</a> </div> {{/each}} </div>';



    var carttpl = '<div class="topic-head col-sm-11"><span>Shopping Cart</span> <a id="shopcheckout" class="btn btn-default right">Proceed to Checkout</a> <a id="shophome" class="btn btn-default right">Continue Shopping</a></div>  {{#each item}}<div class="cart-info col-sm-12"><img class="col-sm-3" src="assets/products/{{product.id}}/{{product.pictures.[2]}}.jpg"> <div class="col-sm-5 cart-item-details"> <div class="breadcrumbs"></div> <div class="name">{{product.name}}</div> <div class="description">{{product.description}}</div> <div class="price"><span class="price-amt">{{product.price}}</span><span class="price-dis"> </span> </div> <div class="stock"><span>{{product.stock}}</span><span> in Stock</span></div> </div> <div class="col-sm-3 cart-item-update"> <div class="qty">Qty : <select class="selectqty" id="{{itemid}}">{{#times product.stock}}<option value="{{this}}">{{this}}</option>{{/times}}</select></div> <div class="wrap"><input type="checkbox"> Wrap as Gift (5 Ghc)</div> <div class="totprice">Total (GHc) : <span id="{{itemid}}">{{totalprice}}</span></div> <div class="addinfo">(Shipping Charges not inclusive)</div></div></div>{{/each}}'

    var checkouttpl = '<div class="topic-head col-sm-11"><span>Check Out</span></div> <div class="checkout-box col-sm-12"><img class="col-sm-3" src="assets/products/.jpg"> <div class="col-sm-5 checkout-item-details"> <div class="items-info">{{cartlength}} Item(s) Bought</div> <div class="items-price"> <div>Total Price(items only) :  {{carttp}}</div> <div>Shipping : <span id="shipcostvalue">(click on calculate)</span><a id="shipcalculate" class="btn btn-sm btn-primary" >Calculate </a></div> </div> <div class="item-totprice"> <div>You Pay :<span id="overall-price"> - </span>(items + Shipping) :</div> </div> <div class="item-cards"> <div>We Accept these Payment methods</div> <ul> <li>LOCAL VISA / MASTERCARD</li> <li>INTL VISA / MASTERCARD</li> <li>MTN MOBILE MONEY</li> <li>Tigo Cash</li> </ul> </div> <div class="item-pay"><a class="btn btn-primary" >Pay Now</a></div> </div> <div class="col-sm-3 cart-buttons"><a id="checkoutshophome" class="btn btn-primary" >Continue Shopping</a><br> <a class="btn btn-primary" id="checkoutcart" >Back to Cart</a><br> </div> </div>';

    function homeview(){
        $("#content-area").html(' <div id="topcontent" class="row"></div> <div id="newcontent" class="row"></div> <div id="reccontent" class="row"></div>')

        var toptemplate = Handlebars.compile(topdealtpl)
        var newtemplate = Handlebars.compile(newtpl)
        var rectemplate = Handlebars.compile(reccomendedtpl)

        $("#topcontent").hide().append(toptemplate(product)).fadeIn("slow");
        $("#newcontent").hide().append(newtemplate(product)).fadeIn("slow");
        $("#reccontent").hide().append(rectemplate(product)).fadeIn("slow");

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        })
//we disable items already clicked
        disableCartItem()
//when item is added to cart
        $(".addtocart").on("click",function(e){
            cartview(e)
            $("#cartcount").html(cart.item.length)

        });


    }

    function cartview(e){
       // console.log(e.currentTarget.id)
        if(e != null){
            var cat = $("#"+ e.currentTarget.id).data("cat")
           // console.log(cat)
            var prod = getProductFromId(e.currentTarget.id,cat)
            //first we add cart item
            addCartItem(prod)
            //we then disable the button
            clicklist.push(e.currentTarget.id)
           // console.log(clicklist)
        }
        //then we display on view
        var template = Handlebars.compile(carttpl)

        $("#content-area").hide().html(template(cart)).fadeIn("slow");

        //cart change event
        $(".selectqty").change(function(e){
            var selectedval = $(".selectqty option:selected").val()
            var cartitemid = e.currentTarget.id

            editCartItem(cartitemid,selectedval)

        })
        $("#shophome").on("click",function(e){
            homeview()
        })
        $("#shopcheckout").on("click",function(e){
            checkoutview()
        })
    }

    function checkoutview(){

        //then we display on view
        var template = Handlebars.compile(checkouttpl)
        var cartchkout = checkoutobj()
        $("#content-area").hide().html(template(cartchkout)).fadeIn("slow");


        $("#shipcalculate").on("click",function(e){
            $("#map-container").removeClass("hide")
          //  google.maps.event.addDomListener(window, 'load', initialize);
            if(once == 0){
                initialize();
                once = 1
            }

        })
        $("#checkoutshophome").on("click",function(e){
            homeview()
        })
        $("#checkoutcart").on("click",function(e){
              cartview(null)
        })

        $("#shipping-cancel").on("click",function(e){
            $("#map-container").addClass("hide")
        })
        $("#shipping-confirm").on("click",function(e){
            $("#map-container").addClass("hide")
            var overallprice = cartchkout.carttp + cart.shipping.amount
            $("#overall-price").html(overallprice + " GHc")
            $("#shipcostvalue").html(cart.shipping.amount + " GHc")
        })

    }

    //Start App
 homeview();

    //utility functions
    function getProductFromId (productid, category)
    {
        var curproduct;
        if(category == "new"){
            product.new.map(function(el){
                if(el.id == productid){
                    curproduct = el
                }else{console.log("not found")}
            })
        }
        if(category == "top"){
            product.top.map(function(el){
                if(el.id == productid){
                    curproduct = el
                }else{console.log("not found")}
            })
        }
        if(category == "rec"){
            product.reccomended.map(function(el){
                if(el.id == productid){
                    curproduct = el
                }else{console.log("not found")}
            })
        }

        return curproduct;
    }
    //function for checkout template
    function checkoutobj(){
        var cartcheckout = {};
        cartcheckout.cartlength = cart.item.length;
        //lets get the total price of items
        var tp = 0
        cart.item.map(function(item){
           tp = tp +  item.totalprice
        })
        cartcheckout.carttp = tp;
        return cartcheckout
    }
    function disableCartItem(){
        if(clicklist.length >= 1){
            clicklist.map(function(el){
                $("#content-area").find("#"+el).attr("disabled",true).html("Item In Cart")
            })
        }
    }
    //Handlebars helpers
    Handlebars.registerHelper('times', function(n, block) {
        var accum = '';
        for(var i = 1; i < n; ++i)
            accum += block.fn(i);
        return accum;
    });

    function randomgen(){
        var nums = "0123456789";
        var chars = "0123456789";
        var string_length = 8;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * nums.length);
            randomstring += chars.substring(rnum,rnum+1);

        }
        var rchar = Math.floor(Math.random() * chars.length);
        return randomstring
    }

//Events

//cart crud functions
    function addCartItem(productitem){

        //default options
        var l = {
            itemid : randomgen(),
            product : productitem,
            quantity : 1,
            totalprice : productitem.price,
            giftwrap :"false"
        }
        cart.item.push(l)

    }
    function removeCartItem(cartitemid,qty){

    }
    function editCartItem(cartitemid,qty){
        cart.item.map(function(el){
            if(el.itemid == cartitemid){
                el.quantity = qty
                el.totalprice = qty * el.product.price
                $(".totprice").find("#"+cartitemid).html(el.totalprice)
            }
        })
    }

    //map functions
    function initialize() {

       //get current position
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(points){
            var lati = points.coords.latitude;
            var longi = points.coords.longitude;
            showMap(lati,longi);
        }
        function showMap(lati,longi){
            var storeposition = new google.maps.LatLng(5.625425,-0.153851);
            var clientposition;
            var markers = [];
            var line;
            var mapOptions = {

                center: { lat: lati, lng: longi},
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById('map-area'),
                mapOptions);


            //geocode to get current location from longlat
            var geopos = new google.maps.LatLng(lati,longi);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'latLng': geopos}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        console.log(results[1].formatted_address);
                        $("#shiplocation").html(results[1].formatted_address)
                        cart.shipping.location = results[1].formatted_address;
                    }
                } else {
                    alert("Geocoder failed due to: " + status);
                }
            });



            // Create a marker for each place.
            var myLatlng = new google.maps.LatLng(lati,longi);
            var appmarker = new google.maps.Marker({
                title: "Your Current Location",
                position: myLatlng
            });
            // Create a marker for store location.
            var storeLatlng = new google.maps.LatLng(5.625425,-0.153851);
            var storemarker = new google.maps.Marker({
                title: "Our Store Location ",
                position: storeLatlng
            });

            appmarker.setMap(map);
            storemarker.setMap(map);
            clientposition = appmarker.getPosition()
            // Create the search box and link it to the UI element.
            var input = /** @type {HTMLInputElement} */(
                document.getElementById('pac-input'));
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            var searchBox = new google.maps.places.SearchBox(
                /** @type {HTMLInputElement} */(input));

            // [START region_getplaces]
            // Listen for the event fired when the user selects an item from the
            // pick list. Retrieve the matching places for that item.
            google.maps.event.addListener(searchBox, 'places_changed', function() {
                var places = searchBox.getPlaces();

                if (places.length == 0) {
                    return;
                }
                for (var i = 0, marker; marker = markers[i]; i++) {
                    marker.setMap(null);
                }

                // For each place, get the icon, place name, and location.
                markers = [];
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0, place; place = places[i]; i++) {
                    var image = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };

                    // Create a marker for each place.
                    var marker = new google.maps.Marker({
                        // map: map,
                        //icon: image,
                        title: place.name,
                        position: place.geometry.location
                    });

                    markers.push(marker);

                    marker.setMap(map);
                    clientposition = marker.getPosition()

                    bounds.extend(place.geometry.location);
                }
                map.fitBounds(bounds);
            });
            // [END region_getplaces]
            var rad = function(x) {
                return x * Math.PI / 180;
            };

            var getDistance = function(p1, p2) {
                var R = 6378137; // Earth’s mean radius in meter
                var dLat = rad(p2.lat() - p1.lat());
                var dLong = rad(p2.lng() - p1.lng());
                var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                return d; // returns the distance in meter
            };

            // Bias the SearchBox results towards places that are within the bounds of the
            // current map's viewport.
            google.maps.event.addListener(map, 'bounds_changed', function() {
                var self = this
                var bounds = map.getBounds();
                this.setZoom(14);
                searchBox.setBounds(bounds);
                if(typeof(line) != "undefined"){
                    line.setMap(null);
                }

                line = new google.maps.Polyline({
                    path: [storeposition,clientposition],
                    strokeColor: "#7e2788",
                    strokeOpacity: 0.7,
                    geodesic: true,
                    strokeWeight: 2
                });
                line.setMap(map);
                var dis = getDistance(storeposition,clientposition)/1000;
                dis = Math.round(dis)
                //setval
                $("#shipdistance").html(dis + "  Kilometers")
                var loc =  $("#pac-input").val().split(",");

                $("#shiplocation").html(loc[0]+", "+loc[1]+", "+loc[2])
                $("#shipamount").html(dis + "  Ghc")
                //push to cart
                cart.shipping.distance = dis;
                cart.shipping.amount = dis;
                cart.shipping.location = $("#shiplocation").html();

            });

        }
    }

});