$("./html/head/script") {
	remove()
}
$(".//div[@id='Header']") {

  attribute("data-ur-set", "toggler")
  $("./div[@id='Logo']") {
    # Move top menu into #Logo container
      move_here("../../../div[@id='TopMenu']", "bottom"){
      # Remove unwanted top menu items from upper menu
      remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
      remove("//br[contains(@class, 'Clear')]")
    }
  } 


  insert("div", class:"mw_header_bottom") {
    insert("div", class:"mw_search")
    insert("div", class:"mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
  }

  # Fill search HTML
	$("..//div[@class='mw_search']"){
	  # Move search form into container element
	  move_here("//div[@id='SearchForm']", "bottom"){
		remove("./p")

			$("./form") {
			  remove("./label")
			  # Change search button background image
			  $("./input[@type='image']") {
#				wrap("div", class: "mw_search_btn sprites-search")
			  }
			  $("./input[@type='text']") {
				attribute("placeholder", "Search…")
			  } 
			}     
	  }
	}

	$("//div[@id='SearchForm']/form//input[@type='image']") {
		wrap("div", class: "mw_search_btn sprites-search")
		attribute("style", "opacity:0;")
	}
	
	# Move menu items into header
	move_here("../div[@id='Menu']", "bottom"){
		$$("ul") {
			add_class("Block")
		}
	  attribute("data-ur-toggler-component", "content")
	  # Move "Category List" element on bottom of #Menu element
	  move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
	  $$("li") {
		add_class("mw_bar2")
	  }
	}
	
}

