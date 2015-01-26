tinyMCEPopup.requireLangPack();

var BrowserDialog = {
	preInit : function() {
	},

	init : function() {
		var self = this;
		var ed = tinyMCEPopup.editor;

 		// get current selection if any		
 		var sel = ed.selection.getContent();
 		
 		if(!sel) {
 		} else {
 		}

 		var cb = new dexist.CollectionBrowser({
 			target:"/",
 			 onSelectResource:function(id,item,evt){
                 // use this method to determine what will happen when a document is selected (double-click)
 				 if(item.internetMediaType.matches(/image/)){
 					 var src = "/rest/"+id.replace(/([^\/]*)/,"");
 					 self.insert('<img src="'+src+'/>');
 				 }
             }
 		});
 		cb.placeAt(document.body);
 		cb.startup();
		this.resize();
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
require(["dexist/CollectionBrowser"],function(){
	tinyMCEPopup.onInit.add(BrowserDialog.init, BrowserDialog);
});
