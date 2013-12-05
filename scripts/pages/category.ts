$("./body") {
  $("./script") {
    remove()
  }
  add_class("mw_category")
  
  $("./div[@id='Container']") {
    $("./div[@id='AjaxLoading']") {
      remove()
    }
    $("./div[@id='Outer']") {
      $("./div[@id='Wrapper']") {
        $("./div[@class='Right']") {
          remove()
        }
 
        $("./div[@class='Left']") {
          # Create Togglers
          $("./div[@id='SideShopByBrand'] | ./div[@id='SideCategoryShopByPrice']") {
            attribute("data-ur-set", "toggler")
            $("./h2") {
              attribute("data-ur-toggler-component", "button")
              insert("div", class: "mw_indicator")
            }
            $("./div") {
              attribute("data-ur-toggler-component", "content")
              $(".//li/a") {
                insert("div", class:"mw_arrow")
              }
            }          
          }
 
          $("././/div[contains(@class, 'NewsletterSubscription')]") {
            remove()
          }

        }
 
        $("./div[@class='Content '] | ./div[@class='Content']") {
          $("././div[contains(@class, 'Breadcrumb')]") {
            remove()
          }

          $("./div[@id='CategoryContent'] | ./div[@id='BrandContent']") {
            $("./script") {
              remove()
            }
            $(".//div[contains(@class,'CompareButton')]") {
                remove()
            }
            $(".//form") {
              unwrap()
            }
            $(".//div[contains(@class, 'ProductImage')]") {
                remove_attributes()
                add_class("ProductImage")
              }
            $(".//ul") {
              
              $(".//div[contains(@class,'ProductActionAdd')]") {
                add_class("btn2") 
              }
            }
          }


          $("./div[@id='CategoryHeading']") {
            $("./div[@class='BlockContent']") {
              # Move page title on top of the content area
              $("./h2") {
                move_to("../../../../div[@class='Left']", "top")
              } 
              $("./div[@class='FloatRight SortBox']") {     
                $("./form") {
                  wrap_text_children("span")
                }       
              }
              $("./div[@class='SubCategoryList']") {
                remove()
              } 
            }
          }
        }
      }
    }
  } 
}