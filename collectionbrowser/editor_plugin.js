/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.create('tinymce.plugins.CollectionBrowser', {
		init : function(ed, url) {
			this.editor = ed;
			// Register commands
			ed.addCommand('mceCollectionBrowser', function(ui) {
				ed.windowManager.open({
					file : url + '/browser.htm',
					width : ed.getParam('collectionbrowser_popup_width', 800),
					height : ed.getParam('collectionbrowser_popup_height', 600),
					inline : 1
				}, {
					plugin_url : url
				});
			});
			
			// Register buttons
			ed.addButton('collectionbrowser', {title : 'collectionbrowser.title', cmd : 'mceCollectionBrowser'});
		},
		getInfo : function() {
			return {
				longname : 'Collection Browser plugin',
				author : 'W.S. Hager',
				authorurl : 'http://lagua.nl',
				infourl : 'https://github.com/wshager/mce_collectionbrowser',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('collectionbrowser', tinymce.plugins.CollectionBrowser);
})();