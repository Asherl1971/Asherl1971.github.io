gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDBGObjects1= [];
gdjs.MainMenuCode.GDBGObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Info", false);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\Room_For_Two.mp3", true, 100, 1);
}}

}


}; //End of gdjs.MainMenuCode.eventsList0xb5aa0


gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBGObjects1.length = 0;
gdjs.MainMenuCode.GDBGObjects2.length = 0;

gdjs.MainMenuCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['MainMenuCode'] = gdjs.MainMenuCode;
