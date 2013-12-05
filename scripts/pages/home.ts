$("./body") {
  add_class("mw_home")
  
  $("./div[@id='Container']") {
    $("./div[@id='AjaxLoading']") {
      remove()
    }
    $("./div[@id='Outer']") {

      $("./div[@id='Wrapper']") {
        
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


            $("./div") {

              $("./h2") {
                $("./span") {
                  remove()
                }
                
              }
              $("./ul") {
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
