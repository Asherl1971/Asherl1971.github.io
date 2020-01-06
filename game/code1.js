gdjs.InfoCode = {};
gdjs.InfoCode.GDBGObjects1= [];
gdjs.InfoCode.GDBGObjects2= [];

gdjs.InfoCode.conditionTrue_0 = {val:false};
gdjs.InfoCode.condition0IsTrue_0 = {val:false};
gdjs.InfoCode.condition1IsTrue_0 = {val:false};


gdjs.InfoCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.InfoCode.condition0IsTrue_0.val = false;
{
gdjs.InfoCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.InfoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.InfoCode.condition0IsTrue_0.val = false;
{
gdjs.InfoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InfoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\Room_For_Two.mp3", true, 100, 1);
}}

}


{


{
}

}


}; //End of gdjs.InfoCode.eventsList0xb5aa0


gdjs.InfoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InfoCode.GDBGObjects1.length = 0;
gdjs.InfoCode.GDBGObjects2.length = 0;

gdjs.InfoCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['InfoCode'] = gdjs.InfoCode;
