sckeleton of view 
sap.ui.jsview("vinay.view.Main",{
    geyControllerName:function(){
         return "vinay.controller.Main"
    },
    createContent: function(){

    }
})

sckeleton of view
sap.ui.define(
    ['sap/ui/core/mvc/Controller'],
    function(Controller) {
       return Controller.extend("vinay.controller.Main",{
        
       })
    }
)