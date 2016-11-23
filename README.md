# ConnectPageFields

A module for ProcessWire CMS/CMF. Allows the connecting of two related Page fields so that changing one updates the other.

## Purpose of module

An example: suppose your website is about movies. You have a template "movie" with Page field "actors". For each movie you add the actors that appear in the movie. All good, but what if you want to find results like...

* the 10 actors who have appeared in the most movies
* actors who haven't appeared in any movies since 1990

You cannot retrieve these pages with a single efficient $pages->find() query, and must load a large PageArray into memory in order to iterate or filter it. For the sake of making these types of queries more efficient you could structure your templates/fields so that movies are added to actors instead, but this may be a less comfortable workflow and can run into equivalent problems (e.g. "find the 10 movies with the largest cast").

The solution is to have a two-way relationship so that movie pages have an "actors" Page field and actor pages have a "movies" Page field. This module will keep these two Page fields in sync so that adding "Ryan Gosling" to "Drive" automatically adds "Drive" to "Ryan Gosling".

Also, you can select the same Page field in both Page field A and Page field B. For example, create a "Related" Page field for related pages. Choose "Related" for both fields in a pair in the module config. Now when you add "Orange buffoon" to Related for "Donald Trump", "Donald Trump" is automatically added to Related for "Orange buffoon".

## Usage

[Install](http://modules.processwire.com/install-uninstall/) the ConnectPageFields module. If you haven't already done so, create the two Page fields you want to connect and add them to templates.
 
In the module config select the two Page fields in a "Connected field pair" row as Page field A and Page field B.

You can add rows as needed using the "Add another row" button.

### Troubleshooting

Make sure you have set the "Selectable Pages" settings for each Page field correctly: 

* The settings for Page field A should allow pages using the template(s) that Page field B has been added to.
* The settings for Page field B should allow pages using the template(s) that Page field A has been added to.

## License

Released under Mozilla Public License v2. See file LICENSE for details.
