# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

# Add the mobile meta tags 
  clean_mobile_meta_tags()

  add_assets()
  remove_all_styles()
  remove_html_comments()

  @import sections/header.ts
  @import sections/footer.ts

   

  @import mappings.ts
}

