# ConnectPageFields

A module for ProcessWire CMS/CMF. Allows the connecting of two related Page fields so that changing one updates the other.

## Purpose of module

An example: suppose your website is about movies. You have a template "movie" with Page field "actors". For each movie you add the actors that appear in the movie. All good, but what if you want to find results like...

* the 10 actors who have appeared in the most movies
* actors who haven't appeared in any movies since 1990

You cannot retrieve these pages with a single efficient $pages->find() query, and must load a large PageArray into memory in order to iterate or filter it. For the sake of making these types of queries more efficient you could structure your templates/fields so that movies are added to actors instead, but this may be a less comfortable workflow and can run into equivalent problems (e.g. "find the 10 movies with the largest cast").

The solution is to have a two-way relationship so that movie pages have an "actors" Page field and actor pages have a "movies" Page field. This module will keep these two Page fields in sync so that adding "Ryan Gosling" to "Drive" automatically adds "Drive" to "Ryan Gosling".

## Usage

[Install](http://modules.processwire.com/install-uninstall/) the ConnectPageFields module. Create the two Page fields you want to connect if you haven't already done so. The settings for each Page field must be such that the selectable pages for the field are limited to a single template.

In the module config...

1. Choose "Template A" - the template that contains the first Page field.
2. Choose "PageField A" - the first Page field. This field should have settings that limit the selectable pages to the template chosen in "Template B".
3. Choose "Template B" - the template that contains the second Page field.
4. Choose "PageField B" - the second Page field. This field should have settings that limit the selectable pages to the template chosen in "Template A".

This sounds more confusing in the abstract than it will be in practice :)

You can define up to 20 pairs of connected Page fields. Use the "Number of connected field pairs" field to add rows as needed.