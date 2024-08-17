sap.ui.jsview("vinay.view.Main",{
    getControllerName:function(){
         return "vinay.controller.Main"
    },
    //oController is a object which is used to call a method of press of class controller 
    createContent: function(oController){
        //var oControlName = new libraryName.ClassName(sId,sProperties)
var oInp = new sap.m.Input("idInp",{
  
    
});
// oInp.placeAt("input")
var oBtn = new sap.m.Button("idBtn",{
    text:'Thakurji',
    icon:"sap-icon://bell-2",
    press:oController.spiderman
});
// oBtn.placeAt("content")
return [oBtn,oInp];

    }
})