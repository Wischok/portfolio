"use strict";jQuery(document).ready(function(d){var h=search_form_data,n={},o={},f={};function a(e){return null==e||!1===e||""===e}function s(e){var a=e.attr("id"),s=e.find("fieldset").first(),r=s.find(".input-group.cse"),i=s.find(".input-group.ulv-directory");e.removeClass("site-search-active").addClass("people-search-active"),r.hasClass("hidden")||(r.addClass("hidden"),n[a]=d("div.search-form #mega_search").find('input[type="hidden"]').detach(),o[a]=s.find("input#desktop-search").detach()),i.hasClass("hidden")&&(i.removeClass("hidden"),void 0!==f[a]&&(window.matchMedia("(max-width: 768px)").matches?f[a].each(function(){d(this).attr("tabindex",3)}):f[a].each(function(){d(this).attr("tabindex",0)}),i.prepend(f[a]))),e.find("form").first().attr("action",h.directory_search_page)}d("div.search-form").each(function(){var e=d(this).attr("id");a(h.cse_search_page)&&a(h.directory_search_page)?d(this).next("#search-toggle").remove():((a(h.directory_search_page)||a(h.cse_search_page))&&d(this).find(".switch-mega-search-wrapper").remove(),a(h.cse_search_page)?a(h.directory_search_page)||s(d(this)):f[e]=d(this).find("#first-name-search, #last-name-search").detach())}),a(h.directory_search_page)||a(h.cse_search_page)||(d("div.search-form #mega_search #search-target-people").on("click",function(e){var a=d(this).parents("div.search-form").first();s(a),a.find("#first-name-search").focus()}),d("div.search-form #mega_search #search-target-site").on("click",function(e){var a,s,r,i,t,c=d(this).parents("div.search-form").first();s=(a=c).attr("id"),r=a.find("fieldset").first(),i=r.find(".input-group.cse"),t=r.find(".input-group.ulv-directory"),a.removeClass("people-search-active").addClass("site-search-active"),i.hasClass("hidden")&&(i.removeClass("hidden"),void 0!==n[s]&&a.find("#mega_search").prepend(n[s]),void 0!==o[s]&&(window.matchMedia("(max-width: 768px)").matches?o[s].each(function(){d(this).attr("tabindex",3)}):o[s].each(function(){d(this).attr("tabindex",0)}),i.prepend(o[s]))),t.hasClass("hidden")||(t.addClass("hidden"),f[s]=r.find("#first-name-search, #last-name-search").detach()),a.find("form").first().attr("action",h.cse_search_page),c.find("#desktop-search").focus()}))});