# HTML INTRODUCTION

- Stands for Hyper Text Markup Language.
- HTML is a markup language that web developers use to structure and describe the content of the webpage.
- HTML consists of elements that describes different types of contents: paragraphs, headings, images, lists, videos etc...
- Browsers understand HTML code and renders them as a website.


# Anatomy of HTML element

- <h1>             ->   i am a heading   ->  </h1>
-  opening tag     ->   content          ->  closing tag.

- opening tag:
  - name of the tag with opening ang closing angular braces.
- content:
 - content of the element in this example, text, we can also have another element, or images as well. some element have no content.

- consider all of the above makes a element

# HTML Document Structure

-  <!DOCTYPE html>
- <html>
 - <head> </head>
  -- head: all the stuffs that are not visible in the documents will go inside head tag.
 - <body> </body>
  -- body: all the elements that are visible in the browser.
 - <html>

# Text Elements

-  Headings
 -- h1, h2, h3, h4, h5, h6
- paragraph
 -- p
- make bold text
 -- b, strong
- make italic text
 -- i, em

# images and attributes

- img
- self closing tags.
-- it doesnt have any content to show.
-- we can use attributes to add extra info to the image tag.
-- attributes are: 
 -- src: path of the image to display.
 -- alt: alternate name to show if image has not displayed properly.
 -- width: to set the width of the image.
 -- height: to set the height of the image.

# hyperlinks (anchor)

 - anchor
 -- place links to 2 categories:
  -- 1: link from 1 page to another page.
  -- 2: links points to outside of the website.
-- attributes:
 -- href:
   - provides reference of a website or an 

# structure our page

-- structure our page, instead of having elements 1 by one using semantic HTML elements, so that it can act as a container for the page.

# Note on semantic HTML

- shouldnt think about what element looks like when it is rendered, insted think about what the actual element means.
- ex: strong, header, footer, em
- writing semantic HTML is very useful for reliability and for some specially who rely on screen readers, it will help as well.
- also google browser will be able to analyze the content easily
- seo's also uses, semantic elements.