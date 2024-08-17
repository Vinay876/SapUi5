sap.ui.jsview("vinay.view.Main",{
    geyControllerName:function(){
         return "vinay.controller.Main"
    },
    createContent: function(){
        //var oControlName = new libraryName.ClassName(sId,sProperties)
var oInp = new sap.m.Input("idInp",{
    text:'Thakurji',
    
});
// oInp.placeAt("input")
var oBtn = new sap.m.Button("idBtn",{
    text:'Thakurji',
    icon:"sap-icon://bell-2",
    press:function(){
        // alert("Radhey Radhey")
        // step1: get the application object (instance)
        var oCore = sap.ui.getCore();
        // step2: get the Ui5 control object - sap.ui5.getCore().byId("idInp")
        var oInp = oCore.byId("idInp");
        // step3: we have a value, so we will have setter and getter for same instace
        var sVal = oInp.getValue();
        // step4: print on screen 
        alert(sVal);
    }
    
});
// oBtn.placeAt("content")
return [oBtn,oInp];

    }
})