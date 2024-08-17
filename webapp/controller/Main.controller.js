sap.ui.define(
    ['sap/ui/core/mvc/Controller'],
    function(Controller) {
       return Controller.extend("vinay.controller.Main",{
        //hook method 
        onInit:function(){
            console.log('intial function is called ')
        },
        onExit:function(){
            console.log('Exit function is called ')
        },
        onAfterRendering:function(){
            console.log('onAfterRendering function is called ')
            $('#idInp').fadeOut(1000).fadeIn(5000);
        },
        onBeforeRendering:function(){
            console.log('onBeforeRendering function is called ')
           
        },
        spiderman: function(){
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
       })
    }
)