sap.ui.controller("view.Home", {
	
	gotoSecondPage : function(){
		//this - controller
		//this.getView() - view - Home.view.xml
		
		//this.getView().getParent() - App
		
		this.getView().getParent().to("view2");
	}
});