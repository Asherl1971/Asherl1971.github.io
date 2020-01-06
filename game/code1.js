gdjs.GameOverCode = {};
gdjs.GameOverCode.GDBGObjects1= [];
gdjs.GameOverCode.GDBGObjects2= [];
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\sound\\Room_For_Two.mp3", true, 100, 1);
}}

}


{


{
}

}


}; //End of gdjs.GameOverCode.eventsList0xb5aa0


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDBGObjects1.length = 0;
gdjs.GameOverCode.GDBGObjects2.length = 0;
gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;

gdjs.GameOverCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['GameOverCode'] = gdjs.GameOverCode;
