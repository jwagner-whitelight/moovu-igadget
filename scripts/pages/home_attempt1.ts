$("./body") {
  add_class("mw_home")
  
  $("./div[@id='Container']") {
    $("./div[@id='Outer']") {

      $("./div[@id='Wrapper']") {
        move_here(".//div[@id='HomeNewProducts']", position("bottom"))
        $(".//div[@class='QuickViewBtn']") {
          remove()
        }
        $("./div[@class='Left'] | ./div[@class='Right']") {
          remove()
        }
        $("//ul[contains(@class,'ProductList')]") {
        	$("./.") {
	        	inner() {
	        		replace("ProductImage QuickView", "ProductImage")
	        	}
        	}
        }
        $("//div[@id='Wrapper']") {
          $("./div") {

            remove_attributes()
            attributes(data-ur-set: "carousel", data-ur-id: index(), data-ur-translate3d: "enabled", data-ur-speed: "1.1", data-ur-fill:"0", data-ur-clones:"7", data-ur-autoscroll-delay:"5000", data-ur-autoscroll-dir:"next", data-ur-autoscroll:"disabled", data-ur-center:"disabled", data-ur-infinite:"enabled", data-ur-touch:"enabled", data-ur-vertical-scroll:"enabled", data-ur-state:"enabled")

            $("./div") {
              remove_attributes()
              attribute("data-ur-carousel-component", "scroll_container")
              $("./h2") {
                $("./span") {
                  remove()
                }
                
              }

              move_here(".//div[@class='ProductImage']") {
                $("./a") {
                  $("./img") {
                    move_to("../../..") {

                    }
                    wrap("span", data-ur-carousel-component: 'item')
                  }

                }
                remove()
              }
              $("./ul") {
                remove()
              }
              $("./div[@class='BlockContent']") {
                remove()
              }
            }

          }
          
        }
        $("//div[@id='HomeRecentBlogs']") {
          remove()
        }
        
      }
    }
  } 
}
insert("script") {
  attribute("src", "/src/jquery.uranium.js")
}
