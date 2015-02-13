tinyMCEPopup.requireLangPack();

var BrowserDialog = {
	preInit : function() {
	},

	init : function(init) {
		var self = this;
		var ed = tinyMCEPopup.editor;
		var settings = init ? init.settings : {};
 		// get current selection if any
 		var sel = ed.selection.getContent();
 		
 		if(!sel) {
 		} else {
 		}
 		self.resize();
 		require(["dexist/cb-layer.js.uncompressed"],function(){
 			require(["dexist/CollectionBrowser"],function(CollectionBrowser){
		
		 		var cb = new CollectionBrowser({
		 			target:"/collectionbrowser/",
		 			thumbnailSize:4,
 					display:"tiles",
 					rootId:settings.collectionbrowser_root || "",
		 			onSelectResource:function(id,item,evt){
						// use this method to determine what will happen when a document is selected (double-click)
		 				if(item.internetMediaType.match(/image/)){
		 					 var src = "/rest"+id.replace(/([^\/]*)/,"");
		 					 self.insert('<img src="'+src+'"/>');
		 				} else {
		 					var type = item.internetMediaType;
		 					self.insert('<a href="'+src+'" class="mce-fileicon '+type+'">'+item.name+'</a>');
		 				}
					}
		 		});
		 		cb.placeAt(document.body);
		 		cb.startup();
				self.resize();
 			});
 		});
	},

	resize : function() {
		var w, h;

		if (!self.innerWidth) {
			w = document.body.clientWidth - 50;
			h = document.body.clientHeight - 160;
		} else {
			w = self.innerWidth - 50;
			h = self.innerHeight - 170;
		}
	},

 	insert : function(content) {
 		var ed = tinyMCEPopup.editor;
 		ed.execCommand('mceInsertContent', false, content);
		ed.addVisual();
		tinyMCEPopup.execCommand('mceInsertCBContent', false, {
			content : content, // set to the html to insert
			selection : tinyMCEPopup.editor.selection.getContent()
		});

		tinyMCEPopup.close();
	}
};

BrowserDialog.preInit();
tinyMCEPopup.onInit.add(BrowserDialog.init, BrowserDialog);
