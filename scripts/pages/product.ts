$("./body") {
  $("./script[1]") {
    remove()
  }

  $("./div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']") {
    add_class("mw_product")
  }
  
  $("./div[@id='Container']") {
    $("./div[@id='AjaxLoading']") {
      remove()
    }
    $("./div[@id='Outer']") {
      $("./div[@id='Wrapper']") {
      	move_here("./div[@class='Left']")
        $("./div[@class='Right']") {
          remove()
        }
 
        $("./div[@class='Left']") {
        	remove()
        }
        $("./div[contains(@class,'Content')]") {
          $("./script[5]") {
            remove()
          }
        	$("./div[contains(@class,'Breadcrumb')]") {
        		remove()
        	}
        	$("./div[@id='SimilarProductsByCustomerViews']") {
        		remove()
        	}
        	$("./div[@id='ProductByCategory']") {
        		remove()
        	}
          $("./div[@id='ProductDetails']") {
            $("./div[@class='BlockContent']") {
              $("./div[@class='Clear AddThisButtonBox']") {
                remove()
              }
              $("./div[@class='ProductThumb']") {
                $(".//a[contains(@id,'ImageScroll')]") {
                  remove()
                }
                attribute("style") {
                  remove()
                }
              }
              $(".//div[@class='BulkDiscount']") {
                $("./input") {

                  attribute("type") {
                    value("submit")
                  }
                  attribute("value", "Add To Cart")
                }
                add_class("btn1")
              }
              $(".//div[@class='BulkDiscount Link']") {
                
              }
            }
            
          }
          $("./div[@id='ProductReviews']") {
            $("./a | ./div[@class='BlockContent']/form | ./div[@class='BlockContent']/hr") {
              remove()
            }
          }
          
        }
        
      }
    }
  }
}